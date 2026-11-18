"use server";

import { revalidatePath } from "next/cache";
import { hasPrivateSession } from "../utils/session";
import { removeClient, writeClient } from "./store";

const expired = { error: "Tu sesión expiró. Recarga la página para ingresar nuevamente." };
const conflict = { error: "El cliente cambió o fue eliminado. Recarga la página para ver la lista actualizada." };

function validRecord(id, version) {
  return typeof id === "string" && /^[a-f0-9-]{36}$/.test(id)
    && Number.isSafeInteger(version) && version > 0;
}

export async function saveClient(id, version, formData) {
  if (!hasPrivateSession()) return expired;
  if (id !== null && !validRecord(id, version)) return conflict;
  if (!(formData instanceof FormData)) return { error: "Los datos del cliente no son válidos." };

  const name = formData.get("name");
  if (typeof name !== "string" || !name.trim() || name.length > 120) {
    return { error: "Ingresa un nombre de hasta 120 caracteres." };
  }

  const labels = formData.getAll("attributeLabel");
  const values = formData.getAll("attributeValue");
  if (labels.length > 30 || labels.length !== values.length) {
    return { error: "Puedes guardar hasta 30 atributos por cliente." };
  }

  const attributes = [];
  const usedLabels = new Set();
  for (const [index, label] of labels.entries()) {
    const value = values[index];
    if (typeof label !== "string" || typeof value !== "string"
      || !label.trim() || !value.trim() || label.length > 80 || value.length > 500) {
      return { error: "Completa el nombre y el valor de cada atributo o quita los campos vacíos." };
    }

    const normalized = label.trim().toLocaleLowerCase("es");
    if (usedLabels.has(normalized)) {
      return { error: "Usa un nombre distinto para cada atributo del cliente." };
    }
    usedLabels.add(normalized);
    attributes.push({ label: label.trim(), value: value.trim() });
  }

  try {
    const saved = await writeClient(id, version, { name: name.trim(), attributes });
    if (!saved) return conflict;
  } catch {
    return { error: "No se pudo guardar el cliente. Inténtalo nuevamente." };
  }

  revalidatePath("/privado");
  return { message: id === null ? "Cliente agregado." : "Cambios guardados." };
}

export async function deleteClient(id, version) {
  if (!hasPrivateSession()) return expired;
  if (!validRecord(id, version)) return conflict;

  try {
    const removed = await removeClient(id, version);
    if (!removed) return conflict;
  } catch {
    return { error: "No se pudo eliminar el cliente. Inténtalo nuevamente." };
  }

  revalidatePath("/privado");
  return { message: "Cliente eliminado." };
}

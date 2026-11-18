import { randomUUID } from "node:crypto";
import { mkdir } from "node:fs/promises";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";
import { createClient } from "@libsql/client";

let database;

async function connect() {
  let url = process.env.CLIENTS_DATABASE_URL;
  if (!url) {
    if (process.env.VERCEL === "1") {
      throw new Error("CLIENTS_DATABASE_URL es obligatoria en Vercel.");
    }

    const directory = resolve(".data");
    await mkdir(directory, { recursive: true, mode: 0o700 });
    url = pathToFileURL(resolve(directory, "clientes.db")).href;
  }

  const client = createClient({ url, authToken: process.env.CLIENTS_DATABASE_AUTH_TOKEN });
  try {
    await client.execute(`
      CREATE TABLE IF NOT EXISTS clients (
        id TEXT PRIMARY KEY,
        name TEXT NOT NULL,
        attributes TEXT NOT NULL,
        version INTEGER NOT NULL DEFAULT 1
      )
    `);
    return client;
  } catch (error) {
    client.close();
    throw error;
  }
}

function getDatabase() {
  database ??= connect().catch((error) => {
    database = undefined;
    throw error;
  });
  return database;
}

export async function listClients() {
  const db = await getDatabase();
  const { rows } = await db.execute("SELECT id, name, attributes, version FROM clients ORDER BY name COLLATE NOCASE, id");
  return rows.map(({ id, name, attributes, version }) => ({
    id,
    name,
    attributes: JSON.parse(attributes),
    version,
  }));
}

export async function writeClient(id, version, { name, attributes }) {
  const db = await getDatabase();
  const values = [name, JSON.stringify(attributes)];

  if (id === null) {
    await db.execute({
      sql: "INSERT INTO clients (id, name, attributes) VALUES (?, ?, ?)",
      args: [randomUUID(), ...values],
    });
    return true;
  }

  const result = await db.execute({
    sql: "UPDATE clients SET name = ?, attributes = ?, version = version + 1 WHERE id = ? AND version = ?",
    args: [...values, id, version],
  });
  return result.rowsAffected === 1;
}

export async function removeClient(id, version) {
  const db = await getDatabase();
  const result = await db.execute({
    sql: "DELETE FROM clients WHERE id = ? AND version = ?",
    args: [id, version],
  });
  return result.rowsAffected === 1;
}

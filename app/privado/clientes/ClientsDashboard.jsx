"use client";

import { useId, useState } from "react";
import { Button, Card, Heading } from "@tefi/design-system";
import { deleteClient, saveClient } from "./actions";
import styles from "./clients.module.css";

function ClientEditor({ client, busy, onSave, onCancel }) {
  const formId = useId();
  const [rows, setRows] = useState(() =>
    (client?.attributes ?? []).map((attribute, id) => ({ ...attribute, id })),
  );

  function addAttribute() {
    const id = (rows.at(-1)?.id ?? -1) + 1;
    setRows([...rows, { id, label: "", value: "" }]);
  }

  return (
    <form onSubmit={(event) => {
      event.preventDefault();
      onSave(new FormData(event.currentTarget));
    }}>
      <fieldset disabled={busy} className={styles.editor} aria-label="Datos del cliente">
        <label htmlFor={formId + "-name"}>Nombre</label>
        <input id={formId + "-name"} name="name" defaultValue={client?.name}
          maxLength={120} required autoFocus />

        {rows.map(({ id, label, value }, index) => (
          <div className={styles.attributeEditor} key={id}>
            <label>
              Atributo {index + 1}
              <input name="attributeLabel" defaultValue={label}
                placeholder="Ej. Correo" maxLength={80} required />
            </label>
            <label>
              Valor
              <input name="attributeValue" defaultValue={value} maxLength={500} required />
            </label>
            <Button type="button" variant="secondary"
              onClick={() => setRows(rows.filter((row) => row.id !== id))}>
              Quitar atributo {index + 1}
            </Button>
          </div>
        ))}

        <div className={styles.actions}>
          <Button type="button" variant="secondary" disabled={rows.length >= 30}
            onClick={addAttribute}>Agregar atributo</Button>
          <Button type="submit" variant="primary">{busy ? "Guardando…" : "Guardar"}</Button>
          <Button type="button" variant="secondary" onClick={onCancel}>Cancelar</Button>
        </div>
      </fieldset>
    </form>
  );
}

export default function ClientsDashboard({ clients }) {
  const [operation, setOperation] = useState(null);
  const [busy, setBusy] = useState(false);
  const [feedback, setFeedback] = useState(null);

  function open(next) {
    setFeedback(null);
    setOperation(next);
  }

  async function submit(action) {
    setBusy(true);
    setFeedback(null);
    try {
      const result = await action();
      setFeedback(result);
      if (!result.error) setOperation(null);
    } catch {
      setFeedback({ error: "No se pudo completar la operación. Revisa tu conexión e inténtalo nuevamente." });
    } finally {
      setBusy(false);
    }
  }

  function renderEditor(client) {
    return (
      <ClientEditor key={client?.id ?? "new"} client={client} busy={busy}
        onCancel={() => open(null)}
        onSave={(formData) => submit(() => saveClient(client?.id ?? null, client?.version ?? null, formData))} />
    );
  }

  return (
    <section className={styles.dashboard} aria-labelledby="clients-title">
      <header className={styles.header}>
        <Heading as="h1" id="clients-title">Clientes</Heading>
        <Button type="button" variant="primary" disabled={busy || operation?.type === "add"}
          onClick={() => open({ type: "add" })}>Agregar cliente</Button>
      </header>

      {feedback?.error && <p role="alert" className={styles.error}>{feedback.error}</p>}
      <p role="status" className={styles.status}>{feedback?.message}</p>

      {operation?.type === "add" && (
        <Card>
          <Heading as="h2">Nuevo cliente</Heading>
          {renderEditor(null)}
        </Card>
      )}

      {clients.length === 0 ? <p>Aún no hay clientes registrados.</p> : (
        <ul className={styles.list}>
          {clients.map((client) => {
            const active = operation?.client?.id === client.id;
            return (
              <li key={client.id}>
                <Card>
                  <div className={styles.record}>
                    <div className={styles.header}>
                      <Heading as="h2">{client.name}</Heading>
                      <div className={styles.actions}>
                        <Button type="button" variant="secondary" disabled={busy || (active && operation.type === "edit")}
                          onClick={() => open({ type: "edit", client })}>Editar</Button>
                        <Button type="button" variant="secondary" disabled={busy || (active && operation.type === "delete")}
                          onClick={() => open({ type: "delete", client })}>Eliminar</Button>
                      </div>
                    </div>
                    {active && operation.type === "edit" ? renderEditor(operation.client) : (
                      client.attributes.length > 0 && (
                        <dl className={styles.attributes}>
                          {client.attributes.map(({ label, value }) => (
                            <div key={label}>
                              <dt>{label}</dt>
                              <dd>{value}</dd>
                            </div>
                          ))}
                        </dl>
                      )
                    )}
                    {active && operation.type === "delete" && (
                      <div className={styles.confirmation}>
                        <p>¿Eliminar a {operation.client.name}?</p>
                        <div className={styles.actions}>
                          <Button type="button" variant="primary" disabled={busy}
                            onClick={() => submit(() => deleteClient(operation.client.id, operation.client.version))}>
                            {busy ? "Eliminando…" : "Confirmar eliminación"}
                          </Button>
                          <Button type="button" variant="secondary" disabled={busy}
                            onClick={() => open(null)}>Cancelar</Button>
                        </div>
                      </div>
                    )}
                  </div>
                </Card>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}

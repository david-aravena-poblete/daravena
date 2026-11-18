import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { Button, Card, Container, Heading, Section, Stack } from "@tefi/design-system";

import ClientsDashboard from "./clientes/ClientsDashboard";
import { listClients } from "./clientes/store";
import { clearPrivateSession, hasPrivateSession, startPrivateSession } from "./utils/session";

export const metadata: Metadata = {
  title: "Área privada | Daravena",
  robots: { index: false, follow: false },
};

async function handleSignIn(formData: FormData) {
  "use server";

  const result = startPrivateSession(formData.get("password"));
  redirect(result === "ok" ? "/privado" : `/privado?error=${result}`);
}

async function handleSignOut() {
  "use server";

  clearPrivateSession();
  redirect("/privado");
}

export default async function PrivatePage({
  searchParams,
}: {
  searchParams: { error?: string | string[] };
}) {
  if (hasPrivateSession()) {
    const clients = await listClients().catch((error) => {
      console.error("No se pudo cargar la lista de clientes.", error);
      return null;
    });

    return (
      <Section>
        <Container size="lg">
          <Stack gap="lg">
            <form action={handleSignOut}>
              <Button type="submit" variant="secondary">Cerrar sesión</Button>
            </form>
            {clients ? <ClientsDashboard clients={clients} /> : (
              <Card>
                <Heading as="h1">Clientes</Heading>
                <p role="alert">No se pudo cargar la lista de clientes. Vuelve a cargar la página para reintentar.</p>
              </Card>
            )}
          </Stack>
        </Container>
      </Section>
    );
  }

  return (
    <Section>
      <Container size="sm">
        <Card>
          <Stack gap="md">
            <Heading as="h1">Área privada</Heading>
            <form action={handleSignIn}>
              <Stack gap="md">
                <label htmlFor="private-password">Clave de acceso</label>
                <input
                  id="private-password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  maxLength={256}
                  required
                />
                {searchParams.error === "configuracion" && (
                  <p role="alert">El acceso privado no está configurado correctamente en el servidor.</p>
                )}
                {searchParams.error === "acceso" && (
                  <p role="alert">No se pudo iniciar sesión. Revisa la clave e inténtalo nuevamente.</p>
                )}
                <Button type="submit" variant="primary">Ingresar</Button>
              </Stack>
            </form>
          </Stack>
        </Card>
      </Container>
    </Section>
  );
}

import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { Button, Card, Container, Heading, Section, Stack, Text } from "@tefi/design-system";

import { clearPrivateSession, hasPrivateSession, startPrivateSession } from "./utils/session";

export const metadata: Metadata = {
  title: "Área privada | Daravena",
  robots: { index: false, follow: false },
};

async function handleSignIn(formData: FormData) {
  "use server";

  const signedIn = startPrivateSession(formData.get("password"));
  redirect(signedIn ? "/privado" : "/privado?error=acceso");
}

async function handleSignOut() {
  "use server";

  clearPrivateSession();
  redirect("/privado");
}

export default function PrivatePage({
  searchParams,
}: {
  searchParams: { error?: string | string[] };
}) {
  const signedIn = hasPrivateSession();

  return (
    <Section>
      <Container size="sm">
        <Card>
          <Card.Header>
            <Heading as="h1">Área privada</Heading>
          </Card.Header>

          <Card.Body>
            {signedIn ? (
              <form action={handleSignOut}>
                <Stack gap="md">
                  <Text>Sesión iniciada.</Text>
                  <Button type="submit" variant="secondary">Cerrar sesión</Button>
                </Stack>
              </form>
            ) : (
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
                  {searchParams.error === "acceso" && (
                    <p role="alert">No se pudo iniciar sesión. Revisa la clave e inténtalo nuevamente.</p>
                  )}
                  <Button type="submit" variant="primary">Ingresar</Button>
                </Stack>
              </form>
            )}
          </Card.Body>
        </Card>
      </Container>
    </Section>
  );
}

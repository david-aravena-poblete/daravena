"use client";

import Link from "next/link";
import {
  Button,
  Card,
  Container,
  Grid,
  Heading,
  Image,
  Section,
  Stack,
  Text,
  Typewriter,
} from "@tefi/design-system";

export default function LandingPage() {
  return (
    <>
      <Section>
        <Container>
          <Stack
            style={{
              gap: "var(--section-spacing-md)",
            }}
          >
            <Stack>
              <Heading
                as="h1"
                size="2xl"
              >
                Soy desarrollador web potenciado con inteligencia artificial
              </Heading>

              <Typewriter
                text="Dirigo a una inteligencia artificial para desarrollar sitios web siguiendo standares y buenas practicas de las tecnologias Frontend. Mi trabajo incluye el desarrollo de cualquier asset como: imagenes, graficas animadas, iconos, logos, diseño web, etc."
                icon="bot"
              />

              <Grid style={{ alignItems: "stretch" }}>
                <Card style={{ height: "100%", display: "flex", flexDirection: "column" }}>
                  <Card.Media>
                    <Image
                      src="/images/robot_estudiando.jpg"
                      alt="Ingeniería de prompts"
                      aspect="4:3"
                    />
                  </Card.Media>

                  <Card.Body style={{ flex: 1, display: "flex", flexDirection: "column" }}>
                    <Stack style={{ flex: 1 }}>
                      <Heading
                        as="h3"
                        size="xl"
                        lines={2}
                      >
                        Desarrollo contexto para IA
                      </Heading>

                      <Text
                        expandable
                        lines={4}
                      >
                        Organizo y suministro a una inteligencia artificial toda la informacion necesaria para que el codigo que genere sea coherente, siga standares conocidos y sus alucinaciones sean minimas.
                      </Text>
                      <Link href="/desarrollo-contexto" style={{ marginTop: "auto" }}>
                        <Button variant="secondary">Ver ejemplos</Button>
                      </Link>
                    </Stack>
                  </Card.Body>
                </Card>

                <Card style={{ height: "100%", display: "flex", flexDirection: "column" }}>
                  <Card.Media>
                    <Image
                      src="/images/frontend-code.jpg"
                      alt="Ingeniería de prompts"
                      aspect="4:3"
                    />
                  </Card.Media>

                  <Card.Body style={{ flex: 1, display: "flex", flexDirection: "column" }}>
                    <Stack style={{ flex: 1 }}>
                      <Heading
                        as="h3"
                        size="xl"
                        lines={2}
                      >
                        Hago Desarrollo web
                      </Heading>

                      <Text
                        expandable
                        lines={4}
                      >
                        Dirigo a una inteligencia artificial para generar sitios web personalizados. Esto incluye backends serverless para conectar con servicios externos.
                      </Text>

                      <Link href="/soy-frontend" style={{ marginTop: "auto" }}>
                        <Button variant="secondary">Ver ejemplos</Button>
                      </Link>
                    </Stack>
                  </Card.Body>
                </Card>

                <Card style={{ height: "100%", display: "flex", flexDirection: "column" }}>
                  <Card.Media>
                    <Image
                      src="/images/frontend-test.jpg"
                      alt="Frontend developer"
                      aspect="4:3"
                    />
                  </Card.Media>

                  <Card.Body style={{ flex: 1, display: "flex", flexDirection: "column" }}>
                    <Stack style={{ flex: 1 }}>
                      <Heading
                        as="h3"
                        size="xl"
                        lines={2}
                      >
                        Hago testing de codigo
                      </Heading>

                      <Text
                        expandable
                        lines={4}
                      >
                        Dirigo a una inteligencia artificial para revisar y corregir el código generado por ella misma. La idea es poder asegurar la eliminacion de cualquier alucinacion en el codigo y que los errores de sistema se hayan reducido al mínimo.
                      </Text>
                    </Stack>
                  </Card.Body>
                </Card>
              </Grid>
            </Stack>
          </Stack>
        </Container>
      </Section>
    </>
  );
}

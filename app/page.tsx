"use client";

import {
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

import Projects from "@/app/ui/projects/Projects";

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
                Desarrollo web potenciado con inteligencia artificial
              </Heading>

              <Typewriter
                text="En tiempos de inteligencia artificial mi trabajo se centra en tres pilares: Desarrollo de contexto para una inteligencia artificial, desarrollo web y testing de codigo."
                icon="bot"
              />

              <Grid>
                <Card>
                  <Card.Media>
                    <Image
                      src="/images/frontend-code.jpg"
                      alt="Ingeniería de prompts"
                      aspect="4:3"
                    />
                  </Card.Media>

                  <Card.Body>
                    <Stack>
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
                        Dirigo a una inteligencia artificial para generar sitios web personalizados de acuerdo al estilo y necesidad de mi cliente. Esto incluye los distintos assets del sitio como logotipos, imágenes, gráficas animadas y diseño.
                      </Text>
                    </Stack>
                  </Card.Body>
                </Card>

                <Card>
                  <Card.Media>
                    <Image
                      src="/images/frontend-test.jpg"
                      alt="Frontend developer"
                      aspect="4:3"
                    />
                  </Card.Media>

                  <Card.Body>
                    <Stack>
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
                        Dirigo a una inteligencia artificial para revisar y corregir el código generado por ella misma. La idea es poder asegurar a mi cliente que las alucinaciones se eliminaron y que los errores de sistema se hayan reducido al mínimo a la hora que un usuario haga uso del sitio web.
                      </Text>
                    </Stack>
                  </Card.Body>
                </Card>

                <Card>
                  <Card.Media>
                    <Image
                      src="/images/frontend-context.jpeg"
                      alt="Spec Driven Development"
                      aspect="4:3"
                    />
                  </Card.Media>

                  <Card.Body>
                    <Stack>
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
                        Escribo y organizo contexto para que la IA no haga código basura ni funcionalidades deficientes. Así me aseguro que tú proyecto siga criterios y buenas prácticas del desarrollo web que garantizan un proyecto organizado, mantenible y preparado para crecer.
                      </Text>
                    </Stack>
                  </Card.Body>
                </Card>
              </Grid>
            </Stack>

            <Projects />
          </Stack>
        </Container>
      </Section>
    </>
  );
}
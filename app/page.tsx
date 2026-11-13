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
                Asesor inmobiliario y programador web
              </Heading>

              <Typewriter
                text="Gestiono propiedades en arriendo, utilizando inteligencia artificial para organizar y optimizar cada etapa del proceso."
                icon="bot"
              />

              <Grid style={{ alignItems: "stretch" }}>
                <Card style={{ height: "100%", display: "flex", flexDirection: "column" }}>
                  <Card.Media>
                    <Image
                      src="/images/robot_busqueda.jpg"
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
                        Búsqueda de propiedades
                      </Heading>

                      <Text
                        expandable
                        lines={4}
                      >
                        Te ayudo a encontrar casas y departamentos en arriendo según tu presupuesto, las comunas que te interesan y lo que necesitas para vivir.
                      </Text>
                      <Link href="/propiedades" style={{ marginTop: "auto", alignSelf: "flex-end" }}>
                        <Button variant="secondary">Ver mas</Button>
                      </Link>
                    </Stack>
                  </Card.Body>
                </Card>

                <Card style={{ height: "100%", display: "flex", flexDirection: "column" }}>
                  <Card.Media>
                    <Image
                      src="/images/robot_blog.jpg"
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
                        Un blog inmobiliario
                      </Heading>

                      <Text
                        expandable
                        lines={4}
                      >
                        Comparto investigaciones que realizo con Deep Research de inteligencia artificial, sobre vivienda, barrios, ciudad y familia.
                      </Text>

                      <Link href="#" style={{ marginTop: "auto", alignSelf: "flex-end" }}>
                        <Button variant="secondary">Ver mas</Button>
                      </Link>
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

"use client";

import { useEffect, useState } from "react";

import Link from "next/link";

import {
  Box,
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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      {/* ======================================
         INTRO
      ====================================== */}

      <Section>
        <Container>
          <Stack>
            <Heading
              as="h1"
              size="2xl"
            >
              Frontend developer potenciado con inteligencia artificial
            </Heading>
              <Typewriter
                text="Una interfaz web es la pantalla visual con la que interactuas cuando entras a una pagina web. Transformo tus ideas en interfaces web, dirigiendo a una inteligencia artificial con mi criterio tecnico."
                icon="bot"
              />
        
          </Stack>

          {/* ======================================
             SERVICES
          ====================================== */}

          <Section>
            <Grid>
              {/* ======================================
                 PROMPT ENGINEERING
              ====================================== */}

              <Card>
                <Card.Media>
                  <Image
                    src="/images/frontend-developer.jpeg"
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
                      Soy Frontend developer
                    </Heading>

                    <Text
                      expandable
                      lines={4}
                    >
                      Dirijo a una inteligencia artificial paso a paso mediante mi metodología de 5 niveles. De esta forma construyo y mantengo interfaces de usuario respetando criterios y buenas practicas de las tecnologias frontend.
                    </Text>
                  </Stack>
                </Card.Body>

                <Card.Footer>
                  <Link href="/markdown-test">
                    <Button fullWidth>
                      Ver ejemplos
                    </Button>
                  </Link>
                </Card.Footer>
              </Card>

              {/* ======================================
                 FRONTEND DEVELOPER
              ====================================== */}

              <Card>
                <Card.Media>
                  <Image
                    src="/images/frontend-code.jpeg"
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
                      Dirijo a la inteligencia artificial para realizar inspecciones minuciosas de cada línea de código, para rastrear defectos estructurales o de lógica y corregirlos mucho antes de que el usuario los experimente al navegar por la página web.
                    </Text>
                  </Stack>
                </Card.Body>

                <Card.Footer>
                  <Link href="/markdown-test">
                    <Button fullWidth>
                      Ver ejemplos
                    </Button>
                  </Link>
                </Card.Footer>
              </Card>

              {/* ======================================
                 SPEC DRIVEN DEVELOPMENT
              ====================================== */}

              <Card>
                <Card.Media>
                  <Image
                    src="/images/spec-driven-development.jpeg"
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
                      Desarrollo y organizo contexto
                    </Heading>

                    <Text
                      expandable
                      lines={4}
                    >
                      Escribo, estructuro y suministro la informacion que necesita un modelo de inteligencia artificial para que aprenda tus necesidades, tu forma de trabajar y las limitaciones que debe considerar.
                    </Text>
                  </Stack>
                </Card.Body>

                <Card.Footer>
                  <Link href="/markdown-test">
                    <Button fullWidth>
                      Ver ejemplos
                    </Button>
                  </Link>
                </Card.Footer>
              </Card>
            </Grid>
          </Section>
        </Container>
      </Section>
    </>
  );
}
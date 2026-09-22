"use client";

import { useRouter } from "next/navigation";

import {
  Box,
  Button,
  Card,
  Carousel,
  Container,
  Heading,
  Icon,
  Inline,
  Markdown,
  Section,
  Stack,
  Text,
} from "@tefi/design-system";

const markdown1 = `
# Contexto Base

Este documento contiene las reglas generales de arquitectura frontend del proyecto.

## Arquitectura

La aplicación utiliza una estructura basada en componentes reutilizables y responsabilidades claramente separadas.
La aplicación utiliza una estructura basada en componentes reutilizables y responsabilidades claramente separadas.
La aplicación utiliza una estructura basada en componentes reutilizables y responsabilidades claramente separadas.
La aplicación utiliza una estructura basada en componentes reutilizables y responsabilidades claramente separadas.
La aplicación utiliza una estructura basada en componentes reutilizables y responsabilidades claramente separadas.

- UI
- lógica
- servicios
- utilidades
`;

const markdown2 = `
# Uso de Tefi Design System

Este documento contiene las reglas generales para utilizar los componentes y capacidades del sistema de diseño.

## Componentes

Los componentes deben mantener una responsabilidad clara y favorecer la composición.

- Layout
- Surface
- Typography
- Interaction
`;

function MarkdownFileLabel() {
  return (
    <Box
      background="primary"
      text="inverse"
      radius="md"
      inside="xs"
    >
      <Inline
        align="center"
        gap="xs"
      >
        <Icon name="fileCode" />

        <Text
          color="inverse"
          weight="medium"
        >
          MD
        </Text>
      </Inline>
    </Box>
  );
}

function MarkdownCard({
  children,
}: {
  children: string;
}) {
  return (
    <Card>
      <Card.Body>
        <Box
          maxHeight="320"
          scroll="vertical"
          scrollbar="hidden"
          dragScroll
        >
          <Inline justify="end">
            <MarkdownFileLabel />
          </Inline>

          <Markdown>
            {children}
          </Markdown>
        </Box>
      </Card.Body>
    </Card>
  );
}

export default function MarkdownTestPage() {
  const router = useRouter();

  return (
    <Container>
      <Section>
        <Inline justify="start">
          <Button
            variant="link"
            onClick={() => router.back()}
          >
            <Icon name="arrowLeft" />
            <Text>Volver</Text>
          </Button>
        </Inline>
      </Section>

      <Stack gap="md">
        <Stack gap="xs">
          <Heading>
            Documentación del proyecto
          </Heading>

          <Text>
            Consulta los documentos disponibles y revisa su contenido en formato Markdown.
          </Text>
        </Stack>

        <Carousel controls="outside">
          <Card>
            <Card.Header>
              <Heading>
                Contexto Base
              </Heading>

              <Text>
                Documento con las reglas generales de arquitectura frontend del proyecto.
              </Text>
            </Card.Header>

            <Card.Body>
              <MarkdownCard>
                {markdown1}
              </MarkdownCard>
            </Card.Body>
          </Card>

          <Card>
            <Card.Header>
              <Heading>
                Uso de Tefi Design System
              </Heading>

              <Text>
                Documentación sobre el uso de los componentes y capacidades del sistema de diseño.
              </Text>
            </Card.Header>

            <Card.Body>
              <MarkdownCard>
                {markdown2}
              </MarkdownCard>
            </Card.Body>
          </Card>
        </Carousel>
      </Stack>
    </Container>
  );
}
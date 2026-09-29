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

const markdown1 = ``;

const markdown2 = ``;

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

export default function ContextoPage() {
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
            Desarrollo y organizo contexto
          </Heading>

          <Text>
            Escribo, estructuro y suministro la informacion que necesita un modelo de inteligencia artificial para que aprenda tus necesidades, tu forma de trabajar y las limitaciones que debe considerar.
          </Text>
        </Stack>

        <Carousel controls="outside">
          <Card>
            <Card.Header>
              <Heading>
                Ejemplo 1
              </Heading>

              <Text>
                Contenido pendiente.
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
                Ejemplo 2
              </Heading>

              <Text>
                Contenido pendiente.
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

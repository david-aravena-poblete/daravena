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

const markdown1 = `# Desarrollo y Organización de Contexto para IA

Con ingeniería de contexto hago que una inteligencia artificial pueda usar su razonamiento para entender tu proyecto o negocio y sugerir decisiones o ejecutar acciones. Esta disciplina consiste en decidir en base a que informacion se resolverá el prompt que envías a tu inteligencia artificial. El objetivo principal de la ingeniería de contexto es definir exactamente qué necesita saber una IA en un momento específico.

Para que un agente tome buenas decisiones, debe tener en su contexto los criterios de su usuario. Este contexto debe ser auditable y intercambiable.

## Cero Alucinaciones: El Diagnóstico Correcto

Entre más instrucciones se agregan en un prompt, más se degrada la respuesta.

* Cualquier alucinación que tenga una IA corresponde a un vacío de información en su contexto.

* Para corregir una alucinación no cambio el modelo ni la redacción del prompt. Solo incluyo la información correcta en el contexto.

* Ante una IA que se equivoca o alucina, busco la fuente de la información incorrecta en el contexto, la cual podría ser un vacío de información que provoca una alucinacion,

* Al revisar el contexto de una IA, pongo más atención a lo que no hay que a lo que sí hay.

## Jerarquía y Auditoría de la Información

Estructuro y superviso el contexto. Existe una jerarquía clara que define qué instrucción es la que gana cuando dos indicaciones se contradicen:

1. System message.

2. Prompt de usuario.

3. Instrucciones dentro de imágenes o audio.

4. Texto de herramientas (búsquedas, documentos subidos, resultados de código).

### Principios para auditar un contexto

La auditoría de un contexto se rige bajo los principios de **Relevance**, **Recency**, **Ranking** y **Retrieval**.

El proceso práctico de auditoría de la memoria de una IA, lo ejecuto de la siguiente manera:

* Abrir la memoria y leerla completa.

* Marcar cada dato con una etiqueta ("sigue siendo cierto", "ya no aplica", "nunca fue cierto").

* Eliminar los datos que ya no aplican y que no son ciertos.

## Estrategias de Optimización y Continuidad

Suministro información eficientemente a una IA, para evitar sobrecargar sus límites.

* **Estrategia "Just in time":** Una persona competente no se memoriza un manual, solo sabe dónde está y lo abre cuando alguien le pregunta. Dado que buscar es un proceso lento, la información crítica debe estar siempre presente en el contexto y el resto debe obtenerse bajo demanda.

* **Gestión de Caché:** Guarda el contexto base en memoria para no recalcularlo en cada interacción. Así, la IA procesa solo tu nuevo prompt, acelerando las respuestas y reduciendo costos.

* **Compactación:** Consiste en resumir una conversación que está cerca de su límite en el contexto, y utilizarla para iniciar otra conversación nueva.

### Patrón recomendado para trabajo de varias sesiones

* Creo archivos de bitácora de progreso y checklist en cada sesion inicial.

* En cada nueva sesión abro la bitácora y el checklist para recuperar el estado del proyecto sin necesidad de volver a explorar el contexto general.

* Cada sesión la finalizo actualizando la bitácora con lo que se hizo y detallando lo que sigue en el checklist.`;

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
            Ingenieria de contexto
          </Heading>

          <Text>
            No dejo el razonamiento de la inteligencia artificial al azar. Diseño, estructuro y audito la información que alimenta a los modelos de IA, asegurando reducir sus alucinaciones y que estén completamente alineados a las reglas y necesidades de tu negocio.
          </Text>
        </Stack>

        <Carousel controls="outside">
          <Card>
            <Card.Header>
              <Heading>
                Mi gestión de contexto para IA
              </Heading>

              <Text>
                A continuación, detallo los principios, reglas y estrategias que aplico para estructurar, auditar y optimizar el contexto de tu inteligencia artificial.
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

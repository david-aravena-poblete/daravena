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

const markdown1 = `# QA & Testing Context: Desarrollo Frontend Potenciado con Inteligencia Artificial

## 1. Propósito central del testing

Garantizar que la mayoria de defectos no lleguen a producción. Los defectos detectados se previenen y resuelven en fases tempranas.

### El Rol de la Inteligencia Artificial

Mi rol es dirigir a la IA bajo criterios estrictos de testing, asegurando que cada caso de prueba refleje casos de uso reales, proteja la experiencia de usuario y valide las interacciones complejas con backends serverless (Firebase/Supabase).

## 2. Stack Tecnológico de Calidad

* **Core Frontend:** React, Next.js.

* **Backend as a Service (BaaS):** Firebase, Supabase

* **Testing Stack:**

  * **Playwright:** Automatización de pruebas End-to-End (E2E), validación de flujos de usuario críticos y compatibilidad entre navegadores.

  * **Jest:** Pruebas unitarias, suites de aserciones, mocks y pruebas de lógica de negocio.

  * **React Testing Library:** Pruebas de integración centradas en el comportamiento del usuario y la accesibilidad de componentes.

## 3. Ambientes de Trabajo y Trazabilidad

El ciclo de pruebas se gestiona respetando la segregación de entornos:

1. **Development:** Construcción inicial y pruebas unitarias rápidas.

2. **Testing:** Entorno dedicado para ejecución exhaustiva de casos de prueba y suites automatizadas.

3. **Staging:** Réplica fiel del entorno productivo para validación final con stakeholders y criterios de salida.

4. **Production:** Entorno protegido donde la tasa de defectos debe ser mínima o nula.

## 4. Ciclo de Vida del Testing Asistido por IA

### Fase 1: Planificación

* **Alcances y Riesgos:** Identificación previa de puntos críticos del sistema (vulnerabilidades, dependencias serverless).

* **Objetivos y Tipos de Prueba:** Definición de qué se valida (unitario, integración o E2E).

* **Alineación con Interesados:** Comunicación directa con stakeholders para acordar qué se espera de las pruebas y establecer los **criterios de salida**.

### Fase 2: Análisis y Diseño

* **De Requerimiento a Caso de Uso:** Traducción de las necesidades de negocio en escenarios reales y documentados.

* **Modelado de Actores:** Cada caso de uso describe qué debe hacer el sistema frente a la interacción del actor y qué objetivo concreto busca alcanzar el usuario.

* **Diseño de Casos de Prueba con IA:** Utilización de la IA para formular combinaciones de casos límite, condiciones de error y pruebas de regresión a partir de la documentación técnica.

* **Configuración del Entorno:** Preparación de herramientas y mocks necesarios (Jest, RTL, Playwright).

### Fase 3: Ejecución de Pruebas

* **Finalización de Casos:** Cierre y refinamiento de pruebas pendientes o complejas.

* **Timeline y Trazabilidad:** Mapeo claro entre el prototipo/diseño visual, el requerimiento y el caso de prueba ejecutado.

* **Ejecución y Contraste:** Comparación estricta entre el **resultado esperado** y el **resultado real**.

* **Reporte de Discrepancias e Iteración:** Documentación estructurada de bugs para su corrección por desarrollo.

* **Re-testing:** Validación posterior de que el defecto ha sido resuelto sin generar efectos secundarios en la interfaz.

### Fase 4: Evaluación de Criterios de Salida y Cierre

* **Validación de Métricas:** Contraste de la evidencia de ejecución contra los criterios de salida pactados en la planificación.

* **Cierre de Ciclo:** Si la evidencia satisface los criterios, se concluye la etapa de pruebas.

* **Reportes para Stakeholders:** Elaboración de resúmenes ejecutivos comprensibles y transparentes para los interesados del proyecto.

* **Documentación y Legibilidad:** Consolidación de informes para garantizar que el proyecto mantenga total trazabilidad técnica a lo largo del tiempo.

## 5. Directrices Operativas para la IA en este Proyecto

Cuando actúes como asistente técnico para la generación de tests:

1. **Prioriza la Experiencia de Usuario:** Escribe pruebas que interactúen con el DOM tal como lo haría un usuario real (preferir selectores accesibles en RTL como \`getByRole\`, \`getByLabelText\`).

2. **Aislar Dependencias Serverless:** Al probar interfaces conectadas a Firebase o Supabase, asegura la implementación de mocks limpios para llamadas a APIs, estados de carga (*loading*) y respuestas de error.

3. **Casos de Uso Completos:** Cada test debe responder a un objetivo real del actor en la vista. No generes pruebas superficiales que solo evalúen renderizado básico.

4. **Claridad y Mantenibilidad:** El código de test debe estar documentado, con aserciones legibles y mensajes de error descriptivos.`;

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

export default function TestingPage() {
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
            Testing de código con IA
          </Heading>

          <Text>
            Dirijo a la inteligencia artificial para realizar inspecciones minuciosas de cada línea de código, para rastrear defectos estructurales o de lógica y corregirlos mucho antes de que el usuario los experimente.
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

"use client";

import { Container, Heading, Section, Stack, Text } from "@tefi/design-system";

const projects = [
  {
    title: "Proyecto Timeline",
    description: "Una línea de tiempo interactiva que actualiza la historia y las imágenes según el año que selecciona el usuario.",
    url: "https://timeline-phi-seven.vercel.app/",
  },
  {
    title: "Proyecto Tefi Design System",
    description: "Una interfaz construida con un sistema de diseño configurable para adaptar colores, componentes y estilo a las necesidades de un proyecto.",
    url: "https://tefi-design-system-react.vercel.app/",
  },
  {
    title: "Aprender a leer",
    description: "Una interfaz construida con un sistema de diseño configurable para adaptar colores, componentes y estilo a las necesidades de un proyecto.",
    url: "https://aprender-a-leer-ten.vercel.app/",
  },
];

export default function SoyFrontendPage() {
  return (
    <Section>
      <Container>
        <Stack gap="lg">
          <Stack gap="xs">
            <Heading as="h1" size="2xl">
              Mi trabajo como frontend
            </Heading>
            <Text>
              Dirijo a una inteligencia artificial mediante contexto y una metodología de cinco niveles para construir interfaces web diseñadas para resolver necesidades concretas.
            </Text>
          </Stack>

          <Stack gap="lg">
            {projects.map((project) => (
              <article
                key={project.title}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "var(--spacing-md, 1rem)",
                  padding: "var(--spacing-lg, 1.5rem)",
                  border: "1px solid var(--color-border, #3a3a3a)",
                  borderRadius: "var(--radius-lg, 1rem)",
                }}
              >
                <Stack gap="xs">
                  <Heading as="h2" size="xl">
                    {project.title}
                  </Heading>
                  <Text>{project.description}</Text>
                </Stack>
                <iframe
                  src={project.url}
                  title={project.title}
                  loading="lazy"
                  scrolling="no"
                  style={{
                    width: "100%",
                    height: "100vh",
                    border: 0,
                    borderRadius: "var(--radius-md, 0.75rem)",
                    background: "#fff",
                  }}
                  allow="fullscreen"
                />
              </article>
            ))}
          </Stack>
        </Stack>
      </Container>
    </Section>
  );
}

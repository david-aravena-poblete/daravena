"use client";

import { Container, Heading, Section, Stack, Text } from "@tefi/design-system";

const projects = [
  {
    title: "Timeline",
    description: "Este componente es una línea de tiempo interactiva que actualiza su informacion y imágenes, según el año al que se dirige un usuario por medio de un slider.",
    url: "https://timeline-phi-seven.vercel.app/",
  },
  {
    title: "Proyecto Tefi Design System",
    description: "Una interfaz construida con un sistema de diseño configurable para adaptar colores, componentes y estilo a las necesidades de un proyecto.",
    url: "https://tefi-design-system-react.vercel.app/",
  },
  {
    title: "Aprender a leer",
    description: "Componente construido para apoyar a niños en su aprendizaje lector.",
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
              Mi trabajo como desarrollador web
            </Heading>
            <Text>
              Un componente es una estructura de codigo que corresponde a una funcionalidad de un sitio web. Un componente puede obtener informacion de fuentes externas para que un usuario pueda organizarla, mostrarla y modificarla.
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

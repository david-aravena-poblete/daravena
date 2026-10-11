"use client";

import {
  Box,
  Card,
  Heading,
  Image,
  Stack,
  Text,
} from "@tefi/design-system";

const projects = [
  {
    title: "Timeline",
    description: "Proyecto interactivo desarrollado con React.",
    image: "/images/web/TIMELINE-web.jpeg",
    href: "https://timeline-phi-seven.vercel.app/",
  },
  {
    title: "Aprender a Leer",
    description: "Aplicación web interactiva desarrollada con React.",
    image: "/images/web/AP-web.jpeg",
    href: "https://aprender-a-leer-six.vercel.app/",
  },
  {
    title: "Daravena",
    description: "Sitio web personal y profesional de David Aravena.",
    image: "/images/web/DA-web.jpeg",
    href: "https://daravena.cl",
  },
  {
    title: "Tefi Design System",
    description: "Sistema de diseño desarrollado con React.",
    image: "/images/web/DS-web.jpeg",
    href: "https://tefi-design-system-react.vercel.app/",
  },
];

export default function Projects() {
  return (
    <Stack>
      <Heading
        as="h2"
        size="xl"
      >
        Mis proyectos
      </Heading>

      <Box
        scroll="horizontal"
        scrollbar="hidden"
        dragScroll
      >
        <Box
          display="flex"
          direction="row"
          align="stretch"
          between="sm"
        >
          {projects.map((project) => (
            <Box
              key={project.title}
              width="240"
              style={{
                flex: "0 0 var(--size-240)",
              }}
            >
              <Card
                as="a"
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                interactive
              >
                <Card.Media>
                  <Box aspect="16:9">
                    <Image
                      src={project.image}
                      alt={`Vista previa de ${project.title}`}
                      fit="cover"
                    />
                  </Box>
                </Card.Media>

                <Card.Body>
                  <Heading
                    as="h3"
                    size="lg"
                  >
                    {project.title}
                  </Heading>

                  <Text>
                    {project.description}
                  </Text>
                </Card.Body>
              </Card>
            </Box>
          ))}
        </Box>
      </Box>
    </Stack>
  );
}
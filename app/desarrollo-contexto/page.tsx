"use client";

import {
  Carousel,
  Container,
  Heading,
  Image,
  Section,
  Stack,
  Text,
} from "@tefi/design-system";
import styles from "./page.module.css";

const slides = [
  {
    src: "/images/wide_clean_vector_illustration_flat_3d_ish_ui_te.png",
    alt: "Imagen de ejemplo 1: componentes electrónicos",
    title: "Desarrollo y organizo contexto",
    description:
    "Preparo una estructura predefinida y se la paso a mi inteligencia artificial para que la aprenda y la aplique al construir cualquier componente o funcionalidad para el proyecto. ",
  },
  {
    src: "/images/robot_estructuras_2.jpg",
    alt: "Espacio de trabajo de desarrollo",
    title: "Genero estructuras de codigo",
    description:
      "Para cada proyecto genero la misma estructura pequeña, predecible y facil de comprender. Tanto para una IA como para un humano es facil detectar una falla o modificar algo si se sabe donde buscar en un espacio pequeño y facil de aprender.",
  },
];

export default function ContextPage() {
  return (
    <Section>
      <Container size="lg">
        <Stack gap="xl">
          <Stack gap="sm">
            <Heading as="h1" size="2xl">
              Contexto segun daravena.
            </Heading>
            <Text>
              El contexto se trata de lo que necesito que una maquina sepa, en un momento dado, para que pueda hacer algo. Organizo contextos muy dinamicos que van cambiando de acuerdo a la situacion o contexto en el que se dan. Cada contexto puede verse como una habilidad de mi inteligencia artificial.
            </Text>
          </Stack>

          <Carousel controls="overlay">
            {slides.map((slide) => (
              <Stack key={slide.src} gap="md">
                <Image src={slide.src} alt={slide.alt} aspect="16:9" />
                <Stack gap="sm">
                  <Heading as="h2" size="lg">
                    {slide.title}
                  </Heading>
                  <Text >{slide.description}</Text>
                </Stack>
              </Stack>
            ))}
          </Carousel>
        </Stack>
      </Container>
    </Section>
  );
}

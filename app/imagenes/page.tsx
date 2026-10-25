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
    "Inicio especificando una estructura fija para cada componente que haya que construir.\n\n" +
    "Cada componente va a ser igual en estructura.\n\n" +
    "En mis proyectos solo hago que existan 5 tipos de cosas: controladores, servicios, componentes de lógica, componentes de UI y archivos css. Nada más.",
  },
  {
    src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200",
    alt: "Espacio de trabajo de desarrollo",
    title: "Componentes de lógica",
    description:
      "Cada componente de lógica coordina una funcionalidad. Gestiona los estados y eventos, utiliza componentes de UI para presentar información y delega las operaciones a sus propias funciones utils.",
  },
  {
    src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200",
    alt: "Escritorio con computador",
    title: "Funciones utils y métodos handle",
    description:
      "Los métodos handle capturan y validan los datos de las interacciones. Las funciones utils realizan el procesamiento, con una responsabilidad específica por función.",
  },
];

export default function ImagenesPage() {
  return (
    <Section>
      <Container size="lg">
        <Stack gap="xl">
          <Stack gap="sm">
            <Heading as="h1" size="2xl">
              Arquitectura visual
            </Heading>
            <Text>
              Diagramas e ilustraciones que explican cómo organizo mis proyectos.
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

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
    alt: "Robot dibujando frente a la estructura de carpetas del proyecto daravena, con tres vistas y sus archivos y directorios correspondientes.",
    title: "Arquitectura y estructura de carpetas",
    description:
      "Organizo cada vista dentro de app con su propio archivo de página, estilos y carpetas de componentes, interfaz y utilidades. Los componentes de lógica coordinan funcionalidades y delegan la presentación a componentes de UI y el procesamiento a funciones utils. Esta separación facilita mantener y ampliar el proyecto.",
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
              <div className={styles.slide} key={slide.src}>
                <Heading as="h2" size="lg">
                  {slide.title}
                </Heading>
                <div className={styles.content}>
                  <div className={styles.description}>
                    <Text>{slide.description}</Text>
                  </div>
                  <div className={styles.image}>
                    <Image src={slide.src} alt={slide.alt} aspect="16:9" />
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </Stack>
      </Container>
    </Section>
  );
}

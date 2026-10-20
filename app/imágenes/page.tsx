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

const slides = [
  {
    src: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200",
    alt: "Imagen de ejemplo 1: componentes electrónicos",
    title: "Imagen de ejemplo 1",
    description: "Texto de prueba para presentar el primer elemento del carrusel.",
  },
  {
    src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200",
    alt: "Imagen de ejemplo 2: espacio de trabajo",
    title: "Imagen de ejemplo 2",
    description: "Texto de prueba para presentar el segundo elemento del carrusel.",
  },
  {
    src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200",
    alt: "Imagen de ejemplo 3: escritorio con computador",
    title: "Imagen de ejemplo 3",
    description: "Texto de prueba para presentar el tercer elemento del carrusel.",
  },
];

export default function ImagenesPage() {
  return (
    <Section>
      <Container size="md">
        <Stack gap="xl">
          <Stack gap="sm">
            <Heading as="h1" size="2xl">
              Galería de imágenes
            </Heading>
            <Text>
              Ejemplo de Carousel con tres imágenes y textos temporales.
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
                  <Text>{slide.description}</Text>
                </Stack>
              </Stack>
            ))}
          </Carousel>
        </Stack>
      </Container>
    </Section>
  );
}

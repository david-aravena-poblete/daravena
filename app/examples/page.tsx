"use client";

import {
  Button,
  Carousel,
  Container,
  Heading,
  Image,
  Section,
  Stack,
  Text,
} from "@tefi/design-system";

const images = [
  "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200",
  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200",
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200",
];

export default function ExamplePage() {
  return (
    <Section>
      <Container size="sm">
        <Stack gap="xl">
          <Heading as="h1" size="3xl">
            Generación consistente
            <br />
            de personajes con IA
          </Heading>

          <Carousel>
            {images.map((src, index) => (
              <Image
                key={src}
                src={src}
                alt={`Ejemplo de generación consistente de personajes con IA ${index + 1}`}
                aspect="16:9"
              />
            ))}
          </Carousel>

          <Text size="lg">
            Diseñé un prompt modular para generar un personaje en distintas
            escenas manteniendo siempre su identidad visual.
          </Text>
        </Stack>
      </Container>
    </Section>
  );
}
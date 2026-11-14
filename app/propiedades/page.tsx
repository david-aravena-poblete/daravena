"use client";

import Link from "next/link";
import {
  Button,
  Card,
  Container,
  Heading,
  Section,
  Stack,
  Text,
} from "@tefi/design-system";
import styles from "./propiedades.module.css";

type PropertyVideo = {
  title: string;
  description: string;
  tiktokUrl?: string;
  youtubeUrl?: string;
};

// Agrega aquí la URL pública de cada TikTok cuando esté publicado.
const videos: PropertyVideo[] = [
  { title: "Recorrido en TikTok", description: "Mira este video directamente desde TikTok.", tiktokUrl: "https://www.tiktok.com/@david.aravena.pob/video/7707726432818007304" },
  { title: "Departamento en arriendo", description: "Próximamente: recorrido por un departamento disponible.", tiktokUrl:"https://www.tiktok.com/@david.aravena.pob/video/7707852734141173000?_r=1&_t=ZS-9BO37sfbn1S" },
  { title: "Nuevas propiedades", description: "Publicaré aquí nuevos recorridos en video." },
];

function getTikTokId(url: string): string | null {
  try {
    const parsed = new URL(url);
    if (!["www.tiktok.com", "tiktok.com", "m.tiktok.com"].includes(parsed.hostname)) return null;
    const match = parsed.pathname.match(/^\/@[^/]+\/video\/(\d+)(?:\/)?$/);
    return match?.[1] ?? null;
  } catch {
    return null;
  }
}

function getYouTubeId(url: string): string | null {
  try {
    const parsed = new URL(url);
    if (parsed.hostname === "youtu.be" || parsed.hostname === "www.youtu.be") {
      return /^[\w-]{11}$/.test(parsed.pathname.slice(1)) ? parsed.pathname.slice(1) : null;
    }
    if (["youtube.com", "www.youtube.com", "m.youtube.com"].includes(parsed.hostname)) {
      const id = parsed.pathname.startsWith("/shorts/")
        ? parsed.pathname.split("/")[2]
        : parsed.searchParams.get("v");
      return id && /^[\w-]{11}$/.test(id) ? id : null;
    }
  } catch {
    return null;
  }
  return null;
}

export default function PropiedadesPage() {
  return (
    <Section>
      <Container>
        <Stack style={{ gap: "var(--section-spacing-md)" }}>
          <Stack>
            <Heading as="h1" size="2xl">Búsqueda de propiedades</Heading>
            <Text>
              Te ayudo a encontrar casas y departamentos en arriendo según tu
              presupuesto, las comunas que te interesan y lo que necesitas para vivir.
            </Text>
          </Stack>

          <Stack>
            <Heading as="h2" size="xl">Videos de propiedades</Heading>
            <Text>Conoce los espacios a través de recorridos en video.</Text>
            <div className={styles.videoList} aria-label="Videos de propiedades">
              {videos.map((video) => {
                const tiktokId = video.tiktokUrl ? getTikTokId(video.tiktokUrl) : null;
                const youtubeId = video.youtubeUrl ? getYouTubeId(video.youtubeUrl) : null;
                const videoUrl = tiktokId ? video.tiktokUrl : youtubeId ? video.youtubeUrl : null;
                return (
                  <div className={styles.videoItem} key={video.title}>
                    <Card style={{ height: "100%", display: "flex", flexDirection: "column" }}>
                      <Card.Media>
                        <div className={styles.thumbnail}>
                          {tiktokId ? (
                            <iframe
                              src={`https://www.tiktok.com/player/v1/${tiktokId}`}
                              title={`Recorrido de propiedad: ${video.title}`}
                              loading="lazy"
                              allow="fullscreen"
                              allowFullScreen
                              referrerPolicy="strict-origin-when-cross-origin"
                            />
                          ) : youtubeId ? (
                            <iframe
                              src={`https://www.youtube-nocookie.com/embed/${youtubeId}`}
                              title={`Recorrido de propiedad: ${video.title}`}
                              loading="lazy"
                              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; web-share"
                              allowFullScreen
                            />
                          ) : (
                            <span className={styles.placeholder}>Video próximamente</span>
                          )}
                        </div>
                      </Card.Media>
                      <Card.Body style={{ flex: 1 }}>
                        <Stack>
                          <Heading as="h3" size="lg">{video.title}</Heading>
                          <Text>{video.description}</Text>
                          {videoUrl ? (
                            <a href={videoUrl} target="_blank" rel="noopener noreferrer" className={styles.videoLink}>
                              {tiktokId ? "Ver en TikTok ↗" : "Ver en YouTube ↗"}
                            </a>
                          ) : (
                            <Text>Enlace pendiente de publicación</Text>
                          )}
                        </Stack>
                      </Card.Body>
                    </Card>
                  </div>
                );
              })}
            </div>
          </Stack>

          <Card>
            <Card.Body>
              <Stack>
                <Heading as="h2" size="xl">¿Buscas una propiedad?</Heading>
                <Text>Cuéntame qué necesitas y revisamos las opciones disponibles.</Text>
                <Link href="/contact" className={styles.contactLink}>
                  <Button variant="secondary">Contáctame</Button>
                </Link>
              </Stack>
            </Card.Body>
          </Card>
        </Stack>
      </Container>
    </Section>
  );
}

import {
    Box,
    Container,
    Inline,
    Stack,
    Text,
  } from "@tefi/design-system";
  
  import { SocialLinks } from "./SocialLinks";
  
  export function Footer() {
    return (
      <footer>
        <Box
          background="surface-secondary"
          insideY="md"
        >
          <Container>
            <Stack>
              <Inline
                align="center"
                justify="between"
                gap="xl"
              >
                <Inline
                  align="center"
                  gap="lg"
                >
                  <Text
                    size="lg"
                    weight="semibold"
                  >
                    David Aravena
                  </Text>
  
                  <Text>
                    Criterio humano + inteligencia artificial
                  </Text>
                </Inline>
  
                <SocialLinks />
              </Inline>
  
              <Inline justify="end">
                <Text size="sm">
                  Sitio construido con Tefi Design System
                </Text>
              </Inline>
            </Stack>
          </Container>
        </Box>
      </footer>
    );
  }
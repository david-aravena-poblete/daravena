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
              <SocialLinks />

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
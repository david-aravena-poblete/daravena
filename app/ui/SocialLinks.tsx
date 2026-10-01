import Link from "next/link";

import {
  Box,
  Icon,
  Inline,
  Text,
} from "@tefi/design-system";

export function SocialLinks() {
  return (
    <Inline align="center" gap="sm">
      <Text>Redes sociales</Text>

      <Inline align="center" gap="xs">
        <Link
          href="https://github.com/david-aravena-poblete"
          aria-label="GitHub"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Box
            background="surface"
            border="subtle"
            borderWidth="1"
            borderStyle="solid"
            radius="full"
            insideX="sm"
            insideY="sm"
          >
            <Icon name="github" size="sm" />
          </Box>
        </Link>

        <Link
          href="https://www.linkedin.com/in/david-aravena-poblete-63aa90407"
          aria-label="LinkedIn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Box
            background="surface"
            border="subtle"
            borderWidth="1"
            borderStyle="solid"
            radius="full"
            insideX="sm"
            insideY="sm"
          >
            <Icon name="linkedin" size="sm" />
          </Box>
        </Link>

        <Link
          href="https://www.instagram.com/davido.araveno/"
          aria-label="Instagram"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Box
            background="surface"
            border="subtle"
            borderWidth="1"
            borderStyle="solid"
            radius="full"
            insideX="sm"
            insideY="sm"
          >
            <Icon name="instagram" size="sm" />
          </Box>
        </Link>

        <Link
          href="https://www.facebook.com/share/1DtWCgcA1N/"
          aria-label="Facebook"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Box
            background="surface"
            border="subtle"
            borderWidth="1"
            borderStyle="solid"
            radius="full"
            insideX="sm"
            insideY="sm"
          >
            <Icon name="facebook" size="sm" />
          </Box>
        </Link>
      </Inline>
    </Inline>
  );
}
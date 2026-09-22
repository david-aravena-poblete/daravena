"use client";

import { useState } from "react";
import Link from "next/link";

import {
  Avatar,
  Box,
  Button,
  Container,
  Icon,
  Inline,
  Stack,
  Switch,
  Text,
} from "@tefi/design-system";

export function Navbar() {
  const [theme, setTheme] = useState("dark");

  const isDark = theme === "dark";

  const toggleTheme = () => {
    const nextTheme = isDark ? "light" : "dark";

    setTheme(nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
  };

  return (
    <Box background="surface-secondary" insideY="md">
      <Container>
        <Inline align="center" justify="between" gap="lg">
          <Link href="/">
            <Inline align="center" gap="md">
              <Avatar
                size="lg"
                alt="David Aravena"
                src="https://i.pravatar.cc/150?img=12"
              />

              <Stack gap="none">
                <Text as="h1" size="lg" weight="semibold">
                  David Aravena
                </Text>

                <Text>Frontend developer</Text>
              </Stack>
            </Inline>
          </Link>

          <Inline align="center" gap="sm">
            <Link href="/contact">
              <Button variant="secondary">Contacto</Button>
            </Link>

            <Switch
              size="lg"
              checked={isDark}
              thumb={
                <Icon
                  name={isDark ? "moon" : "sun"}
                  size="lg"
                />
              }
              onChange={toggleTheme}
            />
          </Inline>
        </Inline>
      </Container>
    </Box>
  );
}
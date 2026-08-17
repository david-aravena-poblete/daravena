"use client";

import { useState, type FormEvent } from "react";

import {
  Button,
  Card,
  Form,
  FormActions,
  FormField,
  FormRow,
  ErrorMessage,
  Input,
  Label,
  Textarea,
  Heading,
  Text,
  Container,
  Stack,
} from "@tefi/design-system";

import {
  validateContactForm,
  type ContactFormData,
} from "../../utils/validate-contact-form";

export function ContactPage() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors = validateContactForm(formData);

    setErrors(nextErrors);

    const hasErrors = Object.values(nextErrors).some(Boolean);

    if (hasErrors) {
      return;
    }
  };

  return (
    <Container size="sm">
      <Card>
        <Card.Header>
          <Stack gap="sm">
            <Heading as="h1">Contacto</Heading>

            <Text>Envíame un mensaje.</Text>
          </Stack>
        </Card.Header>

        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Stack gap="lg">
              <FormField state={errors.name ? "error" : "default"}>
                <Label required>Tu Nombre</Label>

                <Input
                  placeholder="Escribe tu nombre"
                  value={formData.name}
                  onChange={(event) => {
                    setFormData((previous) => ({
                      ...previous,
                      name: event.target.value,
                    }));
                  }}
                />

                {errors.name && (
                  <ErrorMessage>{errors.name}</ErrorMessage>
                )}
              </FormField>

              <FormRow>
                <FormField state={errors.email ? "error" : "default"}>
                  <Label required>Email</Label>

                  <Input
                    type="email"
                    placeholder="tu@email.com"
                    value={formData.email}
                    onChange={(event) => {
                      setFormData((previous) => ({
                        ...previous,
                        email: event.target.value,
                      }));
                    }}
                  />

                  {errors.email && (
                    <ErrorMessage>{errors.email}</ErrorMessage>
                  )}
                </FormField>

                <FormField state={errors.phone ? "error" : "default"}>
                  <Label>Fono</Label>

                  <Input
                    type="tel"
                    placeholder="+569..."
                    value={formData.phone}
                    onChange={(event) => {
                      setFormData((previous) => ({
                        ...previous,
                        phone: event.target.value,
                      }));
                    }}
                  />

                  {errors.phone && (
                    <ErrorMessage>{errors.phone}</ErrorMessage>
                  )}
                </FormField>
              </FormRow>

              <FormField state={errors.message ? "error" : "default"}>
                <Label required>Mensaje para David Aravena</Label>

                <Textarea
                  placeholder="Escribe tu mensaje..."
                  value={formData.message}
                  onChange={(event) => {
                    setFormData((previous) => ({
                      ...previous,
                      message: event.target.value,
                    }));
                  }}
                />

                {errors.message && (
                  <ErrorMessage>{errors.message}</ErrorMessage>
                )}
              </FormField>

              <Button type="submit" variant="primary" fullWidth>
                Enviar mensaje
              </Button>
            </Stack>
          </Form>
        </Card.Body>

        <Card.Footer>
          <FormActions>
            <Button variant="link">
              Prefiero escribir un WhatsApp
            </Button>
          </FormActions>
        </Card.Footer>
      </Card>
    </Container>
  );
}
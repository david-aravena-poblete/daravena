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
  type ContactFormErrors,
} from "../../utils/validate-contact-form";

export function ContactPage() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<ContactFormErrors>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleFieldChange = (
    field: keyof ContactFormData,
    value: string,
  ) => {
    const nextFormData = {
      ...formData,
      [field]: value,
    };

    setFormData(nextFormData);

    if (isSubmitted) {
      setIsSubmitted(false);
    }

    if (submitError) {
      setSubmitError("");
    }

    if (!hasSubmitted) {
      return;
    }

    const nextErrors = validateContactForm(nextFormData);

    setErrors(nextErrors);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setHasSubmitted(true);
    setIsSubmitted(false);
    setSubmitError("");

    const nextErrors = validateContactForm(formData);

    setErrors(nextErrors);

    const hasErrors = Object.values(nextErrors).some(Boolean);

    if (hasErrors) {
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);

      if (formData.name.trim().toLowerCase() === "error") {
        setSubmitError(
          "No pudimos enviar tu mensaje. Inténtalo nuevamente.",
        );

        return;
      }

      setIsSubmitted(true);
    }, 1000);
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
          <Form onSubmit={handleSubmit} noValidate>
            <Stack gap="lg">
              <FormField state={errors.name ? "error" : "default"}>
                <Label required>Tu Nombre</Label>

                <Input
                  placeholder="Escribe tu nombre"
                  value={formData.name}
                  onChange={(event) => {
                    handleFieldChange("name", event.target.value);
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
                      handleFieldChange("email", event.target.value);
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
                      handleFieldChange("phone", event.target.value);
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
                    handleFieldChange("message", event.target.value);
                  }}
                />

                {errors.message && (
                  <ErrorMessage>{errors.message}</ErrorMessage>
                )}
              </FormField>

              <Button
                type="submit"
                variant="primary"
                fullWidth
                disabled={isSubmitting}
              >
                {isSubmitting ? "Enviando..." : "Enviar mensaje"}
              </Button>

              {isSubmitted && (
                <Text
                  style={{
                    color: "var(--state-success-text)",
                    textAlign: "right",
                  }}
                >
                  ✓ Mensaje enviado correctamente.
                </Text>
              )}

              {submitError && (
                <ErrorMessage
                  style={{
                    textAlign: "right",
                  }}
                >
                  {submitError}
                </ErrorMessage>
              )}
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
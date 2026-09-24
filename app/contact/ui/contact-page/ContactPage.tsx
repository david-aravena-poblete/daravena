"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";

import {
  Button,
  Card,
  Form,
  FormField,
  ErrorMessage,
  Input,
  Label,
  Textarea,
  Heading,
  Text,
  Container,
  Stack,
  Section,
  Radio,
  RadioGroup,
  Modal,
} from "@tefi/design-system";

import {
  validateContactForm,
  type ContactFormData,
  type ContactFormErrors,
} from "../../utils/validate-contact-form";

export function ContactPage() {
  const router = useRouter();

  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    contactMethod: "email",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<ContactFormErrors>({
    name: "",
    contactMethod: "",
    email: "",
    phone: "",
    message: "",
  });

  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  /* ======================================
     FIELD CHANGE
  ====================================== */

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

    const nextErrors =
      validateContactForm(nextFormData);

    setErrors(nextErrors);
  };

  /* ======================================
     CONTACT METHOD CHANGE
  ====================================== */

  const handleContactMethodChange = (
    value: string,
  ) => {
    const nextContactMethod =
      value as ContactFormData["contactMethod"];

    const nextFormData: ContactFormData = {
      ...formData,
      contactMethod: nextContactMethod,

      email:
        nextContactMethod === "email"
          ? formData.email
          : "",

      phone:
        nextContactMethod === "phone"
          ? formData.phone
          : "",
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

    const nextErrors =
      validateContactForm(nextFormData);

    setErrors(nextErrors);
  };

  /* ======================================
     RESET
  ====================================== */

  const resetForm = () => {
    setFormData({
      name: "",
      contactMethod: "email",
      email: "",
      phone: "",
      message: "",
    });

    setErrors({
      name: "",
      contactMethod: "",
      email: "",
      phone: "",
      message: "",
    });

    setHasSubmitted(false);
  };

  /* ======================================
     CLOSE SUCCESS MODAL
  ====================================== */

  const handleClose = () => {
    router.push("/");
  };

  /* ======================================
     SUBMIT
  ====================================== */

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    setHasSubmitted(true);
    setIsSubmitted(false);
    setSubmitError("");

    const nextErrors =
      validateContactForm(formData);

    setErrors(nextErrors);

    const hasErrors =
      Object.values(nextErrors).some(Boolean);

    if (hasErrors) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(
        "/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        },
      );

      const data = await response.json();

      if (!response.ok) {
        if (data.errors) {
          setErrors(data.errors);
          return;
        }

        setSubmitError(
          data.message ??
            "No pudimos enviar tu mensaje. Inténtalo nuevamente.",
        );

        return;
      }

      setIsSubmitted(true);
      resetForm();
    } catch {
      setSubmitError(
        "Error de conexión. Verifica tu internet e inténtalo nuevamente.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  /* ======================================
     RENDER
  ====================================== */

  return (
    <>
      <Section>
        <Container size="sm">
          <Card>
            <Card.Header>
              <Stack gap="sm">
                <Heading as="h1">
                  Contacto
                </Heading>

                <Text>
                  Envíame un mensaje.
                </Text>
              </Stack>
            </Card.Header>

            {/* ======================================
               BODY
            ====================================== */}

            <Card.Body>
              <Form
                onSubmit={handleSubmit}
                noValidate
              >
                <Stack>

                  {/* NAME */}

                  <FormField
                    state={
                      errors.name
                        ? "error"
                        : "default"
                    }
                  >
                    <Label required>
                      Tu Nombre
                    </Label>

                    <Input
                      placeholder="Escribe tu nombre"
                      value={formData.name}
                      onChange={(event) => {
                        handleFieldChange(
                          "name",
                          event.target.value,
                        );
                      }}
                    />

                    {errors.name && (
                      <ErrorMessage>
                        {errors.name}
                      </ErrorMessage>
                    )}
                  </FormField>

                  {/* CONTACT METHOD */}

                  <FormField
                    state={
                      errors.contactMethod
                        ? "error"
                        : "default"
                    }
                  >
                    <Label required>
                      ¿Cómo prefieres que te contactemos?
                    </Label>

                    <RadioGroup
                      value={formData.contactMethod}
                      onChange={
                        handleContactMethodChange
                      }
                    >
                      <Radio value="email">
                        Email
                      </Radio>

                      <Radio value="phone">
                        Teléfono
                      </Radio>
                    </RadioGroup>

                    {errors.contactMethod && (
                      <ErrorMessage>
                        {errors.contactMethod}
                      </ErrorMessage>
                    )}
                  </FormField>

                  {/* CONTACT FIELD */}

                  {formData.contactMethod ===
                    "email" && (
                    <FormField
                      state={
                        errors.email
                          ? "error"
                          : "default"
                      }
                    >
                      <Label required>
                        Email
                      </Label>

                      <Input
                        type="email"
                        placeholder="tu@email.com"
                        value={formData.email}
                        onChange={(event) => {
                          handleFieldChange(
                            "email",
                            event.target.value,
                          );
                        }}
                      />

                      {errors.email && (
                        <ErrorMessage>
                          {errors.email}
                        </ErrorMessage>
                      )}
                    </FormField>
                  )}

                  {formData.contactMethod ===
                    "phone" && (
                    <FormField
                      state={
                        errors.phone
                          ? "error"
                          : "default"
                      }
                    >
                      <Label required>
                        Fono
                      </Label>

                      <Input
                        type="tel"
                        placeholder="+569..."
                        value={formData.phone}
                        onChange={(event) => {
                          handleFieldChange(
                            "phone",
                            event.target.value,
                          );
                        }}
                      />

                      {errors.phone && (
                        <ErrorMessage>
                          {errors.phone}
                        </ErrorMessage>
                      )}
                    </FormField>
                  )}

                  {/* MESSAGE */}

                  <FormField
                    state={
                      errors.message
                        ? "error"
                        : "default"
                    }
                  >
                    <Label required>
                      Mensaje para David Aravena
                    </Label>

                    <Textarea
                      placeholder="Escribe tu mensaje..."
                      value={formData.message}
                      onChange={(event) => {
                        handleFieldChange(
                          "message",
                          event.target.value,
                        );
                      }}
                    />

                    {errors.message && (
                      <ErrorMessage>
                        {errors.message}
                      </ErrorMessage>
                    )}
                  </FormField>

                  {/* SUBMIT */}

                  <Button
                    type="submit"
                    variant="primary"
                    fullWidth
                    disabled={isSubmitting}
                  >
                    {isSubmitting
                      ? "Enviando..."
                      : "Enviar mensaje"}
                  </Button>

                  {/* ERROR */}

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
          </Card>
        </Container>
      </Section>

      {/* ======================================
         SUCCESS MODAL
      ====================================== */}

      <Modal
        open={isSubmitted}
        onClose={handleClose}
        closeOnOverlayClick={false}
      >
        <Stack gap="lg">
          <Heading>
            Mensaje enviado
          </Heading>

          <Text>
            Tu mensaje fue enviado correctamente.
          </Text>

          <Button onClick={handleClose}>
            Cerrar
          </Button>
        </Stack>
      </Modal>
    </>
  );
}
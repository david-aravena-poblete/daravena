export type ContactMethod = "email" | "phone";

export interface ContactFormData {
  name: string;
  contactMethod: ContactMethod | "";
  email: string;
  phone: string;
  message: string;
}

export interface ContactFormErrors {
  name: string;
  contactMethod: string;
  email: string;
  phone: string;
  message: string;
}

export function validateContactForm(
  formData: ContactFormData,
): ContactFormErrors {
  const errors: ContactFormErrors = {
    name: "",
    contactMethod: "",
    email: "",
    phone: "",
    message: "",
  };

  if (!formData.name.trim()) {
    errors.name = "El nombre es obligatorio.";
  }

  if (!formData.contactMethod) {
    errors.contactMethod =
      "Selecciona cómo prefieres que te contactemos.";
  }

  if (formData.contactMethod === "email") {
    if (!formData.email.trim()) {
      errors.email = "El email es obligatorio.";
    } else {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailPattern.test(formData.email)) {
        errors.email = "Ingresa un email válido.";
      }
    }
  }

  if (formData.contactMethod === "phone") {
    if (!formData.phone.trim()) {
      errors.phone = "El teléfono es obligatorio.";
    } else {
      const phonePattern = /^\+?[0-9\s()-]{8,}$/;

      if (!phonePattern.test(formData.phone)) {
        errors.phone = "Ingresa un teléfono válido.";
      }
    }
  }

  if (!formData.message.trim()) {
    errors.message = "El mensaje es obligatorio.";
  }

  return errors;
}
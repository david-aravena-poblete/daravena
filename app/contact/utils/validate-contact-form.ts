export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export interface ContactFormErrors {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export function validateContactForm(
  formData: ContactFormData,
): ContactFormErrors {
  const errors: ContactFormErrors = {
    name: "",
    email: "",
    phone: "",
    message: "",
  };

  if (!formData.name.trim()) {
    errors.name = "El nombre es obligatorio.";
  }

  if (!formData.email.trim()) {
    errors.email = "El email es obligatorio.";
  } else {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(formData.email)) {
      errors.email = "Ingresa un email válido.";
    }
  }

  if (formData.phone.trim()) {
    const phonePattern = /^\+?[0-9\s()-]{8,}$/;

    if (!phonePattern.test(formData.phone)) {
      errors.phone = "Ingresa un teléfono válido.";
    }
  }

  if (!formData.message.trim()) {
    errors.message = "El mensaje es obligatorio.";
  }

  return errors;
}
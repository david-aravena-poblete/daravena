import { NextResponse } from "next/server";
import { Resend } from "resend";

import {
  validateContactForm,
  type ContactFormData,
} from "../../contact/utils/validate-contact-form";

/* ======================================
   CONFIGURATION
   ====================================== */

const resend = new Resend(
  process.env.RESEND_API_KEY,
);

const RECIPIENT_EMAIL =
  process.env.RESEND_RECIPIENT_EMAIL ??
  "tu-email@ejemplo.com";

const FROM_EMAIL =
  process.env.RESEND_FROM_EMAIL ??
  "onboarding@resend.dev";

/* ======================================
   POST /api/contact
   ====================================== */

export async function POST(request: Request) {
  try {
    const body =
      (await request.json()) as ContactFormData;

    /* ======================================
       VALIDATION
    ====================================== */

    const errors = validateContactForm(body);

    const hasErrors =
      Object.values(errors).some(Boolean);

    if (hasErrors) {
      return NextResponse.json(
        { success: false, errors },
        { status: 400 },
      );
    }

    /* ======================================
       BUILD EMAIL
    ====================================== */

    const contactValue =
      body.contactMethod === "email"
        ? body.email
        : body.phone;

    const contactLabel =
      body.contactMethod === "email"
        ? "Email"
        : "Teléfono";

    const htmlContent = `
      <h2>Nuevo mensaje de contacto</h2>
      <p><strong>Nombre:</strong> ${body.name}</p>
      <p><strong>${contactLabel}:</strong> ${contactValue}</p>
      <hr />
      <p><strong>Mensaje:</strong></p>
      <p>${body.message.replace(/\n/g, "<br />")}</p>
    `;

    /* ======================================
       SEND EMAIL
    ====================================== */

    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: RECIPIENT_EMAIL,
      subject: `Contacto web: ${body.name}`,
      html: htmlContent,
    });

    if (error) {
      console.error(
        "[api/contact] Resend error:",
        error,
      );

      return NextResponse.json(
        {
          success: false,
          message:
            "No se pudo enviar el mensaje. Inténtalo más tarde.",
        },
        { status: 500 },
      );
    }

    /* ======================================
       SUCCESS
    ====================================== */

    return NextResponse.json(
      {
        success: true,
        message: "Mensaje enviado correctamente.",
      },
      { status: 200 },
    );
  } catch (error) {
    console.error(
      "[api/contact] Unexpected error:",
      error,
    );

    return NextResponse.json(
      {
        success: false,
        message:
          "Ocurrió un error inesperado. Inténtalo más tarde.",
      },
      { status: 500 },
    );
  }
}

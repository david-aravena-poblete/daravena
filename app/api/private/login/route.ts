import { NextResponse } from "next/server";
import { createSession, isValidPassword, PRIVATE_COOKIE } from "../../../privado/auth";

export async function POST(request: Request) {
  let password = "";
  try {
    password = String((await request.json()).password ?? "");
  } catch {
    return NextResponse.json({ message: "Solicitud inválida." }, { status: 400 });
  }

  if (!process.env.PRIVATE_ACCESS_PASSWORD || !process.env.PRIVATE_SESSION_SECRET) {
    return NextResponse.json({ message: "Falta configurar el acceso privado en el servidor." }, { status: 503 });
  }
  if (!isValidPassword(password)) {
    return NextResponse.json({ message: "Contraseña incorrecta." }, { status: 401 });
  }

  const response = NextResponse.json({ success: true });
  response.cookies.set(PRIVATE_COOKIE, createSession(), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });
  return response;
}

export async function DELETE() {
  const response = NextResponse.json({ success: true });
  response.cookies.set(PRIVATE_COOKIE, "", { httpOnly: true, secure: process.env.NODE_ENV === "production", sameSite: "strict", path: "/", maxAge: 0 });
  return response;
}

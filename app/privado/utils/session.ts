import { createHash, createHmac, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";

const cookieName = "daravena_private_session";
const sessionLifetime = 60 * 60 * 8;

function getCredentials() {
  const password = process.env.PRIVATE_ACCESS_PASSWORD;
  const secret = process.env.PRIVATE_SESSION_SECRET;

  if (!password || password.length < 32 || !secret || secret.length < 32) {
    return null;
  }

  return { password, secret };
}

function signExpiry(expiresAt: string, secret: string, password: string) {
  return createHmac("sha256", secret)
    .update(JSON.stringify([expiresAt, password]))
    .digest("hex");
}

export function hasPrivateSession() {
  const credentials = getCredentials();
  const token = cookies().get(cookieName)?.value;
  if (!credentials || !token || !/^\d{1,12}\.[a-f0-9]{64}$/.test(token)) {
    return false;
  }

  const [expiresAt, signature] = token.split(".");
  if (Number(expiresAt) <= Math.floor(Date.now() / 1000)) {
    return false;
  }

  const expected = signExpiry(expiresAt, credentials.secret, credentials.password);
  return timingSafeEqual(Buffer.from(signature, "hex"), Buffer.from(expected, "hex"));
}

export function startPrivateSession(password: FormDataEntryValue | null) {
  const credentials = getCredentials();
  if (!credentials || typeof password !== "string" || password.length > 256) {
    return false;
  }

  const submitted = createHash("sha256").update(password).digest();
  const expected = createHash("sha256").update(credentials.password).digest();
  if (!timingSafeEqual(submitted, expected)) {
    return false;
  }

  const expiresAt = String(Math.floor(Date.now() / 1000) + sessionLifetime);
  const signature = signExpiry(expiresAt, credentials.secret, credentials.password);

  cookies().set(cookieName, `${expiresAt}.${signature}`, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/privado",
    maxAge: sessionLifetime,
  });

  return true;
}

export function clearPrivateSession() {
  cookies().set(cookieName, "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/privado",
    maxAge: 0,
  });
}

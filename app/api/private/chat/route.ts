import { NextResponse } from "next/server";
import { hasPrivateSession } from "../../../privado/auth";

const allowedModels = new Set(["gpt-4o", "gpt-4o-mini", "gpt-4.1", "gpt-4.1-mini", "o3-mini"]);

export async function POST(request: Request) {
  if (!hasPrivateSession()) return NextResponse.json({ message: "Sesión no autorizada." }, { status: 401 });

  const apiKey = process.env.DARAVENA_OPENAI_API_KEY ?? process.env.OPENAI_API_KEY;
  
  if (!apiKey) return NextResponse.json({ message: "Falta configurar DARAVENA_OPENAI_API_KEY en el servidor." }, { status: 503 });

  try {
    const body = await request.json();
    const model = String(body.model ?? "gpt-4o-mini");
    const system = String(body.system ?? "").slice(0, 8000);
    const prompt = String(body.prompt ?? "").slice(0, 20000);
    const temperature = Math.max(0, Math.min(2, Number(body.temperature ?? 0.7)));
    if (!allowedModels.has(model)) return NextResponse.json({ message: "Modelo no permitido." }, { status: 400 });
    if (!prompt.trim()) return NextResponse.json({ message: "Escribe un mensaje para enviar." }, { status: 400 });

    const upstream = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({ model, ...(model.startsWith("o") ? {} : { temperature }), messages: [...(system.trim() ? [{ role: "system", content: system }] : []), { role: "user", content: prompt }] }),
      cache: "no-store",
    });
    const data = await upstream.json();
    if (!upstream.ok) {
      if (upstream.status === 401) {
        return NextResponse.json(
          { message: "OpenAI rechazó la clave configurada. Revisa DARAVENA_OPENAI_API_KEY en el servidor." },
          { status: 502 },
        );
      }
      return NextResponse.json({ message: data.error?.message ?? "OpenAI no pudo completar la solicitud." }, { status: upstream.status });
    }
    return NextResponse.json({ text: data.choices?.[0]?.message?.content ?? "", usage: data.usage, model: data.model });
  } catch {
    return NextResponse.json({ message: "No se pudo procesar la solicitud." }, { status: 500 });
  }
}

// Recebe o formulário de contato e envia para o Telegram da dona do site.
// O token e o chat id ficam só em variáveis de ambiente do servidor (.env.local) —
// nunca no código nem no navegador.

const MAX = { name: 100, email: 200, phone: 20, subject: 100, message: 3000 };
const SUBJECTS = ["Oportunidade profissional", "Projeto freelance", "Outro"];

// Limite simples por IP: 5 envios a cada 10 minutos (em memória)
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  if (recent.length >= MAX_PER_WINDOW) {
    hits.set(ip, recent);
    return true;
  }
  recent.push(now);
  hits.set(ip, recent);
  return false;
}

function clean(value: unknown, max: number) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

export async function POST(request: Request) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) {
    return Response.json({ error: "Serviço indisponível." }, { status: 503 });
  }

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "desconhecido";
  if (rateLimited(ip)) {
    return Response.json({ error: "Muitas tentativas. Tente mais tarde." }, { status: 429 });
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Requisição inválida." }, { status: 400 });
  }

  // Campo escondido: robôs preenchem, pessoas não. Finge sucesso e descarta.
  if (clean(body.website, 200)) return Response.json({ ok: true });

  const name = clean(body.name, MAX.name);
  const email = clean(body.email, MAX.email);
  const phone = clean(body.phone, MAX.phone);
  const subject = clean(body.subject, MAX.subject);
  const message = clean(body.message, MAX.message);

  // Telefone obrigatório: aceita só números e símbolos comuns (+ ( ) - espaço)
  if (!/^[\d\s()+-]{8,20}$/.test(phone)) {
    return Response.json({ error: "Confira os campos e tente de novo." }, { status: 400 });
  }

  if (!name || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !SUBJECTS.includes(subject)) {
    return Response.json({ error: "Confira os campos e tente de novo." }, { status: 400 });
  }

  const text = [
    "📩 Nova mensagem pelo site",
    "",
    `Nome: ${name}`,
    `E-mail: ${email}`,
    `Telefone: ${phone}`,
    `Assunto: ${subject}`,
    "",
    message,
  ].join("\n");

  try {
    const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text, disable_web_page_preview: true }),
      signal: AbortSignal.timeout(10_000),
    });
    if (!res.ok) throw new Error(`Telegram respondeu ${res.status}`);
  } catch (error) {
    // Registra só o motivo; nunca o token nem a URL
    console.error("Falha ao enviar para o Telegram:", error instanceof Error ? error.message : "erro");
    return Response.json({ error: "Não foi possível enviar agora." }, { status: 502 });
  }

  return Response.json({ ok: true });
}

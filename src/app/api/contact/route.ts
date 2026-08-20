import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
  if (!accessKey) {
    // No key configured yet — tell the client to fall back to a mailto link.
    return NextResponse.json({ ok: false, fallback: true }, { status: 503 });
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request" }, { status: 400 });
  }

  const { name, email, phone, projectType, message } = body as Record<string, string | undefined>;
  if (!name?.trim() || !message?.trim() || (!email?.trim() && !phone?.trim())) {
    return NextResponse.json(
      { ok: false, error: "Name, message, and an email or phone number are required." },
      { status: 400 },
    );
  }

  const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      access_key: accessKey,
      subject: `New enquiry from ${name} — phosdesignworkspace.in`,
      from_name: "Phos Design Workspace Website",
      name,
      email: email || undefined,
      phone: phone || undefined,
      project_type: projectType || undefined,
      message,
    }),
  });

  if (!res.ok) {
    return NextResponse.json({ ok: false, error: "Failed to send. Please try again." }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}

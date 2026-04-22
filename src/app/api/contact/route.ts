import { NextRequest, NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: NextRequest) {
  const apiKey = process.env.SENDGRID_API_KEY;
  if (!apiKey) {
    console.error("SENDGRID_API_KEY environment variable is not set");
    return NextResponse.json(
      { success: false, error: "Email service is not configured" },
      { status: 500 },
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid JSON body" },
      { status: 400 },
    );
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const company = typeof body.company === "string" ? body.company.trim() : "";
  const service = typeof body.service === "string" ? body.service.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";

  if (!name) {
    return NextResponse.json(
      { success: false, error: "Name is required" },
      { status: 400 },
    );
  }
  if (!email || !isValidEmail(email)) {
    return NextResponse.json(
      { success: false, error: "A valid email is required" },
      { status: 400 },
    );
  }
  if (!message) {
    return NextResponse.json(
      { success: false, error: "Message is required" },
      { status: 400 },
    );
  }

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeCompany = escapeHtml(company || "N/A");
  const safeService = escapeHtml(service || "Not specified");
  const safeMessage = escapeHtml(message);

  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Company: ${company || "N/A"}`,
    `Service: ${service || "Not specified"}`,
    "",
    `Message:`,
    message,
  ].join("\n");

  const html = `
<p><strong>Name:</strong> ${safeName}</p>
<p><strong>Email:</strong> ${safeEmail}</p>
<p><strong>Company:</strong> ${safeCompany}</p>
<p><strong>Service:</strong> ${safeService}</p>
<p><strong>Message:</strong></p>
<p>${safeMessage.replace(/\n/g, "<br>")}</p>
`.trim();

  sgMail.setApiKey(apiKey);

  try {
    await sgMail.send({
      from: { name: "Intelligent Paths Website", email: "contact@intelligentpaths.com" },
      to: "info@intelligentpaths.com",
      replyTo: email,
      subject: `New Contact Form Submission: ${name}`,
      text,
      html,
    });
  } catch (err) {
    console.error("SendGrid error:", err);
    return NextResponse.json(
      { success: false, error: "Failed to send message" },
      { status: 500 },
    );
  }

  return NextResponse.json({ success: true });
}

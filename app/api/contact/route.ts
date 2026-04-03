import { NextResponse } from "next/server"
import nodemailer from "nodemailer"
import { z } from "zod"

const contactSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(200),
  message: z.string().trim().min(10).max(2000),
})

function getRequiredEnv(name: string): string {
  const value = process.env[name]

  if (!value) {
    throw new Error(`Missing environment variable: ${name}`)
  }

  return value
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;")
}

export async function POST(req: Request) {
  let smtpHost = ""
  let smtpPort = 0
  let smtpUser = ""
  let smtpPass = ""
  let recipientEmail = ""
  let fromAddress = ""

  try {
    const body = await req.json()
    const parsed = contactSchema.safeParse(body)

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid form data" },
        { status: 400 }
      )
    }

    smtpHost = getRequiredEnv("SMTP_HOST")
    smtpPort = Number.parseInt(getRequiredEnv("SMTP_PORT"), 10)
    smtpUser = getRequiredEnv("SMTP_USER")
    smtpPass = getRequiredEnv("SMTP_PASS")
    recipientEmail = getRequiredEnv("CONTACT_RECEIVER_EMAIL")
    fromAddress = process.env.SMTP_FROM?.trim() || smtpUser

    if (!Number.isFinite(smtpPort) || smtpPort <= 0) {
      return NextResponse.json(
        { error: "Invalid SMTP_PORT", code: "SERVER_NOT_CONFIGURED" },
        { status: 500 }
      )
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    })

    const { name, email, message } = parsed.data
    const sentAt = new Date().toISOString()
    const safeName = escapeHtml(name)
    const safeEmail = escapeHtml(email)
    const safeMessage = escapeHtml(message)

    await transporter.sendMail({
      from: `Portfolio Contact Form <${fromAddress}>`,
      to: recipientEmail,
      replyTo: email,
      subject: `New portfolio message from ${name}`,
      text: [
        "New contact form submission",
        "",
        `Name: ${name}`,
        `Email: ${email}`,
        `Time: ${sentAt}`,
        "",
        "Message:",
        message,
      ].join("\n"),
      html: `
        <h2>New contact form submission</h2>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Time:</strong> ${sentAt}</p>
        <hr />
        <p style="white-space: pre-wrap;">${safeMessage}</p>
      `,
    })

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error("Contact API error:", error)

    if (error instanceof Error && error.message.startsWith("Missing environment variable:")) {
      return NextResponse.json(
        { error: "Email service is not configured", code: "SERVER_NOT_CONFIGURED" },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { error: "Failed to send message", code: "SEND_FAILED" },
      { status: 500 }
    )
  }
}

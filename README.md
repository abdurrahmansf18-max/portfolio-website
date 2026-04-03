# portfolio-website

This is a [Next.js](https://nextjs.org) project bootstrapped with [v0](https://v0.app).

## Built with v0

This repository is linked to a [v0](https://v0.app) project. You can continue developing by visiting the link below -- start new chats to make changes, and v0 will push commits directly to this repo. Every merge to `main` will automatically deploy.

[Continue working on v0 →](https://v0.app/chat/projects/prj_cHHSa224NBEkIy3NYECvxfoLYLBr)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Contact Form Setup (SMTP)

The contact form is connected to `POST /api/contact` and sends email using SMTP.

1. Copy `.env.example` to `.env.local`.
2. Fill these variables in `.env.local`:

```bash
SMTP_HOST=
SMTP_PORT=587
SMTP_USER=
SMTP_PASS=
SMTP_FROM=
CONTACT_RECEIVER_EMAIL=
```

3. Restart the dev server after changing env values.

When the form is submitted, the message is sent to `CONTACT_RECEIVER_EMAIL`.
The sender email shown in your mailbox is `SMTP_USER`, and the user's email is set as `replyTo`.

### Quick provider presets

Brevo SMTP:

```bash
SMTP_HOST=smtp-relay.brevo.com
SMTP_PORT=587
SMTP_USER=your_brevo_user
SMTP_PASS=your_brevo_pass
SMTP_FROM=portfolio@your-domain.com
CONTACT_RECEIVER_EMAIL=you@example.com
```

Gmail SMTP (requires App Password):

```bash
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_USER=your_gmail@gmail.com
SMTP_PASS=your_16_char_app_password
SMTP_FROM=your_gmail@gmail.com
CONTACT_RECEIVER_EMAIL=your_gmail@gmail.com
```

## Learn More

To learn more, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [v0 Documentation](https://v0.app/docs) - learn about v0 and how to use it.

<a href="https://v0.app/chat/api/kiro/clone/abdurrahmansf18-max/portfolio-website" alt="Open in Kiro"><img src="https://pdgvvgmkdvyeydso.public.blob.vercel-storage.com/open%20in%20kiro.svg?sanitize=true" /></a>

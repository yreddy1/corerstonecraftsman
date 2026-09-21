# Cornerstone Craftsman website

Public website for [Cornerstone Craftsman](https://cornerstonecraftsman.org/), a 501(c)(3) pre-apprenticeship for youth ages 12–17 in Alexandria, Virginia.

This repository is a Next.js rebuild of the live WordPress + Elementor site. Existing URLs are preserved or redirected. The site has not been deployed from this project.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

```bash
npm run lint
npm run typecheck
npm test
npm run build
```

## Forms

Inquiry, contact, and volunteer forms validate in the app. To email submissions, set:

- `RESEND_API_KEY`
- `CONTACT_TO_EMAIL` (defaults to info@cornerstonecraftsman.org)
- `FORM_FROM_EMAIL`

Without those variables, forms still validate and show a confirmation that asks the visitor to email the organization.

Donations continue to use the existing Givebutter campaign: https://givebutter.com/ZTApVJ

## Content rules

Do not invent statistics, student stories, or partnership agreements. Use the labeled “Needs confirmation” notes when a public source is missing or conflicting.

import { NextResponse } from "next/server";
import { org } from "@/content/site";
import {
  isHoneypotFilled,
  validateContact,
  validateInquiry,
  validateVolunteer,
  type ContactPayload,
  type InquiryPayload,
  type VolunteerPayload,
} from "@/lib/forms";

const inbox = process.env.CONTACT_TO_EMAIL || org.email;

function textFrom(form: FormData, key: string): string {
  return String(form.get(key) ?? "");
}

async function deliver(subject: string, body: string) {
  const key = process.env.RESEND_API_KEY;
  if (!key) {
    console.info(`[form] ${subject}\n${body}`);
    return {
      delivered: false,
      message:
        "Your information was validated. Email delivery is not yet connected on this environment, so please also write directly if you need a response today.",
    };
  }
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: process.env.FORM_FROM_EMAIL || "Cornerstone Craftsman Website <noreply@cornerstonecraftsman.org>",
      to: [inbox],
      subject,
      text: body,
    }),
  });
  if (!response.ok) {
    return {
      delivered: false,
      message: "The form could not be emailed automatically. Please contact us directly.",
    };
  }
  return {
    delivered: true,
    message: "Thank you. A staff member will follow up using the contact method you selected.",
  };
}

export async function POST_INQUIRY(request: Request) {
  const form = await request.formData();
  if (isHoneypotFilled(textFrom(form, "website"))) {
    return NextResponse.json({ ok: true, message: "Thank you." });
  }
  const payload: InquiryPayload = {
    submitterName: textFrom(form, "submitterName"),
    email: textFrom(form, "email"),
    phone: textFrom(form, "phone"),
    relationship: textFrom(form, "relationship"),
    studentAgeOrGrade: textFrom(form, "studentAgeOrGrade"),
    preferredContact: textFrom(form, "preferredContact"),
    message: textFrom(form, "message"),
    website: textFrom(form, "website"),
  };
  const errors = validateInquiry(payload);
  if (Object.keys(errors).length) {
    return NextResponse.json({ errors, message: "Please correct the highlighted fields." }, { status: 400 });
  }
  const result = await deliver(
    "Program inquiry from the website",
    `Name: ${payload.submitterName}\nEmail: ${payload.email}\nPhone: ${payload.phone || "n/a"}\nRelationship: ${payload.relationship}\nStudent age/grade: ${payload.studentAgeOrGrade}\nPreferred contact: ${payload.preferredContact}\n\n${payload.message}`,
  );
  return NextResponse.json({
    ok: true,
    message: result.delivered
      ? "Thank you. We received your inquiry and will follow up. If you do not hear back, email info@cornerstonecraftsman.org."
      : `${result.message} Email ${org.email}.`,
  });
}

export async function POST_CONTACT(request: Request) {
  const form = await request.formData();
  if (isHoneypotFilled(textFrom(form, "website"))) {
    return NextResponse.json({ ok: true, message: "Thank you." });
  }
  const payload: ContactPayload = {
    firstName: textFrom(form, "firstName"),
    lastName: textFrom(form, "lastName"),
    email: textFrom(form, "email"),
    phone: textFrom(form, "phone"),
    message: textFrom(form, "message"),
    website: textFrom(form, "website"),
  };
  const errors = validateContact(payload);
  if (Object.keys(errors).length) {
    return NextResponse.json({ errors, message: "Please correct the highlighted fields." }, { status: 400 });
  }
  const result = await deliver(
    "Website contact form",
    `${payload.firstName} ${payload.lastName}\n${payload.email}\n${payload.phone || "n/a"}\n\n${payload.message}`,
  );
  return NextResponse.json({
    ok: true,
    message: result.delivered
      ? "Thank you. We received your message."
      : `${result.message} Email ${org.email}.`,
  });
}

export async function POST_VOLUNTEER(request: Request) {
  const form = await request.formData();
  if (isHoneypotFilled(textFrom(form, "website"))) {
    return NextResponse.json({ ok: true, message: "Thank you." });
  }
  const payload: VolunteerPayload = {
    name: textFrom(form, "name"),
    email: textFrom(form, "email"),
    phone: textFrom(form, "phone"),
    role: textFrom(form, "role"),
    availability: textFrom(form, "availability"),
    message: textFrom(form, "message"),
    website: textFrom(form, "website"),
  };
  const errors = validateVolunteer(payload);
  if (Object.keys(errors).length) {
    return NextResponse.json({ errors, message: "Please correct the highlighted fields." }, { status: 400 });
  }
  const result = await deliver(
    `Volunteer interest: ${payload.role}`,
    `${payload.name}\n${payload.email}\n${payload.phone || "n/a"}\nRole: ${payload.role}\nAvailability: ${payload.availability || "n/a"}\n\n${payload.message}`,
  );
  return NextResponse.json({
    ok: true,
    message: result.delivered
      ? "Thank you. If there is a potential fit, someone will contact you about a screening interview."
      : `${result.message} Email ${org.email} with the role you are interested in.`,
  });
}

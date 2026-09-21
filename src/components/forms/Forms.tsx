"use client";

import { useState, type FormEvent, type ReactNode } from "react";

export function Field({
  id,
  label,
  error,
  children,
  hint,
}: {
  id: string;
  label: string;
  error?: string;
  hint?: string;
  children: ReactNode;
}) {
  const errorId = `${id}-error`;
  const hintId = `${id}-hint`;
  return (
    <div className="space-y-1.5">
      <label htmlFor={id} className="block text-sm font-semibold text-navy">
        {label}
      </label>
      {hint ? (
        <p id={hintId} className="text-xs text-muted">
          {hint}
        </p>
      ) : null}
      <div
        className="[&_input]:w-full [&_input]:rounded-md [&_input]:border [&_input]:border-line [&_input]:bg-white [&_input]:px-3 [&_input]:py-2.5 [&_select]:w-full [&_select]:rounded-md [&_select]:border [&_select]:border-line [&_select]:bg-white [&_select]:px-3 [&_select]:py-2.5 [&_textarea]:w-full [&_textarea]:rounded-md [&_textarea]:border [&_textarea]:border-line [&_textarea]:bg-white [&_textarea]:px-3 [&_textarea]:py-2.5"
      >
        {children}
      </div>
      {error ? (
        <p id={errorId} className="text-sm text-orange-dark" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}

function Honeypot() {
  return (
    <div className="absolute left-[-10000px] h-px w-px overflow-hidden" aria-hidden="true">
      <label htmlFor="website">Website</label>
      <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
    </div>
  );
}

export function InquiryForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrors({});
    const form = new FormData(event.currentTarget);
    const response = await fetch("/api/inquiry", { method: "POST", body: form });
    const data = await response.json();
    if (!response.ok) {
      setErrors(data.errors ?? {});
      setMessage(data.message ?? "Please correct the highlighted fields.");
      setStatus("error");
      return;
    }
    setStatus("success");
    setMessage(data.message);
    event.currentTarget.reset();
  }

  if (status === "success") {
    return (
      <div className="rounded-xl border border-line bg-sand p-6" role="status">
        <h2 className="text-xl font-bold text-navy">Inquiry received</h2>
        <p className="mt-2 text-sm leading-6 text-muted">{message}</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="relative space-y-4" noValidate>
      <Honeypot />
      <Field id="submitterName" label="Name of person completing this form" error={errors.submitterName}>
        <input id="submitterName" name="submitterName" autoComplete="name" required />
      </Field>
      <Field id="email" label="Email" error={errors.email}>
        <input id="email" name="email" type="email" autoComplete="email" required />
      </Field>
      <Field
        id="phone"
        label="Phone (optional)"
        error={errors.phone}
        hint="Include a number if you prefer a call or text."
      >
        <input id="phone" name="phone" type="tel" autoComplete="tel" />
      </Field>
      <Field id="relationship" label="Relationship to student" error={errors.relationship}>
        <select id="relationship" name="relationship" required defaultValue="">
          <option value="" disabled>
            Select one
          </option>
          <option>Parent or guardian</option>
          <option>Student</option>
          <option>Family member</option>
          <option>Counselor or case worker</option>
          <option>Other</option>
        </select>
      </Field>
      <Field id="studentAgeOrGrade" label="Student age or grade" error={errors.studentAgeOrGrade}>
        <input id="studentAgeOrGrade" name="studentAgeOrGrade" required />
      </Field>
      <Field id="preferredContact" label="Preferred contact method" error={errors.preferredContact}>
        <select id="preferredContact" name="preferredContact" required defaultValue="">
          <option value="" disabled>
            Select one
          </option>
          <option>Email</option>
          <option>Phone call</option>
          <option>Text message</option>
        </select>
      </Field>
      <Field
        id="message"
        label="Message"
        error={errors.message}
        hint="Tell us a little about the student and what you are hoping to learn. Please do not include court records, medical details, or other sensitive information in this first inquiry."
      >
        <textarea id="message" name="message" rows={5} required />
      </Field>
      <p className="text-xs leading-5 text-muted">
        This inquiry is for families and students considering the program. We
        collect only the information needed to follow up. Information involving
        minors is used solely to respond to this request and is not published.
        Do not submit Social Security numbers, immigration status, court
        involvement, or health records here.
      </p>
      {status === "error" && message ? (
        <p className="text-sm text-orange-dark" role="alert">
          {message}
        </p>
      ) : null}
      <button
        type="submit"
        className="rounded-md bg-orange px-5 py-2.5 text-sm font-bold text-white hover:bg-orange-dark disabled:opacity-70"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? "Sending…" : "Submit inquiry"}
      </button>
    </form>
  );
}

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    const form = new FormData(event.currentTarget);
    const response = await fetch("/api/contact", { method: "POST", body: form });
    const data = await response.json();
    if (!response.ok) {
      setErrors(data.errors ?? {});
      setMessage(data.message ?? "Please correct the highlighted fields.");
      setStatus("error");
      return;
    }
    setStatus("success");
    setMessage(data.message);
    event.currentTarget.reset();
  }

  if (status === "success") {
    return (
      <div className="rounded-xl border border-line bg-sand p-6" role="status">
        <h2 className="text-xl font-bold text-navy">Message sent</h2>
        <p className="mt-2 text-sm leading-6 text-muted">{message}</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="relative space-y-4" noValidate>
      <Honeypot />
      <div className="grid gap-4 sm:grid-cols-2">
        <Field id="firstName" label="First name" error={errors.firstName}>
          <input id="firstName" name="firstName" autoComplete="given-name" required />
        </Field>
        <Field id="lastName" label="Last name" error={errors.lastName}>
          <input id="lastName" name="lastName" autoComplete="family-name" required />
        </Field>
      </div>
      <Field id="contact-email" label="Email" error={errors.email}>
        <input id="contact-email" name="email" type="email" autoComplete="email" required />
      </Field>
      <Field id="contact-phone" label="Phone (optional)" error={errors.phone}>
        <input id="contact-phone" name="phone" type="tel" autoComplete="tel" />
      </Field>
      <Field id="contact-message" label="Message" error={errors.message}>
        <textarea id="contact-message" name="message" rows={5} required />
      </Field>
      {status === "error" && message ? (
        <p className="text-sm text-orange-dark" role="alert">
          {message}
        </p>
      ) : null}
      <button
        type="submit"
        className="rounded-md bg-orange px-5 py-2.5 text-sm font-bold text-white hover:bg-orange-dark disabled:opacity-70"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}

export function VolunteerForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    const form = new FormData(event.currentTarget);
    const response = await fetch("/api/volunteer", { method: "POST", body: form });
    const data = await response.json();
    if (!response.ok) {
      setErrors(data.errors ?? {});
      setMessage(data.message ?? "Please correct the highlighted fields.");
      setStatus("error");
      return;
    }
    setStatus("success");
    setMessage(data.message);
    event.currentTarget.reset();
  }

  if (status === "success") {
    return (
      <div className="rounded-xl border border-line bg-sand p-6" role="status">
        <h2 className="text-xl font-bold text-navy">Interest received</h2>
        <p className="mt-2 text-sm leading-6 text-muted">{message}</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="relative space-y-4" noValidate>
      <Honeypot />
      <Field id="volunteer-name" label="Name" error={errors.name}>
        <input id="volunteer-name" name="name" autoComplete="name" required />
      </Field>
      <Field id="volunteer-email" label="Email" error={errors.email}>
        <input id="volunteer-email" name="email" type="email" autoComplete="email" required />
      </Field>
      <Field id="volunteer-phone" label="Phone (optional)" error={errors.phone}>
        <input id="volunteer-phone" name="phone" type="tel" autoComplete="tel" />
      </Field>
      <Field id="role" label="Role of interest" error={errors.role}>
        <select id="role" name="role" required defaultValue="">
          <option value="" disabled>
            Select one
          </option>
          <option>Writer / Researcher</option>
          <option>Program Instructor</option>
          <option>Weekend Driver</option>
          <option>Other / not sure yet</option>
        </select>
      </Field>
      <Field id="availability" label="Availability (optional)">
        <input id="availability" name="availability" />
      </Field>
      <Field
        id="volunteer-message"
        label="Why you are interested"
        error={errors.message}
        hint="A few sentences are enough. You can attach a resume later by emailing info@cornerstonecraftsman.org."
      >
        <textarea id="volunteer-message" name="message" rows={5} required />
      </Field>
      <p className="text-xs leading-5 text-muted">
        Cornerstone Craftsman conducts background checks on incoming volunteers.
        Submitting this form is an expression of interest, not a placement.
      </p>
      {status === "error" && message ? (
        <p className="text-sm text-orange-dark" role="alert">
          {message}
        </p>
      ) : null}
      <button
        type="submit"
        className="rounded-md bg-orange px-5 py-2.5 text-sm font-bold text-white hover:bg-orange-dark disabled:opacity-70"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? "Sending…" : "Express interest"}
      </button>
    </form>
  );
}

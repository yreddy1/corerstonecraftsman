import assert from "node:assert/strict";
import test from "node:test";
import {
  isHoneypotFilled,
  validateContact,
  validateInquiry,
  validateVolunteer,
} from "../src/lib/forms.ts";

test("inquiry requires core fields and a valid email", () => {
  const errors = validateInquiry({
    submitterName: "",
    email: "not-an-email",
    phone: "",
    relationship: "",
    studentAgeOrGrade: "",
    preferredContact: "",
    message: "",
    website: "",
  });
  assert.equal(Boolean(errors.submitterName), true);
  assert.equal(Boolean(errors.email), true);
  assert.equal(Boolean(errors.relationship), true);
});

test("inquiry accepts a complete payload", () => {
  const errors = validateInquiry({
    submitterName: "Jordan Lee",
    email: "jordan@example.com",
    phone: "703-555-0100",
    relationship: "Parent or guardian",
    studentAgeOrGrade: "15 / 10th grade",
    preferredContact: "Email",
    message: "We would like to learn more about Saturday sessions.",
    website: "",
  });
  assert.deepEqual(errors, {});
});

test("contact and volunteer validation", () => {
  assert.equal(
    Object.keys(
      validateContact({
        firstName: "A",
        lastName: "B",
        email: "a@b.com",
        phone: "",
        message: "Hello",
        website: "",
      }),
    ).length,
    0,
  );
  assert.equal(
    Boolean(
      validateVolunteer({
        name: "Sam",
        email: "sam@example.com",
        phone: "",
        role: "",
        availability: "",
        message: "I can help",
        website: "",
      }).role,
    ),
    true,
  );
});

test("honeypot detects filled hidden field", () => {
  assert.equal(isHoneypotFilled(""), false);
  assert.equal(isHoneypotFilled("http://spam.test"), true);
});

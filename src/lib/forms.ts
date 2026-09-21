export type FormErrors = Record<string, string>;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^[+()0-9.\-\s]{7,20}$/;

function required(value: string, label: string): string | undefined {
  if (!value.trim()) return `${label} is required.`;
  return undefined;
}

export type InquiryPayload = {
  submitterName: string;
  email: string;
  phone: string;
  relationship: string;
  studentAgeOrGrade: string;
  preferredContact: string;
  message: string;
  website: string;
};

export function validateInquiry(data: InquiryPayload): FormErrors {
  const errors: FormErrors = {};
  const name = required(data.submitterName, "Name");
  if (name) errors.submitterName = name;
  const email = required(data.email, "Email");
  if (email) errors.email = email;
  else if (!emailPattern.test(data.email.trim())) {
    errors.email = "Enter a valid email address.";
  }
  if (data.phone.trim() && !phonePattern.test(data.phone.trim())) {
    errors.phone = "Enter a valid phone number, or leave this blank.";
  }
  const relationship = required(data.relationship, "Relationship to student");
  if (relationship) errors.relationship = relationship;
  const age = required(data.studentAgeOrGrade, "Student age or grade");
  if (age) errors.studentAgeOrGrade = age;
  const contact = required(data.preferredContact, "Preferred contact method");
  if (contact) errors.preferredContact = contact;
  const message = required(data.message, "Message");
  if (message) errors.message = message;
  return errors;
}

export type ContactPayload = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
  website: string;
};

export function validateContact(data: ContactPayload): FormErrors {
  const errors: FormErrors = {};
  const first = required(data.firstName, "First name");
  if (first) errors.firstName = first;
  const last = required(data.lastName, "Last name");
  if (last) errors.lastName = last;
  const email = required(data.email, "Email");
  if (email) errors.email = email;
  else if (!emailPattern.test(data.email.trim())) {
    errors.email = "Enter a valid email address.";
  }
  if (data.phone.trim() && !phonePattern.test(data.phone.trim())) {
    errors.phone = "Enter a valid phone number, or leave this blank.";
  }
  const message = required(data.message, "Message");
  if (message) errors.message = message;
  return errors;
}

export type VolunteerPayload = {
  name: string;
  email: string;
  phone: string;
  role: string;
  availability: string;
  message: string;
  website: string;
};

export function validateVolunteer(data: VolunteerPayload): FormErrors {
  const errors: FormErrors = {};
  const name = required(data.name, "Name");
  if (name) errors.name = name;
  const email = required(data.email, "Email");
  if (email) errors.email = email;
  else if (!emailPattern.test(data.email.trim())) {
    errors.email = "Enter a valid email address.";
  }
  if (data.phone.trim() && !phonePattern.test(data.phone.trim())) {
    errors.phone = "Enter a valid phone number, or leave this blank.";
  }
  const role = required(data.role, "Role of interest");
  if (role) errors.role = role;
  const message = required(data.message, "Message");
  if (message) errors.message = message;
  return errors;
}

export function isHoneypotFilled(website: string): boolean {
  return website.trim().length > 0;
}

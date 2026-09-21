import { ContactForm } from "@/components/forms/Forms";
import { PageHeader, Section } from "@/components/ui/Section";
import { addressLine, org } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact Us",
  description: "Reach Cornerstone Craftsman in Alexandria, Virginia.",
  path: "/contact-us",
});

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="We would love to hear from you"
        description="Use the form for general questions. Families looking to enroll can also use the program inquiry form."
      />
      <Section tone="white">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="text-sm leading-7 text-muted">
            <p>{org.legalName}</p>
            <p>{addressLine}</p>
            <p className="mt-4">
              <a className="font-semibold text-navy underline" href={`mailto:${org.email}`}>
                {org.email}
              </a>
            </p>
            <p className="mt-6">
              Program inquiries:{" "}
              <a className="underline" href="/join-the-program">
                Join the Program
              </a>
            </p>
            <p>
              Donations:{" "}
              <a className="underline" href="/ways-to-give">
                Ways to Give
              </a>
            </p>
            <div className="mt-8 overflow-hidden rounded-xl border border-line">
              <iframe
                title="Map of Cornerstone Craftsman at 2111 Eisenhower Avenue, Suite 102, Alexandria, Virginia"
                src="https://maps.google.com/maps?q=2111%20Eisenhower%20Avenue%20Suite%20102%20Alexandria%2C%20Virginia%2022314&t=m&z=10&output=embed&iwloc=near"
                className="h-64 w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
          <ContactForm />
        </div>
      </Section>
    </>
  );
}

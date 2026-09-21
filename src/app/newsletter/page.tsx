import { PageHeader, Section } from "@/components/ui/Section";
import { org } from "@/content/site";
import { newsletterIssues } from "@/content/newsletters";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Newsletter",
  description: "Cornerstone Craftsman newsletter archive and signup.",
  path: "/newsletter",
});

export default function NewsletterPage() {
  const years = [2025, 2024] as const;
  return (
    <>
      <PageHeader
        eyebrow="Newsletter"
        title="Stay Updated with the Latest News, Insights, and Special Offers"
        description="Issue dates and links below are copied from the original newsletter page."
      />
      <Section tone="white">
        <p className="max-w-3xl text-sm leading-7 text-muted">
          Please check our latest newsletters, each packed with updates, insights,
          and highlights we’ve shared recently. Simply click on any date to view
          the corresponding newsletter.
        </p>
        {years.map((year) => (
          <div key={year} className="mt-8">
            <h2 className="text-xl font-bold text-navy">{year} newsletters</h2>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {newsletterIssues
                .filter((issue) => issue.year === year)
                .map((issue) => (
                  <li key={issue.href}>
                    <a
                      className="block rounded-md border border-line px-4 py-3 text-sm font-semibold text-navy hover:border-orange"
                      href={issue.href}
                      target={issue.href.startsWith("http") ? "_blank" : undefined}
                      rel={issue.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    >
                      {issue.date}
                    </a>
                  </li>
                ))}
            </ul>
          </div>
        ))}
        <h2 className="mt-10 text-xl font-bold text-navy">Subscribe to our Newsletter</h2>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-muted">
          The production site uses a Mailchimp form hosted by WordPress. That list
          endpoint is not portable without Mailchimp credentials. Until it is
          reconnected, email {org.email} with the subject “Newsletter” to be added.
        </p>
      </Section>
    </>
  );
}

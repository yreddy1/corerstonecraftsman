import { GivebutterEmbed } from "@/components/giving/GivebutterEmbed";
import { Button } from "@/components/ui/Button";
import { Note, PageHeader, Section } from "@/components/ui/Section";
import { gabeMonthlyGiving, monthlyGivingCopy } from "@/content/stories";
import { addressLine, org } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Ways to Give",
  description:
    "Make a one-time or monthly gift to Cornerstone Craftsman. Donations support training, materials, meals, transportation, and operations.",
  path: "/ways-to-give",
});

export default function GivePage() {
  return (
    <>
      <PageHeader
        eyebrow="Donate"
        title="Support a student in the trades"
        description="Your gift helps Cornerstone Craftsman keep pre-apprenticeship training, mentoring, meals, and transportation available to Alexandria youth."
      />
      <Section tone="white">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-5 text-sm leading-7 text-muted">
            <h2 className="text-2xl font-bold text-navy">What donations support</h2>
            <p>
              The FAQ states that gifts are treated as unrestricted general
              support. Examples include wages and materials for pre-apprentices,
              program management, and operating capacity. The Current Needs page
              also lists trainer wages, job materials, tools, meals,
              transportation, and general operations.
            </p>
            <p>
              One-time and monthly gifts can be made through Givebutter. The
              original homepage says: {monthlyGivingCopy.lead} {monthlyGivingCopy.follow}
            </p>
            <blockquote className="rounded-xl border border-line bg-cream p-5">
              <p className="text-sm font-semibold text-navy">{gabeMonthlyGiving.title}</p>
              <p className="mt-3 text-sm leading-7 text-ink">“{gabeMonthlyGiving.quote}”</p>
              <footer className="mt-3 text-xs font-semibold uppercase tracking-wide text-muted">
                {gabeMonthlyGiving.attribution}
              </footer>
            </blockquote>
            <Note>
              Specific “$25 provides…” style amounts are not listed here beyond
              figures already published on the Current Needs page, because newer
              per-gift impact amounts have not been confirmed. The $10 monthly
              materials line above is copied from the original homepage.
            </Note>
            <ul className="space-y-2">
              <li>
                <strong className="text-navy">Mail:</strong> Checks payable to
                Cornerstone Craftsman, {addressLine}
              </li>
              <li>
                <strong className="text-navy">ACH:</strong> Contact Nadja Rivera at{" "}
                <a className="underline" href={`mailto:${org.achEmail}`}>
                  {org.achEmail}
                </a>
              </li>
              <li>
                <strong className="text-navy">In-kind:</strong>{" "}
                <a className="underline" href="/in-kind-needs">
                  See current in-kind needs
                </a>{" "}
                or email {org.email}
              </li>
              <li>
                <strong className="text-navy">Volunteer:</strong>{" "}
                <a className="underline" href="/volunteer-opportunities">
                  Volunteer opportunities
                </a>
              </li>
            </ul>
            <p>
              {org.legalName} is a {org.taxStatus} nonprofit. EIN {org.ein}.{" "}
              {org.taxStatusNote}
            </p>
            <p>
              Donor questions: {org.email} or {org.achEmail}
            </p>
            <div className="flex flex-wrap gap-3">
              <Button href={org.givebutterUrl} external>
                Open the secure Givebutter page
              </Button>
              <Button href={org.givebutterCampaignUrl} variant="secondary" external>
                givebutter.com/cornerstone
              </Button>
            </div>
          </div>
          <GivebutterEmbed />
        </div>
      </Section>
    </>
  );
}

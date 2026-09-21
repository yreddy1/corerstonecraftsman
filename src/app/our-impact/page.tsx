import { Button } from "@/components/ui/Button";
import { Note, PageHeader, Section } from "@/components/ui/Section";
import { familyStories, stories } from "@/content/stories";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Our Impact",
  description:
    "Current published results, student and family voices, and the outcomes Cornerstone Craftsman is working to measure.",
  path: "/our-impact",
});

export default function ImpactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our impact"
        title="What we can report, and what we still need to measure"
        description="This page reorganizes the former Program Results content. Every number is labeled with its public source. Unverified claims are not featured."
      />
      <Section tone="white">
        <h2 className="text-2xl font-bold text-navy">Current verified results</h2>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-muted">
          “Verified” here means published by Cornerstone Craftsman on its own
          website or Candid profile. It does not mean a third-party audit.
        </p>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          <article className="rounded-xl border border-line p-5">
            <p className="text-3xl font-bold text-orange">28</p>
            <h3 className="mt-2 font-semibold text-navy">Active pre-apprentices</h3>
            <p className="mt-2 text-sm text-muted">
              Metric: year-round program enrollment. Reporting period: not dated
              on the source page. Source: FAQ and Our History.
            </p>
          </article>
          <article className="rounded-xl border border-line p-5">
            <p className="text-3xl font-bold text-orange">44</p>
            <h3 className="mt-2 font-semibold text-navy">Youth served to date</h3>
            <p className="mt-2 text-sm text-muted">
              Metric: cumulative youth served since 2021. Denominator: not
              broken out by year. Source: Our History page.
            </p>
          </article>
          <article className="rounded-xl border border-line p-5">
            <p className="text-3xl font-bold text-orange">2021</p>
            <h3 className="mt-2 font-semibold text-navy">Program start</h3>
            <p className="mt-2 text-sm text-muted">
              Informal summer and weekend training began in 2021 with five
              students. Source: Our History page.
            </p>
          </article>
        </div>
        <div className="mt-8 space-y-4">
          <Note>
            A 95% retention rate is published on the current Program Results
            page, but the reporting period, participant count, and internal
            source are not given. Candid lists retention as a metric the
            organization defined, then marked “no longer tracked,” without a
            displayed total. It is not featured until staff can supply those
            details.
          </Note>
          <Note>
            Waitlist figures conflict: FAQ (17) vs. Our History (over 45). Do
            not use either number in fundraising until confirmed.
          </Note>
        </div>
      </Section>
      <Section id="stories">
        <h2 className="text-2xl font-bold text-navy">Student and family stories</h2>
        <p className="mt-3 max-w-3xl text-sm text-muted">
          These quotations already appear on the public testimonials page.
          Attribution remains as published. Last names were not provided.
        </p>
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {familyStories.map((story) => (
            <blockquote key={story.quote.slice(0, 40)} className="rounded-xl bg-white p-5">
              <p className="text-sm leading-7 text-ink">“{story.quote}”</p>
              <footer className="mt-4 text-xs font-semibold uppercase tracking-wide text-muted">
                {story.attribution}
              </footer>
            </blockquote>
          ))}
        </div>
        <p className="mt-6 text-sm text-muted">
          Additional published voices, including a probation officer and a
          comment from Executive Director Roberto Gomez, are collected on the{" "}
          <a className="font-semibold text-orange" href="/testmonials">
            testimonials
          </a>{" "}
          page ({stories.length} quotations from the original site).
        </p>
      </Section>
      <Section tone="white">
        <h2 className="text-2xl font-bold text-navy">What the organization measures</h2>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-muted">
          Cornerstone’s Candid/GuideStar profile lists outcome areas the
          organization has defined, including OSHA-10 completion, CPR/First Aid,
          job placement, work-ready documents, groceries distributed with ALIVE!,
          and families served. Several of those metrics are marked “no longer
          tracked” on Candid and do not display yearly totals in the public
          profile snapshot used for this redesign.
        </p>
        <h3 className="mt-8 font-semibold text-navy">Community statistics on the old page</h3>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-muted">
          The former Program Results page linked program purpose to juvenile
          crime, gang recruitment, teen pregnancy, and dropout rates, without
          citations or dates. Those community claims are not repeated here as
          program results.
        </p>
        <Note>
          Add citations before republishing any citywide crime, dropout, or
          poverty statistics. Candidate sources include ACPS, Alexandria court
          services, and Virginia Department of Education, with year and
          geography labeled.
        </Note>
      </Section>
      <Section>
        <h2 className="text-2xl font-bold text-navy">Future evaluation goals</h2>
        <ul className="mt-4 max-w-3xl list-disc space-y-2 pl-5 text-sm leading-7 text-muted">
          <li>Publish retention with reporting period, numerator, and denominator.</li>
          <li>Publish current waitlist with a date stamp.</li>
          <li>Report certification completions (OSHA-10, CPR/First Aid) by year.</li>
          <li>Report high-school/GED completion and job or apprenticeship placement with consent.</li>
        </ul>
        <h2 className="mt-10 text-2xl font-bold text-navy">Program capacity and current needs</h2>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-muted">
          The Current Needs page asks for $600,000 in operational and program
          funding to cover expenses and increase capacity. It also describes a
          goal of increasing training days while serving the current
          pre-apprentice cohort. See that page for the published funding ranges.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/current-needs">Current needs</Button>
          <Button href="/ways-to-give" variant="secondary">
            Donate
          </Button>
        </div>
      </Section>
    </>
  );
}

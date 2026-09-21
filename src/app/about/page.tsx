import { pageMetadata } from "@/lib/seo";
import { PageHeader, Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { PeopleGrid } from "@/components/people/PeopleGrid";
import { board, staff, volunteers } from "@/content/people";
import { fiveCs, mission, vision } from "@/content/site";

export const metadata = pageMetadata({
  title: "About",
  description:
    "Mission, history, and leadership of Cornerstone Craftsman, a 501(c)(3) providing skilled-trades training for Alexandria youth ages 12–17.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="A trades pathway for Alexandria youth"
        description={mission}
      />
      <Section tone="white">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-navy">Mission</h2>
            <p className="mt-3 text-base leading-7 text-muted">{mission}</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-navy">Vision</h2>
            <p className="mt-3 text-base leading-7 text-muted">{vision}</p>
          </div>
        </div>
        <p className="mt-8 text-sm text-muted">
          The program emphasizes the 5Cs of Positive Youth Development:{" "}
          {fiveCs.join(", ")}.
        </p>
        <div className="mt-6">
          <Button href="/mission-vision-values" variant="secondary">
            Mission, vision, and values
          </Button>
        </div>
      </Section>
      <Section id="history">
        <h2 className="text-2xl font-bold text-navy">How it started</h2>
        <div className="mt-5 max-w-3xl space-y-4 text-sm leading-7 text-muted">
          <p>
            In 2021, Executive Director Roberto Gomez, recognizing a pressing
            need, began operating and self-funding an informal pre-apprentice
            program during the summer and on weekends. He started working with
            and training five young men, along with support for their families.
          </p>
          <p>
            To date, Cornerstone has served 44 youth, with 28 active, year-round
            pre-apprentices, according to the Our History page. The same page
            describes an ever-growing waitlist of over 45 youth; the FAQ lists a
            waitlist of 17. Both figures are retained as published and should be
            reconciled before being used in fundraising materials.
          </p>
          <p>
            Roberto currently serves on the Alexandria Gang Task Force,
            Alexandria Policy Foundation, Alexandria Sheriff’s Office Community
            Advisory Board, Alexandria Community Safety Forum, ACPS CTE Advisory
            Committee, and Harbor Freight Leadership Lab.
          </p>
        </div>
        <div className="mt-6">
          <Button href="/our-history" variant="secondary">
            Read our history
          </Button>
        </div>
      </Section>
      <Section id="leadership" tone="white">
        <h2 className="text-2xl font-bold text-navy">Leadership</h2>
        <p className="mt-3 max-w-3xl text-sm text-muted">
          Names, titles, photographs, and bio PDFs are copied from the current
          Leadership page. Blank titles are unpublished on that page, not omitted
          here by guesswork.
        </p>
        <h3 className="mt-8 font-bold text-navy">Board of Directors</h3>
        <PeopleGrid people={board} />
        <h3 className="mt-10 font-bold text-navy">Staff</h3>
        <PeopleGrid people={staff} />
        <h3 className="mt-10 font-bold text-navy">Volunteers listed on the leadership page</h3>
        <PeopleGrid people={volunteers} />
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/leadership" variant="navy">
            Leadership page
          </Button>
          <Button href="/contact-us" variant="secondary">
            Contact the team
          </Button>
        </div>
      </Section>
    </>
  );
}

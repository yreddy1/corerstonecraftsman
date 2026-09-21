import { Button } from "@/components/ui/Button";
import { Note, PageHeader, Section } from "@/components/ui/Section";
import { addressLine } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Our Program",
  description:
    "Cornerstone Craftsman’s pre-apprenticeship provides skilled-trades training, mentoring, and life-skills development for youth ages 12–17 in Alexandria, Virginia.",
  path: "/our-program",
});

const trades = [
  "Introduction to OSHA standards and safety practices (4 days)",
  "Protective coverings and applications (3 days)",
  "Introduction to project materials (1–2 days)",
  "Tools and proper techniques (1.5–2 weeks)",
  "Order of operations for building projects (1 week)",
  "Drywall hanging and patching (2 weeks)",
  "Plaster, heat guns, joint compound, and taping (1 week)",
  "Finishing stages, sanding grades, and tools (2 weeks)",
  "Paint preparation, priming, base, and sheens (30 days)",
  "Wood staining skills (25 days)",
  "Basic carpentry skills (2 weeks)",
  "Basic residential demolition and disposal (30 days)",
  "Basic welding (30 days)",
  "Basics of residential plumbing (40 days)",
  "Electrical theory and NEC code (6 months)",
  "Project and material cost estimations (60 days)",
  "Understanding residential blueprints (30 days)",
];

export default function ProgramPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our program"
        title="A pre-apprenticeship in the skilled trades"
        description="Cornerstone Craftsman provides youth with training in the skilled trades and mentoring, focused on goal-oriented character development."
      />
      <Section tone="white">
        <div className="grid gap-8 lg:grid-cols-3">
          <article className="rounded-xl bg-sand p-5">
            <h2 className="font-bold text-navy">Who</h2>
            <p className="mt-2 text-sm leading-6 text-muted">
              Young men and women ages 12–17 in Alexandria, Virginia.
            </p>
          </article>
          <article className="rounded-xl bg-sand p-5">
            <h2 className="font-bold text-navy">Where</h2>
            <p className="mt-2 text-sm leading-6 text-muted">{addressLine}</p>
          </article>
          <article className="rounded-xl bg-sand p-5">
            <h2 className="font-bold text-navy">Cost</h2>
            <p className="mt-2 text-sm leading-6 text-muted">
              Free. Benevolent assistance, transportation, and meals are currently provided.
            </p>
          </article>
        </div>
        <div className="mt-10 max-w-3xl space-y-4 text-sm leading-7 text-muted">
          <p>
            Students meet with instructors and mentors once a week during the
            school year and more frequently during the summer at the Learning
            Center to complete hands-on projects, master technical lessons, and
            advance in the skilled trades.
          </p>
          <p>
            In addition to the trades, the program provides mentorship and
            education in conflict resolution, critical thinking, self-awareness,
            and accountability.
          </p>
          <p>
            A class typically lasts 4 to 6 hours and focuses on the day’s lesson
            plans. Lessons are structured in distinct phases so participants can
            explore several parts of the skilled-trades industry.
          </p>
        </div>
      </Section>
      <Section>
        <h2 className="text-2xl font-bold text-navy">What students learn</h2>
        <p className="mt-3 max-w-3xl text-sm text-muted">
          The following curriculum list is published on the FAQ page, including
          estimated training days. It describes what the program teaches or
          plans to teach.
        </p>
        <ol className="mt-6 grid gap-3 md:grid-cols-2">
          {trades.map((item, index) => (
            <li key={item} className="rounded-lg bg-white px-4 py-3 text-sm text-ink">
              <span className="mr-2 font-bold text-orange">{index + 1}.</span>
              {item}
            </li>
          ))}
        </ol>
        <p className="mt-6 text-sm text-muted">
          Pre-apprentices are also exposed to real-world jobsites with
          contractors and developers, community engagement activities, and
          family support services.
        </p>
        <Note>
          The FAQ says instructors will soon offer digital training and testing,
          entrepreneurship, and financial management education. Treat those as
          planned, not as currently verified standing classes.
        </Note>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/join-the-program">Join the program</Button>
          <Button href="/photo-gallery" variant="secondary">
            Photo gallery
          </Button>
          <Button href="/frequently-asked-questions" variant="secondary">
            Read the FAQ
          </Button>
        </div>
      </Section>
    </>
  );
}

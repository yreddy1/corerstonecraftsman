import { Button } from "@/components/ui/Button";
import { PageHeader, Section } from "@/components/ui/Section";
import { addressLine } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Program Overview",
  description:
    "Cornerstone Craftsman’s pre-apprenticeship provides skilled-trades training and mentoring for youth ages 12–17 in Alexandria.",
  path: "/program-overview",
});

export default function ProgramOverviewPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our program"
        title="Empowering Youth for a Brighter Future: Building Skills, Reducing Crime, and Expanding Opportunities"
        description="Copied from the original Program Overview page. Serving youth aged 12–17."
      />
      <Section tone="white">
        <div className="max-w-3xl space-y-5 text-base leading-7 text-muted">
          <p>
            Cornerstone Craftsman is an Alexandria City-based nonprofit
            organization that provides youth with training in the skilled trades
            and mentoring, focusing on goal-oriented youth character development.
            Emphasizing the 5Cs of Positive Youth Development (Competence,
            Confidence, Connection, Character, and Caring), Cornerstone Craftsman
            aims to reduce juvenile crime rates, gang-related violence, substance
            abuse, teen pregnancy, and high school dropout and absenteeism rates
            in our local community.
          </p>
          <h2 className="text-2xl font-bold text-navy">A Viable Career Path</h2>
          <p>
            Our unique pre-apprenticeship program allows young men and women to
            build viable careers, earn a livable wage, and pursue economic
            self-sufficiency. By offering vocational career pathways, we are
            opening doors to alternative education routes with the skills and
            resources needed for success.
          </p>
          <p>
            Our students meet with our instructors/mentors once a week during the
            school year and more frequently during the summer at Cornerstone
            Craftsman&apos;s Learning Center at {addressLine} to complete
            hands-on projects, master technical lessons and advance in the skilled
            trades.
          </p>
          <h2 className="text-2xl font-bold text-navy">Mentorship and Life-Skills</h2>
          <p>
            In addition to the trades, our program provides mentorship and
            education in key life-skills such as conflict resolution, critical
            thinking and self-awareness, and accountability. Our core program
            helps these young men and women build a viable career path, earn a
            livable wage, and pursue economic self-sufficiency.
          </p>
          <p>
            Additionally, Cornerstone Craftsman works closely with court services
            and families in assisting youth toward a successful transition from
            juvenile detention and probation.
          </p>
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/photo-gallery">See gallery</Button>
          <Button href="/our-program" variant="secondary">
            Current program page
          </Button>
        </div>
      </Section>
    </>
  );
}

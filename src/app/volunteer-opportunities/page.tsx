import { VolunteerForm } from "@/components/forms/Forms";
import { Button } from "@/components/ui/Button";
import { Note, PageHeader, Section } from "@/components/ui/Section";
import { addressLine, org } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Volunteer Opportunities",
  description:
    "Volunteer as a writer, program instructor, or weekend driver with Cornerstone Craftsman in Alexandria, Virginia.",
  path: "/volunteer-opportunities",
});

const roles = [
  {
    title: "Writer / Researcher",
    location: "Remote",
    time: "10–20 hours per month",
    skills:
      "Organizational writing, research, attention to detail, Microsoft Office, ability to keep confidential information secure.",
    responsibilities: [
      "Write grant proposals, applications, and letters of inquiry",
      "Write website, appeal, newsletter, and other communications",
      "Research prospective grant funders",
    ],
    screening: "Background check; screening interview if there is a potential fit.",
    pdf: "/docs/writer-researcher.pdf",
  },
  {
    title: "Program Instructor",
    location: "Training facility",
    time: "About 10 hours per month",
    skills:
      "Experience with at-risk youth or vulnerable populations, commercial or residential project experience, tools, safety, and patience as an instructor.",
    responsibilities: [
      "Instruct youth ages 12–17 in skilled trades during 3- to 6-hour Saturday morning shifts twice a month",
      "Prepare and clean the training area and keep tool inventory",
      "Submit attendance, progress reports, and material needs",
    ],
    screening: "Background check; screening interview if there is a potential fit.",
    pdf: "/docs/program-instructor.pdf",
  },
  {
    title: "Weekend Driver",
    location: `In person / on the road, based at ${addressLine}`,
    time: "About 25 hours a month (per the current job description)",
    skills:
      "Must be at least 25, hold a valid driver’s license, have a clean driving record, and be comfortable driving a 16-person transport vehicle. Familiarity with Alexandria is needed.",
    responsibilities: [
      "Safely operate the vehicle",
      "Pick up pre-apprentices from Alexandria City High School campuses and bring them to the Learning Center",
      "Drop students at homes in Alexandria and return the van to the facility",
      "Report maintenance concerns, accidents, or injuries",
    ],
    screening: "Background check; screening interview if there is a potential fit.",
    pdf: "/docs/weekend-van-driver.pdf",
  },
];

export default function VolunteerPage() {
  return (
    <>
      <PageHeader
        eyebrow="Volunteer"
        title="Share your skills with Alexandria youth"
        description="These three roles are still listed on the current website. Each description is taken from the public PDF posting. Confirm availability with staff before assuming a role is open."
      />
      <Section tone="white">
        <Note>
          The Writer and Instructor PDFs still say the organization had applied
          for 501(c)(3) status. That language is outdated; tax-exempt status was
          received in October 2024. Role duties, hours, and screening
          requirements are what we are treating as current until staff say
          otherwise.
        </Note>
        <div className="mt-8 space-y-6">
          {roles.map((role) => (
            <article key={role.title} className="rounded-xl border border-line p-6">
              <h2 className="text-xl font-bold text-navy">{role.title}</h2>
              <p className="mt-2 text-sm text-muted">
                <strong>Location:</strong> {role.location}
              </p>
              <p className="text-sm text-muted">
                <strong>Time:</strong> {role.time}
              </p>
              <p className="mt-3 text-sm leading-6 text-muted">
                <strong className="text-navy">Responsibilities: </strong>
                {role.responsibilities.join("; ")}.
              </p>
              <p className="mt-2 text-sm leading-6 text-muted">
                <strong className="text-navy">Required skills: </strong>
                {role.skills}
              </p>
              <p className="mt-2 text-sm leading-6 text-muted">
                <strong className="text-navy">Screening: </strong>
                {role.screening}
              </p>
              <p className="mt-4">
                <a className="text-sm font-semibold text-orange" href={role.pdf}>
                  Download the full posting (PDF)
                </a>
              </p>
            </article>
          ))}
        </div>
        <p className="mt-6 text-sm text-muted">
          The driver posting describes a Thursday after-school route
          (approximately 3–7 p.m.) and lists Saturday mornings as a
          qualification. The website labels the role “Weekend Driver.” Please
          confirm the live schedule when you inquire.
        </p>
      </Section>
      <Section>
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-navy">Express interest</h2>
            <p className="mt-3 text-sm leading-7 text-muted">
              You can use this form or email{" "}
              <a className="underline" href={`mailto:${org.email}`}>
                {org.email}
              </a>{" "}
              with a resume, the position of interest, references (for writer and
              instructor roles), and a few sentences about why you want to help.
            </p>
            <div className="mt-5">
              <Button href={`mailto:${org.email}`} variant="navy">
                Email the team
              </Button>
            </div>
          </div>
          <VolunteerForm />
        </div>
      </Section>
    </>
  );
}

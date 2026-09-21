import { InquiryForm } from "@/components/forms/Forms";
import { Button } from "@/components/ui/Button";
import { Note, PageHeader, Section } from "@/components/ui/Section";
import { addressLine } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Join the Program",
  description:
    "Learn who Cornerstone Craftsman serves, what students learn, and how to inquire about the pre-apprenticeship program in Alexandria, Virginia.",
  path: "/join-the-program",
});

const faqs = [
  {
    q: "Who can join?",
    a: "The pre-apprenticeship is available to young men and women aged 12 to 17. Participants age out when they can legally work full-time at 18; Cornerstone stays in touch and is committed to helping them graduate from high school or a GED and find full-time work in the trades.",
  },
  {
    q: "Is there a fee?",
    a: "The pre-apprenticeship is free for participants. Cornerstone currently provides benevolent assistance, transportation, and meals while students are in the program.",
  },
  {
    q: "Where does training happen?",
    a: `The Learning Center is at ${addressLine}.`,
  },
  {
    q: "What do students learn?",
    a: "Training covers OSHA and safety, tools, project materials, drywall, plaster, finishing, painting, staining, basic carpentry, demolition, and related construction skills. Mentoring and life-skills instruction are part of the program.",
  },
];

export default function JoinPage() {
  return (
    <>
      <PageHeader
        eyebrow="Students & families"
        title="Join the Program"
        description="Cornerstone Craftsman is a free pre-apprenticeship for young people ages 12–17 in Alexandria, Virginia."
      />
      <Section tone="white">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-6 text-sm leading-7 text-muted">
            <h2 className="text-2xl font-bold text-navy">Who the program serves</h2>
            <p>
              The program serves youth from underserved communities in Alexandria.
              Public materials describe current participants as young men and
              women ages 12–17 who are building a path into the skilled trades.
            </p>
            <ul className="space-y-3">
              <li><strong className="text-navy">Age range:</strong> 12–17</li>
              <li><strong className="text-navy">Location:</strong> {addressLine}</li>
              <li>
                <strong className="text-navy">Typical schedule:</strong> Students
                meet with instructors/mentors once a week during the school year
                and more frequently during the summer, according to the Program
                Overview page.
              </li>
              <li>
                <strong className="text-navy">Fee:</strong> Free. Benevolent
                assistance, transportation, and meals are currently provided.
              </li>
            </ul>
            <Note>
              A volunteer instructor posting describes Saturday sessions twice a
              month, and a driver posting describes a Thursday after-school route
              from Alexandria City High School. Please treat the weekly school-year
              meeting as the published program description until staff confirm the
              current calendar.
            </Note>
            <p>
              Transportation and meals are listed on the FAQ as current program
              supports. Details such as pickup points can be confirmed after inquiry.
            </p>
            <h3 className="text-lg font-bold text-navy">What happens after you inquire</h3>
            <Note>
              The current website does not describe the exact follow-up steps after
              an inquiry is submitted. Until that process is documented, expect a
              staff reply by email or phone. If you need a faster response, write
              info@cornerstonecraftsman.org.
            </Note>
            <Button href="/our-program" variant="secondary">
              See what students learn
            </Button>
          </div>
          <div className="rounded-xl border border-line bg-cream p-6">
            <h2 className="text-2xl font-bold text-navy">Program inquiry</h2>
            <p className="mt-2 mb-6 text-sm text-muted">
              Share only what we need to contact you. This is not an application
              for court, school, or medical records.
            </p>
            <InquiryForm />
          </div>
        </div>
      </Section>
      <Section>
        <h2 className="text-2xl font-bold text-navy">FAQ</h2>
        <dl className="mt-6 space-y-5">
          {faqs.map((item) => (
            <div key={item.q} className="rounded-xl bg-white p-5">
              <dt className="font-semibold text-navy">{item.q}</dt>
              <dd className="mt-2 text-sm leading-6 text-muted">{item.a}</dd>
            </div>
          ))}
        </dl>
      </Section>
    </>
  );
}

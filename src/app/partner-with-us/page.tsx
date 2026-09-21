import { Button } from "@/components/ui/Button";
import { Note, PageHeader, Section } from "@/components/ui/Section";
import { org } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Partner With Us",
  description:
    "Employers, contractors, unions, schools, foundations, and community organizations can support Cornerstone Craftsman’s pre-apprenticeship.",
  path: "/partner-with-us",
});

const categories = [
  {
    title: "Guest instruction and mentoring",
    body: "Share trade skills, safety practices, or career talks with pre-apprentices.",
  },
  {
    title: "Materials and equipment",
    body: "Tools, safety gear, and construction materials keep training days running.",
  },
  {
    title: "Facility or project support",
    body: "Workshop space, project sites, or help maintaining the Learning Center.",
  },
  {
    title: "Jobsite exposure",
    body: "Supervised visits that show what professional work looks like.",
  },
  {
    title: "Internships and apprenticeship pathways",
    body: "The FAQ notes that Cornerstone is working on MOUs with pipe fitters, electrical, and carpenters unions, and is in conversation with developers and construction companies. Those agreements should not be described as complete until staff confirm them.",
  },
  {
    title: "Transportation or meals",
    body: "Rides, gas cards, breakfast, and lunch are listed among current in-kind needs.",
  },
  {
    title: "Sponsorship and grant support",
    body: "Unrestricted operating support and grants help expand how many youth the program can serve.",
  },
];

export default function PartnerPage() {
  return (
    <>
      <PageHeader
        eyebrow="Community partners"
        title="Build the pathway with us"
        description="This page is for employers, contractors, unions, schools, foundations, and community organizations. The categories below are invitations, not signed commitments."
      />
      <Section tone="white">
        <Note>
          Logos and names that already appear on the public site are shown as
          community connections students have encountered. They are not labeled
          here as exclusive or contractual partners.
        </Note>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {categories.map((item) => (
            <article key={item.title} className="rounded-xl border border-line p-5">
              <h2 className="font-bold text-navy">{item.title}</h2>
              <p className="mt-2 text-sm leading-6 text-muted">{item.body}</p>
            </article>
          ))}
        </div>
        <p className="mt-8 max-w-3xl text-sm leading-7 text-muted">
          To talk through a partnership, email{" "}
          <a className="underline" href={`mailto:${org.email}`}>
            {org.email}
          </a>
          .
        </p>
        <div className="mt-6">
          <Button href="/contact-us">Contact us</Button>
        </div>
      </Section>
    </>
  );
}

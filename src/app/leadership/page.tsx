import { PageHeader, Section } from "@/components/ui/Section";
import { PeopleGrid } from "@/components/people/PeopleGrid";
import { board, staff, volunteers } from "@/content/people";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Leadership",
  description: "Board, staff, and volunteers of Cornerstone Craftsman.",
  path: "/leadership",
});

export default function LeadershipPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Leadership"
        description="Names, titles, photographs, and bio PDFs are taken from the public Leadership page."
      />
      <Section tone="white">
        <h2 className="text-2xl font-bold text-navy">Board of Directors</h2>
        <PeopleGrid people={board} />
      </Section>
      <Section>
        <h2 className="text-2xl font-bold text-navy">Staff</h2>
        <PeopleGrid people={staff} />
      </Section>
      <Section tone="white">
        <h2 className="text-2xl font-bold text-navy">Volunteers listed on the leadership page</h2>
        <PeopleGrid people={volunteers} />
      </Section>
    </>
  );
}

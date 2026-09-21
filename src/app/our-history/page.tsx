import { PageHeader, Section } from "@/components/ui/Section";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Our History",
  description: "How Cornerstone Craftsman began and who it serves in Alexandria, Virginia.",
  path: "/our-history",
});

export default function HistoryPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Our History"
        description="Copied from the original Our History page."
      />
      <Section tone="white">
        <div className="max-w-3xl space-y-5 text-base leading-7 text-muted">
          <p>
            In 2021, Executive Director Roberto Gomez, recognizing a pressing
            need, began operating and self-funding an informal pre-apprentice
            program during the summer and on weekends. He started working with
            and training five undervalued young men along with support for their
            families. To date, Cornerstone has served 44 youth, with 28 active,
            year-round pre-apprentices, and our ever-growing waitlist of over 45
            youth. Roberto Gomez is passionate about giving disenfranchised youth
            the tools to realize their value at a young age, allowing them to
            become confident and productive citizens.
          </p>
          <p>
            Roberto Gomez&apos;s personal journey, from a past marked by mistakes
            to a present as a respected community leader, is a testament to the
            power of resilience, perseverance, and the belief in the potential
            for anyone to overcome their past and build a brighter future.
            Roberto, through his work with youth, shares these principles and the
            tools for positive change, instilling a sense of hope and possibility
            in those he mentors.
          </p>
          <p>
            Roberto currently serves on the Alexandria Gang Task Force,
            Alexandria Policy Foundation, Alexandria Sheriff’s Office Community
            Advisory Board, Alexandria Community Safety Forum, ACPS CTE Advisory
            Committee and Harbor Freight Leadership Lab.
          </p>
        </div>
      </Section>
    </>
  );
}

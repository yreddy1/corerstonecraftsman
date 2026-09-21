import { PageHeader, Section } from "@/components/ui/Section";
import { fiveCs, mission, vision } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Mission, Vision, Values",
  description: "Mission, vision, and core values of Cornerstone Craftsman.",
  path: "/mission-vision-values",
});

const values = [
  "Community and Advocacy",
  "Empathy and Understanding",
  "Honesty and Integrity",
  "Selflessness and Self-awareness",
  "Quality and Craftsmanship",
];

export default function MissionPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Guiding Our Purpose, Shaping Our Future, Driving Our Impact"
        description="Copied from the original Mission Vision Values page."
      />
      <Section tone="white">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-navy">Mission Statement</h2>
            <p className="mt-3 text-base leading-7 text-muted">{mission}</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-navy">Vision Statement</h2>
            <p className="mt-3 text-base leading-7 text-muted">{vision}</p>
          </div>
        </div>
        <h2 className="mt-12 text-2xl font-bold text-navy">Core Values</h2>
        <ul className="mt-5 grid gap-3 sm:grid-cols-2">
          {values.map((value) => (
            <li key={value} className="rounded-lg border border-line px-4 py-3 text-sm font-medium text-navy">
              {value}
            </li>
          ))}
        </ul>
        <p className="mt-8 text-sm text-muted">
          The program also emphasizes the 5Cs of Positive Youth Development:{" "}
          {fiveCs.join(", ")}.
        </p>
      </Section>
    </>
  );
}

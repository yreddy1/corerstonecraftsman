import { Button } from "@/components/ui/Button";
import { PageHeader, Section } from "@/components/ui/Section";
import { addressLine, org } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "In-Kind Needs",
  description: "Current in-kind giving opportunities for Cornerstone Craftsman.",
  path: "/in-kind-needs",
});

export default function InKindPage() {
  return (
    <>
      <PageHeader
        eyebrow="In-kind"
        title="Goods and services that keep training days going"
        description="Copied from the current In-Kind Needs page."
      />
      <Section tone="white">
        <div className="grid gap-5 md:grid-cols-2">
          <article className="rounded-xl border border-line p-6">
            <h2 className="text-xl font-bold text-navy">Meals</h2>
            <p className="mt-3 text-sm leading-6 text-muted">
              Buy and deliver a healthy breakfast (9–10 a.m.) or lunch (12–1 p.m.)
              to the Learning Center at {addressLine}.
            </p>
          </article>
          <article className="rounded-xl border border-line p-6">
            <h2 className="text-xl font-bold text-navy">Other in-kind support</h2>
            <p className="mt-3 text-sm leading-6 text-muted">
              Restaurant discounts, a 5-gallon water dispenser or bottled water,
              gas cards, and construction and workshop materials.
            </p>
          </article>
        </div>
        <div className="mt-8">
          <Button href={`mailto:${org.email}`}>Contact us to coordinate</Button>
        </div>
      </Section>
    </>
  );
}

import { Button } from "@/components/ui/Button";
import { PageHeader, Section } from "@/components/ui/Section";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Current Needs",
  description: "Published funding priorities for Cornerstone Craftsman’s pre-apprenticeship in Alexandria, Virginia.",
  path: "/current-needs",
});

const levels = [
  { amount: "$600,000", note: "Funds the current operating budget and adds participant capacity." },
  { amount: "$50,000", note: "Funds general operating expenses for about 6 months." },
  { amount: "$25,000", note: "Funds pre-apprentice and instructor wages for 3 to 4 months." },
  { amount: "$10,000", note: "Funds 10 pre-apprentice job days including meals." },
];

export default function CurrentNeedsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Current needs"
        title="Help keep the workshop running"
        description="Figures on this page are copied from the current Current Needs page. They describe organizational funding goals, not newly calculated gift impacts."
      />
      <Section tone="white">
        <p className="max-w-3xl text-sm leading-7 text-muted">
          The organization has published a goal of $600,000 in operational and
          program funding to cover expenses and establish a foundation for
          growth. Investment priorities listed on the same page include covering
          general operating expenses and increasing pre-apprentice training days
          while serving the current cohort.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {levels.map((level) => (
            <article key={level.amount} className="rounded-xl border border-line p-5">
              <p className="text-2xl font-bold text-orange">{level.amount}</p>
              <p className="mt-2 text-sm text-muted">{level.note}</p>
            </article>
          ))}
        </div>
        <p className="mt-8 max-w-3xl text-sm leading-7 text-muted">
          These contributions fund pre-apprentice wages and assistance, trainer
          wages, job materials, tools and supplies, meals and transportation,
          and general operational expenses.
        </p>
        <div className="mt-8">
          <Button href="/ways-to-give">Give now</Button>
        </div>
      </Section>
    </>
  );
}

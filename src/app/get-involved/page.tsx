import { Button } from "@/components/ui/Button";
import { PageHeader, Section } from "@/components/ui/Section";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Get Involved",
  description: "Join the program, volunteer, partner, or give to Cornerstone Craftsman.",
  path: "/get-involved",
});

const items = [
  {
    title: "Join the Program",
    body: "For students ages 12–17 and their families in Alexandria.",
    href: "/join-the-program",
    cta: "Start an inquiry",
  },
  {
    title: "Volunteer",
    body: "Instruction, driving, writing, and other posted roles. Background checks required.",
    href: "/volunteer-opportunities",
    cta: "See volunteer roles",
  },
  {
    title: "Partner With Us",
    body: "For employers, contractors, unions, schools, foundations, and community groups.",
    href: "/partner-with-us",
    cta: "Explore partnerships",
  },
  {
    title: "Current Needs",
    body: "The organization has published a $600,000 operating and program funding goal, plus gift levels from $10,000 to $600,000.",
    href: "/current-needs",
    cta: "See current needs",
  },
  {
    title: "In-Kind Needs",
    body: "Meals, water, gas cards, discounts, and construction materials for training days.",
    href: "/in-kind-needs",
    cta: "See in-kind needs",
  },
  {
    title: "Ways to Give",
    body: "One-time or monthly gifts, mail and ACH, and in-kind support.",
    href: "/ways-to-give",
    cta: "Give now",
  },
  {
    title: "Subscribe",
    body: "The original Subscribe menu item points to a missing WordPress page. Use the newsletter page to view issues and ask to be added.",
    href: "/newsletter",
    cta: "Newsletter",
  },
];

export default function GetInvolvedPage() {
  return (
    <>
      <PageHeader
        eyebrow="Get involved"
        title="There is a place for you here"
        description="Choose the path that fits: join the program, volunteer, partner, or give."
      />
      <Section tone="white">
        <div className="grid gap-5 md:grid-cols-2">
          {items.map((item) => (
            <article key={item.title} className="rounded-xl border border-line p-6">
              <h2 className="text-xl font-bold text-navy">{item.title}</h2>
              <p className="mt-3 text-sm leading-6 text-muted">{item.body}</p>
              <div className="mt-5">
                <Button href={item.href}>{item.cta}</Button>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}

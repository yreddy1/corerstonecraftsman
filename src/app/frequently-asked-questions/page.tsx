import { PageHeader, Section } from "@/components/ui/Section";
import { org } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Frequently Asked Questions",
  description: "Answers about Cornerstone Craftsman’s 501(c)(3) status, program, donations, and location.",
  path: "/frequently-asked-questions",
});

const groups = [
  {
    heading: "501(c)(3) status",
    items: [
      {
        q: "What is your 501(c)(3) status?",
        a: org.taxStatusNote + ` EIN ${org.ein}.`,
      },
    ],
  },
  {
    heading: "Program",
    items: [
      {
        q: "What does the program do?",
        a: "The pre-apprenticeship provides training and resources to learn skilled trades such as safety, painting, and installing drywall, plus mentoring, benevolent/support services, transportation, court advocacy, and family engagement.",
      },
      {
        q: "What audience does Cornerstone serve?",
        a: "Youth from underserved communities, ages 12–17. The FAQ currently lists 28 enrolled participants (12 Black males, 15 Latino males, and 1 Afghan male) and a waitlist of 17. Those demographic counts are dated only as “currently” on the source page.",
      },
      {
        q: "Is there a fee?",
        a: "No. The pre-apprenticeship is free. Benevolent assistance, transportation, and meals are currently provided.",
      },
      {
        q: "How long is the program?",
        a: "It is available to young men and women aged 12 to 17. Participants age out at 18, when they can legally work full-time. Cornerstone stays in touch and aims to help each pre-apprentice earn a livable wage in the trades.",
      },
    ],
  },
  {
    heading: "Giving",
    items: [
      {
        q: "How are donations used?",
        a: "Support is considered unrestricted general support. Examples include wages and materials for pre-apprentices, program management, and operating capacity.",
      },
      {
        q: "What are the options for donating?",
        a: "Cornerstone accepts donations from individuals, foundations, businesses, governments, and organizations, plus in-kind gifts and volunteer support.",
      },
    ],
  },
];

export default function FaqPage() {
  return (
    <>
      <PageHeader
        eyebrow="FAQ"
        title="Common questions"
        description="Answers below are drawn from the current FAQ page."
      />
      {groups.map((group) => (
        <Section key={group.heading} tone={group.heading === "Program" ? "cream" : "white"}>
          <h2 className="text-2xl font-bold text-navy">{group.heading}</h2>
          <dl className="mt-6 space-y-5">
            {group.items.map((item) => (
              <div key={item.q} className="rounded-xl border border-line bg-white p-5">
                <dt className="font-semibold text-navy">{item.q}</dt>
                <dd className="mt-2 text-sm leading-6 text-muted">{item.a}</dd>
              </div>
            ))}
          </dl>
        </Section>
      ))}
    </>
  );
}

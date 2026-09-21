import { PageHeader, Section } from "@/components/ui/Section";
import { newsItems } from "@/content/news";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "In the News",
  description: "News coverage of Cornerstone Craftsman.",
  path: "/in-the-news",
});

export default function NewsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Press"
        title="In the news"
        description="Articles, clippings, and reports featured on the original In the News page."
      />
      <Section tone="white">
        <ul className="space-y-4">
          {newsItems.map((item) => (
            <li key={item.href} className="rounded-xl border border-line p-5">
              <h2 className="text-lg font-bold text-navy">{item.title}</h2>
              {item.source ? <p className="mt-1 text-sm text-muted">{item.source}</p> : null}
              <p className="mt-3">
                <a
                  className="text-sm font-semibold text-orange"
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                >
                  {item.kind === "pdf" ? "Open the PDF" : "Read the article"}
                </a>
              </p>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}

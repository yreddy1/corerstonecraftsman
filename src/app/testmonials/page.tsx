import Image from "next/image";
import { PageHeader, Section } from "@/components/ui/Section";
import { stories } from "@/content/stories";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Testimonials",
  description: "Published student, family, and community voices from Cornerstone Craftsman.",
  path: "/testmonials",
});

export default function TestimonialsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our impact"
        title="Voices of Impact: Real Stories of Transformation and Success"
        description="These quotations appear on the original Testimonials page, including the original URL spelling."
      />
      <Section tone="white">
        <div className="grid gap-6 lg:grid-cols-2">
          {stories.map((story) => (
            <blockquote key={`${story.attribution}-${story.quote.slice(0, 24)}`} className="rounded-xl border border-line bg-cream p-6">
              <p className="text-sm leading-7 text-ink">“{story.quote}”</p>
              <footer className="mt-4 text-xs font-semibold uppercase tracking-wide text-muted">
                {story.attribution}
              </footer>
            </blockquote>
          ))}
        </div>
        <figure className="relative mt-10 overflow-hidden rounded-xl bg-sand">
          <div className="relative aspect-[16/7]">
            <Image
              src="/imported/images/2024-09-testiminials-pic-light.jpg"
              alt="Published testimonials graphic from the original website"
              fill
              sizes="100vw"
              className="object-contain"
            />
          </div>
        </figure>
      </Section>
    </>
  );
}

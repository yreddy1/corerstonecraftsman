import { PageHeader, Section } from "@/components/ui/Section";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Ribbon cutting",
  description: "Ribbon-cutting document from Cornerstone Craftsman.",
  path: "/ribon-cutting",
});

export default function RibbonPage() {
  return (
    <>
      <PageHeader
        eyebrow="Events"
        title="Ribbon cutting"
        description="This URL is preserved, including the original spelling, so existing links keep working."
      />
      <Section tone="white">
        <p className="text-sm text-muted">
          The original page embeds a flipbook of the Alexandria ribbon-cutting
          document. A local copy is available here:
        </p>
        <p className="mt-4">
          <a className="font-semibold text-orange" href="/imported/docs/Alexandria.pdf">
            Open Alexandria.pdf
          </a>
        </p>
        <div className="mt-8 overflow-hidden rounded-xl border border-line bg-sand">
          <iframe
            title="Alexandria ribbon-cutting PDF"
            src="/imported/docs/Alexandria.pdf"
            className="h-[40rem] w-full"
          />
        </div>
      </Section>
    </>
  );
}

import Image from "next/image";
import { PageHeader, Section } from "@/components/ui/Section";
import { galleryHeading, galleryPhotos } from "@/content/gallery";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Photo Gallery",
  description: "Photographs from Cornerstone Craftsman workshops, jobsites, and community events.",
  path: "/photo-gallery",
});

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Gallery"
        title={galleryHeading}
        description="Captions are copied from the original public gallery. Generic camera filenames are labeled as published photographs rather than invented scene descriptions."
      />
      <Section tone="white">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {galleryPhotos.map((photo) => (
            <figure key={photo.src} className="overflow-hidden rounded-xl bg-sand">
              <div className="relative aspect-square">
                <Image src={photo.src} alt={photo.alt} fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="object-cover" />
              </div>
              <figcaption className="px-4 py-3 text-sm text-muted">{photo.caption}</figcaption>
            </figure>
          ))}
        </div>
        <h2 className="mt-12 text-2xl font-bold text-navy">Workshop videos from the original site</h2>
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <video className="w-full rounded-xl bg-navy" controls preload="metadata" src="/imported/videos/VIDEO-2024-01-21-09-22-48.mp4">
            Your browser cannot play this video.
          </video>
          <video className="w-full rounded-xl bg-navy" controls preload="metadata" src="/imported/videos/VIDEO-2024-01-21-09-24-34.mp4">
            Your browser cannot play this video.
          </video>
        </div>
      </Section>
    </>
  );
}

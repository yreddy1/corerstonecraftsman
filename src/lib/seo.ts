import type { Metadata } from "next";
import { org } from "@/content/site";

const defaultTitle = `${org.name} | Skilled-trades training for youth in Alexandria`;
const defaultDescription =
  "Cornerstone Craftsman provides hands-on skilled-trades training, mentorship, and life-skills development for young people ages 12–17 in Alexandria, Virginia.";

export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const canonical = new URL(path, org.url).toString();
  const fullTitle = `${title} | ${org.name}`;
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title: fullTitle,
      description,
      url: canonical,
      siteName: org.name,
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}

export const homeMetadata: Metadata = {
  metadataBase: new URL(org.url),
  title: {
    default: defaultTitle,
    template: `%s | ${org.name}`,
  },
  description: defaultDescription,
  applicationName: org.name,
  openGraph: {
    title: defaultTitle,
    description: defaultDescription,
    url: org.url,
    siteName: org.name,
    type: "website",
    locale: "en_US",
  },
};

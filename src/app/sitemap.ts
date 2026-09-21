import type { MetadataRoute } from "next";
import { org } from "@/content/site";

const paths = [
  "/",
  "/about",
  "/leadership",
  "/our-history",
  "/mission-vision-values",
  "/our-program",
  "/program-overview",
  "/our-impact",
  "/testmonials",
  "/get-involved",
  "/join-the-program",
  "/volunteer-opportunities",
  "/partner-with-us",
  "/ways-to-give",
  "/contact-us",
  "/frequently-asked-questions",
  "/photo-gallery",
  "/current-needs",
  "/in-kind-needs",
  "/newsletter",
  "/in-the-news",
  "/calendar-demo",
  "/ribon-cutting",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((path) => ({
    url: new URL(path, org.url).toString(),
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}

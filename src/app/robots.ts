import type { MetadataRoute } from "next";
import { org } from "@/content/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${org.url}/sitemap.xml`,
  };
}

import type { MetadataRoute } from "next";
import { caseStudies } from "@/data/projects";
import { site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ["", "/projects", "/about", "/services", "/contact"].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date(),
    priority: path === "" ? 1 : 0.8,
  }));

  const projectPages = caseStudies.map((p) => ({
    url: `${site.url}/projects/${p.slug}`,
    lastModified: new Date(),
    priority: 0.6,
  }));

  return [...staticPages, ...projectPages];
}

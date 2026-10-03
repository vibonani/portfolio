import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";
import { projects } from "@/data/projects";
import { webProjects } from "@/data/webProjects";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/projetos", "/web", "/sobre", "/contato"].map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date(),
  }));

  const projectRoutes = projects.map((project) => ({
    url: `${siteConfig.url}${project.href}`,
    lastModified: new Date(),
  }));

  const webRoutes = webProjects.map((project) => ({
    url: `${siteConfig.url}/web/${project.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...projectRoutes, ...webRoutes];
}

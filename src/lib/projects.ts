import { getCollection } from 'astro:content';

export type Project = {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  href?: string;
  logo?: string;
  logoAlt?: string;
  radio: boolean;
  featured: boolean;
  order: number;
};

function cleanOptional(value?: string) {
  const trimmed = value?.trim();
  return trimmed ? trimmed : undefined;
}

export async function getProjects(): Promise<Project[]> {
  const entries = await getCollection('projects');

  return entries
    .map((entry) => ({
      slug: entry.id,
      title: entry.data.title,
      summary: entry.data.summary,
      tags: entry.data.tags,
      href: cleanOptional(entry.data.href),
      logo: cleanOptional(entry.data.logo),
      logoAlt: cleanOptional(entry.data.logoAlt),
      radio: entry.data.radio,
      featured: entry.data.featured,
      order: entry.data.order,
    }))
    .sort((a, b) => a.order - b.order || a.title.localeCompare(b.title));
}

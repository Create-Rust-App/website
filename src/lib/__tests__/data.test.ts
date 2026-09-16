import { describe, expect, it } from 'vitest';
import { catalogStatsFrom, normalizeCatalogPayload } from '../data';
import { getFallbackData } from '../mock-data';
import { templatesDataSchema } from '../schemas';

describe('normalizeCatalogPayload', () => {
  it('maps upstream addons to extensions', () => {
    const raw = {
      categories: [],
      templates: [],
      addons: [
        {
          name: 'Rust Docker',
          description: 'Docker packaging',
          url: 'https://github.com/Create-Rust-App/cra-templates?subdir=extensions/rust-docker',
          type: 'web-server',
          category: 'containers',
          labels: ['Docker'],
          slug: 'rust-docker',
        },
      ],
    };
    const normalized = normalizeCatalogPayload(raw) as { extensions: unknown[]; addons?: unknown };
    expect(normalized.extensions).toHaveLength(1);
    expect(normalized.addons).toBeUndefined();
  });

  it('leaves extensions untouched when already present', () => {
    const raw = {
      categories: [],
      templates: [],
      extensions: [{ slug: 'github-setup' }],
      addons: [{ slug: 'ignored' }],
    };
    const normalized = normalizeCatalogPayload(raw) as { extensions: { slug: string }[] };
    expect(normalized.extensions[0].slug).toBe('github-setup');
  });
});

describe('catalogStatsFrom', () => {
  it('counts templates, extensions, and categories', () => {
    const data = getFallbackData();
    const stats = catalogStatsFrom(data);
    expect(stats.templates).toBe(data.templates.length);
    expect(stats.extensions).toBe(data.extensions.length);
    expect(stats.categories).toBe(data.categories.length);
  });
});

describe('templatesDataSchema (Rust-domain fixtures)', () => {
  it('accepts a minimal cra-templates shaped catalog', () => {
    const catalog = {
      categories: [
        {
          slug: 'web',
          name: 'Web',
          description: 'HTTP servers and web-facing Rust apps.',
          details: 'axum/actix-web starters.',
          labels: ['web', 'http'],
        },
      ],
      templates: [
        {
          name: 'Web Server',
          description: 'axum HTTP server starter',
          url: 'https://github.com/Create-Rust-App/cra-templates?subdir=templates/web-server',
          type: 'web-server',
          category: 'web',
          labels: ['Rust', 'axum'],
          slug: 'web-server',
        },
      ],
      extensions: [
        {
          name: 'GitHub Setup',
          description: 'GitHub Actions with dtolnay/rust-toolchain',
          url: 'https://github.com/Create-Rust-App/cra-templates?subdir=extensions/github-setup',
          type: ['web-server', 'cli-app'],
          category: 'ci',
          labels: ['GitHub', 'CI'],
          slug: 'github-setup',
        },
      ],
    };
    expect(templatesDataSchema.safeParse(catalog).success).toBe(true);
  });

  it('rejects CNA-era leftover shapes missing Rust catalog fields', () => {
    const leftover = {
      templates: [{ name: 'React Vite', framework: 'react' }],
      extensions: [{ name: 'Tailwind' }],
    };
    expect(templatesDataSchema.safeParse(leftover).success).toBe(false);
  });
});

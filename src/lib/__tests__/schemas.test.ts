import { describe, expect, it } from 'vitest';
import { categorySchema, extensionSchema, templateSchema, templatesDataSchema } from '../schemas';

describe('categorySchema', () => {
  it('should validate a valid category', () => {
    const validCategory = {
      slug: 'web',
      name: 'Web',
      description: 'HTTP servers and web-facing Rust apps.',
      details: 'axum/actix-web starters and related HTTP tooling.',
      labels: ['web', 'http', 'axum'],
    };
    expect(categorySchema.safeParse(validCategory).success).toBe(true);
  });

  it('should reject a category with missing required fields', () => {
    const invalidCategory = {
      slug: 'web',
      name: 'Web',
    };
    expect(categorySchema.safeParse(invalidCategory).success).toBe(false);
  });
});

describe('templateSchema', () => {
  it('should validate a valid template', () => {
    const validTemplate = {
      name: 'Web Server',
      description: 'An axum HTTP server starter.',
      url: 'https://github.com/Create-Rust-App/cra-templates?subdir=templates/web-server',
      type: 'web-server',
      category: 'web',
      labels: ['Rust', 'axum'],
      slug: 'web-server',
    };
    expect(templateSchema.safeParse(validTemplate).success).toBe(true);
  });

  it('should reject a template with invalid url', () => {
    const invalidTemplate = {
      name: 'Web Server Starter',
      description: 'An axum HTTP starter.',
      url: 'not-a-url',
      type: 'web-server',
      category: 'web',
      labels: ['Rust', 'axum'],
      slug: 'web-server',
    };
    expect(templateSchema.safeParse(invalidTemplate).success).toBe(false);
  });
});

describe('extensionSchema', () => {
  it('should validate a valid extension with string type', () => {
    const validExtension = {
      name: 'Rust Docker',
      description: 'Add Docker packaging.',
      url: 'https://github.com/Create-Rust-App/cra-templates?subdir=extensions/rust-docker',
      type: 'web-server',
      category: 'containers',
      labels: ['Docker', 'DevOps'],
      slug: 'rust-docker',
    };
    expect(extensionSchema.safeParse(validExtension).success).toBe(true);
  });

  it('should validate a valid extension with array type', () => {
    const validExtension = {
      name: 'GitHub Setup',
      description: 'Add GitHub automation.',
      url: 'https://github.com/Create-Rust-App/cra-templates?subdir=extensions/github-setup',
      type: ['web-server', 'cli-app', 'library-starter'],
      category: 'ci',
      labels: ['GitHub', 'CI'],
      slug: 'github-setup',
    };
    expect(extensionSchema.safeParse(validExtension).success).toBe(true);
  });
});

describe('templatesDataSchema', () => {
  it('should validate complete templates data', () => {
    const validData = {
      templates: [
        {
          name: 'Web Server',
          description: 'An axum HTTP starter.',
          url: 'https://github.com/Create-Rust-App/cra-templates?subdir=templates/web-server',
          type: 'web-server',
          category: 'web',
          labels: ['Rust', 'axum'],
          slug: 'web-server',
        },
      ],
      extensions: [
        {
          name: 'Rust Docker',
          description: 'Add Dockerfile and compose for Rust apps.',
          url: 'https://github.com/Create-Rust-App/cra-templates?subdir=extensions/rust-docker',
          type: 'web-server',
          category: 'containers',
          labels: ['Docker'],
          slug: 'rust-docker',
        },
      ],
      categories: [
        {
          slug: 'web',
          name: 'Web',
          description: 'HTTP servers and web APIs built with Rust.',
          details: 'Templates for axum servers.',
          labels: ['Web', 'Rust'],
        },
      ],
    };
    expect(templatesDataSchema.safeParse(validData).success).toBe(true);
  });
});

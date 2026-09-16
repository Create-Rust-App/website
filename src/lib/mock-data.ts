import type { TemplatesData } from './schemas';

export const mockTemplatesData: TemplatesData = {
  categories: [
    {
      slug: 'web',
      name: 'Web',
      description: 'HTTP servers and web-facing Rust apps.',
      details: 'axum/actix-web starters and related HTTP tooling.',
      labels: ['web', 'http', 'axum'],
    },
    {
      slug: 'cli',
      name: 'CLI',
      description: 'Command-line applications.',
      details: 'Flag parsing, subcommands, and operator-friendly CLIs.',
      labels: ['cli', 'tooling'],
    },
    {
      slug: 'library',
      name: 'Library',
      description: 'Publishable Rust crates and libraries.',
      details: 'Cargo-first packages with tests and examples.',
      labels: ['library', 'cargo'],
    },
    {
      slug: 'systems',
      name: 'Systems',
      description: 'Systems-oriented and low-level starters.',
      details: 'Ownership guidance, checksums, and systems utilities.',
      labels: ['systems', 'low-level'],
    },
    {
      slug: 'ci',
      name: 'CI & tooling',
      description: 'GitHub Actions, fmt/clippy, and quality gates.',
      details: 'Cross-cutting extensions for CI and local quality.',
      labels: ['ci', 'github', 'fmt'],
    },
    {
      slug: 'containers',
      name: 'Containers',
      description: 'Docker and development containers.',
      details: 'Dockerfile, compose, and .devcontainer overlays.',
      labels: ['docker', 'devcontainer'],
    },
  ],
  templates: [
    {
      slug: 'web-server',
      name: 'Web Server',
      description: 'axum HTTP server starter with Cargo.toml, cargo fmt/clippy, and cargo test',
      url: 'https://github.com/Create-Rust-App/cra-templates?subdir=templates/web-server',
      type: 'web-server',
      category: 'web',
      labels: ['Rust', 'axum', 'HTTP', 'API', 'Web'],
    },
    {
      slug: 'cli-app',
      name: 'CLI App',
      description: 'CLI starter with flag parsing, structured logging, and cargo test',
      url: 'https://github.com/Create-Rust-App/cra-templates?subdir=templates/cli-app',
      type: 'cli-app',
      category: 'cli',
      labels: ['CLI', 'Rust', 'flag', 'Terminal'],
    },
    {
      slug: 'library-starter',
      name: 'Library Starter',
      description: 'Cargo library with docs, examples, and cargo test harness',
      url: 'https://github.com/Create-Rust-App/cra-templates?subdir=templates/library-starter',
      type: 'library-starter',
      category: 'library',
      labels: ['Library', 'Cargo.toml', 'Rust', 'Crate'],
    },
  ],
  extensions: [
    {
      slug: 'github-setup',
      name: 'GitHub Setup',
      description: 'GitHub Actions CI with dtolnay/rust-toolchain, issue/PR templates, and Dependabot',
      url: 'https://github.com/Create-Rust-App/cra-templates?subdir=extensions/github-setup',
      type: ['web-server', 'cli-app', 'library-starter', 'systems-app'],
      category: 'ci',
      labels: ['GitHub', 'CI', 'DevOps', 'rust-toolchain'],
    },
    {
      slug: 'rust-docker',
      name: 'Rust Docker',
      description: 'Dockerfile and Compose for Rust binaries and dev workflows',
      url: 'https://github.com/Create-Rust-App/cra-templates?subdir=extensions/rust-docker',
      type: ['web-server', 'cli-app', 'systems-app'],
      category: 'containers',
      labels: ['Docker', 'DevOps', 'Container', 'Rust'],
    },
    {
      slug: 'rust-fmt-clippy',
      name: 'Rust Fmt & Clippy',
      description: 'Pre-commit hooks for cargo fmt and cargo clippy',
      url: 'https://github.com/Create-Rust-App/cra-templates?subdir=extensions/rust-fmt-clippy',
      type: ['web-server', 'cli-app', 'library-starter', 'systems-app'],
      category: 'ci',
      labels: ['cargo fmt', 'cargo clippy', 'Hooks', 'Quality'],
    },
  ],
};

// Helper function to get fallback data if API fails
export function getFallbackData(): TemplatesData {
  return mockTemplatesData;
}

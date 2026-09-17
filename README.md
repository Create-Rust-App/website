<div align="center">

# Create Rust App — Website

**Docs and catalog site for the Create Rust App scaffolding toolkit.**

[![Website](https://img.shields.io/badge/site-create--awesome--rust--app.vercel.app-B7410E?style=flat-square)](https://create-awesome-rust-app.vercel.app)
[![CLI](https://img.shields.io/badge/CLI-create--rust--app-B7410E?style=flat-square)](https://github.com/Create-Rust-App/create-rust-app)
[![Templates](https://img.shields.io/badge/templates-cra--templates-blue?style=flat-square)](https://github.com/Create-Rust-App/cra-templates)
[![Release](https://img.shields.io/github/v/release/Create-Rust-App/create-rust-app?filter=create-rust-app%40*&style=flat-square&label=Release)](https://github.com/Create-Rust-App/create-rust-app/releases/tag/create-rust-app%400.4.0)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](LICENSE)
[![Discord](https://img.shields.io/discord/1527933660764831825?style=flat-square&label=Discord&logo=discord&logoColor=white)](https://discord.gg/bR5VyATgka)

**Live site:** [create-awesome-rust-app.vercel.app](https://create-awesome-rust-app.vercel.app)

[CLI](https://github.com/Create-Rust-App/create-rust-app) · [Templates](https://github.com/Create-Rust-App/cra-templates) · [Catalog](https://create-awesome-rust-app.vercel.app/templates) · [Extensions](https://create-awesome-rust-app.vercel.app/extensions)

</div>

---

## Install the CLI

```bash
curl -fsSL https://create-awesome-rust-app.vercel.app/install.sh | sh
```

Other install paths:

| Channel  | How                                                                     |
| -------- | ----------------------------------------------------------------------- |
| wget     | `wget -qO- https://create-awesome-rust-app.vercel.app/install.sh \| sh` |
| Homebrew | `brew tap Create-Rust-App/tap && brew install create-rust-app`          |
| AUR      | `yay -S create-rust-app`                                                |
| Source   | `git clone …/create-rust-app && cargo build --release`                  |

When published on crates.io: `cargo install create-rust-app`.

## Catalog

The site renders the official bank registry live — no vendored copy, no rebuild dispatch needed:

- Source of truth: [cra-templates](https://github.com/Create-Rust-App/cra-templates) (`templates.json` on `main`)
- Loader: [`src/lib/data.ts`](src/lib/data.ts) fetches it at request time with hourly ISR revalidation; counts derive from the payload via `catalogStatsFrom` (fallback mock data only on fetch/validation failure)
- Browse live: [create-awesome-rust-app.vercel.app/templates](https://create-awesome-rust-app.vercel.app/templates)

## Development

```bash
pnpm install
pnpm dev
```

## Related

- [create-rust-app](https://github.com/Create-Rust-App/create-rust-app) — CLI
- [cra-templates](https://github.com/Create-Rust-App/cra-templates) — templates & extensions
- [Create-Rust-App org](https://github.com/Create-Rust-App)

import { ArrowLeft, ArrowRight, CheckCircle, Container, Package, Terminal } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';

import { CopyButton } from '@/components/copy-button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export const metadata: Metadata = {
  title: 'Installation | Create Rust App Documentation',
  description:
    'Install create-rust-app with a curl|sh oneliner, GitHub Releases, Homebrew, AUR, Docker, or crates.io when published.',
  alternates: { canonical: '/docs/installation' },
  openGraph: {
    title: 'Installation | Create Rust App Documentation',
    description:
      'Install create-rust-app with a curl|sh oneliner, GitHub Releases, Homebrew, AUR, Docker, or crates.io when published.',
    url: '/docs/installation',
    type: 'article',
  },
};

const methods = [
  {
    id: 'script',
    label: 'Install script',
    icon: <Terminal className="h-4 w-4" />,
    recommended: true,
  },
  {
    id: 'release',
    label: 'GitHub Release',
    icon: <Terminal className="h-4 w-4" />,
    recommended: false,
  },
  {
    id: 'homebrew',
    label: 'Homebrew',
    icon: <Terminal className="h-4 w-4" />,
    recommended: false,
  },
  {
    id: 'docker',
    label: 'Docker',
    icon: <Container className="h-4 w-4" />,
    recommended: false,
  },
  {
    id: 'cargo',
    label: 'crates.io / cargo install',
    icon: <Package className="h-4 w-4" />,
    recommended: false,
  },
];

export default function InstallationPage() {
  return (
    <div className="container py-10">
      <div className="mx-auto max-w-5xl space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Installation</h1>
          <p className="text-lg text-muted-foreground">
            Get <code>create-rust-app</code> (and the <code>create-awesome-rust-app</code> alias) running in seconds.
          </p>
        </div>

        <Alert className="border-primary/30 bg-primary/5">
          <CheckCircle className="h-4 w-4 text-primary" />
          <AlertTitle>Release binary via install script</AlertTitle>
          <AlertDescription>
            The recommended path today is the curl|sh installer (downloads a verified GitHub Release binary into{' '}
            <code>~/.local/bin</code>). crates.io (<code>cargo install create-rust-app</code>) remains available when
            the crate is published.
          </AlertDescription>
        </Alert>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">Install methods</h2>

          <Tabs defaultValue="script">
            <TabsList className="flex h-auto flex-wrap gap-1">
              {methods.map((m) => (
                <TabsTrigger key={m.id} value={m.id} className="flex items-center gap-1.5">
                  {m.icon}
                  {m.label}
                  {m.recommended && (
                    <Badge variant="secondary" className="ml-1 text-[10px] px-1 py-0">
                      recommended
                    </Badge>
                  )}
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value="script" className="mt-4 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Terminal className="h-5 w-5 text-primary" />
                    Install script
                  </CardTitle>
                  <CardDescription>
                    Detects OS/arch, verifies <code>SHA256SUMS</code>, installs into <code>~/.local/bin</code>, and
                    creates a <code>create-awesome-rust-app</code> symlink.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-5">
                  <div>
                    <p className="text-sm font-medium mb-2">curl:</p>
                    <CopyButton
                      command="curl -fsSL https://create-awesome-rust-app.vercel.app/install.sh | sh"
                      className="w-full justify-start font-mono text-sm bg-muted rounded-md px-4 py-3"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-2">wget:</p>
                    <CopyButton
                      command="wget -qO- https://create-awesome-rust-app.vercel.app/install.sh | sh"
                      className="w-full justify-start font-mono text-sm bg-muted rounded-md px-4 py-3"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-2">Pin a version:</p>
                    <CopyButton
                      command="CRA_VERSION=0.1.0 curl -fsSL https://create-awesome-rust-app.vercel.app/install.sh | sh"
                      className="w-full justify-start font-mono text-sm bg-muted rounded-md px-4 py-3"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-2">Scaffold:</p>
                    <CopyButton
                      command="create-rust-app my-app --template web-server --addons github-setup"
                      className="w-full justify-start font-mono text-sm bg-muted rounded-md px-4 py-3"
                    />
                  </div>
                  <Alert>
                    <AlertDescription>
                      Fallback raw URL:{' '}
                      <code>
                        curl -fsSL
                        https://raw.githubusercontent.com/Create-Rust-App/create-rust-app/main/scripts/install.sh | sh
                      </code>
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="cargo" className="mt-4 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Package className="h-5 w-5 text-primary" />
                    crates.io / cargo install
                  </CardTitle>
                  <CardDescription>
                    When the crate is published on crates.io. Requires the{' '}
                    <a
                      href="https://www.rust-lang.org"
                      className="text-primary hover:underline"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Rust toolchain
                    </a>
                    .
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-5">
                  <div>
                    <p className="text-sm font-medium mb-2">Install the CLI crate:</p>
                    <CopyButton
                      command="cargo install create-rust-app"
                      className="w-full justify-start font-mono text-sm bg-muted rounded-md px-4 py-3"
                    />
                  </div>

                  <div>
                    <p className="text-sm font-medium mb-2">Scaffold a project:</p>
                    <CopyButton
                      command="create-rust-app my-app --template web-server"
                      className="w-full justify-start font-mono text-sm bg-muted rounded-md px-4 py-3"
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="release" className="mt-4 space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Terminal className="h-5 w-5 text-primary" />
                    GitHub Releases (manual)
                  </CardTitle>
                  <CardDescription>
                    Prefer the install script above. Use this to pin a specific asset by hand.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CopyButton
                    command={`curl -fsSL -o create-rust-app \\
  "https://github.com/Create-Rust-App/create-rust-app/releases/download/create-rust-app%400.1.0/create-rust-app-linux-x86_64"
chmod +x create-rust-app
mv create-rust-app ~/.local/bin/`}
                    className="w-full justify-start font-mono text-sm bg-muted rounded-md px-4 py-3 whitespace-pre-wrap h-auto"
                  />
                  <p className="text-sm text-muted-foreground">
                    All assets:{' '}
                    <a
                      href="https://github.com/Create-Rust-App/create-rust-app/releases"
                      className="text-primary hover:underline"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Create-Rust-App/create-rust-app releases
                    </a>
                    .
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="homebrew" className="mt-4 space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Terminal className="h-5 w-5 text-primary" />
                    Homebrew
                  </CardTitle>
                  <CardDescription>
                    Official tap:{' '}
                    <a
                      href="https://github.com/Create-Rust-App/homebrew-tap"
                      className="text-primary hover:underline"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Create-Rust-App/tap
                    </a>
                    .
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CopyButton
                    command="brew tap Create-Rust-App/tap && brew install create-rust-app"
                    className="w-full justify-start font-mono text-sm bg-muted rounded-md px-4 py-3"
                  />
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="docker" className="mt-4 space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Container className="h-5 w-5 text-primary" />
                    Docker
                  </CardTitle>
                  <CardDescription>Run without a local install. Useful in CI/CD pipelines.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm font-medium mb-2">Scaffold into the current directory:</p>
                    <div className="rounded-md bg-muted p-4">
                      <pre className="text-sm font-mono overflow-x-auto">{`docker run --rm -it \\
  -v "\${PWD}:/app" -w /app \\
  ulisesjeremias/create-rust-app:latest \\
  my-app --template web-server --no-interactive`}</pre>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">Verify the installation</h2>
          <CopyButton
            command="create-rust-app --version"
            className="w-full justify-start font-mono text-sm bg-muted rounded-md px-4 py-3"
          />
          <CopyButton
            command="create-awesome-rust-app --version"
            className="w-full justify-start font-mono text-sm bg-muted rounded-md px-4 py-3"
          />
          <CopyButton
            command="create-rust-app --list-templates"
            className="w-full justify-start font-mono text-sm bg-muted rounded-md px-4 py-3"
          />
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">Templates catalog (cra-templates)</h2>
          <p>
            Starters and extensions live in{' '}
            <a
              href="https://github.com/Create-Rust-App/cra-templates"
              className="text-primary hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              Create-Rust-App/cra-templates
            </a>
            . The CLI clones or refreshes this catalog into <code>~/.cache/cra</code> unless <code>--no-cache</code> or{' '}
            <code>CRA_NO_CATALOG_CACHE</code> is set.
          </p>
        </section>

        <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
          <a
            href="https://github.com/Create-Rust-App/create-rust-app/releases"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            View release notes →
          </a>
        </div>
        <div className="flex flex-col gap-2 min-[400px]:flex-row mt-2">
          <Link
            href="/docs"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Docs
          </Link>
          <Link
            href="/docs/advanced/usage"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors ml-auto"
          >
            CLI flags & cache
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}

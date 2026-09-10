# Ibrahim Khalil — Professional Technical Portfolio

A static Next.js portfolio for GitHub Pages / Cloudflare Pages.

## Requirements

- Node.js 20+
- npm

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Production build

```bash
npm run build
```

The static site is generated in `out/`.

## Deploy to GitHub Pages

1. Create a GitHub repository, for example `ibrahim88ku.github.io`.
2. Push this project.
3. Configure GitHub Pages to deploy the `out` directory using your preferred GitHub Actions workflow, or use a static-export deployment workflow.
4. Add a custom domain later if desired.

## Important content placeholders

Before public launch, replace:

- `your-email@example.com`
- `/resume.pdf`
- Any project detail that should not be public
- Certification credential IDs / verification URLs
- Missing employer history and exact dates
- Project metrics and outcomes

Do not publish confidential employer information such as internal IPs, credentials,
private hostnames, customer data or proprietary architecture.

## Suggested v2

- Dedicated `/projects/<slug>` pages
- Project search/filter
- Architecture diagrams
- Detailed career timeline
- Certification verification links
- Downloadable polished CV
- Technical articles / lab notes
- SEO sitemap and OpenGraph image
- Optional custom domain

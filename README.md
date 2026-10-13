# Ibrahim Khalil — Portfolio V3 (Liquid Glass)

Static Next.js portfolio for GitHub Pages, updated with:

- Sections in requested order: Professional profile, Technology stack, Project portfolio, Credentials, Career, Education & research, Engineering approach, Contact.
- Expanded international OEM/client profile and nine technical competencies.
- Expanded vendor/platform/engineering keywords across nine technical domains.
- Liquid-glass visual design, technical grid, ambient gradients and responsive hero skill badges.
- WhatsApp contact at `https://wa.me/8801918047976` (`@ibrahim88ku`) replacing GitHub contact button.
- CV at `public/Ibrahim-Khalil-CV.pdf`.

## Deployment

Extract into existing repository, **preserving `.git/` and your existing package-lock.json and any workflow updates**. Run `npm ci` and `npm run build`; confirm `out/` exists, then commit and push to `main`. Your GitHub Pages Actions workflow publishes `out/`.

Security note: original V2 package pins Next.js 14.2.15, which has known security advisories. Upgrade to a patched supported version in a separately tested change; do not use `npm audit fix --force` blindly.

Review international engagement wording and technology keywords before publishing to ensure all statements reflect your experience.

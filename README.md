
# Ravi Singh — Portfolio (Next.js + Tailwind + MDX)

A professional, light-mode portfolio with Projects, Blog, Resume, and Contact (Netlify Forms).

## Quickstart
```bash
npm i
npm run dev
```

## Deploy to Netlify
1. Push this repo to GitHub: `helloraviai-ctrl/portfolio`
2. Create a new site on Netlify → **Import from Git** → select this repo
3. Build command: `npm run build`
   Publish directory: `.next`
   Plugin: `@netlify/plugin-nextjs` (already in `netlify.toml`)
4. Deploy. Done!

## Content
- Projects in `content/projects/*.mdx` (edit metadata & text)
- Blog posts in `content/blog/*.mdx`
- Headshot at `public/images/ravi.png`
- Project covers under `public/projects/*`
- Update About text in `app/about/page.tsx`

## Contact (Netlify Forms)
- Form name: `contact`
- Submissions will appear in Netlify → Forms. Configure email notifications there.

## Custom Domain
- Add your domain in Netlify → Domain management → Add custom domain.
- Set `app/robots.ts` and `app/sitemap.ts` base URLs later.

## License
- No license specified. All rights reserved by Ravi Singh.

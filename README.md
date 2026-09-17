# Portfolio

Personal portfolio of Chibuzor Emmanuel, software engineer.

**Live:** https://chibuzor9.github.io/portfolio

## Stack

- React 19 + Vite
- Tailwind CSS v4 (design tokens in `src/index.css`, dark by default with a light toggle)
- Motion for scroll-reveal and hero animations
- react-icons

## Structure

```
src/
  data/        profile, projects and skills content (edit these to update the site)
  components/
    layout/    Navbar, Footer
    sections/  Hero, About, Projects, Skills, Contact
    ui/        Reveal, SectionHeading, Typewriter
  hooks/       useTheme, useActiveSection
public/        favicon, manifest, resume PDF
```

## Develop

```bash
npm install
npm run dev       # http://localhost:5173/portfolio/
npm run build     # outputs to dist/
npm run preview   # serve the production build
npm run lint
```

## Deploy

```bash
npm run deploy    # builds and pushes dist/ to the gh-pages branch
```

## Updating content

- **Projects:** edit `src/data/projects.js`. Set `featured: true` for the large cards. Omit `live` when there is no deployment.
- **Skills:** edit `src/data/skills.js`.
- **Bio, links, resume filename:** edit `src/data/profile.js`. The resume PDF lives in `public/`.

## License

MIT

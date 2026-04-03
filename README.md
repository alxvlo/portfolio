# Developer Portfolio - Next.js & Tailwind CSS

A high-end, modern personal portfolio website tailored for Web Developers and AI/Automation Engineers. It features a retro Atari-inspired color palette, glassmorphism UI elements, and dynamic scroll animations using Framer Motion.

## 🚀 Getting Started

This project is built with Next.js (App Router), TypeScript, and Tailwind CSS.

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Run the Development Server:**
   ```bash
   npm run dev
   ```

3. **Open in Browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Customizing Your Content

The site is designed to be easily editable without needing to dig deep into the UI component code.

**All of your personal information, projects, skills, and experience are centralized in one file:**

👉 `src/config/portfolio.ts`

Simply open this file and replace the placeholder data with your own.

### Managing Assets

- **Resume:** Place your resume file (e.g., `resume.pdf`) in the `public/` directory. Ensure the filename matches the `resumeLink` specified in `src/config/portfolio.ts`.
- **Images:** Any placeholder images or custom icons you wish to add should also be placed in the `public/` directory and referenced via relative paths (e.g., `/my-image.png`).

## 🛠️ Tech Stack
- **Framework:** Next.js 14+ (App Router)
- **Styling:** Tailwind CSS (v4)
- **Animation:** Framer Motion
- **Icons:** Lucide React
- **Typography:** Geist & Geist Mono

## 📦 Deployment (GitHub Pages)

This project is pre-configured for static export and includes a GitHub Actions workflow that **automatically deploys your site every time you push to `main`** — no manual steps required after setup.

### One-time setup

1. Push this repository to GitHub.
2. Go to your repository → **Settings** → **Pages**.
3. Under **Source**, select **GitHub Actions**.
4. That's it! The next push to `main` will trigger a build and publish your site.

Your site will be live at:
- **User/org site** (repo named `<username>.github.io`): `https://<username>.github.io/`
- **Project site** (any other repo name): `https://<username>.github.io/<repo-name>/`

> **Project site note:** If your repo is **not** named `<username>.github.io`, add the following to `next.config.ts` so assets load correctly:
> ```ts
> basePath: '/<repo-name>',
> assetPrefix: '/<repo-name>',
> ```

### Do I need to redeploy after updating the code?

**No.** Every `git push` to `main` automatically triggers the workflow — it rebuilds and republishes your site. You can also trigger it manually from the **Actions** tab in your repository.

### Manual local build

```bash
npm run build
```
This generates an `out/` directory with your static files.

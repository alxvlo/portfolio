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

This project is pre-configured for static export, making it perfect for hosting on GitHub Pages.

The `next.config.ts` file includes:
```ts
output: 'export',
images: {
  unoptimized: true,
}
```

To build for production:
```bash
npm run build
```
This will generate an `out/` directory containing your static files.

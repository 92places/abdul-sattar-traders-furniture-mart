# Abdul Sattar Trader's & Furniture Mart

Official business website for **Abdul Sattar Trader's & Furniture Mart**, a customized furniture manufacturing, carpentry, upholstery (poshish), master foam installation, sawmill timber log cutting, and firewood business located in Kot Radha Kishan, Kasur, Punjab, Pakistan.

Managed directly by brothers **Zahid Abdul Sattar** and **Shahid Abdul Sattar**.

---

## 🛠 Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Bundler & Dev Server**: [Vite 8](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Assets**: Self-contained local photography in `public/assets/images/`

---

## 🚀 Quick Start & Local Development

### 1. Prerequisites
- Node.js (version 18+ or 20+ recommended)
- npm, yarn, or pnpm

### 2. Installation
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
The website will start at `http://localhost:3000` (or the port indicated in your console).

### 4. Build for Production
```bash
npm run build
```
This compiles the application and outputs the optimized static production bundle into the `dist/` directory.

### 5. Preview Production Build
```bash
npm run preview
```

---

## 📦 Deployment Instructions

### Deploying to Vercel (Recommended)
1. Push this repository to your **GitHub** account.
2. Go to [Vercel](https://vercel.com/) and click **"Add New Project"**.
3. Import your GitHub repository.
4. Vercel automatically detects Vite:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
5. Click **"Deploy"**. The site will be live on a fast, global CDN with SSL enabled.
*(The included `vercel.json` ensures client-side routing and static assets load seamlessly).*

### Deploying to Netlify
1. Connect your repository in Netlify.
2. Set **Build command**: `npm run build`.
3. Set **Publish directory**: `dist`.
4. Deploy!

---

## 📁 Project Structure

```
├── public/
│   └── assets/
│       └── images/               # Local, high-resolution photography assets
│           ├── hero-trolley-timber-sawmill.jpg
│           ├── trolley-log-sawing-service.jpg
│           ├── master-foam-sofa-refoaming.jpg
│           ├── dressing-table-mirror-makeup.jpg
│           ├── modern-plywood-wardrobes.jpg
│           ├── modular-kitchen-wood-cabinets.jpg
│           ├── wooden-door-carpentry.jpg
│           ├── firewood-yard-weighing-scale.jpg
│           ├── sofa-making-poshish.jpg
│           ├── beds-bedroom-furniture.jpg
│           ├── dining-tables-chairs.jpg
│           ├── modern-plywood-furniture.jpg
│           └── tv-units-media-consoles.jpg
├── src/
│   ├── components/
│   │   ├── ContactModal.tsx      # Owner selector for Call/WhatsApp
│   │   ├── FloatingContactWidget.tsx # Discreet quick-access button
│   │   ├── Footer.tsx            # Comprehensive footer with contact info
│   │   ├── ImageWithFallback.tsx # Reliable image loader with fallbacks
│   │   ├── LightboxModal.tsx     # Fullscreen gallery zoom & inquiry
│   │   └── Navbar.tsx            # Responsive desktop/mobile header
│   ├── data/
│   │   └── businessData.ts       # Services, owners, contacts, presets
│   ├── pages/
│   │   ├── HomePage.tsx          # Hero, intro, 12 service cards, process
│   │   ├── AboutPage.tsx         # Workshop profile and brothers' story
│   │   ├── ServicesPage.tsx      # Complete 12 services with category filter
│   │   ├── GalleryPage.tsx       # 10-category photo showcase with zoom
│   │   └── ContactPage.tsx       # Direct dialers & interactive WhatsApp composer
│   ├── types/
│   │   └── index.ts              # TypeScript interfaces
│   ├── App.tsx                   # Main SPA router and modal state
│   ├── index.css                 # Tailwind v4 theme styling & fonts
│   └── main.tsx                  # React DOM entry point
├── index.html                    # SEO metadata, OpenGraph, LocalBusiness schema
├── package.json
├── tsconfig.json
├── vercel.json                   # Vercel SPA rewrite configuration
└── vite.config.ts
```

---

## 📞 Business Contacts

- **Zahid Abdul Sattar**: +92 300 4306527 (`tel:+923004306527` | `https://wa.me/923004306527`)
- **Shahid Abdul Sattar**: +92 321 8672673 (`tel:+923218672673` | `https://wa.me/923218672673`)
- **Location**: Kot Radha Kishan, Kasur, Punjab, Pakistan
- **Hours**: Saturday to Thursday: 8:00 AM – 8:00 PM PKT (Friday Closed)

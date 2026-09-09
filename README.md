# Modern Glassmorphic Developer Portfolio

Next.js 14+ (App Router), Tailwind CSS va Framer Motion yordamida yaratilgan zamonaviy va interaktiv dasturchi portfoliosi.

## Asosiy Xususiyatlar
- **Ultra-modern Dark Mode**: `#0d0f17` fon rangi va orqa fonda sekin porlab turuvchi neon gradient yorugʻliklar (`blur-[120px]`).
- **Glassmorphism effekti**: `backdrop-blur-md`, shaffof kartalar (`bg-white/[0.03]`), chegaralar (`border-white/10`) va hover neon glow.
- **Sticky Glass Navbar (`Navbar.jsx`)**: `'use client'`, sticky `top-4`, burchaklari yumaloqlangan (`rounded-2xl`), mobil hamburger menyu va glowing "Get in touch" tugmasi.
- **Hero Boʻlimi (`HeroSection.jsx`)**: "Available for new opportunities" status nishoni, sarlavha, CTA tugmalar va tajriba koʻrsatkichlari.
- **Interaktiv Loyihalar Paneli (`ProjectsSection.jsx`)**: Kategoriya boʻyicha filterlash ('All', 'React', 'Next.js', 'Fullstack', 'API'), hover neon border va live demo/GitHub linklar.
- **Animatsiyali Tech Stack (`TechStack.jsx`)**: Framer Motion `staggerChildren` animatsiyasi, skroll qilinganda silliq paydo boʻluvchi texnologiyalar grid paneli.
- **Kontakt Boʻlimi (`ContactSection.jsx`)**: "Open for freelance" statusi, ijtimoiy tarmoqlar (Telegram, GitHub, LinkedIn, Email) va chiroyli shaffof forma (focus ring effekti bilan).

## Ishga tushirish (Getting Started)

Lokal serverni ishga tushirish uchun:

```bash
npm run dev
```

Brauzerda oching: [http://localhost:3000](http://localhost:3000)

## Loyiha Tuzilishi

```
├── app/
│   ├── globals.css          # Tailwind, scrollbar va glassmorphism stillari
│   ├── layout.jsx           # Asosiy layout va neon gradient orqa fon
│   └── page.jsx             # Portfolio bosh sahifasi (barcha bo'limlar integratsiyasi)
├── components/
│   ├── Navbar.jsx           # Prompt 2: Sticky Glass Navbar & Mobile Menu
│   ├── HeroSection.jsx      # Prompt 1: Hero Section & Dynamic CTA
│   ├── TechStack.jsx        # Prompt 4: Framer Motion Tech Stack
│   ├── ProjectsSection.jsx  # Prompt 3: Interaktiv Loyihalar filter bilan
│   ├── ContactSection.jsx   # Prompt 5: Kontakt formasi & Ijtimoiy tarmoqlar
│   └── Footer.jsx           # Glass footer komponenti
├── tailwind.config.js       # Tailwind konfiguratsiyasi
├── package.json             # Loyiha bog'liqliklari
└── jsconfig.json            # Path alias konfiguratsiyasi (@/*)
```

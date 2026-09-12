# Modern Glassmorphic Developer Portfolio & Admin CMS

Next.js 14+ (App Router), Tailwind CSS va Framer Motion yordamida yaratilgan zamonaviy, interaktiv va boshqariladigan dasturchi portfoliosi.

## Asosiy Xususiyatlar
- **Ultra-modern Dark Mode**: `#0d0f17` fon rangi va orqa fonda sekin porlab turuvchi neon gradient yorugʻliklar (`blur-[120px]`).
- **Glassmorphism effekti**: `backdrop-blur-md`, shaffof kartalar (`bg-white/[0.03]`), chegaralar (`border-white/10`) va hover neon glow.
- **Admin Panel & Loyihalar Boshqaruvi (`/admin`)**:
  - Parol va login bilan himoyalangan (`/admin/login`).
  - Yangi loyihalarni qoʻshish (Add), tahrirlash (Edit) va oʻchirish (Delete) imkoniyati.
  - Loyiha nomi, tavsifi, toifalar (Next.js, React, Fullstack, API va h.k.), texnologiya teglari, demo va GitHub havolalari, gradient ranglari.
  - Oʻzgarishlar darhol saytda aks etadi va `data/projects.json` faylida saqlanadi.
- **Ultra-zamonaviy Loading Ekranı (`loading.jsx`)**: Sahifalar yuklanishida chiquvchi aylanuvchi neon halqalar va brend indikatori.
- **Sticky Glass Navbar (`Navbar.jsx`)**: `'use client'`, sticky `top-4`, `rounded-2xl`, mobil hamburger menyu, toʻgʻridan-toʻgʻri Admin tugmasi va glowing "Get in touch" tugmasi.
- **Hero Boʻlimi (`HeroSection.jsx`)**: "Available for new opportunities" status nishoni, sarlavha, CTA tugmalar va tajriba koʻrsatkichlari.
- **Interaktiv Loyihalar Paneli (`ProjectsSection.jsx`)**: Dinamik maʼlumotlar, kategoriya boʻyicha filterlash, hover neon border va live demo/GitHub linklar.
- **Animatsiyali Tech Stack (`TechStack.jsx`)**: Framer Motion `staggerChildren` animatsiyasi, skroll qilinganda silliq paydo boʻluvchi kartalar.
- **Kontakt Boʻlimi (`ContactSection.jsx`)**: "Open for freelance" statusi, ijtimoiy tarmoqlar (Telegram, GitHub, LinkedIn, Email) va chiroyli shaffof forma (focus ring effekti bilan).

---

## Admin Tizimiga Kirish Maʼlumotlari

Admin panelga kirish uchun:
- **URL manzili:** [http://localhost:3000/admin/login](http://localhost:3000/admin/login) yoki yuqori navbardagi **Admin** tugmasi
- **Standart Login:** `admin`
- **Standart Parol:** `admin123`

---

## Ishga tushirish (Getting Started)

Lokal serverni ishga tushirish uchun:

```bash
npm run dev
```

Brauzerda oching: [http://localhost:3000](http://localhost:3000)

## Loyiha Tuzilishi

```
├── app/
│   ├── admin/
│   │   ├── login/page.jsx   # Admin Login sahifasi
│   │   └── page.jsx         # Admin Dashboard (Loyihalar CRUD)
│   ├── api/
│   │   ├── auth/route.js    # Login, sessiya va logout API
│   │   └── projects/route.js# Loyihalarni saqlash va boshqarish API
│   ├── globals.css          # Tailwind, scrollbar va glassmorphism stillari
│   ├── layout.jsx           # Asosiy layout va neon gradient orqa fon
│   ├── loading.jsx          # Glassmorphic neon loading ekrani
│   └── page.jsx             # Asosiy portfolio bosh sahifasi
├── components/
│   ├── Navbar.jsx           # Sticky Glass Navbar, Admin link & Mobile Menu
│   ├── HeroSection.jsx      # Hero Section & Dynamic CTA
│   ├── TechStack.jsx        # Framer Motion Tech Stack
│   ├── ProjectsSection.jsx  # Dinamik loyihalar paneli & filter
│   ├── ContactSection.jsx   # Kontakt formasi & Ijtimoiy tarmoqlar
│   └── Footer.jsx           # Glass footer komponenti
├── data/
│   └── projects.json        # Loyihalar ma'lumotlar bazasi fayli
├── tailwind.config.js       # Tailwind konfiguratsiyasi
├── package.json             # Loyiha bog'liqliklari
└── jsconfig.json            # Path alias konfiguratsiyasi (@/*)
```

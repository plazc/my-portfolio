# 🚀 Ahmet Zekeriya Devran — Personal Portfolio

A modern, high-performance, and visually vibrant personal portfolio website built with **Next.js 16 (App Router)**, **React 19**, **Tailwind CSS v4**, and **Framer Motion**.

Preview in: https://ahmet.se

Designed with a sleek **light mode glassmorphism theme**, warm gradient accents, micro-interactions, and lightweight standalone production builds optimized for resource-constrained servers/VPS environments.

---

## ✨ Features

- **🎨 Modern Glassmorphism & Light Mode UI**: Vibrant mesh gradients, backdrop blurs, and sunset orange/warm color accents.
- **⚡ Fluid Animations**: Smooth page transitions, staggered list entrances, interactive card hovers, and floating hero elements powered by **Framer Motion**.
- **📱 Fully Responsive**: Custom layout supporting mobile navigation dropdowns and persistent desktop sidebars.
- **🛠️ Self-Host & Resource-Optimized**: 
  - Next.js **standalone output mode** for minimal memory usage.
  - Multi-stage **Dockerfile** & `docker-compose` ready for effortless container deployment.
  - Streamlined production build process avoiding high CPU/RAM usage during deployment.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router & Turbopack)
- **UI Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) & Vanilla CSS Mesh Gradients
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Containerization**: [Docker](https://www.docker.com/) & Docker Compose

---

## 📂 Project Structure

```text
my-portfolio/
├── public/                 # Static assets (images, favicon, profile photo)
│   └── me.jpg              # Profile picture
├── src/
│   ├── app/
│   │   ├── globals.css     # Design tokens, CSS variables, and mesh background
│   │   ├── layout.tsx      # Root layout wrapper
│   │   └── page.tsx        # Hero, Expertise, Experience, Education & Achievements
│   ├── components/
│   │   ├── MainLayout.tsx  # Application layout container
│   │   ├── Sidebar.tsx     # Desktop glassmorphism sidebar
│   │   └── MobileNav.tsx   # Mobile navigation header & animated drawer
│   └── data/
│       └── resume.ts       # Centralized resume & personal information data
├── Dockerfile              # Multi-stage optimized Docker build definition
├── docker-compose.yml      # Container orchestration configuration
└── next.config.ts          # Next.js build & standalone output config
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: v18.x or higher
- **npm** / **yarn** / **pnpm**

### Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/plazc/ahmet-portfolio.git
   cd ahmet-portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **View in browser:**
   Open [http://localhost:3000](http://localhost:3000)

---

## 🐳 Production & Server Deployment

This repository is optimized to build and run smoothly on small servers/VPS without consuming excessive CPU or RAM.

### Option 1: Docker Compose (Recommended)

Run the containerized application with a single command:

```bash
docker-compose up -d --build
```

The app will be running in production mode on port `3000`.

### Option 2: Docker Build & Run

```bash
# Build Docker image
docker build -t ahmet-portfolio .

# Run container
docker run -d -p 3000:3000 --name ahmet-portfolio ahmet-portfolio
```

### Option 3: Manual Standalone Build

```bash
# Create production build
npm run build

# Start production server
npm run start
```

---

## ✏️ Customization

- **Updating Portfolio Info**: Edit `src/data/resume.ts` to update your contact details, bio, tech stack, experience, and education.
- **Profile Image**: Replace `public/me.jpg` with your own profile photo.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

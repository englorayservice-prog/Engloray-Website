# 🌌 Engloray Learning — Premium Educational & Tech Platform

Engloray is a high-fidelity, interactive single-page web application bridging the gap between tech-company developer pipelines and career learning paths. Combining modern SaaS design aesthetics with futuristic interactive physics, it presents an "Antigravity UI" experience designed to captivate prospective students and showcase educational offerings.

---

## ✨ Features & Architecture

### 1. 🌍 WebGL Starfield & Earth Intro
* High-performance Three.js background canvas rendering an interactive, scroll-to-zoom Earth globe and starfield.
* Smooth GSAP-driven scroll fade-outs that unlock the main dashboard view as the user scrolls.

### 2. 🧸 Interactive 3D Collectible Card Showcase
* A "ToonHub-style" 3D collectible-box carousel for Interactive Internships.
* Cards tilt dynamically based on real-time cursor coordinates and feature perspective rotation (`rotateY` variants) during carousel navigation.
* Responsive sizing updates map cards correctly on viewports ranging from small mobile phones to high-resolution desktop displays.
* Integrated mobile fallback to prevent hover/tilt processing conflicts on touch devices.

### 3. ⚖️ Draggable Before-After Journey Slider
* Interactive comparison slider measuring student progression.
* Drag/scroll physics linked to Framer Motion values.
* Dynamic circular gauges tracking IT industry readiness (0% Legacy State vs. 99% Engloray Certified).

### 4. 🎨 Hybrid Premium Educational Theme
* Tailored design system balancing readability with cinematic animations.
* **Core Body Sections** (About, Programs, Mentors, Testimonials, FAQ): Crisp White backgrounds with Deep Navy Blue text for optimal reading contrast.
* **Impact Visual Sections** (Intro, Hero, 3D Internships Carousel, CTA, Footer): Dark Deep Navy Blue backdrops (`#0a1128`) featuring vibrant Sky Blue glows (`#0ea5e9`) and code-terminal frames.

### 5. 👥 Continuous Testimonials Marquee
* Endless-looping horizontal scroller displaying student feedback.
* Automatically pauses on user hover for readable interaction.

### 6. 📝 Responsive Admission Portal
* Overlay modal with full form validations (name, email, and 10-digit phone validations).
* Submitting animations, loading spinner feedback, and custom interactive confetti bursts on success.
* Complete screen-reader layout variables (`aria-live`, `aria-modal`) for accessibility.

---

## 🛠️ Tech Stack

* **Core Framework**: React (with JSX / ES6+)
* **Build System**: Vite (Fast HMR & asset bundler)
* **Styling**: Tailwind CSS (PostCSS pipeline) & Custom Vanilla CSS
* **Animations**: Framer Motion, GSAP (GreenSock Animation Platform)
* **3D Visuals**: Three.js (WebGL Earth Starfield)
* **Configuration**: TypeScript (`tsconfig.json` configurations)

---

## 📁 Directory Structure

```bash
new page/
├── public/                 # Static assets (logos, video assets, MP4s)
├── src/
│   ├── assets/             # Images and global icons
│   ├── components/         # Interactive UI Components
│   │   ├── ApplyModal/     # Admission Portal Modal with confetti
│   │   ├── CTA/            # Deep navy Call-To-Action layout
│   │   ├── EntryIntroAnimation/ # WebGL starfield and Earth entry
│   │   ├── FAQ/            # Accordion answers
│   │   ├── Footer/         # Double column footer
│   │   ├── Hero/           # Glassmorphism header with floating widgets
│   │   ├── InternshipsInteractive/ # 3D ToonHub-style toy box cards
│   │   ├── Journey/        # Before/after drag comparisons
│   │   ├── Mentors/        # Instructors profile snaps
│   │   ├── Programs/       # Courses & Internships grid panels
│   │   └── Testimonials/   # Infinite marquee scroller
│   ├── Pages/              # Page layouts
│   │   └── TechGroupSection/AboutSection/ # Counters & expertise
│   ├── App.jsx             # Main Coordinator
│   ├── index.css           # Design system tokens and globals
│   └── main.jsx            # DOM entry mount
├── tailwind.config.js      # Custom theme color maps & animations
├── package.json            # Core script & dependency manifest
└── vite.config.js          # Vite rollup configs
```

---

## 🚀 Getting Started

### Prerequisites
* [Node.js](https://nodejs.org/) (v16.0.0 or higher recommended)
* `npm` or `yarn` package managers

### Installation
1. Clone the repository and navigate to the project directory:
   ```bash
   cd "new page"
   ```
2. Install the required dependencies:
   ```bash
   npm install
   ```

### Development Server
Run the local Vite HMR server:
```bash
npm run dev
```
The application will run on [http://localhost:5173/](http://localhost:5173/).

### Production Build
Build the optimized application bundle:
```bash
npm run build
```
The output assets will be written to the `dist/` directory, ready to be deployed to static hosting providers (Netlify, Vercel, Surge, or AWS S3).

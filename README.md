# SoCal Power Grid

SoCal Power Grid is a modern web application for managing and presenting power-grid related services, information, and interactive experiences.

The application is built with Next.js and React and uses GSAP to provide rich, scroll-driven interactions and visual transitions while maintaining a structured, component-driven architecture.

**Production:** https://socalpowergrid.com

---

## Overview

The application provides a responsive web experience across desktop and mobile devices, with a strong focus on:

- Clear information architecture
- Interactive and animated user experiences
- Responsive layouts
- Reusable React components
- Type-safe application development
- Form handling and validation
- Maintainable styling and UI patterns

The frontend is structured to keep presentation, reusable behavior, and application-level concerns separated.

---

## Technology Stack

### Application

- **Next.js 16**
- **React 19**
- **TypeScript 5**

### Styling

- **Sass**
- **PostCSS**
- Responsive CSS architecture

### Animation & Interaction

- **GSAP**
- **@gsap/react**
- **ScrollTrigger**
- **TextPlugin**

### Forms & Validation

- **React Hook Form**
- **Zod**

### HTTP

- **Axios**

### Deployment

- **Vercel**

---

## Project Structure

```text
src/
├── app/
│   ├── (main)/
│   ├── (legal)/
│   └── ...
│
├── components/
│   ├── common/
│   └── ...
│
├── hooks/
│   ├── common/
│   └── ...
│
├── styles/
│   └── ...
│
├── utils/
│   └── ...
│
└── ...
```

### App Router

The application uses the Next.js App Router.

Route groups are used to organize different application layouts without changing the resulting URL structure.

The main application layout provides shared navigation and footer components, while legal routes use a separate layout where those elements are not required.

---

## Component Architecture

The frontend follows a component-driven architecture.

Components are primarily responsible for rendering and composition, while reusable behavior is extracted into custom hooks.

```text
Component
    │
    ├── receives props / refs
    │
    └── renders UI

Custom Hook
    │
    ├── manages behavior
    ├── manages side effects
    └── manages reusable interaction logic
```

This keeps components focused and makes complex behavior easier to maintain and reuse.

---

## Animation Architecture

GSAP is used for application-wide interactive experiences and complex motion.

GSAP plugins are registered through a shared utility:

```ts
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import TextPlugin from "gsap/TextPlugin";

gsap.registerPlugin(useGSAP, ScrollTrigger, TextPlugin);

export default gsap;
```

Animation behavior is implemented through custom hooks rather than placing large animation timelines directly inside presentation components.

### Scroll-Driven Experiences

Complex sections use coordinated GSAP timelines with `ScrollTrigger`.

Where multiple elements participate in a single scroll experience, the parent container controls the scroll progression and child elements are animated within the same timeline.

This keeps pinning and scroll progression centralized and avoids competing ScrollTrigger instances.

### Animation Lifecycle

Animations are scoped through `useGSAP` and cleaned up when components are unmounted or relevant dependencies change.

This is particularly important for client-side navigation, where components can be mounted and updated without a full page reload.

---

## Responsive Design

The application is designed for desktop and mobile environments.

Responsive behavior is implemented through:

- Sass media queries
- Adaptive layouts
- Mobile navigation
- Responsive typography
- Responsive imagery
- Viewport-aware interactions
- Animation adjustments where appropriate

Interactive behavior is designed with different input methods and viewport sizes in mind.

---

## Forms & Validation

Form handling uses **React Hook Form** with **Zod** for schema-based validation.

Validation logic is kept separate from presentation components so form rules remain reusable and maintainable.

---

## Styling

Sass is used as the primary styling solution.

The styling approach focuses on:

- Component-level styles
- Reusable patterns
- Responsive behavior
- Consistent naming
- Limited global styling
- Separation between layout and component concerns

PostCSS is used as part of the CSS processing pipeline.

---

## Performance

Performance considerations are particularly important for animation-heavy sections.

The application uses:

- Scoped GSAP animations
- Proper animation cleanup
- React refs for animation targets
- Controlled scroll-driven animation
- Next.js image optimization
- Responsive image sizing
- Limited client-side logic where possible

Animation workloads are designed to avoid unnecessary DOM queries and excessive scroll processing.

---

## Accessibility

The application follows accessible HTML and interaction practices where applicable.

Key considerations include:

- Semantic HTML
- Keyboard-accessible controls
- Appropriate links and buttons
- Accessible navigation
- Focus states
- Meaningful heading hierarchy
- Responsive interaction patterns

Animations are intended to enhance the interface without being required to understand its content.

---

## Development

### Prerequisites

- Node.js
- npm

### Installation

Clone the repository:

```bash
git clone https://github.com/arefkhandantabrizi/socal.git
```

Navigate to the project directory:

```bash
cd socal
```

Install dependencies:

```bash
npm install
```

### Development Server

Start the development server:

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:3000
```

---

## Available Scripts

### Development

```bash
npm run dev
```

Starts the Next.js development server.

### Production Build

```bash
npm run build
```

Creates an optimized production build.

### Production Server

```bash
npm run start
```

Starts the application using the production build.

### Linting

```bash
npm run lint
```

Runs the project's ESLint configuration.

---

## Deployment

The application is deployed through Vercel.

The production deployment is available at:

https://socalpowergrid.com

---

## Engineering Principles

The frontend follows common software engineering principles including:

- **Separation of Concerns**
- **Single Responsibility**
- **DRY**
- **KISS**
- **YAGNI**
- **Type Safety**
- **Reusable Abstractions**
- **Explicit Component Responsibilities**
- **Predictable Side Effects**

Abstractions are introduced where they provide meaningful value rather than adding layers purely for the sake of abstraction.

---

## Repository Guidelines

When extending the application:

1. Keep components focused on presentation and composition.
2. Extract reusable behavior into hooks where appropriate.
3. Keep animation logic scoped and lifecycle-aware.
4. Prefer refs for direct animation targets.
5. Maintain strict TypeScript types.
6. Keep validation logic separate from UI components.
7. Reuse existing components and patterns before introducing new abstractions.
8. Consider responsive behavior when adding new UI.
9. Preserve accessibility when implementing interactive elements.
10. Avoid unnecessary dependencies and complexity.

---

## License

Proprietary.

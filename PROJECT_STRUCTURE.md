# 📁 Project Structure & File Guide

Complete overview of all project files and their purposes.

## Root Level Files

```
project-root/
├── index.html              # Main HTML entry point
├── vite.config.js          # Vite build configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── postcss.config.js       # PostCSS configuration
├── package.json            # Project dependencies & scripts
├── .env.example            # Environment variables template
├── .gitignore              # Git ignore rules
├── README.md               # Main documentation
├── QUICKSTART.md           # Quick start guide
├── COMPONENTS.md           # Component documentation
└── DEPLOYMENT.md           # Deployment guide
```

### Configuration Files Explained

#### `index.html`
- Entry HTML file for the React app
- Contains meta tags for SEO
- Links to Google Fonts
- Viewport configuration for mobile

**When to edit:**
- Change page title
- Add meta tags for SEO
- Include external scripts
- Change favicon

#### `vite.config.js`
- Build tool configuration
- Development server settings
- Port configuration (3000)
- Build optimization settings

**When to edit:**
- Change dev server port
- Add plugins
- Modify build output

#### `tailwind.config.js`
- Tailwind CSS theme configuration
- Custom colors definition
- Font configuration
- Custom animations
- Spacing values

**When to edit:**
- Change brand colors
- Add new fonts
- Create custom animations
- Modify spacing scale

#### `postcss.config.js`
- Tailwind and Autoprefixer setup
- CSS processing pipeline

**Rarely needs editing**

#### `package.json`
- All project dependencies
- NPM scripts
- Project metadata

**When to edit:**
- Add new dependencies: `npm install package-name`
- Never manually edit - use npm commands
- Update scripts if needed

---

## Source Code Structure

```
src/
├── components/
│   ├── Navbar.jsx              # Navigation bar
│   ├── HeroSection.jsx         # Hero section
│   ├── SuccessStats.jsx        # Stats display
│   ├── StudentResults.jsx      # Student results cards
│   ├── MentorStory.jsx         # About/story section
│   ├── Programs.jsx            # Pricing plans
│   ├── Roadmap.jsx             # 90-day roadmap
│   ├── Testimonials.jsx        # Video testimonials
│   ├── FreeResources.jsx       # Free resources section
│   ├── FAQ.jsx                 # FAQ accordion
│   ├── ContactForm.jsx         # Contact form
│   ├── Footer.jsx              # Footer
│   └── CountUp.jsx             # Animated counter utility
├── hooks/
│   └── useInView.js            # Intersection observer hook
├── App.jsx                     # Main app component
├── main.jsx                    # React DOM render
└── index.css                   # Global styles
```

### Component Files Detailed

#### `Navbar.jsx` (185 lines)
**Purpose:** Navigation bar with mobile menu

**Key Features:**
- Fixed positioning
- Mobile hamburger menu
- Smooth scroll navigation
- WhatsApp CTA button

**Customization:** Logo, nav links, WhatsApp number

**Dependencies:** framer-motion, react-icons, useState

---

#### `HeroSection.jsx` (140 lines)
**Purpose:** Full-screen hero section

**Key Features:**
- Animated gradient background
- Trust badges
- Professional mentor image
- CTA buttons

**Customization:** Headline, badges, CTA text

**Dependencies:** framer-motion, useInView

---

#### `SuccessStats.jsx` (60 lines)
**Purpose:** Display key statistics

**Key Features:**
- Animated counters
- Responsive grid
- Hover effects

**Customization:** Stats values and labels

**Dependencies:** CountUp component, useInView

---

#### `StudentResults.jsx` (120 lines)
**Purpose:** Success stories display

**Key Features:**
- Result cards
- Salary growth animation
- Star ratings
- Company badges

**Customization:** Student data, companies, salaries

**Dependencies:** react-icons, framer-motion, useInView

---

#### `MentorStory.jsx` (100 lines)
**Purpose:** Why choose us section

**Key Features:**
- Three key highlights
- Animated images
- Benefit listing

**Customization:** Highlights, description

**Dependencies:** framer-motion, react-icons, useInView

---

#### `Programs.jsx` (160 lines)
**Purpose:** Pricing and program options

**Key Features:**
- 3-tier pricing
- Feature lists
- Popular badge
- Hover animations

**Customization:** Pricing, features, popular plan

**Dependencies:** framer-motion, react-icons, useInView

---

#### `Roadmap.jsx` (130 lines)
**Purpose:** 90-day transformation roadmap

**Key Features:**
- 4-week timeline
- Alternating layout
- Animated icons
- Milestone steps

**Customization:** Steps, titles, descriptions

**Dependencies:** framer-motion, useInView

---

#### `Testimonials.jsx` (150 lines)
**Purpose:** Video testimonials carousel

**Key Features:**
- Video carousel
- Star ratings
- Navigation arrows
- Dot indicators

**Customization:** Testimonials, video URLs

**Dependencies:** framer-motion, react-icons, useState, useInView

---

#### `FreeResources.jsx` (140 lines)
**Purpose:** Free resources and newsletter

**Key Features:**
- Resource cards
- Color gradients
- Newsletter signup
- Icon display

**Customization:** Resources, download links

**Dependencies:** framer-motion, react-icons, useInView

---

#### `FAQ.jsx` (160 lines)
**Purpose:** Frequently asked questions

**Key Features:**
- Accordion collapse/expand
- Smooth animations
- Active state

**Customization:** FAQ items

**Dependencies:** framer-motion, react-icons, useState, useInView

---

#### `ContactForm.jsx` (180 lines)
**Purpose:** Contact form with validation

**Key Features:**
- Form validation (react-hook-form)
- Error messages
- Success toasts
- WhatsApp quick contact

**Customization:** Form fields, validation rules

**Dependencies:** react-hook-form, react-hot-toast, framer-motion, useInView

---

#### `Footer.jsx` (120 lines)
**Purpose:** Footer with links and social media

**Key Features:**
- Multiple link sections
- Social media icons
- Scroll-to-top button
- Copyright auto-update

**Customization:** Links, social URLs

**Dependencies:** framer-motion, react-icons

---

#### `CountUp.jsx` (25 lines)
**Purpose:** Animated counter utility

**Usage:** `<CountUp end={5000} duration={2} />`

**Features:**
- Smooth number counting
- Customizable duration
- Formatted numbers with commas

---

### Hook Files

#### `useInView.js` (20 lines)
**Purpose:** Detect when element enters viewport

**Usage:**
```javascript
const { ref, inView } = useInView()
```

**Features:**
- Intersection Observer API
- Configurable threshold
- Once-per-element detection

**Used By:** All major sections for lazy animations

---

### Style Files

#### `index.css` (180 lines)
**Purpose:** Global styles and Tailwind imports

**Contains:**
- Tailwind directives
- Custom scrollbar styling
- Utility classes
- Custom animations
- Button styles
- Typography classes

**Key Utilities:**
- `.gradient-text` - Gradient text
- `.card-shadow` - Card shadow
- `.btn-primary` - Blue button
- `.section-padding` - Standard padding
- `.heading-1`, `.heading-2`, `.heading-3` - Typography

---

### Core App Files

#### `App.jsx` (35 lines)
**Purpose:** Main application component

**Imports:** All components
**Includes:** Toaster for notifications
**Structure:** Component order = page order

**Edit To:** Add/remove sections, change order

#### `main.jsx` (10 lines)
**Purpose:** React DOM entry point

**Should Not Edit:** Unless changing root element

---

## Build Output

When you run `npm run build`, files are created in:

```
dist/
├── index.html           # Minified HTML
├── assets/
│   ├── main-abc123.js   # Minified JavaScript
│   ├── main-xyz789.css  # Minified CSS
│   └── vendor-...js     # Dependencies
```

**File Sizes (Expected):**
- Total bundle: ~200KB gzipped
- JS: ~150KB gzipped
- CSS: ~30KB gzipped

These files are served to users in production.

---

## Development Workflow

### 1. Start Development
```bash
npm run dev
# Opens http://localhost:3000
```

### 2. Make Changes
- Edit any component in `src/components/`
- Edit global styles in `src/index.css`
- Browser auto-refreshes

### 3. Build for Production
```bash
npm run build
# Creates optimized dist/ folder
```

### 4. Deploy
```bash
# Option 1: Vercel
vercel

# Option 2: Netlify (drag dist/ folder)
# Option 3: Other hosts (copy dist/ contents)
```

---

## File Size Reference

```
Typical Component Size:
- Small (Navbar, Footer): 100-150 lines
- Medium (Programs, FAQ): 150-180 lines
- Large (Testimonials, ContactForm): 180-200 lines
- Hooks: 20-30 lines

Total Project Size:
- Source code: ~2,500 lines
- Production bundle: ~200KB gzipped
```

---

## Adding New Components

### Template

```javascript
// src/components/NewComponent.jsx
import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

export default function NewComponent() {
  const { ref, inView } = useInView()

  return (
    <section className="section-padding">
      <div className="section-max-width">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
        >
          Your content here
        </motion.div>
      </div>
    </section>
  )
}
```

### Add to App.jsx

```javascript
import NewComponent from './components/NewComponent'

function App() {
  return (
    <>
      {/* ... other components ... */}
      <NewComponent />
      <Footer />
    </>
  )
}
```

---

## Dependencies Map

```
React
├── react-hook-form (ContactForm)
├── react-hot-toast (Notifications)
├── react-icons (All icons)
│   ├── Navbar
│   ├── MentorStory
│   ├── Programs
│   ├── Testimonials
│   ├── FreeResources
│   ├── FAQ
│   ├── ContactForm
│   └── Footer
└── framer-motion (Animations)
    ├── All components
    └── Smooth interactions

Vite
├── Dev server
├── Hot reload
└── Production build

Tailwind CSS
├── Styling (all components)
├── Responsive design
└── Custom utilities

EmailJS (optional)
└── ContactForm integration
```

---

## Quick Reference

### Import Commonly Used Modules

```javascript
// Animations
import { motion } from 'framer-motion'

// Hook for InView animations
import { useInView } from '../hooks/useInView'

// Form handling
import { useForm } from 'react-hook-form'

// Icons
import { FaHeart, FaSmile } from 'react-icons/fa'

// Notifications
import toast from 'react-hot-toast'

// State
import { useState } from 'react'
```

### Common Patterns

**Animated Section:**
```javascript
const { ref, inView } = useInView()

<motion.div
  ref={ref}
  initial={{ opacity: 0, y: 20 }}
  animate={inView ? { opacity: 1, y: 0 } : {}}
>
```

**Button with Hover:**
```javascript
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="btn-primary"
>
```

**Form Field:**
```javascript
<input
  {...register('fieldName', { required: true })}
  placeholder="Placeholder"
  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200"
/>
```

---

This guide helps you understand the entire project structure and navigate the codebase efficiently!

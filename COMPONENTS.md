# Component Documentation

Detailed breakdown of each component with customization options.

## 1. Navbar Component

**File:** `src/components/Navbar.jsx`

### Features
- Fixed navigation with blur effect
- Mobile-responsive hamburger menu
- Smooth scroll navigation
- WhatsApp CTA button
- Sticky positioning

### Props
None (uses local state and config)

### Customization

**Change Navigation Links:**
```javascript
const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Programs', href: '#programs' },
  // Add more links here
]
```

**Update WhatsApp Number:**
```javascript
href="https://wa.me/918800000000?text=Hi..."
// Change 918800000000 to your number
```

**Change Logo:**
```javascript
<motion.div className="text-2xl font-bold gradient-text">
  MENTOR  {/* Change this text */}
</motion.div>
```

---

## 2. HeroSection Component

**File:** `src/components/HeroSection.jsx`

### Features
- Full-screen hero section
- Animated gradient background
- Trust badges (social proof)
- CTA buttons (call + WhatsApp)
- Floating avatar animation
- InView detection

### Key Elements
- Animated background shapes
- Professional mentor avatar (emoji)
- Eye-catching headline with gradient text
- Trust badges with icons

### Customization

**Change Headline:**
```javascript
<h1 className="heading-1 leading-tight">
  Transform Your <span className="gradient-text">Career</span> in 90 Days
</h1>
// Edit text and gradient span
```

**Update Trust Badges:**
```javascript
const trustBadges = [
  { icon: '⭐', text: 'Rated 4.9/5' },
  { icon: '👥', text: '5000+ Students' },
  { icon: '📈', text: '95% Success Rate' },
]
```

**Change Avatar:**
```javascript
<div className="text-6xl md:text-8xl">👨‍💼</div>
// Replace emoji with different one
```

---

## 3. SuccessStats Component

**File:** `src/components/SuccessStats.jsx`

### Features
- Animated counter component
- Grid layout for stats
- Hover scale effects
- Lazy loading with InView

### Data Structure
```javascript
const stats = [
  { value: 5000, suffix: '+', label: 'Successful Mentees' },
  // Add more stats
]
```

### Customization

**Edit Stats Values:**
```javascript
const stats = [
  { value: 10000, suffix: '+', label: 'Happy Students' },
  { value: 98, suffix: '%', label: 'Success Rate' },
  { value: 100, suffix: 'k+', label: 'Monthly Users' },
  { value: 1000, suffix: '+', label: 'Expert Mentors' },
]
```

---

## 4. StudentResults Component

**File:** `src/components/StudentResults.jsx`

### Features
- Interactive result cards
- Salary growth display with animation
- Star ratings
- Company badges
- Hover animations
- Grid responsive layout

### Data Structure
```javascript
const results = [
  {
    name: 'Priya Sharma',
    role: 'Software Engineer',
    company: 'Google',
    salary: '₹40L → ₹65L',
    image: '👩‍💼',
    rating: 5,
  },
]
```

### Customization

**Add Student Results:**
```javascript
{
  name: 'Your Name',
  role: 'Your Role',
  company: 'Company Name',
  salary: '₹XL → ₹YL',
  image: '👨‍💼', // Use any emoji
  rating: 5,
}
```

**Change Company Colors:**
```javascript
<div className="bg-secondary/10 rounded-lg px-3 py-2">
  {/* Edit background color */}
</div>
```

---

## 5. Programs Component

**File:** `src/components/Programs.jsx`

### Features
- 3-tier pricing cards
- Popular badge with animation
- Feature lists with checkmarks
- Hover scale effects
- Responsive grid

### Pricing Tiers
```javascript
const programs = [
  {
    name: 'Starter',
    price: '₹9,999',
    period: '/month',
    features: [...],
    popular: false,
  },
  {
    name: 'Professional',
    price: '₹24,999',
    features: [...],
    popular: true, // This one is highlighted
  },
  {
    name: 'Premium',
    price: '₹49,999',
    features: [...],
    popular: false,
  },
]
```

### Customization

**Edit Pricing:**
```javascript
price: '₹25,000' // Change amount
period: '/month' // or '/year', '/week'
```

**Add/Remove Features:**
```javascript
features: [
  '✓ Feature 1',
  '✓ Feature 2',
  // Add more features
]
```

**Change Popular Plan:**
```javascript
popular: true // Set to true on different plan
```

---

## 6. Testimonials Component

**File:** `src/components/Testimonials.jsx`

### Features
- Video carousel
- Auto-switching testimonials
- Star ratings
- Navigation arrows
- Dot indicators
- Smooth transitions

### Data Structure
```javascript
const testimonials = [
  {
    name: 'Name',
    role: 'Role at Company',
    image: '👩‍💼',
    rating: 5,
    text: 'Testimonial text...',
    videoUrl: 'https://www.youtube.com/embed/VIDEO_ID',
  },
]
```

### Customization

**Add Testimonials:**
```javascript
{
  name: 'John Doe',
  role: 'Software Engineer at Microsoft',
  image: '👨‍💼',
  rating: 5,
  text: 'Amazing program! Changed my career completely...',
  videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
}
```

**Change Video URLs:**
Get YouTube embed IDs: `youtube.com/embed/VIDEO_ID`

---

## 7. Roadmap Component

**File:** `src/components/Roadmap.jsx`

### Features
- 4-week timeline visualization
- Alternating layout on desktop
- Animated icons
- Milestone steps
- Responsive design

### Data Structure
```javascript
const roadmapSteps = [
  {
    week: 'Week 1-2',
    title: 'Assessment & Goal Setting',
    description: 'Description...',
    icon: '🎯',
  },
]
```

### Customization

**Edit Roadmap Steps:**
```javascript
{
  week: 'Week 1-4',
  title: 'Your Step Name',
  description: 'What happens in this phase',
  icon: '🚀', // Change emoji
}
```

---

## 8. FAQ Component

**File:** `src/components/FAQ.jsx`

### Features
- Accordion collapse/expand
- Smooth animations
- Active state management
- Responsive design
- Quick chat CTA

### Data Structure
```javascript
const faqs = [
  {
    question: 'Your question?',
    answer: 'Your detailed answer...',
  },
]
```

### Customization

**Add FAQ Items:**
```javascript
{
  question: 'Can I get a refund?',
  answer: 'Yes, we offer 30-day money-back guarantee if you\'re not satisfied.',
}
```

---

## 9. ContactForm Component

**File:** `src/components/ContactForm.jsx`

### Features
- Form validation (react-hook-form)
- Email & phone validation
- Error messages
- Success toasts
- WhatsApp quick contact
- Responsive design

### Form Fields
- Name (required, min 2 chars)
- Email (required, valid format)
- Phone (required, 10 digits)
- Message (required, min 10 chars)

### Customization

**Add Form Fields:**
```javascript
<input
  type="text"
  {...register('fieldName', {
    required: 'Error message',
    minLength: { value: 2, message: 'Too short' },
  })}
  placeholder="Placeholder..."
/>
```

**Change Validation Rules:**
Edit the `register()` options for each field.

**Update Contact Methods:**
```javascript
const contactMethods = [
  {
    icon: Mail,
    title: 'Email',
    value: 'your@email.com',
    action: 'mailto:your@email.com',
  },
]
```

---

## 10. FreeResources Component

**File:** `src/components/FreeResources.jsx`

### Features
- Resource cards with icons
- Color gradients per card
- Newsletter signup
- Download buttons
- Grid responsive layout

### Data Structure
```javascript
const resources = [
  {
    icon: BookOpen,
    title: 'Resource Name',
    description: 'What it includes',
    type: 'PDF Guide',
    color: 'from-blue-500 to-cyan-500',
  },
]
```

### Customization

**Add Resources:**
```javascript
{
  icon: Video, // or BookOpen, Download, etc.
  title: 'Your Resource',
  description: 'Brief description',
  type: 'PDF Guide', // or 'Video Course'
  color: 'from-purple-500 to-pink-500',
}
```

**Available Colors (Tailwind):**
```
from-blue-500 to-cyan-500
from-purple-500 to-pink-500
from-green-500 to-emerald-500
from-yellow-500 to-orange-500
from-red-500 to-rose-500
```

---

## 11. Footer Component

**File:** `src/components/Footer.jsx`

### Features
- Multiple link sections
- Social media icons
- Scroll-to-top button
- Responsive grid
- Year auto-update

### Customization

**Edit Footer Links:**
```javascript
const footerLinks = {
  Product: ['Features', 'Programs', 'Pricing', 'FAQ'],
  Company: ['About', 'Blog', 'Careers', 'Contact'],
  // Add more sections
}
```

**Update Social Links:**
```javascript
const socialLinks = [
  { icon: Twitter, url: 'https://twitter.com/yourhandle', label: 'Twitter' },
  { icon: Linkedin, url: 'https://linkedin.com/company/yours', label: 'LinkedIn' },
]
```

---

## Custom Hooks

### useInView Hook

**File:** `src/hooks/useInView.js`

Detects when element enters viewport for lazy animations.

**Usage:**
```javascript
const { ref, inView } = useInView()

<motion.div
  ref={ref}
  initial={{ opacity: 0 }}
  animate={inView ? { opacity: 1 } : {}}
>
  Content
</motion.div>
```

---

## Utility Components

### CountUp Component

**File:** `src/components/CountUp.jsx`

Animates number counting from 0 to target value.

**Usage:**
```javascript
<CountUp end={5000} duration={2} />
// Counts from 0 to 5000 over 2 seconds
```

---

## Styling Guide

### Available Utility Classes

```javascript
// Buttons
.btn-primary        // Blue button
.btn-secondary      // Bordered button

// Typography
.heading-1          // Largest heading
.heading-2          // Medium heading
.heading-3          // Small heading
.body-text          // Body text

// Effects
.gradient-text      // Gradient text color
.gradient-bg        // Gradient background
.blur-effect        // Backdrop blur
.card-shadow        // Card shadow
.hover-lift         // Lift on hover

// Layout
.section-padding    // Vertical padding
.section-max-width  // Max width container
```

### Responsive Breakpoints

```
sm: 640px
md: 768px
lg: 1024px
xl: 1280px
2xl: 1536px
```

Usage: `md:text-4xl` = 4xl text on medium and up

---

## Animation Patterns

### Fade In Animation
```javascript
<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.6 }}
>
  Content
</motion.div>
```

### Slide Up Animation
```javascript
initial={{ opacity: 0, y: 30 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6 }}
```

### Scale on Hover
```javascript
whileHover={{ scale: 1.05 }}
whileTap={{ scale: 0.95 }}
```

### Stagger Children
```javascript
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}
```

---

This component documentation helps you customize every aspect of the website!

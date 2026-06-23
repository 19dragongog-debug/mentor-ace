# 🚀 Quick Start Guide

Get the mentorship website running in 5 minutes!

## Step 1: Install Dependencies (1 min)

```bash
npm install
```

**What gets installed:**
- React 18.2 & React DOM
- Vite (build tool)
- Tailwind CSS (styling)
- Framer Motion (animations)
- React Icons (icons)
- React Hook Form (form handling)
- React Hot Toast (notifications)
- EmailJS (email service)

## Step 2: Setup Environment (1 min)

```bash
# Copy environment template
cp .env.example .env.local

# Edit .env.local and add your values
# Minimal setup: just update WhatsApp number
VITE_WHATSAPP_NUMBER=918800000000
```

## Step 3: Start Development Server (1 min)

```bash
npm run dev
```

**Output:**
```
VITE v5.0.8 ready in 250 ms

➜ Local:   http://localhost:3000/
➜ press h to show help
```

Click the link or open `http://localhost:3000` in your browser!

## Step 4: Make Changes (1 min)

Hot reload is automatic. Try editing:
- `src/App.jsx` - Main layout
- `src/components/HeroSection.jsx` - Hero section text
- `src/index.css` - Global styles

Changes appear instantly in browser!

## Step 5: Build for Production (1 min)

```bash
npm run build
```

Creates optimized files in `dist/` folder.

---

## 🎯 Key Files to Customize

### 1. Hero Section
**File:** `src/components/HeroSection.jsx` (Line 40-45)
```javascript
<h1 className="heading-1 leading-tight">
  Transform Your <span className="gradient-text">Career</span> in 90 Days
</h1>
```
✏️ Change headline text here

### 2. Pricing Plans
**File:** `src/components/Programs.jsx` (Line 10-36)
```javascript
const programs = [
  {
    name: 'Starter',
    price: '₹9,999',
    // ... edit pricing here
  },
]
```
✏️ Update prices and features

### 3. Testimonials
**File:** `src/components/Testimonials.jsx` (Line 10-33)
```javascript
const testimonials = [
  {
    name: 'Priya Sharma',
    text: 'The mentorship transformed...',
    // ... add more testimonials
  },
]
```
✏️ Add student testimonials

### 4. Contact Form
**File:** `src/components/ContactForm.jsx` (Line 15-25)
- EmailJS setup required for emails to work
- WhatsApp button automatically uses env variable

### 5. Colors & Branding
**File:** `tailwind.config.js` (Line 6-10)
```javascript
colors: {
  primary: '#1F2937',
  secondary: '#6366F1',
  accent: '#EC4899',
}
```
✏️ Change brand colors globally

---

## 📱 Test Responsiveness

In Chrome DevTools:
1. Press `F12`
2. Click device icon (top-left)
3. Select device (iPhone, iPad, Desktop)
4. Watch everything reflow perfectly

---

## 🌐 Deploy in 2 Minutes

### Vercel (Easiest)

```bash
npm install -g vercel
vercel login
vercel
```

Done! Your site is live and auto-deploys on git push.

### Netlify

```bash
npm run build
# Drag dist/ folder to Netlify dashboard
```

### GitHub Pages

```bash
npm run build
# Push dist/ to gh-pages branch
```

---

## ✅ Common Tasks

### Add New Section

1. Create `src/components/MySection.jsx`
2. Import in `src/App.jsx`
3. Add to JSX

### Change Font

Edit `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap">
```

Then update `tailwind.config.js`:
```javascript
fontFamily: {
  sans: ['Poppins', 'sans-serif'],
}
```

### Add Icons

From [React Icons](https://react-icons.github.io/react-icons/):
```javascript
import { FaHeart, FaStar } from 'react-icons/fa'
<FaHeart size={24} />
```

### Setup Analytics

Add to `index.html` before `</head>`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

---

## 🔗 Important Links

| Resource | Link |
|----------|------|
| Project Live | After deployment |
| Admin Panel | Update content in code |
| Analytics | Google Analytics (setup above) |
| Email Service | [EmailJS](https://www.emailjs.com) |
| Hosting | [Vercel](https://vercel.com) |

---

## 🎉 You're All Set!

Your premium mentorship website is ready to:
- ✅ Attract students
- ✅ Showcase results
- ✅ Take bookings
- ✅ Convert visitors

**Next Steps:**
1. Customize with your content
2. Test all forms and links
3. Deploy to Vercel
4. Setup analytics
5. Share with your audience!

---

**Need Help?** Check README.md for detailed documentation.

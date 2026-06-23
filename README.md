# Premium Mentorship Website

A modern, fully responsive premium mentorship platform built with React, Vite, Tailwind CSS, and Framer Motion. Features include interactive components, smooth animations, form validation, and WhatsApp integration.

## 🚀 Features

- ✨ **Modern UI/UX** - Apple/Stripe/Notion inspired design
- 🎯 **Fully Responsive** - Mobile, tablet, and desktop optimized
- 🎨 **Smooth Animations** - Framer Motion powered interactions
- 📱 **WhatsApp Integration** - Direct customer engagement
- 📧 **Email Forms** - Integrated contact forms with validation
- ⚡ **Fast Performance** - Vite powered, optimized builds
- 🔍 **SEO Ready** - Meta tags and optimized structure
- 📊 **Interactive Components** - Animated counters, carousels, and more

## 📁 Folder Structure

```
project-root/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── HeroSection.jsx
│   │   ├── SuccessStats.jsx
│   │   ├── StudentResults.jsx
│   │   ├── MentorStory.jsx
│   │   ├── Programs.jsx
│   │   ├── Roadmap.jsx
│   │   ├── Testimonials.jsx
│   │   ├── FreeResources.jsx
│   │   ├── FAQ.jsx
│   │   ├── ContactForm.jsx
│   │   ├── Footer.jsx
│   │   └── CountUp.jsx
│   ├── hooks/
│   │   └── useInView.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── package.json
├── .env.example
└── .gitignore
```

## 🛠 Installation

### 1. Clone or Download the Project

```bash
# Navigate to project directory
cd disha-mentor
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Setup Environment Variables

```bash
# Copy example env file
cp .env.example .env.local

# Update .env.local with your configuration
# Required for WhatsApp and Email integration
```

### 4. Start Development Server

```bash
npm run dev
```

The app will open at `http://localhost:3000`

## 🔧 Configuration

### Environment Variables (.env.local)

```env
# Email Service (EmailJS)
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key

# WhatsApp
VITE_WHATSAPP_NUMBER=918800000000

# Site Config
VITE_SITE_NAME=Premium Mentorship
VITE_SITE_URL=https://yoursite.com
```

### Setup EmailJS Integration

1. **Create Account** at [EmailJS](https://www.emailjs.com/)
2. **Get Credentials**:
   - Service ID: Create SMTP service
   - Template ID: Create email template
   - Public Key: Available in account settings
3. **Update .env.local** with your credentials
4. **Create Email Template** with these variables:
   - `{name}` - User's name
   - `{email}` - User's email
   - `{phone}` - User's phone
   - `{message}` - User's message

## 🚀 Development

### Available Commands

```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

### Component Structure

Each component includes:
- ✅ Responsive design (mobile-first)
- ✅ Framer Motion animations
- ✅ InView detection for lazy loading
- ✅ Accessibility features
- ✅ Performance optimized

### Key Components

#### HeroSection
- Full-screen hero with animated gradient background
- Trust badges
- WhatsApp and call-to-action buttons
- Floating mentor avatar

#### Programs
- 3-tier pricing model (Starter, Professional, Premium)
- Feature comparison
- Popular badge with animations
- Hover interactions

#### StudentResults
- Interactive result cards with salary growth
- Animated company badges
- Star ratings
- Career progression display

#### Testimonials
- Video carousel
- Star ratings
- Author information
- Navigation controls

#### ContactForm
- Form validation with react-hook-form
- Error messages
- Success toasts with react-hot-toast
- WhatsApp quick contact

## 📦 Dependencies

### Core
- **React** - UI framework
- **Vite** - Build tool
- **Tailwind CSS** - Styling

### Animations & UX
- **Framer Motion** - Advanced animations
- **React Icons** - Icon library
- **React Hot Toast** - Notifications

### Forms & Validation
- **React Hook Form** - Form management
- **EmailJS** - Email sending

## 🎨 Customization

### Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  primary: '#1F2937',
  secondary: '#6366F1',
  accent: '#EC4899',
  light: '#F9FAFB',
}
```

### Fonts
Default: Inter (via Google Fonts)
Edit `index.html` to change font

### Content
Update component content in `src/components/*`

## 🚀 Deployment

### Deploy to Vercel (Recommended)

#### Option 1: Using Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
vercel
```

#### Option 2: Using GitHub Integration

1. **Push to GitHub**
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/repo-name.git
git push -u origin main
```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Select your GitHub repo
   - Vercel auto-detects Vite configuration
   - Click "Deploy"

3. **Add Environment Variables**
   - In Vercel dashboard: Settings → Environment Variables
   - Add your `.env.local` variables
   - Redeploy

#### Option 3: Manual Build & Deploy

```bash
# Build production bundle
npm run build

# Output is in ./dist folder
# Upload dist folder to your hosting provider
```

### Other Hosting Options

**Netlify:**
```bash
npm run build
# Drag & drop dist folder to Netlify
```

**GitHub Pages:**
```bash
npm run build
# Push dist folder to gh-pages branch
```

**AWS S3 + CloudFront:**
```bash
npm run build
# Upload dist to S3 bucket configured for static hosting
```

### Pre-deployment Checklist

- [ ] Update metadata in `index.html` (title, description)
- [ ] Replace WhatsApp number with actual business number
- [ ] Setup EmailJS with email templates
- [ ] Test all forms and links
- [ ] Test on mobile devices
- [ ] Check loading performance
- [ ] Update favicon (replace in `index.html`)
- [ ] Setup custom domain

### Production Optimization

```bash
# Build is automatically optimized by Vite
npm run build

# Result: Minified, code-split bundles in dist/
```

#### What's Included:
- ✅ Code splitting for faster initial load
- ✅ CSS minification
- ✅ JavaScript minification
- ✅ Image optimization ready
- ✅ Lazy loading for images

## 🔐 Security Best Practices

1. **Never commit .env files** - Use `.env.example` template
2. **Validate all user input** - Already implemented in ContactForm
3. **Use HTTPS** - Required for production
4. **Sanitize email templates** - EmailJS handles this
5. **Rate limiting** - Configure in your email service
6. **CORS headers** - Vercel handles automatically

## 📱 Mobile Optimization

- Responsive grid systems (mobile-first)
- Touch-friendly buttons (min 44px)
- Optimized images for mobile
- Smooth scrolling
- Mobile navigation with hamburger menu

## 🎯 SEO Optimization

- Meta tags in `index.html`
- Semantic HTML structure
- Open Graph tags for social sharing
- Lighthouse score: 90+
- Mobile-friendly design

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Use different port
npm run dev -- --port 3001
```

### Build Errors
```bash
# Clear cache and reinstall
rm -rf node_modules
npm install
npm run build
```

### EmailJS Not Working
- Verify API keys in `.env.local`
- Check email template variables match form
- Test with dummy service first

### WhatsApp Links Not Working
- Ensure phone number is in correct format: `918800000000`
- Test link: `https://wa.me/918800000000`

## 📚 Additional Resources

- [React Docs](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/)
- [Vite Guide](https://vitejs.dev)
- [EmailJS Docs](https://www.emailjs.com/docs)

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Support

For issues or questions:
1. Check the troubleshooting section
2. Review component code comments
3. Test in development mode first
4. Check browser console for errors

---

**Happy Building! 🎉**

Made with ❤️ for the next generation of mentors and mentees.
#   m e n t o r - a c e  
 
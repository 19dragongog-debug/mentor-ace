🔧 **COMPLETE TROUBLESHOOTING & FIX GUIDE**

## 🚨 Error: MIME Type "text/jsx"

This error means the browser is trying to load a JSX file directly, which it doesn't understand.

---

## ✅ SOLUTION: Step-by-Step Fix

### Step 1: Kill Any Running Servers

```bash
# If you have anything running on port 3000, stop it
# Ctrl+C in the terminal running the server
```

### Step 2: Clear Node Modules & Reinstall

```bash
# Remove node_modules and lock file
rm -rf node_modules package-lock.json

# Or on Windows PowerShell:
rmdir node_modules -Force -Recurse
del package-lock.json

# Reinstall dependencies
npm install
```

### Step 3: Start the Vite Development Server

```bash
npm run dev
```

**Expected Output:**
```
  VITE v5.0.8  ready in 245 ms

  ➜  Local:   http://localhost:3000/
  ➜  press h to show help
```

### Step 4: Open Browser

Open http://localhost:3000 in your browser (NOT file:///)

---

## ⚠️ Common Mistakes (Avoid These!)

### ❌ MISTAKE 1: Using Live Server
**Problem:** Right-click on index.html > "Open with Live Server"
**Why it fails:** Live Server doesn't understand JSX/React/Vite
**Solution:** Use `npm run dev` instead

### ❌ MISTAKE 2: Opening file:// directly
**Problem:** Double-clicking index.html or dragging it to browser
**Why it fails:** Browser can't transform JSX modules
**Solution:** Use `npm run dev` which runs a proper dev server

### ❌ MISTAKE 3: Using Python HTTP Server
```bash
# ❌ DON'T DO THIS:
python -m http.server
http-server
python -m SimpleHTTPServer
```
**Why it fails:** These don't transform JSX
**Solution:** Use `npm run dev`

### ❌ MISTAKE 4: Opening dist/ folder
**Problem:** Running dev server then opening dist/index.html
**Why it fails:** dist/ is for production, dev server serves src/
**Solution:** Keep using http://localhost:3000

---

## 📋 Correct Workflow

```
1. npm install          ← Install dependencies once
2. npm run dev          ← Start dev server (ALWAYS this!)
3. Wait for "ready"     ← Server is running
4. Open http://localhost:3000  ← Let Vite serve it
5. Make changes         ← Hot reload works automatically
6. See updates live     ← No refresh needed!
```

---

## 🔍 Verification Checklist

Before running the app, verify:

- [ ] `index.html` exists in project root
- [ ] `src/main.jsx` exists
- [ ] `src/App.jsx` exists
- [ ] `package.json` has correct scripts
- [ ] `vite.config.js` has React plugin
- [ ] `node_modules/` folder exists (run `npm install` if not)
- [ ] No port conflicts on 3000

---

## ✨ File Verification

### ✅ index.html
```html
<script type="module" src="/src/main.jsx"></script>
```
(This should be the ONLY script tag)

### ✅ vite.config.js
```javascript
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  }
})
```

### ✅ package.json
```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview"
}
```

### ✅ src/main.jsx
```javascript
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

---

## 🆘 Still Getting Error? Troubleshoot:

### Check 1: Are you using npm run dev?
```bash
# In terminal, you should see:
npm run dev
# Then: "ready in XXX ms"
# Then: "Local: http://localhost:3000/"
```

### Check 2: Is there only ONE script tag?
Open `index.html` and ensure only this exists:
```html
<script type="module" src="/src/main.jsx"></script>
```
NO other `<script>` tags!

### Check 3: Check Terminal for Errors
When you run `npm run dev`, look for error messages in the terminal where you ran the command.

### Check 4: Check Browser Console
Press F12 and check Console tab for error messages

### Check 5: Port Conflict?
If port 3000 is in use:
```bash
# Change port in vite.config.js:
server: {
  port: 3001,  // Use 3001 instead
  open: true
}
```

### Check 6: Clear Browser Cache
- Press Ctrl+Shift+Del
- Select "All time"
- Check "Cached images and files"
- Click "Clear data"
- Refresh the page

---

## 📦 Production Build

When ready to deploy:

```bash
# Build for production
npm run build

# This creates optimized files in dist/
# Upload the dist/ folder to your hosting

# Test production build locally:
npm run preview
# Opens http://localhost:4173/
```

---

## 🎉 Success Indicators

When everything is working:

✅ Terminal shows "ready in XXX ms"
✅ Browser opens to http://localhost:3000
✅ Page loads with all content
✅ No red errors in browser console
✅ No yellow warnings about JSX
✅ Styles are loaded (page looks good)
✅ Animations work smoothly
✅ Hot reload works (change code → instant update)

---

## 💡 Quick Reference

| Task | Command |
|------|---------|
| Install deps | `npm install` |
| Start dev server | `npm run dev` |
| Build for prod | `npm run build` |
| Preview production | `npm run preview` |
| Kill server | `Ctrl+C` |

---

## 🚀 NOW YOU'RE READY!

Run this command:
```bash
npm run dev
```

Then open http://localhost:3000 in your browser.

**That's it! Everything should work perfectly!** ✨

🚨 **MIME TYPE ERROR - ROOT CAUSE DIAGNOSIS**

Error: "Expected a JavaScript-or-Wasm module script but the server responded with a MIME type of 'text/jsx'"

**ROOT CAUSE:** You're using Live Server, opening file:// directly, or not running the Vite dev server

**SOLUTION:** Always use `npm run dev` to start the proper development server

==========================================
INCORRECT WAYS (❌ These cause the error):
==========================================

❌ Live Server (Right-click > Open with Live Server)
❌ file:// protocol (Opening index.html directly)
❌ python -m http.server
❌ http-server
❌ Opening dist/ folder directly
❌ Any static file server without JSX support

==========================================
CORRECT WAY (✅):
==========================================

✅ npm run dev
✅ This starts Vite on http://localhost:3000
✅ Vite automatically handles JSX transformation
✅ Hot reload works perfectly
✅ All modules load correctly


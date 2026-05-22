# Cricket Learner AI - Direct Install App

This project is set up as a direct install app and can also be packaged for Google Play Store and macOS.

## What Is Ready

- `manifest.webmanifest` gives the app its name, icon, theme color, shortcuts, and standalone app display.
- `sw.js` caches the main app files so the learning screens can reopen quickly and work offline after first load.
- `icons/cricket-learner-icon.svg`, `icons/icon-192.png`, and `icons/icon-512.png` provide app icons.
- `index.html` includes install metadata for mobile and desktop browsers.
- The app includes search metadata for the `Cricket Learner AI` name, plus social preview metadata and structured app data.
- `app-config.js` gives one place to connect production services for AI, Razorpay payments, and backend APIs.
- The assistant answers any typed question with a cricket-first local fallback and can use a live AI endpoint for full open-ended answers.
- Voice mode lets supported browsers listen to spoken questions and read assistant replies aloud.
- The admin owner name is configured as `Cricket_321` in `app-config.js`; only that signed-in learner sees Admin access, then the owner creates the private password on first admin access.
- Owner sign-in opens the admin verification screen automatically. With the current config, signing in with `admin.cricketleanerai@gmail.com`, an email username of `Cricket_321`, such as `Cricket_321@example.com`, or creating the username `Cricket_321` counts as the owner login.
- The configured admin owner is protected from removal. If the admin was already in the removed-users list, the app restores admin access on load.
- Admin can generate a removed-user rejoin link. If a backend send endpoint is connected, Admin can send the link automatically; otherwise the app opens an email draft or copies the link.
- `server.js` can serve the app with basic security headers, `/robots.txt`, `/sitemap.xml`, and a branded `/cricket-learner-ai` redirect for hosted deployment.
- `package.json` includes `npm start` and `npm run check`.
- `app.js` registers the service worker, shows an Install app button when supported, opens Razorpay Checkout for Pro, and keeps Pro unlocks behind verified payment services.
- `PLAY_STORE_READY.md` and the `play-store/` folder prepare the app for Google Play packaging.
- `ANDROID_APP_READY.md`, `MAC_APP_READY.md`, `APPS_RELEASE_READY.md`, and `macos/electron/` prepare Android and macOS app packaging.

## How Users Install It

1. Host this folder on a secure website using HTTPS, or run `npm start` behind your hosting provider.
2. Open the website on the phone or computer.
3. Use the browser option called Install, Add to Home Screen, or Add to Dock.
4. The app opens like a normal app from the device home screen.

## How Google Opens The App

1. Deploy the app to a real HTTPS domain.
2. Start the server with `PUBLIC_URL=https://your-domain.com npm start` so Google sees the correct canonical URL, sitemap, and preview links.
3. Submit `https://your-domain.com/sitemap.xml` in Google Search Console.
4. After Google indexes it, people searching for `Cricket Learner AI` can open this app from the search result.

## Before Sharing Publicly

- Connect a secure backend for real login, admin-only access, user removal, AI responses, and learner data.
- Add your real owner email in `app-config.js` when you want admin access to follow your exact email login instead of the `Cricket_321` username/name.
- Connect Razorpay backend order creation and payment signature verification.
- Connect an email/SMS backend for fully automatic removed-user rejoin invites.
- Add a privacy policy page.
- Use HTTPS hosting so browsers allow installation and service worker caching.
- For Google Play Store release, use Google Play Billing for Pro Learning or keep Pro payment disabled in the Play build.

# Play Store Release Checklist

## Web App

- Deploy the app on HTTPS.
- Confirm `manifest.webmanifest` is reachable.
- Confirm `sw.js` is reachable.
- Confirm `privacy.html` is reachable and use its public URL in Play Console.
- Confirm icons load at `/icons/icon-192.png` and `/icons/icon-512.png`.
- Connect backend login, admin, AI assistant, and Razorpay verification.
- Add a privacy policy URL.
- For the Play Store build, do not use Razorpay for Pro Learning digital subscription purchases. Use Google Play Billing or release Pro as disabled/free-only until Play Billing is connected.

## Android Wrapper

- Use package name `com.cricketlearner.ai`.
- Generate Android project with Bubblewrap or Android Studio.
- Target Android 15 / API level 35 or higher.
- Create upload key.
- Build signed Android App Bundle (`.aab`).
- Add SHA-256 certificate fingerprint to `assetlinks.json`.
- Host `assetlinks.json` at `/.well-known/assetlinks.json`.
- Verify the TWA opens without browser address bar.
- Confirm the Play Store wrapper starts at `/?distribution=play-store`.

## Play Console

- Enroll in Play App Signing.
- Upload `.aab`.
- Add app name, short description, full description, app icon, screenshots, and feature graphic.
- Complete data safety.
- Add privacy policy.
- Complete content rating.
- Set pricing and countries.
- Run internal testing.
- If your developer account is a newly created personal account, run closed testing with at least 12 opted-in testers for 14 continuous days before applying for production.
- Move to open testing or production when ready and allowed by Play Console.

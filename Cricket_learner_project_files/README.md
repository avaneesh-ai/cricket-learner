# Cricket Learner AI

Cricket Learner AI is a cricket learning app that teaches from beginner level to advanced match thinking with role-based lessons, an AI assistant, quizzes, videos, mini games, Pro Learning, and owner-only admin access.

## Features

- Email sign-in and learner profile setup.
- Name, mobile number, username, and password onboarding.
- Player paths for all-rounder, batsman, and bowler.
- Batting lessons: defence, drives, strokes, lofted shots, shot selection, and match plans.
- Bowling lessons: fast bowling, spin bowling, line and length, variations, and pressure overs.
- AI assistant that answers cricket and general questions with voice mode support.
- Daily quiz: 5 questions for 10 marks.
- Weekly quiz: 15 questions for 30 marks.
- Videos section with YouTube learning cards.
- Mini games for batting, bowling, and pressure decisions.
- Past match stories and cricket history.
- Pro Learning plan prepared at `$50/month`.
- Razorpay-ready payment flow for the direct web app.
- Play Store build mode prepared for Google Play Billing.
- Admin-only dashboard for moderation and learner safety.
- Removed-user rejoin link flow.

## Admin Access

Current admin owner:

```text
Cricket_321
```

Admin email:

```text
admin.cricketleanerai@gmail.com
```

Signing in with that email opens the admin verification screen. The configured admin owner is protected from removal.

Admin restore link:

```text
file:///Users/chakra/Documents/Cricket_learner/index.html?rejoin=admin-owner
```

## Run Locally

Open directly:

```text
file:///Users/chakra/Documents/Cricket_learner/index.html
```

Or run the local server:

```bash
npm start
```

Then open:

```text
http://localhost:4173
```

## Checks

```bash
npm run check
```

Android template check:

```bash
npm run android:check
```

## Android App

Android packaging uses a Trusted Web Activity wrapper.

Main files:

- `ANDROID_APP_READY.md`
- `PLAY_STORE_READY.md`
- `play-store/twa-manifest.template.json`
- `play-store/assetlinks.template.json`
- `play-store/play-console-submission.md`

Before release, host the app on HTTPS, replace `REPLACE_WITH_YOUR_DOMAIN`, build a signed `.aab`, and upload it in Google Play Console.

## macOS App

macOS packaging uses Electron.

Install dependencies:

```bash
npm install
```

Run the Mac app:

```bash
npm run mac:dev
```

Build the Mac app:

```bash
npm run mac:build
```

For public Mac distribution, sign and notarize the app with an Apple Developer ID certificate.

## Payments

Direct web app:

- Razorpay is prepared for Pro Learning payment.
- Backend order creation and signature verification are required before real money can be accepted.

Google Play Store:

- Pro Learning digital subscriptions should use Google Play Billing.
- The Play Store wrapper starts with `/?distribution=play-store`, which disables Razorpay inside the Play build.

## Production Setup

Before public launch, connect:

- Secure backend login and account storage.
- Admin authorization on the backend.
- AI assistant endpoint for full live answers.
- Razorpay backend order creation and payment verification for web payments.
- Email/SMS backend for automatic rejoin links.
- Privacy policy URL.
- HTTPS hosting.

See:

- `PRODUCTION_SETUP.md`
- `DIRECT_APP_READY.md`
- `APPS_RELEASE_READY.md`

## Important

This project is ready for packaging, but final public release still needs your real hosting, backend services, signing keys, Google Play Console account, and Apple Developer signing/notarization for macOS.

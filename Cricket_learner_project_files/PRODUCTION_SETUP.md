# Cricket Learner AI - Production Setup

This app is no longer presented as a local-only build. It is structured as a direct install web app with production service hooks.

## Required Live Services

- Secure API backend for learner accounts, admin authorization, moderation, progress, and saved chat.
- AI assistant endpoint for full open-ended answers and live/current cricket knowledge.
- Razorpay backend endpoint to create orders and verify payment signatures before Pro Learning is unlocked.
- HTTPS hosting for install support and service worker caching.
- Static hosting or the included `server.js` behind a production HTTPS proxy.
- A public domain so Google and users can open the app from a real web address.

## Configure Services

Edit `app-config.js` during deployment:

```js
window.CRICKET_LEARNER_CONFIG = {
  environment: "production",
  apiBaseUrl: "https://your-api.example.com",
  aiAssistantEndpoint: "https://your-api.example.com/ai/cricket-assistant",
  razorpayKeyId: "rzp_live_your_key",
  supportEmail: "support@example.com",
  payments: {
    razorpayCheckoutScript: "https://checkout.razorpay.com/v1/checkout.js",
    createOrderEndpoint: "https://your-api.example.com/payments/razorpay/create-order",
    verifyPaymentEndpoint: "https://your-api.example.com/payments/razorpay/verify-payment",
    proPlan: {
      planId: "pro-learning-monthly",
      displayPrice: "$50/month",
      amount: 5000,
      currency: "USD",
      billingCycle: "monthly"
    }
  },
  moderation: {
    sendRejoinLinkEndpoint: "https://your-api.example.com/admin/send-rejoin-link"
  },
  adminOwner: {
    name: "your-owner-name",
    email: "owner@example.com",
    loginAliases: ["your-owner-name"],
    showAdminAfterOwnerLogin: true,
    allowFirstPasswordSetup: true
  },
  features: {
    directInstall: true,
    offlineCache: true,
    livePayments: true,
    liveAiAssistant: true,
    liveRejoinInvites: true,
    secureAdminBackend: true
  }
};
```

## AI Assistant And Voice

The app now has two assistant layers:

- Local assistant fallback: answers every typed question with a helpful cricket-first structure, including maths, app help, study help, fitness basics, writing help, and cricket topics.
- Live AI assistant: when `aiAssistantEndpoint` is set and `features.liveAiAssistant` is `true`, the app sends the learner question, current lesson, role, Pro status, and recent chat to your backend for full ChatGPT-style answers.

Voice mode uses the browser speech APIs. Supported browsers can listen to spoken questions and read assistant replies aloud. Keep voice permissions browser-based and do not store raw voice recordings unless your backend explicitly adds that with user consent.

## Run The App

```bash
npm run check
npm start
```

Open `http://localhost:4173` while developing, then deploy the same folder behind HTTPS.

For the hosted version, start it with the public app URL:

```bash
PUBLIC_URL=https://your-domain.com npm start
```

## Google Search Entry

The app is prepared for Google discovery with:

- Search title, description, canonical URL, social preview tags, and structured app data in `index.html`.
- `/robots.txt` and `/sitemap.xml` served by `server.js`.
- `/cricket-learner-ai` redirecting into the app.

After deployment, submit `https://your-domain.com/sitemap.xml` in Google Search Console. Google decides when to index it, but the app now exposes the correct public entry points.

## Play Store Packaging

For Google Play Store distribution, use the Trusted Web Activity path in `PLAY_STORE_READY.md` and the templates in `play-store/`. New Play Store releases should be uploaded as Android App Bundles (`.aab`).

## macOS Packaging

For macOS distribution, use `MAC_APP_READY.md` and the Electron wrapper in `macos/electron/`. Build with `npm run mac:build`, then sign and notarize the app before public distribution.

## Payment Safety

The app does not unlock paid Pro access when Razorpay is not connected. A production backend should:

- Create the Razorpay order on the server.
- Return the order id, amount, currency, and public key id to the app.
- Open Razorpay Checkout in the browser using that order id.
- Verify Razorpay payment id, order id, and signature on the server.
- Unlock Pro only after server verification succeeds.
- Add Razorpay webhooks for reliable renewal and missed-browser-close handling.

For Google Play Store distribution, Pro Learning digital subscriptions should use Google Play Billing. The Play Store TWA starts with `/?distribution=play-store`, which disables the Razorpay checkout path inside the Play build so the app is not guiding Play users to a non-Play payment method for digital content.

## Security Notes

- Admin access must be enforced by the backend, not only by browser storage.
- The direct-install owner name is configured in `app-config.js`; use the backend for final production authorization.
- Passwords must be hashed on the server.
- Learner data and chat content should be stored in a protected database.
- Removed-user rejoin links should be sent by a backend email/SMS service. The browser-only app can prepare the link, but fully automatic sending requires `sendRejoinLinkEndpoint`.
- Use HTTPS only.

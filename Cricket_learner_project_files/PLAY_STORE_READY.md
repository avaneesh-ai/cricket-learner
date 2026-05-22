# Cricket Learner AI - Play Store Packaging

Cricket Learner AI can be distributed in two ways:

- Direct install from the hosted web app.
- Google Play Store install using a Trusted Web Activity Android wrapper.

## Recommended Play Store Path

Use a Trusted Web Activity because the app is already a PWA-style installable web app.

1. Deploy this folder to a real HTTPS domain.
2. Update `app-config.js` with the production domain and backend service URLs.
3. Generate an Android project with Bubblewrap or Android Studio using the web manifest.
4. Target Android 15 / API level 35 or higher.
5. Build an Android App Bundle (`.aab`).
6. Add Digital Asset Links at `https://your-domain/.well-known/assetlinks.json`.
7. Upload the `.aab` in Google Play Console.
8. Complete Play App Signing, store listing, privacy policy, data safety, and testing tracks.

## Package Name

Default package name:

```text
com.cricketlearner.ai
```

Use this exact package name for:

- Bubblewrap or Android project config.
- Google Play Console app package.
- Digital Asset Links.

## Files Added

- `play-store/twa-manifest.template.json`
- `play-store/assetlinks.template.json`
- `play-store/store-listing.md`
- `play-store/data-safety-draft.md`
- `play-store/release-checklist.md`
- `play-store/play-console-submission.md`
- `play-store/closed-testing-plan.md`
- `play-store/play-billing-note.md`
- `privacy.html`

## Important

Google Play requires new apps to use Android App Bundles. A Play Store release also needs signing, a privacy policy, screenshots, testing, and data safety answers.

For Play Store distribution, Pro Learning digital subscriptions should use Google Play Billing. Razorpay stays available for the direct web app, but the Play Store wrapper starts with `/?distribution=play-store` so the app does not guide Play users to Razorpay for digital content.

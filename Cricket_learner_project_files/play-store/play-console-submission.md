# Play Console Submission Steps

Use this file when you are ready to upload Cricket Learner AI to Google Play.

## Before Play Console

1. Deploy the web app to HTTPS.
2. Set `PUBLIC_URL=https://your-domain.com` on the production server.
3. Confirm these URLs work:
   - `https://your-domain.com/`
   - `https://your-domain.com/manifest.webmanifest`
   - `https://your-domain.com/sw.js`
   - `https://your-domain.com/privacy.html`
   - `https://your-domain.com/.well-known/assetlinks.json`
4. Replace every `REPLACE_WITH_YOUR_DOMAIN` placeholder in the Play Store files.
5. Generate the TWA Android wrapper with `play-store/twa-manifest.template.json`.
6. Build a signed `.aab` that targets API 35 or higher.

## Play Console App Setup

1. Create app.
2. App name: `Cricket Learner AI`.
3. Default language: English.
4. App or game: App.
5. Free or paid: Free.
6. Category: Education.
7. Package name: `com.cricketlearner.ai`.

## Store Listing

Use `play-store/store-listing.md` for the app name, short description, full description, and feature list.

Required graphics:

- App icon: 512 x 512 PNG.
- Feature graphic: 1024 x 500 PNG.
- Phone screenshots: at least 2.
- Tablet screenshots: recommended if tablets are supported.

## Policy Forms

1. Privacy policy URL: `https://your-domain.com/privacy.html`.
2. Data safety: use `play-store/data-safety-draft.md`, then adjust based on your real backend.
3. Content rating: Education / Sports learning, no gambling, no real-money contests.
4. Target audience: choose the correct ages for your launch. If children are included, review Google Play Families policy before release.
5. Ads: select no ads unless you add advertising SDKs later.

## Release Tracks

1. Upload the `.aab` to internal testing first.
2. Fix issues from Play pre-launch reports.
3. If your account is a newly created personal account, run closed testing with at least 12 opted-in testers for 14 continuous days.
4. Apply for production access when the closed test requirement is met.
5. Submit the production release.

## Payment Note

For Google Play distribution, Pro Learning digital subscriptions should use Google Play Billing. Razorpay is for the direct web app unless your account and region qualify for an approved alternative billing program.

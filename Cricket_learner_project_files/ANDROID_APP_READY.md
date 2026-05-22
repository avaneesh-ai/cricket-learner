# Cricket Learner AI - Android App

This project is ready for an Android app using a Trusted Web Activity wrapper.

## Android Package

- Package name: `com.cricketlearner.ai`
- App name: `Cricket Learner AI`
- Launcher name: `Cricket AI`
- Wrapper template: `play-store/twa-manifest.template.json`
- Digital Asset Links template: `play-store/assetlinks.template.json`
- Play Store submission notes: `play-store/play-console-submission.md`

## Build Path

1. Host the web app on HTTPS.
2. Replace `REPLACE_WITH_YOUR_DOMAIN` in the Play Store templates.
3. Generate the Android wrapper using Bubblewrap or Android Studio.
4. Build a signed Android App Bundle (`.aab`).
5. Host `assetlinks.json` at:

```text
https://your-domain.com/.well-known/assetlinks.json
```

6. Upload the `.aab` to Google Play Console.

## Local Checks

```bash
npm run android:check
```

## Payment Note

The direct web app can use Razorpay. The Play Store app starts at `/?distribution=play-store`, which disables Razorpay for Pro Learning so the Play build can use Google Play Billing for digital subscriptions.

# Cricket Learner AI - Android And Mac Release

Cricket Learner AI can now be released as:

- A hosted web/direct install app.
- An Android app through Trusted Web Activity.
- A macOS app through Electron.

## Android

Use:

- `ANDROID_APP_READY.md`
- `PLAY_STORE_READY.md`
- `play-store/twa-manifest.template.json`
- `play-store/assetlinks.template.json`

Build check:

```bash
npm run android:check
```

Android publishing still needs a real HTTPS domain, Play Console access, signing, and final `.aab` upload.

## macOS

Use:

- `MAC_APP_READY.md`
- `macos/electron/main.js`
- `macos/electron/preload.js`
- `macos/electron/entitlements.mac.plist`

Install packaging tools:

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

Mac public distribution still needs Apple Developer ID signing and notarization.

## One Command Check

```bash
npm run check
```

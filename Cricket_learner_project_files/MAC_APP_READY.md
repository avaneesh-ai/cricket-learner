# Cricket Learner AI - macOS App

This project now includes a macOS desktop wrapper using Electron.

## What It Does

- Opens Cricket Learner AI in a native macOS window.
- Runs the app through a private local server instead of raw `file://`.
- Keeps external links, such as YouTube and Razorpay, opening safely outside the app window.
- Packages to `.dmg` and `.zip` through `electron-builder`.

## Build Locally

Install desktop build tools:

```bash
npm install
```

Run the Mac app in development:

```bash
npm run mac:dev
```

Build a Mac app:

```bash
npm run mac:build
```

The packaged output will be created by `electron-builder`, normally inside `dist/`.

## Distribution Notes

For direct Mac distribution, sign and notarize the app with an Apple Developer ID certificate. Without signing and notarization, macOS Gatekeeper may warn users before opening it.

For Mac App Store distribution, create a separate App Store build and review Apple payment and sandboxing requirements before submission.

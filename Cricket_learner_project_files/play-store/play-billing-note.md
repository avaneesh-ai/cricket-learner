# Play Billing Note

Cricket Learner AI uses Razorpay for the direct web app payment path. For Google Play Store distribution, Pro Learning is a digital subscription, so the Play Store build should use Google Play Billing unless a specific Google alternative billing exception applies.

## Current Safeguard

The TWA template starts the app at:

```text
/?distribution=play-store
```

When that flag is present, the app disables the Razorpay checkout path and explains that Play Billing is required for Pro Learning in the Play Store build.

## To Monetize Pro On Play Store

1. Create a Play Console subscription product for Pro Learning.
2. Enable Play Billing support in the TWA wrapper.
3. Use the Digital Goods API and Payment Request API in the Play Store build.
4. Verify purchases on your backend.
5. Acknowledge purchases so Google does not refund and revoke them.

## Direct Web Version

The hosted web version can keep using Razorpay with backend order creation and signature verification.

window.CRICKET_LEARNER_CONFIG = {
  environment: "production-ready",
  apiBaseUrl: "",
  aiAssistantEndpoint: "",
  razorpayKeyId: "",
  supportEmail: "",
  payments: {
    razorpayCheckoutScript: "https://checkout.razorpay.com/v1/checkout.js",
    createOrderEndpoint: "",
    verifyPaymentEndpoint: "",
    proPlan: {
      planId: "pro-learning-monthly",
      displayPrice: "$50/month",
      amount: 5000,
      currency: "USD",
      billingCycle: "monthly"
    }
  },
  moderation: {
    sendRejoinLinkEndpoint: ""
  },
  playStore: {
    enabled: true,
    packageName: "com.cricketlearner.ai",
    productionHost: "REPLACE_WITH_YOUR_DOMAIN",
    billingProvider: "google-play"
  },
  adminOwner: {
    name: "Cricket_321",
    email: "admin.cricketleanerai@gmail.com",
    loginAliases: ["Cricket_321", "admin.cricketleanerai"],
    showAdminAfterOwnerLogin: true,
    allowFirstPasswordSetup: true
  },
  features: {
    directInstall: true,
    offlineCache: true,
    livePayments: false,
    liveAiAssistant: false,
    liveRejoinInvites: false,
    secureAdminBackend: false
  }
};

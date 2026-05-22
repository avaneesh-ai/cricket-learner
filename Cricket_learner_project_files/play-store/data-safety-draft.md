# Data Safety Draft

Use this as a draft when completing Play Console data safety. Final answers depend on the live backend you connect.

## Data Collected

- Email address
- Name
- Mobile number
- Username
- Learning role
- Lesson progress
- Quiz answers and scores
- Assistant chat content
- Subscription/payment status

## Data Use

- Account setup and login
- Personalizing cricket learning
- Saving progress and quiz state
- Admin safety and moderation
- Pro Learning subscription access
- Improving app learning experience

## Data Sharing

- Razorpay may process payment-related data when live payments are connected.
- AI service provider may process assistant prompts when live AI is connected.
- Do not share learner content with other learners.

## Security

- Production backend should use HTTPS.
- Passwords must be hashed on the server.
- Admin access must be enforced by backend authorization.
- Payment unlocks must require server-side Razorpay verification.

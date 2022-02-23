import { loadStripe } from '@stripe/stripe-js'

async function getStripeJs() {
  const stripeJs = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY)
  return stripeJs
}

export default getStripeJs

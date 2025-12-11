import type { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';

const stripeSecret = process.env.STRIPE_SECRET_KEY;

const stripe = stripeSecret
  ? new Stripe(stripeSecret, {
      apiVersion: '2025-11-17.clover',
    })
  : null;

type CheckoutBody = {
  email?: string;
  tier?: 'monthly' | 'annual';
  plan?: string;
  priceId?: string;
};

const bundlePriceIds: Record<'monthly' | 'annual', string> = {
  monthly: 'price_1SdCGjPqujcPv5fb87INsadt',
  annual: 'price_1SdCGjPqujcPv5fbO9OOw7QP',
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  if (!stripe) {
    return res.status(500).json({ error: 'Stripe is not configured. Set STRIPE_SECRET_KEY.' });
  }

  const { email, tier, plan, priceId }: CheckoutBody = req.body;

  if (!email || typeof email !== 'string') {
    return res.status(400).json({ error: 'Email is required.' });
  }

  if (tier !== 'monthly' && tier !== 'annual') {
    return res.status(400).json({ error: 'Billing tier must be monthly or annual.' });
  }

  if (plan !== 'bundle') {
    return res.status(400).json({ error: 'Only bundle checkout is supported here.' });
  }

  const resolvedPriceId = priceId || bundlePriceIds[tier];

  if (!resolvedPriceId) {
    return res.status(400).json({ error: 'Invalid price for bundle checkout.' });
  }

  try {
    const origin = req.headers.origin || 'https://totalaudiopromo.com';

    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      customer_email: email,
      line_items: [
        {
          price: resolvedPriceId,
          quantity: 1,
        },
      ],
      success_url: `${origin}/pricing?checkout=success`,
      cancel_url: `${origin}/pricing?checkout=cancel`,
      allow_promotion_codes: true,
    });

    return res.status(200).json({ url: session.url });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unable to start checkout.';
    return res.status(500).json({ error: message });
  }
}


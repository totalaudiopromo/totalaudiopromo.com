import type { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';

interface MailingListResponse {
  success: boolean;
  message: string;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<MailingListResponse>
) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({
      success: false,
      message: 'Method not allowed. Use POST.',
    });
  }

  const { email } = req.body;

  if (!email || typeof email !== 'string') {
    return res.status(400).json({
      success: false,
      message: 'Email address is required.',
    });
  }

  const trimmedEmail = email.trim().toLowerCase();

  if (!EMAIL_REGEX.test(trimmedEmail)) {
    return res.status(400).json({
      success: false,
      message: 'Please provide a valid email address.',
    });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const audienceId = process.env.RESEND_AUDIENCE_ID;

  if (!apiKey || !audienceId) {
    console.warn('[mailing-list] RESEND_API_KEY or RESEND_AUDIENCE_ID not configured');
    return res.status(503).json({
      success: false,
      message: 'Newsletter service is temporarily unavailable.',
    });
  }

  try {
    const resend = new Resend(apiKey);

    await resend.contacts.create({
      email: trimmedEmail,
      audienceId,
    });

    // Send welcome email -- failure doesn't block subscription
    try {
      await resend.emails.send({
        from: process.env.RESEND_FROM_EMAIL || 'TAP <onboarding@resend.dev>',
        to: trimmedEmail,
        subject: 'Welcome to the TAP mailing list',
        html: `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 520px; margin: 0 auto; padding: 32px 20px; color: #292524;">
            <h1 style="font-size: 22px; font-weight: 700; margin: 0 0 16px;">Thanks for subscribing</h1>
            <p style="font-size: 15px; line-height: 1.6; color: #57534e; margin: 0 0 16px;">
              You'll get fortnightly tips on music PR workflow, contact research, and campaign strategy. Written by someone who actually runs campaigns.
            </p>
            <p style="font-size: 15px; line-height: 1.6; color: #57534e; margin: 0 0 24px;">
              In the meantime, you can try TAP free -- all three studios included, no card required.
            </p>
            <a href="https://tap.totalaudiopromo.com/signup?source=welcome-email" style="display: inline-block; padding: 10px 24px; background: #0e7490; color: #fff; text-decoration: none; border-radius: 999px; font-size: 14px; font-weight: 700;">
              Try TAP Free
            </a>
            <p style="font-size: 12px; color: #a8a29e; margin: 32px 0 0; border-top: 1px solid #e7e5e4; padding-top: 16px;">
              TAP by Total Audio Promo
            </p>
          </div>
        `,
      });
    } catch (emailError: unknown) {
      const emailMsg = emailError instanceof Error ? emailError.message : 'Unknown error';
      console.warn('[mailing-list] Welcome email failed (subscription still succeeded):', emailMsg);
    }

    return res.status(200).json({
      success: true,
      message: 'Subscribed successfully',
    });
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.warn('[mailing-list] Resend error:', errorMessage);

    return res.status(500).json({
      success: false,
      message: 'Something went wrong. Please try again.',
    });
  }
}

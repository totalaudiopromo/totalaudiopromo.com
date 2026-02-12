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

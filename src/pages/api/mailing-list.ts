import type { NextApiRequest, NextApiResponse } from 'next';

interface MailingListResponse {
  success: boolean;
  message: string;
}

// Simple email validation regex
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function handler(
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

  // TODO: Connect to actual email service or database
  // e.g. store in Supabase, send to Mailchimp, etc.
  console.log(`[mailing-list] New subscriber: ${trimmedEmail}`);

  return res.status(200).json({
    success: true,
    message: 'Subscribed successfully',
  });
}

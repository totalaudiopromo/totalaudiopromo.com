'use client';

import { useState } from 'react';
import { Mail, ArrowRight, CheckCircle2, Loader2 } from 'lucide-react';

interface NewsletterSignupProps {
  variant?: 'inline' | 'card' | 'footer';
  title?: string;
  description?: string;
  placeholder?: string;
}

export function NewsletterSignup({
  variant = 'card',
  title = 'Stay in the loop',
  description = 'Product updates and music PR insights for PR professionals.',
  placeholder = 'your@email.com',
}: NewsletterSignupProps) {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus('idle');
    setMessage('');

    try {
      const response = await fetch('/api/mailing-list', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error('Subscription failed');
      }

      setStatus('success');
      setMessage("You're on the list! We'll be in touch.");
      setEmail('');
    } catch (error) {
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Inline variant - minimal styling for embedding
  if (variant === 'inline') {
    return (
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder={placeholder}
          required
          disabled={loading || status === 'success'}
          aria-label="Email address"
          className="input-field flex-1 min-h-[48px]"
        />
        <button
          type="submit"
          disabled={loading || status === 'success'}
          className="cta-button min-h-[48px] whitespace-nowrap"
        >
          {status === 'success' ? (
            <>
              <CheckCircle2 className="h-4 w-4 mr-2" aria-hidden="true" /> Subscribed
            </>
          ) : loading ? (
            <>
              <Loader2 className="h-4 w-4 mr-2 animate-spin" aria-hidden="true" /> Subscribing...
            </>
          ) : (
            <>
              Subscribe <ArrowRight className="h-4 w-4 ml-2" aria-hidden="true" />
            </>
          )}
        </button>
        {message && (
          <p
            className={`text-sm font-medium sm:hidden ${status === 'success' ? 'text-green-600' : 'text-red-600'}`}
            role={status === 'error' ? 'alert' : 'status'}
          >
            {message}
          </p>
        )}
      </form>
    );
  }

  // Footer variant - simplified for footer use
  if (variant === 'footer') {
    return (
      <div className="space-y-4">
        <div className="space-y-2">
          <h3 className="font-display text-lg font-bold text-gray-900">{title}</h3>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder={placeholder}
            required
            disabled={loading || status === 'success'}
            aria-label="Email address"
            className="input-field w-full min-h-[48px]"
          />
          <button
            type="submit"
            disabled={loading || status === 'success'}
            className="cta-button w-full min-h-[48px]"
          >
            {status === 'success' ? (
              <>
                <CheckCircle2 className="h-4 w-4 mr-2" aria-hidden="true" /> Subscribed!
              </>
            ) : loading ? (
              <>
                <Loader2 className="h-4 w-4 mr-2 animate-spin" aria-hidden="true" /> Subscribing...
              </>
            ) : (
              <>
                Join the Mailing List <ArrowRight className="h-4 w-4 ml-2" aria-hidden="true" />
              </>
            )}
          </button>
          {message && (
            <p
              className={`text-sm font-medium ${status === 'success' ? 'text-green-600' : 'text-red-600'}`}
              role={status === 'error' ? 'alert' : 'status'}
            >
              {message}
            </p>
          )}
        </form>
        <p className="text-xs text-gray-500">
          No spam, unsubscribe anytime.
        </p>
      </div>
    );
  }

  // Default: card variant - full neo-brutalist styling
  return (
    <div className="glass-panel">
      <div className="flex flex-col sm:flex-row items-start gap-4">
        {/* Icon */}
        <div className="rounded-xl border-2 border-black bg-brand-cyan/10 p-3 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
          <Mail className="h-6 w-6 text-brand-cyan" aria-hidden="true" />
        </div>

        {/* Content */}
        <div className="flex-1 space-y-4 w-full">
          <div className="space-y-2">
            <h3 className="font-display text-xl font-bold text-gray-900">{title}</h3>
            <p className="text-gray-600">{description}</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder={placeholder}
                required
                disabled={loading || status === 'success'}
                aria-label="Email address"
                className="input-field flex-1 min-h-[48px]"
              />
              <button
                type="submit"
                disabled={loading || status === 'success'}
                className="cta-button min-h-[48px] whitespace-nowrap"
              >
                {status === 'success' ? (
                  <>
                    <CheckCircle2 className="h-4 w-4 mr-2" aria-hidden="true" /> Done
                  </>
                ) : loading ? (
                  <>
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" aria-hidden="true" /> Subscribing...
                  </>
                ) : (
                  <>
                    Subscribe <ArrowRight className="h-4 w-4 ml-2" aria-hidden="true" />
                  </>
                )}
              </button>
            </div>

            {/* Status message */}
            {message && (
              <p
                className={`text-sm font-medium ${status === 'success' ? 'text-green-600' : 'text-red-600'}`}
                role={status === 'error' ? 'alert' : 'status'}
              >
                {message}
              </p>
            )}
          </form>

          {/* Social proof */}
          <p className="text-sm text-gray-500">
            No spam, unsubscribe anytime.
          </p>
        </div>
      </div>
    </div>
  );
}

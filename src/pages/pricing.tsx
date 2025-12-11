import { FormEvent, useEffect, useMemo, useRef, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

type BillingCycle = 'monthly' | 'annual';

type Product = {
  id: 'intel' | 'pitch' | 'tracker';
  name: string;
  description: string;
  href: string;
  accent: 'intel' | 'pitch' | 'tracker';
  image: string;
  bullets: string[];
};

const BASE_TIER_PRICING = {
  starter: 5,
  pro: 19,
  agency: 79,
} as const;

const BUNDLE_PRICE_IDS: Record<BillingCycle, string> = {
  monthly: 'price_1SdCGjPqujcPv5fb87INsadt',
  annual: 'price_1SdCGjPqujcPv5fbO9OOw7QP',
};

const products: Product[] = [
  {
    id: 'intel',
    name: 'Intel Pro',
    description: 'Contact enrichment & verification that stops bounced emails.',
    href: 'https://intel.totalaudiopromo.com',
    accent: 'intel',
    image: '/images/analyzing-data.png',
    bullets: ['100 enrichments/month', 'Email validation + submission notes', 'Direct export to Pitcher'],
  },
  {
    id: 'pitch',
    name: 'Pitcher Pro',
    description: 'AI pitches in your voice, tailored to every contact.',
    href: 'https://pitcher.totalaudiopromo.com',
    accent: 'pitch',
    image: '/images/vinyl-throw-action.png',
    bullets: ['50 personalised pitches/month', 'Voice matching + batch send', 'Works with Gmail in one click'],
  },
  {
    id: 'tracker',
    name: 'Tracker Pro',
    description: 'Radio CRM that shows who opened, replied, and added your track.',
    href: 'https://tracker.totalaudiopromo.com',
    accent: 'tracker',
    image: '/images/success-complete.png',
    bullets: ['Unlimited submissions', 'AI campaign autopsy', 'Benchmarks vs BBC/Spotify'],
  },
];

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>('monthly');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const bundleRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) return;
    const bundleQuery = router.query.bundle;
    if (bundleQuery === 'true' && bundleRef.current) {
      bundleRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [router.isReady, router.query.bundle]);

  const tierPricing = useMemo(
    () => ({
      starter: billingCycle === 'monthly' ? BASE_TIER_PRICING.starter : BASE_TIER_PRICING.starter * 10,
      pro: billingCycle === 'monthly' ? BASE_TIER_PRICING.pro : BASE_TIER_PRICING.pro * 10,
      agency: billingCycle === 'monthly' ? BASE_TIER_PRICING.agency : BASE_TIER_PRICING.agency * 10,
    }),
    [billingCycle],
  );

  const bundlePrice = billingCycle === 'monthly' ? 49 : 490;

  const handleBundleCheckout = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');

    if (!email.trim()) {
      setError('Add your email so Stripe can send the receipt.');
      return;
    }

    try {
      setLoading(true);
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: email.trim(),
          tier: billingCycle,
          plan: 'bundle',
          priceId: BUNDLE_PRICE_IDS[billingCycle],
        }),
      });

      const data: { url?: string; error?: string } = await response.json();
      if (!response.ok || !data.url) {
        throw new Error(data.error || 'Checkout failed. Try again.');
      }

      window.location.href = data.url;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Checkout failed. Try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Pricing | Total Audio Promo</title>
        <meta name="description" content="Straightforward pricing for Intel, Pitcher, Campaign Tracker, plus the Pro Bundle that saves you £8/month." />
        <link rel="canonical" href="https://totalaudiopromo.com/pricing" />
      </Head>

      <div className="min-h-screen bg-white">
        <nav className="sticky top-0 z-50 bg-white border-b-4 border-black px-4 py-4 shadow-[0_4px_0_0_rgba(0,0,0,0.1)]">
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] border-4 border-black overflow-hidden bg-white transition-all group-hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] group-hover:-translate-x-0.5 group-hover:-translate-y-0.5">
                <Image src="/images/total_audio_promo_logo_trans.png" alt="Total Audio Promo Logo" width={40} height={40} className="object-contain w-full h-full" priority />
              </div>
              <span className="text-xl font-bold text-gray-900 hidden sm:block">Total Audio Promo</span>
            </Link>

            <div className="flex items-center gap-2 sm:gap-4">
              <a href="https://intel.totalaudiopromo.com" className="px-3 py-2 text-sm font-semibold text-gray-700 hover:text-intel-600 transition-colors rounded-lg hover:bg-intel-50">
                Intel
              </a>
              <a href="https://pitcher.totalaudiopromo.com" className="px-3 py-2 text-sm font-semibold text-gray-700 hover:text-pitch-600 transition-colors rounded-lg hover:bg-pitch-50">
                Pitcher
              </a>
              <a href="https://tracker.totalaudiopromo.com" className="px-3 py-2 text-sm font-semibold text-gray-700 hover:text-tracker-600 transition-colors rounded-lg hover:bg-tracker-50">
                Tracker
              </a>
              <Link href="/pricing" className="px-3 py-2 text-sm font-semibold text-gray-800 rounded-lg border border-gray-200 bg-gray-100 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                Pricing
              </Link>
              <a href="https://command.totalaudiopromo.com" className="ml-2 px-4 py-2 text-sm font-bold text-white bg-gray-900 border-2 border-black rounded-lg shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0 active:translate-y-0 active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                Dashboard
              </a>
            </div>
          </div>
        </nav>

        <main>
          <section className="bg-white py-14 sm:py-20 border-b-4 border-black">
            <div className="max-w-5xl mx-auto px-4">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-intel-600 mb-2">Standardised Pricing</p>
                  <h1 className="text-3xl sm:text-4xl font-black text-gray-900 leading-tight">Pricing that respects your budget</h1>
                  <p className="text-lg text-gray-600 mt-2">One price sheet for all three tools. Bundle them and keep £8/month in your pocket.</p>
                </div>

                <div className="inline-flex items-center border-2 border-black rounded-2xl overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  {(['monthly', 'annual'] as BillingCycle[]).map((cycle) => (
                    <button
                      key={cycle}
                      type="button"
                      onClick={() => setBillingCycle(cycle)}
                      className={`px-4 py-2 text-sm font-bold uppercase transition-colors ${
                        billingCycle === cycle ? 'bg-gray-900 text-white' : 'bg-white text-gray-800 hover:bg-gray-100'
                      }`}
                    >
                      {cycle === 'monthly' ? 'Monthly' : 'Annual (save 2 months)'}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid lg:grid-cols-3 gap-6 items-stretch">
                <div className="lg:col-span-2 bg-gradient-to-br from-gray-50 to-white border-4 border-black rounded-2xl p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                    <div>
                      <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border-2 border-black bg-intel-100 text-intel-700 text-xs font-bold uppercase tracking-wide">
                        Standard across Intel, Pitcher, Tracker
                      </div>
                      <p className="text-lg text-gray-600 mt-3">Starter £{tierPricing.starter.toLocaleString()}{billingCycle === 'monthly' ? '/mo' : '/yr'} · Pro £{tierPricing.pro.toLocaleString()}{billingCycle === 'monthly' ? '/mo' : '/yr'} · Agency £{tierPricing.agency.toLocaleString()}{billingCycle === 'monthly' ? '/mo' : '/yr'}</p>
                    </div>
                    <p className="text-sm text-gray-500">14-day free trial on every plan. Cancel anytime.</p>
                  </div>

                  <div className="grid sm:grid-cols-3 gap-4">
                    <div className="border-2 border-intel-600 rounded-xl p-4 bg-intel-50">
                      <p className="text-xs font-bold uppercase text-intel-700 mb-2">Starter</p>
                      <p className="text-3xl font-black text-gray-900">£{tierPricing.starter}</p>
                      <p className="text-sm text-gray-500">{billingCycle === 'monthly' ? 'per month' : 'per year (2 months free)'}</p>
                    </div>
                    <div className="border-2 border-pitch-600 rounded-xl p-4 bg-pitch-50">
                      <p className="text-xs font-bold uppercase text-pitch-700 mb-2">Pro</p>
                      <p className="text-3xl font-black text-gray-900">£{tierPricing.pro}</p>
                      <p className="text-sm text-gray-500">{billingCycle === 'monthly' ? 'per month' : 'per year (2 months free)'}</p>
                    </div>
                    <div className="border-2 border-tracker-600 rounded-xl p-4 bg-tracker-50">
                      <p className="text-xs font-bold uppercase text-tracker-700 mb-2">Agency</p>
                      <p className="text-3xl font-black text-gray-900">£{tierPricing.agency}</p>
                      <p className="text-sm text-gray-500">{billingCycle === 'monthly' ? 'per month' : 'per year (2 months free)'}</p>
                    </div>
                  </div>
                </div>

                <div
                  ref={bundleRef}
                  id="bundle"
                  className="bg-gradient-to-br from-gray-900 to-gray-800 border-4 border-black rounded-2xl p-8 text-white shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] relative"
                >
                  <div className="absolute -top-4 left-4">
                    <span className="px-4 py-2 bg-amber-400 border-2 border-black rounded-full text-xs font-black uppercase tracking-wide text-gray-900 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                      Best Value
                    </span>
                  </div>
                  <h2 className="text-2xl font-black mb-2">Pro Bundle</h2>
                  <p className="text-sm text-gray-100 mb-4">All three tools. One bill. Save £8 every month (or 2 months on annual).</p>

                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="text-5xl font-black">£{bundlePrice}</span>
                    <span className="text-sm uppercase font-semibold">{billingCycle === 'monthly' ? '/month' : '/year'}</span>
                  </div>
                  <p className="text-sm text-amber-200 mb-6">
                    {billingCycle === 'monthly' ? 'Normally £57/month for all three' : 'Normally £570/year. Keep £80/year in your pocket.'}
                  </p>

                  <ul className="space-y-2 text-sm mb-6">
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-0.5">&#10003;</span>
                      <span>Intel Pro – contact enrichment & verification</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-0.5">&#10003;</span>
                      <span>Pitcher Pro – AI-powered pitch writing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-0.5">&#10003;</span>
                      <span>Tracker Pro – radio campaign management</span>
                    </li>
                  </ul>

                  <form onSubmit={handleBundleCheckout} className="space-y-3">
                    <label className="block text-sm font-semibold text-gray-100">
                      Work email for your receipt
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@label.co.uk"
                        className="input-field mt-2 bg-white text-gray-900"
                        required
                      />
                    </label>
                    {error && <p className="text-sm text-amber-200">{error}</p>}
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full cta-button bg-amber-400 text-gray-900 border-black"
                    >
                      {loading ? 'Redirecting…' : 'Checkout Pro Bundle'}
                    </button>
                    <p className="text-xs text-gray-200">
                      Secured by Stripe. We will process the {billingCycle} bundle you picked.
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-8">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-gray-700">Individual Tools</p>
                  <h2 className="text-3xl font-black text-gray-900">Pick the tool you need today</h2>
                  <p className="text-gray-600 mt-2">Same pricing across Intel, Pitcher, and Tracker. Upgrade or bundle anytime.</p>
                </div>
                <a href="#bundle" className="subtle-button">Want all three? Jump to the bundle</a>
              </div>

              <div className="grid lg:grid-cols-3 gap-6">
                {products.map((product) => (
                  <article key={product.id} className={`product-card product-card--${product.accent}`}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-xl border-2 border-black bg-white flex items-center justify-center overflow-hidden">
                        <Image src={product.image} alt={product.name} width={48} height={48} className="object-contain" />
                      </div>
                      <div>
                        <h3 className="text-xl font-black text-gray-900">{product.name}</h3>
                        <p className="text-sm text-gray-600">{product.description}</p>
                      </div>
                    </div>

                    <div className="bg-gray-100 border-2 border-black rounded-xl p-4 mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-semibold uppercase text-gray-700">Starter</span>
                        <span className="text-lg font-black text-gray-900">£{tierPricing.starter}{billingCycle === 'monthly' ? '/mo' : '/yr'}</span>
                      </div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-semibold uppercase text-gray-700">Pro</span>
                        <span className="text-lg font-black text-gray-900">£{tierPricing.pro}{billingCycle === 'monthly' ? '/mo' : '/yr'}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold uppercase text-gray-700">Agency</span>
                        <span className="text-lg font-black text-gray-900">£{tierPricing.agency}{billingCycle === 'monthly' ? '/mo' : '/yr'}</span>
                      </div>
                      {billingCycle === 'annual' && <p className="text-xs text-gray-500 mt-2">Annual saves 2 months on every tier.</p>}
                    </div>

                    <ul className="space-y-2 text-sm text-gray-700 mb-6">
                      {product.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-2">
                          <span className="text-green-600 mt-0.5">&#10003;</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    <a href={product.href} className="cta-button w-full text-center">
                      Start Free Trial
                    </a>
                  </article>
                ))}
              </div>
            </div>
          </section>
        </main>

        <footer className="bg-gray-900 text-white py-10">
          <div className="max-w-6xl mx-auto px-4 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center border-2 border-white/20 overflow-hidden bg-white">
                <Image src="/images/total_audio_promo_logo_trans.png" alt="Total Audio Promo" width={40} height={40} className="object-contain w-full h-full" />
              </div>
              <span className="text-sm text-gray-300">Built by radio promoters for radio promoters.</span>
            </div>
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/pricing" className="hover:text-white transition-colors">
                Pricing
              </Link>
              <a href="mailto:chris@totalaudiopromo.com" className="hover:text-white transition-colors">
                Contact
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}


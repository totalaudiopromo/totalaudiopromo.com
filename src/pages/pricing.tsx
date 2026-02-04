import { useMemo, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

type BillingCycle = 'monthly' | 'annual';

const BASE_TIER_PRICING = {
  starter: 0,
  pro: 19,
  agency: 79,
} as const;

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>('monthly');

  const tierPricing = useMemo(() => {
    const multiplier = billingCycle === 'monthly' ? 1 : 10;
    return {
      starter: BASE_TIER_PRICING.starter * multiplier,
      pro: BASE_TIER_PRICING.pro * multiplier,
      agency: BASE_TIER_PRICING.agency * multiplier,
    };
  }, [billingCycle]);

  return (
    <>
      <Head>
        <title>Pricing | TAP by Total Audio Promo</title>
        <meta name="description" content="Simple pricing for TAP. All three studios included in every plan." />
        <link rel="canonical" href="https://totalaudiopromo.com/pricing" />
      </Head>

      <div className="min-h-screen bg-white">
        {/* Navigation */}
        <nav className="sticky top-0 z-50 bg-white border-b border-stone-200 px-4 py-4 shadow-sm">
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <Link href="/" className="flex items-center group">
              <Image
                src="/images/total-audio-promo-wordmark-stacked.png"
                alt="Total Audio Promo"
                width={100}
                height={100}
                className="object-contain h-14 sm:h-20 w-auto"
                priority
              />
            </Link>

            <div className="flex items-center gap-2 sm:gap-4">
              <a
                href="https://tap.totalaudiopromo.com/home"
                className="px-3 py-2 text-sm font-semibold text-gray-700 hover:text-cyan-600 transition-colors rounded-lg hover:bg-cyan-50"
              >
                TAP
              </a>
              <a
                href="/#studios"
                className="px-3 py-2 text-sm font-semibold text-gray-700 hover:text-gray-900 transition-colors rounded-lg hover:bg-gray-100"
              >
                Studios
              </a>
              <Link
                href="/pricing"
                className="px-3 py-2 text-sm font-semibold text-gray-800 rounded-lg border border-stone-200 bg-stone-50 shadow-sm"
              >
                Pricing
              </Link>
              <a
                href="https://tap.totalaudiopromo.com/home?source=marketing"
                className="ml-2 px-4 py-2 text-sm font-bold text-white bg-cyan-600 border border-cyan-700 rounded-lg shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5 active:scale-95"
              >
                Open TAP
              </a>
            </div>
          </div>
        </nav>

        <main>
          {/* Header */}
          <section className="bg-white py-14 sm:py-20 border-b border-stone-200">
            <div className="max-w-5xl mx-auto px-4">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
                <div>
                  <span className="inline-block px-4 py-1.5 text-sm font-bold uppercase tracking-wider text-cyan-700 bg-cyan-50 border border-cyan-200 rounded-full shadow-sm mb-4">
                    TAP Pricing
                  </span>
                  <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
                    One workspace. Three studios. Simple pricing.
                  </h1>
                  <p className="text-lg text-gray-600 mt-2">
                    Every TAP plan includes the full workspace plus Intel Studio, Pitcher Studio, and Tracker Studio.
                  </p>
                </div>

                {/* Billing toggle */}
                <div className="inline-flex items-center border border-stone-200 rounded-2xl overflow-hidden shadow-sm">
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

              {/* Tier Cards */}
              <div className="grid lg:grid-cols-3 gap-8 items-stretch pt-8">
                {/* Free */}
                <article className="bg-white border border-stone-200 rounded-2xl p-8 shadow-md hover:-translate-y-1 hover:shadow-lg hover:border-cyan-600/30 transition-all flex flex-col">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold tracking-tighter mb-2">Free</h3>
                    <div className="flex items-baseline gap-1 mb-4">
                      <span className="text-4xl font-bold italic text-gray-900">Free</span>
                    </div>
                    <p className="text-sm text-gray-600 font-medium leading-relaxed">
                      Get started with TAP and explore all three studios.
                    </p>
                  </div>

                  <ul className="space-y-4 mb-8 flex-grow">
                    <li className="flex items-center gap-3 text-xs font-bold text-gray-700">
                      <span className="w-5 h-5 rounded-md bg-cyan-50 border border-cyan-200 flex items-center justify-center text-[10px] text-cyan-700">✓</span>
                      All three studios included
                    </li>
                    <li className="flex items-center gap-3 text-xs font-bold text-gray-700">
                      <span className="w-5 h-5 rounded-md bg-cyan-50 border border-cyan-200 flex items-center justify-center text-[10px] text-cyan-700">✓</span>
                      10 enrichments/month
                    </li>
                    <li className="flex items-center gap-3 text-xs font-bold text-gray-700">
                      <span className="w-5 h-5 rounded-md bg-cyan-50 border border-cyan-200 flex items-center justify-center text-[10px] text-cyan-700">✓</span>
                      5 pitches/month
                    </li>
                    <li className="flex items-center gap-3 text-xs font-bold text-gray-700">
                      <span className="w-5 h-5 rounded-md bg-cyan-50 border border-cyan-200 flex items-center justify-center text-[10px] text-cyan-700">✓</span>
                      1 active campaign
                    </li>
                  </ul>

                  <a
                    href="https://tap.totalaudiopromo.com/signup?source=marketing"
                    className="w-full py-3 text-center border border-stone-300 rounded-xl font-bold tracking-tight hover:bg-stone-50 hover:border-cyan-600/30 transition-colors active:scale-95"
                  >
                    Start Free
                  </a>
                </article>

                {/* Pro (featured) */}
                <article className="bg-white border border-cyan-200 rounded-2xl p-10 shadow-lg hover:-translate-y-2 transition-all flex flex-col relative ring-1 ring-cyan-200/50 ring-offset-4">
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-cyan-600 text-white px-6 py-2 rounded-full border border-cyan-700 text-xs font-bold uppercase tracking-widest shadow-md whitespace-nowrap">
                    Recommended
                  </div>

                  <div className="mb-6 pt-4">
                    <h3 className="text-3xl font-bold tracking-tighter mb-2">Pro</h3>
                    <div className="flex items-baseline gap-1 mb-4">
                      <span className="text-6xl font-bold italic text-cyan-600">{'\u00A3'}{tierPricing.pro}</span>
                      <span className="text-gray-400 font-bold uppercase text-xs tracking-widest">/{billingCycle === 'monthly' ? 'mo' : 'yr'}</span>
                    </div>
                    <p className="text-sm text-gray-900 font-bold leading-relaxed">
                      For operators running real campaigns. Full access, higher limits.
                    </p>
                  </div>

                  <ul className="space-y-4 mb-8 flex-grow">
                    <li className="flex items-center gap-3 text-sm font-bold text-gray-900">
                      <span className="w-6 h-6 rounded-lg bg-cyan-600 text-white flex items-center justify-center border border-cyan-700 shadow-sm">✓</span>
                      All three studios included
                    </li>
                    <li className="flex items-center gap-3 text-sm font-bold text-gray-900">
                      <span className="w-6 h-6 rounded-lg bg-cyan-600 text-white flex items-center justify-center border border-cyan-700 shadow-sm">✓</span>
                      100 enrichments/month
                    </li>
                    <li className="flex items-center gap-3 text-sm font-bold text-gray-900">
                      <span className="w-6 h-6 rounded-lg bg-cyan-600 text-white flex items-center justify-center border border-cyan-700 shadow-sm">✓</span>
                      50 pitches/month
                    </li>
                    <li className="flex items-center gap-3 text-sm font-bold text-gray-900">
                      <span className="w-6 h-6 rounded-lg bg-cyan-600 text-white flex items-center justify-center border border-cyan-700 shadow-sm">✓</span>
                      Unlimited campaigns
                    </li>
                    <li className="flex items-center gap-3 text-sm font-bold text-gray-900">
                      <span className="w-6 h-6 rounded-lg bg-cyan-600 text-white flex items-center justify-center border border-cyan-700 shadow-sm">✓</span>
                      Priority support
                    </li>
                  </ul>

                  <a
                    href="https://tap.totalaudiopromo.com/signup?source=marketing"
                    className="w-full py-4 text-xl text-center bg-cyan-600 text-white border border-cyan-700 rounded-2xl font-bold tracking-tight shadow-md hover:shadow-lg hover:bg-cyan-700 transition-all active:scale-95"
                  >
                    Upgrade to Pro
                  </a>
                </article>

                {/* Agency */}
                <article className="bg-white border border-stone-200 rounded-2xl p-8 shadow-md hover:-translate-y-1 hover:shadow-lg hover:border-cyan-600/30 transition-all flex flex-col">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold tracking-tighter mb-2">Agency</h3>
                    <div className="flex items-baseline gap-1 mb-4">
                      <span className="text-4xl font-bold italic text-gray-900">{'\u00A3'}{tierPricing.agency}</span>
                      <span className="text-gray-400 font-bold uppercase text-[10px] tracking-widest">/{billingCycle === 'monthly' ? 'mo' : 'yr'}</span>
                    </div>
                    <p className="text-sm text-gray-600 font-medium leading-relaxed">
                      For teams and agencies managing multiple campaigns.
                    </p>
                  </div>

                  <ul className="space-y-4 mb-8 flex-grow">
                    <li className="flex items-center gap-3 text-xs font-bold text-gray-700">
                      <span className="w-5 h-5 rounded-md bg-stone-900 text-white flex items-center justify-center text-[10px] border border-stone-700">✓</span>
                      Everything in Pro
                    </li>
                    <li className="flex items-center gap-3 text-xs font-bold text-gray-700">
                      <span className="w-5 h-5 rounded-md bg-stone-900 text-white flex items-center justify-center text-[10px] border border-stone-700">✓</span>
                      Unlimited enrichments
                    </li>
                    <li className="flex items-center gap-3 text-xs font-bold text-gray-700">
                      <span className="w-5 h-5 rounded-md bg-stone-900 text-white flex items-center justify-center text-[10px] border border-stone-700">✓</span>
                      Team collaboration
                    </li>
                    <li className="flex items-center gap-3 text-xs font-bold text-gray-700">
                      <span className="w-5 h-5 rounded-md bg-stone-900 text-white flex items-center justify-center text-[10px] border border-stone-700">✓</span>
                      Dedicated support
                    </li>
                  </ul>

                  <a
                    href="mailto:info@totalaudiopromo.com"
                    className="w-full py-3 text-center border border-stone-300 rounded-xl font-bold tracking-tight hover:bg-stone-50 hover:border-cyan-600/30 transition-colors active:scale-95"
                  >
                    Contact Us
                  </a>
                </article>
              </div>

              {/* Footer note */}
              <p className="text-center text-sm text-gray-500 mt-10 font-medium">
                All plans include all three studios. Annual billing saves 2 months. Cancel anytime.
              </p>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12 sm:py-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
              <div className="sm:col-span-2 lg:col-span-1">
                <Image
                  src="/images/total-audio-promo-wordmark-stacked.png"
                  alt="Total Audio Promo"
                  width={80}
                  height={80}
                  className="object-contain h-12 w-auto brightness-0 invert mb-4"
                />
                <p className="text-sm text-gray-400">
                  TAP -- where music PR work actually happens. Built by a radio promoter.
                </p>
              </div>

              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider mb-4">Platform</h4>
                <ul className="space-y-2">
                  <li>
                    <a href="https://tap.totalaudiopromo.com/home?source=marketing" className="text-sm text-gray-400 hover:text-white transition-colors">
                      TAP
                    </a>
                  </li>
                  <li>
                    <a href="https://intel.totalaudiopromo.com" className="text-sm text-gray-400 hover:text-white transition-colors">
                      Intel Studio
                    </a>
                  </li>
                  <li>
                    <a href="https://pitcher.totalaudiopromo.com" className="text-sm text-gray-400 hover:text-white transition-colors">
                      Pitcher Studio
                    </a>
                  </li>
                  <li>
                    <a href="https://tracker.totalaudiopromo.com" className="text-sm text-gray-400 hover:text-white transition-colors">
                      Tracker Studio
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider mb-4">Legal</h4>
                <ul className="space-y-2">
                  <li><Link href="/privacy" className="text-sm text-gray-400 hover:text-white transition-colors">Privacy</Link></li>
                  <li><Link href="/terms" className="text-sm text-gray-400 hover:text-white transition-colors">Terms</Link></li>
                  <li><Link href="/gdpr" className="text-sm text-gray-400 hover:text-white transition-colors">GDPR</Link></li>
                </ul>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 text-center">
              <p className="text-sm text-gray-400">{'\u00A9'} {new Date().getFullYear()} Total Audio Promo. Built in Brighton.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

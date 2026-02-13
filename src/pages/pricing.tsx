import { useMemo, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

type BillingCycle = "monthly" | "annual";

const BASE_TIER_PRICING = {
  starter: 0,
  pro: 19,
  agency: 79,
} as const;

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>("monthly");

  const tierPricing = useMemo(
    () => ({
      starter:
        billingCycle === "monthly"
          ? BASE_TIER_PRICING.starter
          : BASE_TIER_PRICING.starter * 10,
      pro:
        billingCycle === "monthly"
          ? BASE_TIER_PRICING.pro
          : BASE_TIER_PRICING.pro * 10,
      agency:
        billingCycle === "monthly"
          ? BASE_TIER_PRICING.agency
          : BASE_TIER_PRICING.agency * 10,
    }),
    [billingCycle],
  );

  return (
    <>
      <Head>
        <title>Music PR Software Pricing | TAP by Total Audio Promo</title>
        <meta
          name="description"
          content="Music PR software pricing. All three studios included in every plan. Start free, upgrade when you're ready."
        />
        <link rel="canonical" href="https://totalaudiopromo.com/pricing" />
      </Head>

      <div className="min-h-screen bg-stone-50 font-sans">
        {/* Navigation -- Floating pill */}
        <nav className="sticky top-0 z-50 px-4 pt-3 sm:pt-4">
          <div className="mx-auto flex max-w-3xl items-center justify-between rounded-full border border-stone-200/80 bg-stone-50/90 backdrop-blur-md px-5 py-2 sm:px-6">
            <Link href="/" className="flex items-center group">
              <Image
                src="/images/total-audio-promo-wordmark-stacked.png"
                alt="Total Audio Promo"
                width={100}
                height={100}
                className="object-contain h-10 sm:h-12 w-auto"
                priority
              />
            </Link>

            <div className="flex items-center gap-2 sm:gap-3">
              <a
                href="/#studios"
                className="hidden sm:inline-flex px-3 py-1.5 text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors rounded-full hover:bg-stone-100"
              >
                How It Works
              </a>
              <Link
                href="/pricing"
                className="hidden sm:inline-flex px-3 py-1.5 text-sm font-medium text-stone-900 transition-colors rounded-full bg-stone-200/60"
              >
                Pricing
              </Link>

              <a
                href="https://tap.totalaudiopromo.com/home?source=nav"
                className="px-3 py-1.5 text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors rounded-full hover:bg-stone-100"
              >
                Log In
              </a>
              <a
                href="https://tap.totalaudiopromo.com/signup?source=nav"
                className="px-4 py-2 text-sm font-bold text-white bg-cyan-700 rounded-full hover:bg-cyan-800 transition-colors shadow-[0_1px_2px_rgba(0,0,0,0.05),0_4px_16px_rgba(8,145,178,0.25)]"
              >
                Start Free
              </a>
            </div>
          </div>
        </nav>

        <main>
          {/* Header */}
          <section className="bg-stone-50 py-14 sm:py-20">
            <div className="max-w-5xl mx-auto px-4">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
                <div>
                  <div className="inline-block mb-2 px-3 py-1 rounded-full bg-stone-100 border border-stone-300 text-stone-700 text-xs font-bold uppercase tracking-wide">
                    Early adopter pricing
                  </div>
                  <h1 className="text-3xl sm:text-4xl font-bold text-stone-900 leading-tight tracking-tight">
                    Music PR Software Pricing
                  </h1>
                  <p className="text-lg text-stone-600 mt-2">
                    All three studios included in every plan. Start free, upgrade
                    when you&apos;re ready. Lock in these rates before they go up.
                  </p>
                </div>

                {/* Billing toggle */}
                <div className="inline-flex items-center border border-stone-200 rounded-full overflow-hidden shadow-soft">
                  {(["monthly", "annual"] as BillingCycle[]).map((cycle) => (
                    <button
                      key={cycle}
                      type="button"
                      onClick={() => setBillingCycle(cycle)}
                      className={`px-4 py-2 text-sm font-medium transition-colors ${
                        billingCycle === cycle
                          ? "bg-cyan-700 text-white"
                          : "bg-white text-stone-600 hover:bg-stone-50"
                      }`}
                    >
                      {cycle === "monthly"
                        ? "Monthly"
                        : "Annual (save 2 months)"}
                    </button>
                  ))}
                </div>
              </div>

              {/* Tier Cards */}
              <div className="grid lg:grid-cols-3 gap-6 items-stretch">
                {/* Free */}
                <article className="bg-white border border-stone-200 rounded-2xl p-7 shadow-soft hover:shadow-soft-lg transition-shadow flex flex-col">
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-stone-900 mb-1">
                      Free
                    </h3>
                    <div className="flex items-baseline gap-1 mb-3">
                      <span className="text-4xl font-bold text-stone-900">
                        Free
                      </span>
                    </div>
                    <p className="text-sm text-stone-600">
                      Run your first campaign for free. No credit card required.
                    </p>
                  </div>

                  <ul className="space-y-3 mb-8 flex-grow text-sm text-stone-700">
                    <li className="flex items-center gap-2">
                      <span className="text-cyan-700">&#10003;</span>
                      All three studios
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-cyan-700">&#10003;</span>
                      10 enrichments/month
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-cyan-700">&#10003;</span>
                      3 pitches/month
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-cyan-700">&#10003;</span>
                      2 campaigns
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-cyan-700">&#10003;</span>
                      25 contacts
                    </li>
                  </ul>

                  <a
                    href="https://tap.totalaudiopromo.com/signup?source=pricing"
                    className="w-full py-3 text-center text-sm font-bold text-stone-900 border border-stone-300 rounded-full hover:bg-stone-50 transition-colors block"
                  >
                    Start Free
                  </a>
                </article>

                {/* Pro (featured) */}
                <article className="bg-white border-2 border-cyan-700 rounded-2xl p-7 shadow-soft-lg flex flex-col relative">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-cyan-700 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                    Most Popular
                  </div>

                  <div className="mb-6 pt-2">
                    <h3 className="text-xl font-bold text-stone-900 mb-1">
                      Pro
                    </h3>
                    <div className="flex items-baseline gap-1 mb-1">
                      <span className="text-4xl font-bold text-stone-900">
                        &pound;{tierPricing.pro}
                      </span>
                      <span className="text-stone-400 text-sm">
                        /{billingCycle === "monthly" ? "month" : "year"}
                      </span>
                    </div>
                    <p className="text-xs text-stone-500 mb-1">
                      {billingCycle === "monthly"
                        ? "or \u00A3190/year (save 2 months)"
                        : "\u00A3190/year -- save 2 months"}
                    </p>
                    <p className="text-xs text-stone-500 font-medium mb-3">
                      Early adopter rate -- lock it in
                    </p>
                    <p className="text-sm text-stone-700 font-medium">
                      Full access for operators running real campaigns.
                    </p>
                  </div>

                  <ul className="space-y-3 mb-8 flex-grow text-sm text-stone-700">
                    <li className="flex items-center gap-2">
                      <span className="text-cyan-700">&#10003;</span>
                      200 enrichments/month
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-cyan-700">&#10003;</span>
                      Unlimited pitches
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-cyan-700">&#10003;</span>
                      10 active campaigns
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-cyan-700">&#10003;</span>
                      Unlimited contacts
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-cyan-700">&#10003;</span>
                      Priority support
                    </li>
                  </ul>

                  <a
                    href="https://tap.totalaudiopromo.com/signup?source=pricing"
                    className="w-full py-3 text-center text-sm font-bold text-white bg-cyan-700 rounded-full hover:bg-cyan-800 transition-colors block shadow-[0_1px_2px_rgba(0,0,0,0.05),0_4px_16px_rgba(8,145,178,0.25)]"
                  >
                    Upgrade to Pro
                  </a>
                </article>

                {/* Agency */}
                <article className="bg-white border border-stone-200 rounded-2xl p-7 shadow-soft hover:shadow-soft-lg transition-shadow flex flex-col">
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-stone-900 mb-1">
                      Agency
                    </h3>
                    <div className="flex items-baseline gap-1 mb-1">
                      <span className="text-4xl font-bold text-stone-900">
                        &pound;{tierPricing.agency}
                      </span>
                      <span className="text-stone-400 text-sm">
                        /{billingCycle === "monthly" ? "month" : "year"}
                      </span>
                    </div>
                    <p className="text-xs text-stone-500 mb-1">
                      {billingCycle === "monthly"
                        ? "or \u00A3790/year (save 2 months)"
                        : "\u00A3790/year -- save 2 months"}
                    </p>
                    <p className="text-xs text-stone-500 font-medium mb-3">
                      Early adopter rate -- lock it in
                    </p>
                    <p className="text-sm text-stone-600">
                      For teams running multiple artist campaigns.
                    </p>
                  </div>

                  <ul className="space-y-3 mb-8 flex-grow text-sm text-stone-700">
                    <li className="flex items-center gap-2">
                      <span className="text-cyan-700">&#10003;</span>
                      500 enrichments/month
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-cyan-700">&#10003;</span>
                      Unlimited pitches &amp; campaigns
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-cyan-700">&#10003;</span>
                      Up to 5 team members
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-cyan-700">&#10003;</span>
                      Dedicated support
                    </li>
                  </ul>

                  <a
                    href="mailto:info@totalaudiopromo.com"
                    className="w-full py-3 text-center text-sm font-bold text-stone-900 border border-stone-300 rounded-full hover:bg-stone-50 transition-colors block"
                  >
                    Contact Us
                  </a>
                </article>
              </div>

              {/* Footer note */}
              <p className="text-center text-sm text-stone-500 mt-8">
                All plans include all three studios. Early adopter pricing --
                these rates won&apos;t last forever. Cancel anytime.
              </p>
            </div>
          </section>
        </main>

        {/* Footer -- matches landing page */}
        <footer className="bg-stone-900 text-white py-12 sm:py-16">
          <div className="max-w-5xl mx-auto px-4">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
              <div className="sm:col-span-2 lg:col-span-1">
                <div className="mb-4">
                  <Image
                    src="/images/total-audio-promo-wordmark-stacked.png"
                    alt="Total Audio Promo"
                    width={80}
                    height={80}
                    className="object-contain h-14 w-auto brightness-0 invert"
                  />
                </div>
                <p className="text-sm text-stone-400 mb-4">
                  Music PR software built by a freelance radio plugger.
                </p>
              </div>

              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider mb-4">
                  Platform
                </h4>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="https://tap.totalaudiopromo.com/home?source=footer"
                      className="text-sm text-stone-400 hover:text-white transition-colors"
                    >
                      TAP Workspace
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://intel.totalaudiopromo.com"
                      className="text-sm text-stone-400 hover:text-white transition-colors"
                    >
                      Intel Studio
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://pitcher.totalaudiopromo.com"
                      className="text-sm text-stone-400 hover:text-white transition-colors"
                    >
                      Pitcher Studio
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://tracker.totalaudiopromo.com"
                      className="text-sm text-stone-400 hover:text-white transition-colors"
                    >
                      Tracker Studio
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider mb-4">
                  Resources
                </h4>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/#newsletter"
                      className="text-sm text-stone-400 hover:text-white transition-colors"
                    >
                      Newsletter
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/pricing"
                      className="text-sm text-stone-400 hover:text-white transition-colors"
                    >
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <a
                      href="mailto:info@totalaudiopromo.com"
                      className="text-sm text-stone-400 hover:text-white transition-colors"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider mb-4">
                  Legal
                </h4>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/privacy"
                      className="text-sm text-stone-400 hover:text-white transition-colors"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/terms"
                      className="text-sm text-stone-400 hover:text-white transition-colors"
                    >
                      Terms of Service
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/gdpr"
                      className="text-sm text-stone-400 hover:text-white transition-colors"
                    >
                      GDPR
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 text-center">
              <p className="text-sm text-stone-400">
                &copy; {new Date().getFullYear()} Total Audio Promo. Built in
                Brighton by Chris Schofield.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

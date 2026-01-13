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
    description: 'Turn chaotic spreadsheets into organised contact intelligence with AI enrichment.',
    href: 'https://intel.totalaudiopromo.com',
    accent: 'intel',
    image: '/images/analyzing-data.png',
    bullets: ['100 enrichments/month', 'Email validation + submission guidelines', 'Relationship protection'],
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
    description: 'Campaign learning system. Outcomes feed back into Intel to improve future decisions.',
    href: 'https://tracker.totalaudiopromo.com',
    accent: 'tracker',
    image: '/images/tracker-mascot.png',
    bullets: ['Log campaign outcomes', 'Pattern recognition', 'Included with Intel Professional'],
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
        <meta name="description" content="Straightforward pricing for Intel, Pitcher, and Tracker." />
        <link rel="canonical" href="https://totalaudiopromo.com/pricing" />
      </Head>

      <div className="min-h-screen bg-white">
        <nav className="sticky top-0 z-50 bg-white border-b-4 border-black px-4 py-4 shadow-[0_4px_0_0_rgba(0,0,0,0.1)]">
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
              <a
                href="https://dashboard.totalaudiopromo.com"
                className="ml-2 px-4 py-2 text-sm font-bold text-white bg-gray-900 border-2 border-black rounded-lg shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-0.5 hover:-translate-y-0.5"
              >
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
                  <p className="text-sm font-semibold uppercase tracking-wide text-intel-600 mb-2">Simple Pricing</p>
                  <h1 className="text-3xl sm:text-4xl font-black text-gray-900 leading-tight">All three tools. One subscription.</h1>
                  <p className="text-lg text-gray-600 mt-2">Professional plan unlocks <strong>Intel + Pitcher + Tracker</strong> for £19/month.</p>
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
              <div className="grid lg:grid-cols-3 gap-8 items-stretch pt-8">
                {/* Tier 1: Starter */}
                <article className="bg-white border-4 border-black rounded-3xl p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all flex flex-col">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold tracking-tighter mb-2">Starter</h3>
                    <div className="flex items-baseline gap-1 mb-4">
                      <span className="text-4xl font-extrabold italic text-gray-900">£{tierPricing.starter}</span>
                      <span className="text-gray-400 font-bold uppercase text-[10px] tracking-widest">/{billingCycle === 'monthly' ? 'mo' : 'yr'}</span>
                    </div>
                    <p className="text-sm text-gray-600 font-medium leading-relaxed">
                      For individuals testing the waters with professional contact intelligence.
                    </p>
                  </div>

                  <ul className="space-y-4 mb-8 flex-grow">
                    <li className="flex items-center gap-3 text-xs font-bold text-gray-700">
                      <span className="w-5 h-5 rounded-md bg-intel-100 border-2 border-intel-600 flex items-center justify-center text-[10px] text-intel-600">✓</span>
                      Intel (Contact Enrichment)
                    </li>
                    <li className="flex items-center gap-3 text-xs font-medium text-gray-400 italic">
                      Tracker (Outcome Ledger)
                    </li>
                    <li className="flex items-center gap-3 text-xs font-medium text-gray-400 italic">
                      Pitcher (Draft Assistance)
                    </li>
                  </ul>

                  <a
                    href="https://dashboard.totalaudiopromo.com"
                    className="w-full py-3 text-center border-2 border-black rounded-xl font-bold tracking-tight hover:bg-gray-50 transition-colors"
                  >
                    Start for Free
                  </a>
                </article>

                {/* Tier 2: Professional (Highlight) */}
                <article className="bg-white border-4 border-black rounded-[2.5rem] p-10 shadow-[12px_12px_0px_0px_rgba(37,99,235,1)] hover:-translate-y-2 transition-all flex flex-col relative ring-4 ring-blue-100 ring-offset-8">
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-6 py-2 rounded-full border-4 border-black text-xs font-black uppercase tracking-widest shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] whitespace-nowrap">
                    All Access Included
                  </div>
                  
                  <div className="mb-6 pt-4">
                    <h3 className="text-3xl font-bold tracking-tighter mb-2">Professional</h3>
                    <div className="flex items-baseline gap-1 mb-4">
                      <span className="text-6xl font-extrabold italic text-blue-600">£{tierPricing.pro}</span>
                      <span className="text-gray-400 font-bold uppercase text-xs tracking-widest">/{billingCycle === 'monthly' ? 'mo' : 'yr'}</span>
                    </div>
                    <p className="text-sm text-gray-900 font-bold leading-relaxed">
                      Our flagship workflow. Intel + Pitcher + Tracker. All unlocked.
                    </p>
                  </div>

                  <ul className="space-y-4 mb-8 flex-grow">
                    <li className="flex items-center gap-3 text-sm font-bold text-gray-900">
                      <span className="w-6 h-6 rounded-lg bg-intel-600 text-white flex items-center justify-center border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">✓</span>
                      Intel (Enrichment)
                    </li>
                    <li className="flex items-center gap-3 text-sm font-bold text-gray-900">
                      <span className="w-6 h-6 rounded-lg bg-pitch-600 text-white flex items-center justify-center border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">✓</span>
                      Pitcher (Pitches)
                    </li>
                    <li className="flex items-center gap-3 text-sm font-bold text-gray-900">
                      <span className="w-6 h-6 rounded-lg bg-tracker-600 text-white flex items-center justify-center border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">✓</span>
                      Tracker (Ledger)
                    </li>
                    <li className="flex items-center gap-3 text-xs font-bold text-gray-500">
                      <span className="text-green-600 font-bold">→</span> High-volume exports
                    </li>
                  </ul>

                  <a
                    href="https://dashboard.totalaudiopromo.com"
                    className="w-full py-4 text-xl text-center bg-blue-600 text-white border-4 border-black rounded-2xl font-bold tracking-tight shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all"
                  >
                    Get All Access
                  </a>
                </article>

                {/* Tier 3: Agency */}
                <article className="bg-white border-4 border-black rounded-3xl p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all flex flex-col">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold tracking-tighter mb-2">Agency</h3>
                    <div className="flex items-baseline gap-1 mb-4">
                      <span className="text-4xl font-extrabold italic text-gray-900">£{tierPricing.agency}</span>
                      <span className="text-gray-400 font-bold uppercase text-[10px] tracking-widest">/{billingCycle === 'monthly' ? 'mo' : 'yr'}</span>
                    </div>
                    <p className="text-sm text-gray-600 font-medium leading-relaxed">
                      For teams and labels managing multiple artist rosters.
                    </p>
                  </div>

                  <ul className="space-y-4 mb-8 flex-grow">
                    <li className="flex items-center gap-3 text-xs font-bold text-gray-700">
                      <span className="w-5 h-5 rounded-md bg-gray-900 text-white flex items-center justify-center text-[10px] border-2 border-black">✓</span>
                      Everything in Professional
                    </li>
                    <li className="flex items-center gap-3 text-xs font-bold text-gray-700">
                      <span className="w-5 h-5 rounded-md bg-gray-900 text-white flex items-center justify-center text-[10px] border-2 border-black">✓</span>
                      Team Collaboration
                    </li>
                    <li className="flex items-center gap-3 text-xs font-bold text-gray-700">
                      <span className="w-5 h-5 rounded-md bg-gray-900 text-white flex items-center justify-center text-[10px] border-2 border-black">✓</span>
                      500+ enrichments
                    </li>
                  </ul>

                  <a
                    href="https://dashboard.totalaudiopromo.com"
                    className="w-full py-3 text-center border-2 border-black rounded-xl font-bold tracking-tight hover:bg-gray-50 transition-colors"
                  >
                    Contact Us
                  </a>
                </article>
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
                  <p className="text-gray-600 mt-2">Same pricing across Intel, Pitcher, and Tracker. Upgrade anytime.</p>
                </div>
              </div>

              <div className="grid lg:grid-cols-3 gap-6">
                {products.map((product) => (
                  <article key={product.id} className={`product-card product-card--${product.accent} flex flex-col`}>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-16 h-16 rounded-2xl border-4 border-black bg-white flex items-center justify-center overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                        <Image src={product.image} alt={product.name} width={56} height={56} className="object-contain" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 tracking-tighter">{product.name}</h3>
                        <p className="text-sm text-gray-600 font-medium">Included in Professional</p>
                      </div>
                    </div>

                    <div className="mb-6 flex-grow">
                        <ul className="space-y-3 text-sm text-gray-700">
                        {product.bullets.map((bullet) => (
                            <li key={bullet} className="flex items-start gap-3">
                            <span className="text-green-600 font-bold mt-0.5 border-2 border-green-600 rounded px-1 text-[10px] uppercase tracking-tighter shadow-[1px_1px_0px_0px_rgba(22,163,74,1)]">✓</span>
                            <span className="font-medium">{bullet}</span>
                            </li>
                        ))}
                        </ul>
                    </div>

                    <a href={product.href} className="cta-button w-full text-center py-4 bg-white hover:bg-gray-50 text-gray-900 border-2 border-black font-bold tracking-tight shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-0.5 hover:-translate-y-0.5 mb-2">
                      Start Trial
                    </a>
                  </article>
                ))}
              </div>
            </div>
          </section>
        </main>

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
                  Built by radio promoters for radio promoters.
                </p>
              </div>
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider mb-4">Legal</h4>
                <ul className="space-y-2">
                  <li><Link href="/privacy" className="text-sm text-gray-400 hover:text-white">Privacy Policy</Link></li>
                  <li><Link href="/terms" className="text-sm text-gray-400 hover:text-white">Terms of Service</Link></li>
                  <li><Link href="/gdpr" className="text-sm text-gray-400 hover:text-white">GDPR</Link></li>
                </ul>
              </div>
            </div>
            <div className="pt-6 border-t border-white/10 text-center">
              <p className="text-sm text-gray-400">© {new Date().getFullYear()} Total Audio Promo. Built in Brighton.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}


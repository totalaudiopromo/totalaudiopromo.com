import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { NewsletterSignup } from "../components/NewsletterSignup";
import { CaseStudyBanner } from "../components/CaseStudyBanner";
import { TrustBadges } from "../components/TrustBadges";
import {
  MotionScrollReveal,
  MotionStaggerChild,
  GlowButton,
} from "../components/animations";
import { ExperienceTimeline } from "../components/ExperienceTimeline";

export default function HomePage() {
  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>Music PR Software for Freelance Pluggers &amp; Small Agencies | TAP</title>
        <meta
          name="description"
          content="Music PR software built by a freelance radio plugger. Research contacts, draft pitches, track outcomes. BBC Radio 1 and Kiss FM campaigns. Start free."
        />
        <meta
          name="keywords"
          content="music PR software, music promotion platform, radio promotion software UK, music PR workspace, contact enrichment, pitch generator, campaign tracking, UK music industry"
        />
        <meta name="author" content="Chris Schofield" />
        <meta name="robots" content="index, follow" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://totalaudiopromo.com" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://totalaudiopromo.com" />
        <meta
          property="og:title"
          content="Music PR Software for Freelance Pluggers & Small Agencies | TAP"
        />
        <meta
          property="og:description"
          content="Music PR software built by a freelance radio plugger. Research contacts, draft pitches, track outcomes. BBC Radio 1 and Kiss FM campaigns. Start free."
        />
        <meta
          property="og:image"
          content="https://totalaudiopromo.com/images/total_audio_promo_logo_trans.png"
        />
        <meta property="og:site_name" content="Total Audio Promo" />
        <meta property="og:locale" content="en_GB" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://totalaudiopromo.com" />
        <meta
          name="twitter:title"
          content="Music PR Software for Freelance Pluggers & Small Agencies | TAP"
        />
        <meta
          name="twitter:description"
          content="Music PR software built by a freelance radio plugger. Research contacts, draft pitches, track outcomes. BBC Radio 1 and Kiss FM campaigns. Start free."
        />
        <meta
          name="twitter:image"
          content="https://totalaudiopromo.com/images/total_audio_promo_logo_trans.png"
        />

        {/* Structured Data - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Total Audio Promo",
              url: "https://totalaudiopromo.com",
              logo: "https://totalaudiopromo.com/images/total_audio_promo_logo_trans.png",
              description:
                "Music PR software built by a freelance radio plugger for small agencies and independent operators. Research, draft, and track in one workspace.",
              founder: {
                "@type": "Person",
                name: "Chris Schofield",
              },
              sameAs: [
                "https://x.com/chrisschouk",
                "https://www.linkedin.com/in/chrisschofield1/",
              ],
            }),
          }}
        />

        {/* Structured Data - SoftwareApplication */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "TAP",
              applicationCategory: "BusinessApplication",
              operatingSystem: "Web",
              url: "https://tap.totalaudiopromo.com",
              description:
                "Music PR software with contact enrichment, pitch drafting, and campaign tracking. Built by a freelance radio plugger for small agencies and independent operators.",
              offers: [
                {
                  "@type": "Offer",
                  price: "0",
                  priceCurrency: "GBP",
                  name: "Free",
                },
                {
                  "@type": "Offer",
                  price: "19",
                  priceCurrency: "GBP",
                  name: "Pro",
                  billingIncrement: "P1M",
                },
                {
                  "@type": "Offer",
                  price: "79",
                  priceCurrency: "GBP",
                  name: "Agency",
                  billingIncrement: "P1M",
                },
              ],
              creator: {
                "@type": "Organization",
                name: "Total Audio Promo",
              },
            }),
          }}
        />

        {/* Structured Data - FAQPage */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Is this another CRM?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "No. CRMs track relationships. TAP handles the actual work of music PR -- researching contacts, drafting pitches, and tracking outcomes. It replaces the spreadsheets, email templates, and manual processes you're currently juggling.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Does TAP send emails automatically?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Never. TAP drafts pitches for you to review and send yourself. Your reputation depends on every message being intentional. We'll never auto-send on your behalf.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What does TAP replace?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The stack you're currently stitching together: contact spreadsheets, WARM or similar databases, email templates in Google Docs, CoverageBook, Mailchimp, and whatever you're using to track responses. TAP handles all of it.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can I import my existing contacts?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. You can import contacts from CSV or add them manually. Intel Studio then enriches them with verified emails, submission preferences, and role detection.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is my data safe?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. TAP is GDPR compliant, UK-hosted, and encrypted with 256-bit encryption. Your data is exportable anytime -- you always own your contacts and campaign history.",
                  },
                },
              ],
            }),
          }}
        />

        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-WZNJWDKH');
            `,
          }}
        />
      </Head>

      <div className="min-h-screen bg-stone-50 flex flex-col font-sans">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WZNJWDKH"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

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
                href="#studios"
                className="hidden sm:inline-flex px-3 py-1.5 text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors rounded-full hover:bg-stone-100"
              >
                How It Works
              </a>
              <Link
                href="/pricing"
                className="hidden sm:inline-flex px-3 py-1.5 text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors rounded-full hover:bg-stone-100"
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
          {/* ============================================
              SECTION 1: Hero -- Hook (0-3 seconds)
              ============================================ */}
          <section className="hero-stage py-14 sm:py-20">
            <div className="max-w-5xl mx-auto px-4 relative">
              <div className="grid lg:grid-cols-5 gap-10 items-center">
                {/* Left Column (60%) */}
                <div className="lg:col-span-3">
                  <MotionScrollReveal variant="fadeUp">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-stone-900 leading-[1.1] mb-6 tracking-tight">
                      Music PR software built inside real radio campaigns
                    </h1>
                  </MotionScrollReveal>

                  <MotionScrollReveal variant="fadeUp" delay={0.1}>
                    <p className="text-xl text-stone-600 mb-4 leading-relaxed">
                      I got tired of running campaigns across spreadsheets,
                      inboxes, and memory. So I built one workspace to research
                      contacts, draft pitches, and track outcomes.
                    </p>
                    <p className="text-lg font-semibold text-stone-800 mb-6">
                      Built by a freelance radio plugger. BBC Radio 1, 6 Music,
                      Kiss FM.
                    </p>
                  </MotionScrollReveal>

                  <MotionScrollReveal variant="fadeUp" delay={0.2}>
                    <div className="mb-6">
                      <GlowButton
                        variant="primary"
                        size="lg"
                        href="https://tap.totalaudiopromo.com/signup?source=hero"
                        glowPulse
                      >
                        Start Free
                      </GlowButton>
                    </div>
                  </MotionScrollReveal>

                  <TrustBadges
                    badges={[
                      { text: "No credit card required", icon: "shield" },
                      { text: "Cancel anytime", icon: "clock" },
                      { text: "All studios included", icon: "check" },
                    ]}
                  />
                </div>

                {/* Right Column (40%) */}
                <MotionScrollReveal
                  variant="fadeLeft"
                  delay={0.3}
                  className="lg:col-span-2 flex flex-col items-center"
                >
                  <div className="relative">
                    <div className="relative z-10">
                      <Image
                        src="/images/chris-schofield-founder-photo.jpg"
                        alt="Chris Schofield - Founder of Total Audio Promo, radio promoter with 5+ years experience"
                        width={200}
                        height={200}
                        className="rounded-2xl border-2 border-stone-200 shadow-soft-lg"
                        priority
                      />
                    </div>

                    {/* Founder context badge */}
                    <div className="absolute -top-4 -left-4 bg-white rounded-xl border border-stone-200 shadow-soft p-3 z-30 rotate-[-3deg]">
                      <div className="text-[11px] font-bold text-stone-900 leading-tight">
                        Built by a freelance plugger
                      </div>
                      <div className="text-[10px] text-stone-500 font-medium">
                        BBC Radio 1 &middot; 6 Music &middot; Kiss FM
                      </div>
                    </div>
                  </div>
                </MotionScrollReveal>
              </div>
            </div>
          </section>

          {/* ============================================
              SECTION 2: Proof -- Believe
              "Does this actually work?"
              ============================================ */}
          <CaseStudyBanner
            title="Real campaign results using TAP workflow"
            metrics={[
              { before: "18 hours", after: "1h 48m", label: "Research Time" },
              {
                before: "4 bounced",
                after: "0 bounced",
                label: "Email Errors",
              },
              { before: "9%", after: "32%", label: "Response Rate" },
              {
                before: "No retainer",
                after: "6 months",
                label: "Contract Signed",
              },
            ]}
          />

          {/* ============================================
              SECTION 3: The Switch -- Understand
              "What does it actually do?"
              ============================================ */}
          <section id="studios" className="py-12 sm:py-16 bg-white">
            <div className="max-w-5xl mx-auto px-4">
              <MotionScrollReveal variant="fadeUp">
                <div className="text-center mb-10">
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 mb-4 tracking-tight">
                    Replace 7 tools with one workspace
                  </h2>
                  <p className="text-lg text-stone-600 max-w-2xl mx-auto mb-8">
                    Gmail, spreadsheets, WARM, CoverageBook, Google Drive,
                    Mailchimp, Typeform — you&apos;re juggling too many tools.
                    TAP handles the workflow in one place.
                  </p>
                </div>
              </MotionScrollReveal>

              <MotionScrollReveal variant="stagger" trigger="eager">
                <div className="grid md:grid-cols-3 gap-8">
                  {/* Intel */}
                  <MotionStaggerChild>
                    <div className="relative p-6 rounded-2xl bg-white border-l-[3px] border-l-transparent border border-stone-200 shadow-soft hover:shadow-soft-lg hover:border-l-intel-600 hover:-translate-y-0.5 transition-all duration-200">
                      <div className="w-1 h-12 bg-intel-600 rounded-full absolute left-0 top-8 opacity-0" />
                      <div className="pl-4">
                        <h3 className="text-lg font-bold text-stone-900 mb-2">
                          Research
                        </h3>
                        <a
                          href="https://intel.totalaudiopromo.com"
                          className="text-sm font-medium text-cyan-700 hover:text-cyan-800 transition-colors mb-3 inline-block"
                        >
                          Intel Studio &rarr;
                        </a>
                        <p className="text-stone-600 text-sm leading-relaxed">
                          Enrich contacts with verified emails, submission
                          preferences, and role detection. Know who to pitch
                          before you pitch them.
                        </p>
                      </div>
                    </div>
                  </MotionStaggerChild>

                  {/* Pitcher */}
                  <MotionStaggerChild>
                    <div className="relative p-6 rounded-2xl bg-white border-l-[3px] border-l-transparent border border-stone-200 shadow-soft hover:shadow-soft-lg hover:border-l-pitch-600 hover:-translate-y-0.5 transition-all duration-200">
                      <div className="w-1 h-12 bg-pitch-600 rounded-full absolute left-0 top-8 opacity-0" />
                      <div className="pl-4">
                        <h3 className="text-lg font-bold text-stone-900 mb-2">
                          Draft
                        </h3>
                        <a
                          href="https://pitcher.totalaudiopromo.com"
                          className="text-sm font-medium text-cyan-700 hover:text-cyan-800 transition-colors mb-3 inline-block"
                        >
                          Pitcher Studio &rarr;
                        </a>
                        <p className="text-stone-600 text-sm leading-relaxed">
                          Generate context-aware pitches that reference each
                          contact&apos;s submission guidelines. Review, edit,
                          and export in batches.
                        </p>
                      </div>
                    </div>
                  </MotionStaggerChild>

                  {/* Tracker */}
                  <MotionStaggerChild>
                    <div className="relative p-6 rounded-2xl bg-white border-l-[3px] border-l-transparent border border-stone-200 shadow-soft hover:shadow-soft-lg hover:border-l-tracker-600 hover:-translate-y-0.5 transition-all duration-200">
                      <div className="w-1 h-12 bg-tracker-600 rounded-full absolute left-0 top-8 opacity-0" />
                      <div className="pl-4">
                        <h3 className="text-lg font-bold text-stone-900 mb-2">
                          Track
                        </h3>
                        <a
                          href="https://tracker.totalaudiopromo.com"
                          className="text-sm font-medium text-cyan-700 hover:text-cyan-800 transition-colors mb-3 inline-block"
                        >
                          Tracker Studio &rarr;
                        </a>
                        <p className="text-stone-600 text-sm leading-relaxed">
                          See which contacts opened, replied, and added your
                          track. Turn campaign outcomes into intelligence for
                          next time.
                        </p>
                      </div>
                    </div>
                  </MotionStaggerChild>
                </div>
              </MotionScrollReveal>

              <div className="text-center mt-10">
                <MotionScrollReveal variant="fadeUp">
                  <a
                    href="https://tap.totalaudiopromo.com/signup?source=studios"
                    className="inline-block px-8 py-4 text-base font-bold text-white bg-cyan-700 rounded-full hover:bg-cyan-800 transition-colors shadow-[0_1px_2px_rgba(0,0,0,0.05),0_4px_16px_rgba(8,145,178,0.25)]"
                  >
                    Start using TAP free — all three studios included
                  </a>
                </MotionScrollReveal>
              </div>
            </div>
          </section>

          {/* ============================================
              SECTION 4: ICP Filter -- Self-Select
              "Is this for someone like me?"
              ============================================ */}
          <section className="py-12 sm:py-16 bg-stone-100">
            <div className="max-w-5xl mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-10 items-start">
                <div>
                  <MotionScrollReveal variant="fadeUp">
                    <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-6 tracking-tight">
                      Built for experienced operators
                    </h2>
                  </MotionScrollReveal>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-bold text-stone-900 mb-3 flex items-center gap-2">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-cyan-700 text-white flex items-center justify-center text-xs">
                          &#10003;
                        </span>
                        This is for you if:
                      </h3>
                      <ul className="space-y-3 text-stone-700">
                        <li className="flex items-start gap-3">
                          <span className="font-semibold">Agency Level</span> —
                          You&apos;re a small PR agency (1–5 people) managing
                          multiple campaigns.
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="font-semibold">Experienced DIY</span>{" "}
                          — Freelance plugger, label, or manager with a proven track record.
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="font-semibold">
                            Relationship First
                          </span>{" "}
                          — You care about long-term industry reputation, not
                          volume.
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-stone-900 mb-3 flex items-center gap-2">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-stone-400 text-white flex items-center justify-center text-xs">
                          &times;
                        </span>
                        This is NOT for you if:
                      </h3>
                      <ul className="space-y-3 text-stone-500 italic">
                        <li>
                          You&apos;re releasing your first record and exploring
                          how PR works.
                        </li>
                        <li>
                          You want &quot;send it everywhere&quot; mass outreach.
                        </li>
                        <li>
                          You need templates or hand-held guidance on what to
                          say.
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8">
                    <a
                      href="https://tap.totalaudiopromo.com/signup?source=icp-filter"
                      className="inline-block px-6 py-3 text-base font-bold text-white bg-cyan-700 rounded-full hover:bg-cyan-800 transition-colors shadow-[0_1px_2px_rgba(0,0,0,0.05),0_4px_16px_rgba(8,145,178,0.25)]"
                    >
                      Start Free — No Card Required
                    </a>
                  </div>
                </div>

                <MotionScrollReveal variant="fadeLeft" delay={0.2}>
                  <div className="flex justify-center">
                    <Image
                      src="/images/total_audio_promo_logo_trans.png"
                      alt="Total Audio Promo dog mascot with speakers"
                      width={320}
                      height={320}
                      className="drop-shadow-lg animate-float-slow"
                    />
                  </div>
                </MotionScrollReveal>
              </div>
            </div>
          </section>

          {/* ============================================
              SECTION 5: Founder Journey -- Trust
              "Who built this?"
              ============================================ */}
          <ExperienceTimeline />

          {/* ============================================
              SECTION 6: Trust Strip + Pricing
              ============================================ */}
          <section className="py-6 bg-stone-50 border-y border-stone-200 border-t-cyan-700/20">
            <div className="max-w-4xl mx-auto px-4">
              <div className="flex flex-wrap justify-center gap-8 text-sm text-stone-600">
                <div className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-cyan-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                  256-bit encrypted, UK-hosted
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-cyan-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                  GDPR compliant
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-cyan-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                  UK-based
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-cyan-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                  Your data, exportable anytime
                </div>
              </div>
            </div>
          </section>

          <section
            id="pricing"
            className="py-12 sm:py-16 bg-white"
          >
            <div className="max-w-5xl mx-auto px-4">
              <header className="text-center mb-12">
                <div className="inline-block mb-3 px-3 py-1 rounded-full bg-stone-100 border border-stone-300 text-stone-700 text-xs font-bold uppercase tracking-wide">
                  Early adopter pricing
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-3 tracking-tight">
                  Music PR Software Pricing
                </h2>
                <p className="text-lg text-stone-600 max-w-xl mx-auto">
                  All three studios included in every plan. Start free, upgrade
                  when you&apos;re ready. Lock in these rates before they go up.
                </p>
              </header>

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

                {/* Pro */}
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
                        &pound;19
                      </span>
                      <span className="text-stone-400 text-sm">/month</span>
                    </div>
                    <p className="text-xs text-stone-500 mb-1">
                      or &pound;190/year (save 2 months)
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
                        &pound;79
                      </span>
                      <span className="text-stone-400 text-sm">/month</span>
                    </div>
                    <p className="text-xs text-stone-500 mb-1">
                      or &pound;790/year (save 2 months)
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

              <p className="text-center text-sm text-stone-500 mt-6">
                All plans include all three studios. Early adopter pricing --
                these rates won&apos;t last forever. Cancel anytime.
              </p>
            </div>
          </section>

          {/* ============================================
              SECTION 7: FAQ
              ============================================ */}
          <section className="py-12 sm:py-16 bg-stone-100">
            <div className="max-w-3xl mx-auto px-4">
              <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-10 tracking-tight text-center">
                Frequently Asked Questions
              </h2>

              <div className="space-y-6">
                <details className="group bg-white border border-stone-200 rounded-2xl shadow-soft">
                  <summary className="flex items-center justify-between px-6 py-5 cursor-pointer text-lg font-semibold text-stone-900 [&::-webkit-details-marker]:hidden">
                    Is this another CRM?
                    <svg className="w-5 h-5 text-stone-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-5 text-stone-600 leading-relaxed">
                    No. CRMs track relationships. TAP handles the actual work of
                    music PR -- researching contacts, drafting pitches, and
                    tracking outcomes. It replaces the spreadsheets, email
                    templates, and manual processes you&apos;re currently juggling.
                  </div>
                </details>

                <details className="group bg-white border border-stone-200 rounded-2xl shadow-soft">
                  <summary className="flex items-center justify-between px-6 py-5 cursor-pointer text-lg font-semibold text-stone-900 [&::-webkit-details-marker]:hidden">
                    Does TAP send emails automatically?
                    <svg className="w-5 h-5 text-stone-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-5 text-stone-600 leading-relaxed">
                    Never. TAP drafts pitches for you to review and send yourself.
                    Your reputation depends on every message being intentional.
                    We&apos;ll never auto-send on your behalf.
                  </div>
                </details>

                <details className="group bg-white border border-stone-200 rounded-2xl shadow-soft">
                  <summary className="flex items-center justify-between px-6 py-5 cursor-pointer text-lg font-semibold text-stone-900 [&::-webkit-details-marker]:hidden">
                    What does TAP replace?
                    <svg className="w-5 h-5 text-stone-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-5 text-stone-600 leading-relaxed">
                    The stack you&apos;re currently stitching together: contact
                    spreadsheets, WARM or similar databases, email templates in
                    Google Docs, CoverageBook, Mailchimp, and whatever you&apos;re
                    using to track responses. TAP handles all of it.
                  </div>
                </details>

                <details className="group bg-white border border-stone-200 rounded-2xl shadow-soft">
                  <summary className="flex items-center justify-between px-6 py-5 cursor-pointer text-lg font-semibold text-stone-900 [&::-webkit-details-marker]:hidden">
                    Can I import my existing contacts?
                    <svg className="w-5 h-5 text-stone-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-5 text-stone-600 leading-relaxed">
                    Yes. You can import contacts from CSV or add them manually.
                    Intel Studio then enriches them with verified emails,
                    submission preferences, and role detection.
                  </div>
                </details>

                <details className="group bg-white border border-stone-200 rounded-2xl shadow-soft">
                  <summary className="flex items-center justify-between px-6 py-5 cursor-pointer text-lg font-semibold text-stone-900 [&::-webkit-details-marker]:hidden">
                    Is my data safe?
                    <svg className="w-5 h-5 text-stone-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-5 text-stone-600 leading-relaxed">
                    Yes. TAP is GDPR compliant, UK-hosted, and encrypted with
                    256-bit encryption. Your data is exportable anytime -- you
                    always own your contacts and campaign history.
                  </div>
                </details>
              </div>
            </div>
          </section>

          {/* ============================================
              SECTION 8: Newsletter -- Nurture
              ============================================ */}
          <section id="newsletter" className="py-10 sm:py-14 bg-stone-50">
            <div className="max-w-xl mx-auto px-4 text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 mb-3">
                Not ready to sign up?
              </h2>
              <p className="text-lg text-stone-600 mb-8">
                Fortnightly tips for music PR operators. No spam.
              </p>
              <NewsletterSignup />
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="relative bg-stone-900 text-white pt-14 sm:pt-20 pb-10 sm:pb-14">
          {/* Subtle cyan gradient accent at top */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-700/40 to-transparent" />

          <div className="max-w-5xl mx-auto px-4">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
              {/* Brand */}
              <div className="sm:col-span-2 lg:col-span-1">
                <div className="mb-5">
                  <Image
                    src="/images/total-audio-promo-wordmark-stacked.png"
                    alt="Total Audio Promo"
                    width={80}
                    height={80}
                    className="object-contain h-14 w-auto brightness-0 invert"
                  />
                </div>
                <p className="text-sm text-stone-400 mb-5 leading-relaxed">
                  Music PR software built by a freelance radio plugger. Research,
                  draft, track -- one workspace.
                </p>
                <div className="flex gap-4">
                  <a
                    href="https://x.com/chrisschouk"
                    className="text-stone-500 hover:text-cyan-400 transition-colors"
                    aria-label="Follow on X (Twitter)"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/chrisschofield1/"
                    className="text-stone-500 hover:text-cyan-400 transition-colors"
                    aria-label="Connect on LinkedIn"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Platform */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-stone-500 mb-4">
                  Platform
                </h4>
                <ul className="space-y-2.5">
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

              {/* Resources */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-stone-500 mb-4">
                  Resources
                </h4>
                <ul className="space-y-2.5">
                  <li>
                    <a
                      href="#newsletter"
                      className="text-sm text-stone-400 hover:text-white transition-colors"
                    >
                      Newsletter
                    </a>
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

              {/* Legal */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-stone-500 mb-4">
                  Legal
                </h4>
                <ul className="space-y-2.5">
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

            <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-sm text-stone-500">
                &copy; {new Date().getFullYear()} Total Audio Promo
              </p>
              <p className="text-sm text-stone-500">
                Built in Brighton by Chris Schofield
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

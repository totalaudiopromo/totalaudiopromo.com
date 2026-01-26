import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { NewsletterSignup } from "../components/NewsletterSignup";
import { StatCard } from "../components/StatCard";
import { CaseStudyBanner } from "../components/CaseStudyBanner";
import { TrustBadges } from "../components/TrustBadges";
import { FeatureShowcase } from "../components/FeatureShowcase";
import { ScrollReveal } from "../components/ScrollReveal";
import {
  MotionScrollReveal,
  MotionStaggerChild,
  AnimatedCounter,
  GlowButton,
  HeroGradient,
  DarkGradient,
} from "../components/animations";
import { ExperienceTimeline } from "../components/ExperienceTimeline";

export default function HomePage() {
  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>
          Total Audio Promo | Professional PR Execution & Relationship
          Intelligence
        </title>
        <meta
          name="description"
          content="Professional PR execution without enterprise complexity. Relationship-aware intelligence for experienced operators and small PR agencies."
        />
        <meta
          name="keywords"
          content="music promotion, radio promotion, contact research, pitch generator, campaign tracking, independent artists, UK music industry, BBC Radio, playlist pitching"
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
          content="Total Audio Promo | Professional PR Execution"
        />
        <meta
          property="og:description"
          content="Professional PR execution without enterprise complexity. Relationship-aware intelligence for experienced agencies and operators."
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
          content="Total Audio Promo | Professional PR Execution"
        />
        <meta
          name="twitter:description"
          content="Professional PR execution without enterprise complexity. Relationship-aware intelligence for experienced agencies."
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
                "AI-powered music promotion tools for independent artists and radio promoters",
              founder: {
                "@type": "Person",
                name: "Chris Schofield",
              },
              sameAs: [
                "https://intel.totalaudiopromo.com",
                "https://pitcher.totalaudiopromo.com",
                "https://tracker.totalaudiopromo.com",
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

      <div className="min-h-screen bg-white flex flex-col font-sans">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WZNJWDKH"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {/* Navigation - Sticky with scroll shrink */}
        <nav className="sticky top-0 z-50 bg-white border-b-4 border-black px-4 py-4 shadow-[0_4px_0_0_rgba(0,0,0,0.1)]">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
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

            {/* Tool Links */}
            <div className="flex items-center gap-2 sm:gap-4">
              <a
                href="https://intel.totalaudiopromo.com"
                className="px-3 py-2 text-sm font-semibold text-gray-700 hover:text-intel-600 transition-colors rounded-lg hover:bg-intel-50"
              >
                Intel
              </a>
              <a
                href="https://pitcher.totalaudiopromo.com"
                className="px-3 py-2 text-sm font-semibold text-gray-700 hover:text-pitch-600 transition-colors rounded-lg hover:bg-pitch-50"
              >
                Pitcher
              </a>
              <a
                href="https://tracker.totalaudiopromo.com"
                className="px-3 py-2 text-sm font-semibold text-gray-700 hover:text-tracker-600 transition-colors rounded-lg hover:bg-tracker-50"
              >
                Tracker
              </a>
              <Link
                href="/pricing"
                className="px-3 py-2 text-sm font-semibold text-gray-800 rounded-lg border border-gray-200 hover:border-gray-300 hover:bg-gray-100 transition-colors"
              >
                Pricing
              </Link>

              {/* Dashboard Button */}
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
          {/* Hero Section - Complete Reimagining */}
          <HeroGradient className="py-12 sm:py-16">
            {/* Subtle grid pattern background */}
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage:
                  "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />

            <div className="max-w-6xl mx-auto px-4 relative">
              <div className="grid lg:grid-cols-5 gap-10 items-center">
                {/* Left Column (60%) */}
                <div className="lg:col-span-3">
                  <MotionScrollReveal variant="fadeUp">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 leading-tight mb-5">
                      Professional PR execution without enterprise complexity
                    </h1>
                  </MotionScrollReveal>

                  <MotionScrollReveal variant="fadeUp" delay={0.1}>
                    <p className="text-xl text-gray-600 mb-5 leading-relaxed">
                      Total Audio Promo provides professional PR execution tools
                      for music industry operators. Our core intelligence layer,
                      <strong> Intel</strong>, surfaces relationship health and
                      submission context so you can understand who is warming,
                      who is cooling, and exactly how to approach them before
                      you hit send.
                    </p>
                    <p className="text-lg font-bold text-gray-900 mb-5">
                      Built for small PR agencies, experienced operators, and
                      managers who value relationships over volume.
                    </p>
                  </MotionScrollReveal>

                  <MotionScrollReveal variant="fadeUp" delay={0.2}>
                    <div className="flex flex-wrap gap-4 mb-6">
                      <GlowButton
                        variant="intel"
                        size="lg"
                        href="https://intel.totalaudiopromo.com"
                        glowPulse
                      >
                        Start Free Trial
                      </GlowButton>
                      <GlowButton
                        variant="secondary"
                        size="lg"
                        href="#ecosystem"
                      >
                        See It In Action
                      </GlowButton>
                    </div>
                  </MotionScrollReveal>

                  <TrustBadges
                    badges={[
                      { text: "Verified Relationship Intel", icon: "check" },
                      { text: "Decision Support Focus", icon: "shield" },
                      { text: "Cancel Anytime", icon: "clock" },
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
                    {/* Founder Photo */}
                    <div className="relative z-10">
                      <Image
                        src="/images/chris-schofield-founder-photo.jpg"
                        alt="Chris Schofield - Founder of Total Audio Promo, radio promoter with 5+ years experience"
                        width={200}
                        height={200}
                        className="rounded-2xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
                        priority
                      />
                    </div>

                    {/* Data ownership badge */}
                    <div className="absolute -bottom-4 -right-4 bg-white rounded-xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] p-3 z-20 animate-float">
                      <div className="flex items-center gap-2 text-xs">
                        <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                        <span className="font-bold text-gray-900">
                          Data You Own
                        </span>
                      </div>
                    </div>

                    {/* Founder context badge */}
                    <div className="absolute -top-6 -left-6 bg-white rounded-xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] p-3 z-30 rotate-[-4deg]">
                      <div className="text-[11px] font-black text-gray-900 leading-tight">
                        Built by a radio promoter
                      </div>
                      <div className="text-[10px] text-gray-600 font-medium">
                        BBC Radio 1 · 6 Music · Spotify
                      </div>
                    </div>
                  </div>

                  <p className="mt-6 text-sm text-gray-500 text-center max-w-xs">
                    Relationship intelligence, not automation.
                  </p>
                </MotionScrollReveal>
              </div>
            </div>
          </HeroGradient>

          {/* Who This Is For - ICP Clarity */}
          <section className="py-16 sm:py-20 bg-gradient-to-br from-blue-50 to-white relative overflow-hidden">
            {/* Subtle background pattern */}
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(45deg, #000 0, #000 1px, transparent 0, transparent 50%)",
                backgroundSize: "20px 20px",
              }}
            />

            <div className="max-w-6xl mx-auto px-4 relative">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-6">
                    Built for experienced operators
                  </h2>
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-xl font-bold text-blue-600 mb-3 flex items-center gap-2">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs">
                          ✓
                        </span>
                        This is for you if:
                      </h3>
                      <ul className="space-y-3 text-lg text-gray-700">
                        <li className="flex items-start gap-3">
                          <span className="font-bold">Agency Level</span> —
                          You&apos;re a small PR agency (1–5 people) managing
                          multiple campaigns.
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="font-bold">Experienced DIY</span> —
                          Artist, label, or manager with a proven track record.
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="font-bold">Relationship First</span>{" "}
                          — You care about long-term industry reputation, not
                          volume.
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-red-600 mb-3 flex items-center gap-2">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-red-600 text-white flex items-center justify-center text-xs">
                          ×
                        </span>
                        This is NOT for you if:
                      </h3>
                      <ul className="space-y-3 text-lg text-gray-700">
                        <li className="flex items-start gap-3 italic">
                          You&apos;re releasing your first record and checking
                          how PR works.
                        </li>
                        <li className="flex items-start gap-3 italic">
                          You want &quot;send it everywhere&quot; mass outreach.
                        </li>
                        <li className="flex items-start gap-3 italic">
                          You need templates or hand-held guidance on what to
                          say.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center">
                  <Image
                    src="/images/total_audio_promo_logo_trans.png"
                    alt="Total Audio Promo - Dog with headphones and speakers"
                    width={400}
                    height={400}
                    className="drop-shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Solution Section - Interactive Workflow */}
          <section id="ecosystem" className="py-12 sm:py-16 bg-white">
            <div className="max-w-6xl mx-auto px-4">
              <header className="text-center mb-10">
                <div className="inline-flex items-center gap-2 rounded-full border-2 border-intel-600 bg-intel-50 px-4 py-2 shadow-[3px_3px_0px_0px_#2563EB] mb-4">
                  <span className="text-sm font-bold uppercase tracking-wider text-intel-600">
                    The Complete Workflow
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
                  One Intelligence Layer, Three Supporting Tools
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Intel is the core system. Pitcher and Tracker support drafting
                  and learning — they don’t replace judgement.
                </p>
              </header>

              {/* Workflow Steps */}
              <div className="space-y-6">
                {/* Step 1: Intel */}
                <article className="rounded-2xl border-4 border-black bg-gradient-to-br from-intel-50 to-white shadow-[8px_8px_0px_0px_#2563EB] p-5 sm:p-8 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[12px_12px_0px_0px_#2563EB] transition-all duration-200 ring-4 ring-intel-200 ring-offset-4">
                  <div className="grid lg:grid-cols-2 gap-6 items-center">
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-12 h-12 rounded-full bg-intel-600 text-white font-bold flex items-center justify-center border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] text-xl">
                          1
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                          Intel
                        </h3>
                        <span className="ml-2 px-3 py-1 text-xs font-bold uppercase bg-intel-600 text-white rounded-full border-2 border-black">
                          Most Popular
                        </span>
                      </div>

                      <p className="text-xl font-semibold text-gray-900 mb-2">
                        Relationship Intelligence for Better Decisions
                      </p>
                      <p className="text-gray-600 mb-3 text-lg">
                        Intel monitors relationship health and provides the
                        context you need to make better decisions.
                      </p>

                      <ul className="space-y-2.5 text-gray-700 mb-5">
                        <li className="flex items-start gap-3">
                          <span className="text-green-600 mt-0.5 text-lg">
                            &#10003;
                          </span>
                          <span>
                            Surface relationship health (warming / neutral /
                            cooling / at risk)
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-green-600 mt-0.5 text-lg">
                            &#10003;
                          </span>
                          <span>
                            Explainable context (roles, platform, and verified
                            submission preferences)
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-green-600 mt-0.5 text-lg">
                            &#10003;
                          </span>
                          <span>
                            Validation and export to Excel, PDF, or directly to
                            Pitcher
                          </span>
                        </li>
                      </ul>

                      <div className="bg-intel-100 border-2 border-intel-600 rounded-xl p-4 mb-5">
                        <p className="text-sm font-bold text-intel-900">
                          Validated against BBC Radio, Spotify, and major PR
                          agency databases.
                        </p>
                      </div>

                      <div className="flex items-center gap-4">
                        <a
                          href="https://intel.totalaudiopromo.com"
                          className="cta-button text-base px-6 py-3 bg-intel-600 hover:bg-intel-700"
                        >
                          Start Free Trial
                        </a>
                        <span className="text-xl font-bold text-intel-600">
                          Included in Professional
                        </span>
                      </div>
                    </div>

                    <div className="flex justify-center">
                      <Image
                        src="/images/intelligence-complete.png"
                        alt="Intel dashboard showing enriched contact data"
                        width={320}
                        height={320}
                        className="drop-shadow-2xl animate-float"
                      />
                    </div>
                  </div>
                </article>

                {/* Arrow */}
                <div className="flex justify-center">
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-1 h-6 bg-gray-300 rounded-full" />
                    <div className="text-3xl text-gray-400">&#8595;</div>
                  </div>
                </div>

                {/* Step 2: Pitcher */}
                <article className="rounded-2xl border-4 border-black bg-gradient-to-br from-pitch-50 to-white shadow-[8px_8px_0px_0px_#D97706] p-5 sm:p-8 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[12px_12px_0px_0px_#D97706] transition-all duration-200">
                  <div className="grid lg:grid-cols-2 gap-6 items-center">
                    <div className="flex justify-center lg:order-1">
                      <Image
                        src="/images/vinyl-throw-action.png"
                        alt="Dog throwing vinyl records"
                        width={320}
                        height={320}
                        className="drop-shadow-2xl animate-float"
                        style={{ animationDelay: "0.5s" }}
                      />
                    </div>
                    <div className="lg:order-2">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-12 h-12 rounded-full bg-pitch-600 text-white font-bold flex items-center justify-center border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] text-xl">
                          2
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                          Pitcher
                        </h3>
                      </div>

                      <p className="text-xl font-semibold text-gray-900 mb-2">
                        High-Stakes Drafting Assistance
                      </p>
                      <p className="text-gray-600 mb-3 text-lg">
                        Pitcher drafts context-aware outreach that respects your
                        voice and the recipient&apos;s preferences.
                      </p>

                      <ul className="space-y-2.5 text-gray-700 mb-5">
                        <li className="flex items-start gap-3">
                          <span className="text-green-600 mt-0.5 text-lg">
                            &#10003;
                          </span>
                          <span>
                            Import enriched contacts from Intel or add manually
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-green-600 mt-0.5 text-lg">
                            &#10003;
                          </span>
                          <span>
                            AI generates pitches referencing each contact's
                            submission guidelines
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-green-600 mt-0.5 text-lg">
                            &#10003;
                          </span>
                          <span>
                            Carefully draft context-aware pitches in batches,
                            ready for review and one-click export
                          </span>
                        </li>
                      </ul>

                      <div className="bg-pitch-100 border-2 border-pitch-600 rounded-xl p-4 mb-5">
                        <p className="text-sm font-bold text-pitch-900">
                          Optimised for relationship protection and professional
                          tone.
                        </p>
                      </div>

                      <div className="flex items-center gap-4">
                        <a
                          href="https://pitcher.totalaudiopromo.com"
                          className="cta-button text-base px-6 py-3 bg-pitch-600 hover:bg-pitch-700"
                        >
                          Start Free Trial
                        </a>
                        <span className="text-xl font-bold text-pitch-600">
                          Included in Professional
                        </span>
                      </div>
                    </div>
                  </div>
                </article>

                {/* Arrow */}
                <div className="flex justify-center">
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-1 h-6 bg-gray-300 rounded-full" />
                    <div className="text-3xl text-gray-400">&#8595;</div>
                  </div>
                </div>

                {/* Step 3: Tracker */}
                <article className="rounded-2xl border-4 border-black bg-gradient-to-br from-tracker-50 to-white shadow-[8px_8px_0px_0px_#0D9488] p-5 sm:p-8 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[12px_12px_0px_0px_#0D9488] transition-all duration-200">
                  <div className="grid lg:grid-cols-2 gap-6 items-center">
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-12 h-12 rounded-full bg-tracker-600 text-white font-bold flex items-center justify-center border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] text-xl">
                          3
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                          Tracker
                        </h3>
                      </div>

                      <p className="text-xl font-semibold text-gray-900 mb-2">
                        Extract Learning from Outcomes
                      </p>
                      <p className="text-gray-600 mb-3 text-lg">
                        Tracker turns campaign data into narrative reporting and
                        provides insights to improve future pitches.
                      </p>

                      <ul className="space-y-2.5 text-gray-700 mb-5">
                        <li className="flex items-start gap-3">
                          <span className="text-green-600 mt-0.5 text-lg">
                            &#10003;
                          </span>
                          <span>
                            AI campaign autopsy - what worked, what didn&apos;t,
                            and what was learned
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-green-600 mt-0.5 text-lg">
                            &#10003;
                          </span>
                          <span>
                            Compare results against BBC Radio, Spotify, blog
                            benchmarks
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-green-600 mt-0.5 text-lg">
                            &#10003;
                          </span>
                          <span>
                            Know which contacts open, reply, and add your tracks
                          </span>
                        </li>
                      </ul>

                      <div className="bg-tracker-100 border-2 border-tracker-600 rounded-xl p-4 mb-5">
                        <p className="text-sm font-bold text-tracker-900">
                          Build institutional memory. Know exactly how and when
                          to follow up.
                        </p>
                      </div>

                      <div className="flex items-center gap-4">
                        <a
                          href="https://tracker.totalaudiopromo.com"
                          className="cta-button text-base px-6 py-3 bg-tracker-600 hover:bg-tracker-700"
                        >
                          Start Free Trial
                        </a>
                        <span className="text-xl font-bold text-tracker-600">
                          Included in Professional
                        </span>
                      </div>
                    </div>

                    <div className="flex justify-center">
                      <Image
                        src="/images/tracker-mascot.png"
                        alt="Dog with magnifying glass tracking campaigns"
                        width={320}
                        height={320}
                        className="drop-shadow-2xl animate-float"
                        style={{ animationDelay: "1s" }}
                      />
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </section>

          {/* Feature Deep-Dive - Intel Spotlight */}
          <FeatureShowcase
            headline="Why Intel Changes Everything"
            subheadline="The core product that makes the rest of the workflow possible"
            features={[
              {
                icon: "email",
                title: "Email Validation",
                description:
                  "Catches 4/12 bad emails before you send. Stop wasting pitches on dead addresses.",
              },
              {
                icon: "document",
                title: "Submission Guidelines",
                description:
                  "Extracts timing, format, and preferences automatically. Know exactly how to submit.",
              },
              {
                icon: "user",
                title: "Role Detection",
                description:
                  "DJ vs Playlist Curator vs Producer - tailor your pitch to their actual role.",
              },
              {
                icon: "chart",
                title: "Confidence Scoring",
                description:
                  "High/Medium/Low flags so you know which data to trust.",
              },
              {
                icon: "search",
                title: "Web Search Enhancement",
                description:
                  "Finds updated info, role changes, and new contact details.",
              },
            ]}
            image="/images/analyzing-data.png"
            imageAlt="Intel enrichment process"
            mockupContent={{
              name: "Jack Saunders",
              role: "BBC Radio 1 DJ, New Music Champion",
              email: "verified (96% confidence)",
              submission: "Thursday deadline, WAV format, include metadata",
            }}
          />

          {/* Case Study Banner */}
          <div className="max-w-6xl mx-auto px-4 mb-4">
            <p className="text-sm text-gray-500 italic text-center">
              Historical results from manual campaigns run by the founder. Not
              automated outcomes.
            </p>
          </div>
          <CaseStudyBanner
            title="BBC Radio 1 Campaign Results"
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

          {/* New Experience Timeline Section */}
          <ExperienceTimeline />

          {/* Social Proof - Redesigned with Context */}
          <section className="py-12 sm:py-16 bg-white">
            <div className="max-w-6xl mx-auto px-4">
              <MotionScrollReveal variant="fadeUp">
                <header className="text-center mb-10">
                  <p className="text-sm text-gray-500 italic mb-4">
                    Historical results from manual campaigns run by the founder.
                    Not automated outcomes.
                  </p>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
                    Proven with Real Campaigns
                  </h2>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Not theoretical numbers. Real metrics from 300+ pitches
                    across 15 campaigns (2020-2025).
                  </p>
                </header>
              </MotionScrollReveal>

              <MotionScrollReveal variant="stagger">
                <div className="grid md:grid-cols-3 gap-5">
                  <MotionStaggerChild>
                    <div className="bg-gradient-to-br from-intel-50 to-white rounded-2xl border-4 border-intel-600 shadow-glow-intel-sm p-6 text-center">
                      <div className="text-5xl font-black text-intel-600 mb-2">
                        Industry-Leading
                      </div>
                      <p className="text-lg font-bold text-gray-900 mb-1">
                        Data Accuracy
                      </p>
                      <p className="text-sm text-gray-600">
                        Tested with BBC Radio 1, Spotify, and 200+ industry
                        contacts.
                      </p>
                    </div>
                  </MotionStaggerChild>
                  <MotionStaggerChild>
                    <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl border-4 border-blue-600 shadow-[0_0_30px_rgba(37,99,235,0.3)] p-6 text-center">
                      <div className="text-5xl font-black text-blue-600 mb-2">
                        Data You Own
                      </div>
                      <p className="text-lg font-bold text-gray-900 mb-1">
                        Professional Control
                      </p>
                      <p className="text-sm text-gray-600">
                        Export-ready intelligence that belongs to you, not the
                        platform.
                      </p>
                    </div>
                  </MotionStaggerChild>
                  <MotionStaggerChild>
                    <div className="bg-gradient-to-br from-pitch-50 to-white rounded-2xl border-4 border-pitch-600 shadow-glow-pitch-sm p-6 text-center">
                      <div className="text-5xl font-black text-pitch-600 mb-2">
                        <AnimatedCounter target={14} duration={1.5} />-
                        <AnimatedCounter
                          target={18}
                          suffix="%"
                          duration={1.5}
                          delay={0.3}
                        />
                      </div>
                      <p className="text-lg font-bold text-gray-900 mb-1">
                        Response Rate
                      </p>
                      <p className="text-sm text-gray-600">
                        vs 2-5% industry average for cold outreach.
                      </p>
                    </div>
                  </MotionStaggerChild>
                </div>
              </MotionScrollReveal>
            </div>
          </section>

          {/* Pricing Section - Visual Hierarchy Restored */}
          <section id="products" className="py-16 sm:py-24 bg-gray-50 border-y-4 border-black">
            <div className="max-w-6xl mx-auto px-4">
              <header className="text-center mb-12 sm:mb-16">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4 tracking-tight">
                  One <span className="text-intel-600">Intelligence</span> Layer. All Three Tools.
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium">
                  The Professional plan unifies your workflow for <strong className="text-gray-900 text-2xl font-bold italic decoration-intel-600 decoration-4 underline underline-offset-4">£19/month</strong>.
                </p>
              </header>

              <div className="grid lg:grid-cols-3 gap-8 items-stretch">
                {/* Tier 1: Starter */}
                <article className="bg-white border-4 border-black rounded-3xl p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all flex flex-col">
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold tracking-tighter mb-2">Free</h3>
                    <div className="flex items-baseline gap-1 mb-4">
                      <span className="text-5xl font-extrabold italic">Free</span>
                    </div>
                    <p className="text-gray-600 font-medium leading-relaxed">
                      For individuals testing the waters with professional contact intelligence.
                    </p>
                  </div>

                  <ul className="space-y-4 mb-10 flex-grow">
                    <li className="flex items-center gap-3 text-sm font-bold text-gray-700">
                      <span className="w-5 h-5 rounded-md bg-intel-100 border-2 border-intel-600 flex items-center justify-center text-[10px] text-intel-600">✓</span>
                      Intel (Contact Enrichment)
                    </li>
                    <li className="flex items-center gap-3 text-sm font-medium text-gray-400 italic">
                      Tracker (Outcome Ledger)
                    </li>
                    <li className="flex items-center gap-3 text-sm font-medium text-gray-400 italic">
                      Pitcher (Draft Assistance)
                    </li>
                  </ul>

                  <a
                    href="https://intel.totalaudiopromo.com/pricing?source=totalaudiopromo"
                    className="w-full py-4 text-center border-2 border-black rounded-xl font-bold tracking-tight hover:bg-gray-50 transition-colors"
                  >
                    Start for Free
                  </a>
                </article>

                {/* Tier 2: Professional (Highlight) */}
                <article className="bg-white border-4 border-black rounded-[2.5rem] p-10 shadow-[12px_12px_0px_0px_rgba(37,99,235,1)] hover:-translate-y-2 transition-all flex flex-col relative ring-4 ring-blue-100 ring-offset-8">
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-6 py-2 rounded-full border-4 border-black text-xs font-black uppercase tracking-widest shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    All Access
                  </div>
                  
                  <div className="mb-8 pt-4">
                    <h3 className="text-3xl font-bold tracking-tighter mb-2">Pro</h3>
                    <div className="flex items-baseline gap-1 mb-4">
                      <span className="text-6xl font-extrabold italic text-blue-600">£19</span>
                      <span className="text-gray-400 font-bold uppercase text-xs tracking-widest">/month</span>
                    </div>
                    <p className="text-gray-900 font-bold leading-relaxed">
                      Our flagship workflow. Intel + Pitcher + Tracker. All unlocked.
                    </p>
                  </div>

                  <ul className="space-y-5 mb-10 flex-grow">
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
                    <li className="flex items-center gap-3 text-sm font-medium text-gray-500">
                      <span className="text-green-600 font-bold">→</span> High-volume exports
                    </li>
                  </ul>

                  <a
                    href="https://intel.totalaudiopromo.com/pricing?source=totalaudiopromo"
                    className="w-full py-5 text-xl text-center bg-blue-600 text-white border-4 border-black rounded-2xl font-bold tracking-tight shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all"
                  >
                    Get All Access
                  </a>
                </article>

                {/* Tier 3: Agency */}
                <article className="bg-white border-4 border-black rounded-3xl p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all flex flex-col">
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold tracking-tighter mb-2">Agency</h3>
                    <div className="flex items-baseline gap-1 mb-4">
                      <span className="text-5xl font-extrabold italic">£79</span>
                      <span className="text-gray-400 font-bold uppercase text-xs tracking-widest">/month</span>
                    </div>
                    <p className="text-gray-600 font-medium leading-relaxed">
                      For teams and labels managing multiple artist rosters.
                    </p>
                  </div>

                  <ul className="space-y-4 mb-10 flex-grow">
                    <li className="flex items-center gap-3 text-sm font-bold text-gray-700">
                      <span className="w-5 h-5 rounded-md bg-gray-900 text-white flex items-center justify-center text-[10px] border-2 border-black">✓</span>
                      Everything in Professional
                    </li>
                    <li className="flex items-center gap-3 text-sm font-bold text-gray-700">
                      <span className="w-5 h-5 rounded-md bg-gray-900 text-white flex items-center justify-center text-[10px] border-2 border-black">✓</span>
                      Team Collaboration
                    </li>
                    <li className="flex items-center gap-3 text-sm font-bold text-gray-700">
                      <span className="w-5 h-5 rounded-md bg-gray-900 text-white flex items-center justify-center text-[10px] border-2 border-black">✓</span>
                      500+ enrichments
                    </li>
                  </ul>

                  <a
                    href="https://intel.totalaudiopromo.com/pricing?source=totalaudiopromo"
                    className="w-full py-4 text-center border-2 border-black rounded-xl font-bold tracking-tight hover:bg-gray-50 transition-colors"
                  >
                    Contact Us
                  </a>
                </article>
              </div>
            </div>
          </section>

          {/* Guarantee/Trust Section */}
          <section className="py-12 bg-white">
            <div className="max-w-4xl mx-auto px-4 text-center">
              <div className="bg-green-50 rounded-2xl border-4 border-green-600 shadow-[8px_8px_0px_0px_#16A34A] p-6 sm:p-10">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  Professional Standard PR Execution
                </h2>
                <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
                  Built for professionals who require precise intelligence and
                  relationship protection in their daily workflow.
                </p>

                <div className="flex flex-wrap justify-center gap-6">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <svg
                      className="w-5 h-5 text-green-600"
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
                    <span>256-bit AES Encryption</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <svg
                      className="w-5 h-5 text-green-600"
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
                    <span>GDPR Compliant</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <svg
                      className="w-5 h-5 text-green-600"
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
                    <span>SOC 2 Infrastructure</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Newsletter Section - Enhanced */}
          <section id="newsletter" className="py-12 sm:py-16 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
                    The Unsigned Advantage
                  </h2>
                  <p className="text-lg text-gray-600 mb-5">
                    Weekly insights from 5+ years of radio promotion. What's
                    working, what's not, and industry intel you won't find
                    elsewhere.
                  </p>

                  <div className="space-y-2.5 mb-6">
                    <div className="flex items-start gap-3 text-gray-700">
                      <span className="text-intel-600 mt-1">&#8594;</span>
                      <span>
                        "How to spot relationship decay before you lose the
                        contact"
                      </span>
                    </div>
                    <div className="flex items-start gap-3 text-gray-700">
                      <span className="text-intel-600 mt-1">&#8594;</span>
                      <span>
                        "The submission rhythm that keeps your status 'Warm'"
                      </span>
                    </div>
                    <div className="flex items-start gap-3 text-gray-700">
                      <span className="text-intel-600 mt-1">&#8594;</span>
                      <span>
                        "Why relationship intelligence beats volume every time"
                      </span>
                    </div>
                  </div>
                </div>

                <div>
                  <NewsletterSignup />
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Footer - Complete with Legal */}
        <footer className="bg-gray-900 text-white py-12 sm:py-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
              {/* Brand Section */}
              <div className="sm:col-span-2 lg:col-span-1">
                <div className="mb-4">
                  <Image
                    src="/images/total-audio-promo-wordmark-stacked.png"
                    alt="Total Audio Promo"
                    width={80}
                    height={80}
                    className="object-contain h-16 w-auto brightness-0 invert"
                  />
                </div>
                <p className="text-sm text-gray-400 mb-4">
                  Music promotion tools that actually work. Built by a radio
                  promoter, for radio promoters.
                </p>
                <div className="flex gap-4">
                  <a
                    href="https://x.com/chrisschouk"
                    className="text-gray-400 hover:text-white transition-colors"
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
                    className="text-gray-400 hover:text-white transition-colors"
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

              {/* Products */}
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider mb-4">
                  Products
                </h4>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="https://intel.totalaudiopromo.com"
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      Intel
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://pitcher.totalaudiopromo.com"
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      Pitcher
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://tracker.totalaudiopromo.com"
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      Tracker
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://dashboard.totalaudiopromo.com"
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      Dashboard
                    </a>
                  </li>
                </ul>
              </div>

              {/* Resources */}
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider mb-4">
                  Resources
                </h4>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="https://intel.totalaudiopromo.com/blog"
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      href="#newsletter"
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      Newsletter
                    </a>
                  </li>
                  <li>
                    <a
                      href="#ecosystem"
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      How It Works
                    </a>
                  </li>
                  <li>
                    <Link
                      href="/pricing"
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <a
                      href="mailto:info@totalaudiopromo.com"
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>

              {/* Legal */}
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider mb-4">
                  Legal
                </h4>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/privacy"
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/terms"
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      Terms of Service
                    </Link>
                  </li>
                  <li>
                    <a
                      href="https://intel.totalaudiopromo.com/cookies"
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      Cookie Policy
                    </a>
                  </li>
                  <li>
                    <Link
                      href="/gdpr"
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      GDPR
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 text-center">
              <p className="text-sm text-gray-400">
                © {new Date().getFullYear()} Total Audio Promo. Built in
                Brighton by Chris Schofield.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

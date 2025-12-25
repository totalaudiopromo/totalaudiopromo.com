import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import { NewsletterSignup } from '../components/NewsletterSignup';
import { StatCard } from '../components/StatCard';
import { CaseStudyBanner } from '../components/CaseStudyBanner';
import { TrustBadges } from '../components/TrustBadges';
import { FeatureShowcase } from '../components/FeatureShowcase';
import { ScrollReveal } from '../components/ScrollReveal';

export default function HomePage() {
  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>Total Audio Promo | Music Promotion Tools for Independent Artists &amp; Radio Promoters</title>
        <meta
          name="description"
          content="Save 15+ hours per campaign with AI-powered contact research, personalised pitch generation, and campaign tracking. Built by a radio promoter, for radio promoters."
        />
        <meta name="keywords" content="music promotion, radio promotion, contact research, pitch generator, campaign tracking, independent artists, UK music industry, BBC Radio, playlist pitching" />
        <meta name="author" content="Chris Schofield" />
        <meta name="robots" content="index, follow" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://totalaudiopromo.com" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://totalaudiopromo.com" />
        <meta property="og:title" content="Total Audio Promo | Music Promotion Tools for Independent Artists" />
        <meta property="og:description" content="Save 15+ hours per campaign with AI-powered contact research, personalised pitch generation, and campaign tracking." />
        <meta property="og:image" content="https://totalaudiopromo.com/images/total_audio_promo_logo_trans.png" />
        <meta property="og:site_name" content="Total Audio Promo" />
        <meta property="og:locale" content="en_GB" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://totalaudiopromo.com" />
        <meta name="twitter:title" content="Total Audio Promo | Music Promotion Tools" />
        <meta name="twitter:description" content="Save 15+ hours per campaign with AI-powered contact research and pitch generation." />
        <meta name="twitter:image" content="https://totalaudiopromo.com/images/total_audio_promo_logo_trans.png" />

        {/* Structured Data - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Total Audio Promo',
              url: 'https://totalaudiopromo.com',
              logo: 'https://totalaudiopromo.com/images/total_audio_promo_logo_trans.png',
              description: 'AI-powered music promotion tools for independent artists and radio promoters',
              founder: {
                '@type': 'Person',
                name: 'Chris Schofield',
              },
              sameAs: [
                'https://intel.totalaudiopromo.com',
                'https://pitcher.totalaudiopromo.com',
                'https://tracker.totalaudiopromo.com',
              ],
            }),
          }}
        />

        {/* Structured Data - FAQ */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: [
                {
                  '@type': 'Question',
                  name: 'How does Intel find contact information?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Intel uses AI-powered web research to find publicly available contact information, social profiles, and submission guidelines. We cross-reference multiple sources and validate emails to ensure 90%+ data accuracy.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Is my data safe and GDPR compliant?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Yes. We use 256-bit AES encryption, are fully GDPR compliant, and run on SOC 2 certified infrastructure. Your contact lists and campaign data are never shared or sold. You can request data deletion at any time.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Can I use just one tool or do I need all three?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Each tool works completely standalone. Start with whichever solves your biggest problem - most users begin with Intel for contact research. The tools integrate seamlessly when you\'re ready to expand your workflow.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'What happens after my free trial?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'After 14 days, you can choose to subscribe at £19/month per tool. No credit card is required for the trial, and you can cancel anytime with no questions asked.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'How accurate is the contact data?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'We guarantee 90% data accuracy or your money back. Intel validates emails before delivery and provides confidence scores so you know which data to trust. Tested with 200+ BBC Radio, Spotify, and industry contacts.',
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

      <div className="min-h-screen bg-white flex flex-col font-sans">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WZNJWDKH"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
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
                className="object-contain h-16 sm:h-20 w-auto"
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
                className="ml-2 px-4 py-2 text-sm font-bold text-white bg-gray-900 border-2 border-black rounded-lg shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0 active:translate-y-0 active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
              >
                Dashboard
              </a>
            </div>
          </div>
        </nav>

        <main>
          {/* Hero Section - Complete Reimagining */}
          <section className="relative overflow-hidden bg-white py-12 sm:py-16">
            {/* Subtle grid pattern background */}
            <div className="absolute inset-0 opacity-[0.03]" style={{
              backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }} />

            <div className="max-w-6xl mx-auto px-4 relative">
              <div className="grid lg:grid-cols-5 gap-10 items-center">
                {/* Left Column (60%) */}
                <div className="lg:col-span-3">
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 leading-tight mb-5">
                    Turn 15 Hours of Contact Research Into 15 Minutes
                  </h1>

                  <p className="text-xl text-gray-600 mb-5 leading-relaxed">
                    Built by <span className="font-semibold text-gray-900">Chris Schofield</span> after 5 years of promoting to BBC Radio 1, 6 Music, and Spotify. Stop wasting weekends on spreadsheets.
                  </p>

                  <div className="flex flex-wrap gap-4 mb-6">
                    <a
                      href="https://intel.totalaudiopromo.com"
                      className="cta-button text-lg px-8 py-4"
                    >
                      Start Free Trial
                    </a>
                    <a
                      href="#ecosystem"
                      className="subtle-button text-lg px-8 py-4"
                    >
                      See It In Action
                    </a>
                  </div>

                  <TrustBadges
                    badges={[
                      { text: '100% Enrichment Success', icon: 'check' },
                      { text: '90% Data Accuracy', icon: 'shield' },
                      { text: 'Cancel Anytime', icon: 'clock' },
                    ]}
                  />
                </div>

                {/* Right Column (40%) */}
                <div className="lg:col-span-2 flex flex-col items-center">
                  <div className="relative">
                    {/* Founder Photo - Large and Prominent */}
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

                    {/* Time saved badge */}
                    <div className="absolute -bottom-4 -right-4 bg-white rounded-xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] p-3 z-20 animate-float">
                      <div className="flex items-center gap-2 text-xs">
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        <span className="font-bold text-gray-900">15hrs → 15min</span>
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
                    From scattered spreadsheets to organised databases in minutes
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Radio Station Logo Bar - Social Proof */}
          <section className="py-8 sm:py-10 bg-gray-50 border-y-2 border-gray-200">
            <div className="max-w-6xl mx-auto px-4">
              <p className="text-center text-sm font-medium text-gray-500 uppercase tracking-wider mb-6">
                Built for pitching to stations like
              </p>
              <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                {/* BBC Radio */}
                <div className="flex items-center gap-2 group">
                  <div className="w-10 h-10 bg-black rounded flex items-center justify-center">
                    <span className="text-white font-black text-xs">BBC</span>
                  </div>
                  <span className="text-gray-700 font-bold text-sm hidden sm:block">Radio 1</span>
                </div>
                {/* NPR */}
                <div className="flex items-center gap-2 group">
                  <div className="w-10 h-10 bg-[#EC1C24] rounded flex items-center justify-center">
                    <span className="text-white font-black text-[10px]">NPR</span>
                  </div>
                  <span className="text-gray-700 font-bold text-sm hidden sm:block">Music</span>
                </div>
                {/* Triple J */}
                <div className="flex items-center gap-2 group">
                  <div className="w-10 h-10 bg-[#00A651] rounded flex items-center justify-center">
                    <span className="text-white font-black text-[10px]">JJJ</span>
                  </div>
                  <span className="text-gray-700 font-bold text-sm hidden sm:block">triple j</span>
                </div>
                {/* KEXP */}
                <div className="flex items-center gap-2 group">
                  <div className="w-10 h-10 bg-[#FF6B00] rounded flex items-center justify-center">
                    <span className="text-white font-black text-[8px]">KEXP</span>
                  </div>
                  <span className="text-gray-700 font-bold text-sm hidden sm:block">Seattle</span>
                </div>
                {/* 6 Music */}
                <div className="flex items-center gap-2 group">
                  <div className="w-10 h-10 bg-[#FF5A00] rounded flex items-center justify-center">
                    <span className="text-white font-black text-xs">6</span>
                  </div>
                  <span className="text-gray-700 font-bold text-sm hidden sm:block">Music</span>
                </div>
                {/* Spotify */}
                <div className="flex items-center gap-2 group">
                  <div className="w-10 h-10 bg-[#1DB954] rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                    </svg>
                  </div>
                  <span className="text-gray-700 font-bold text-sm hidden sm:block">Playlists</span>
                </div>
              </div>
            </div>
          </section>

          {/* Problem Section - Visual Storytelling */}
          <section className="py-16 sm:py-20 bg-gradient-to-br from-red-50 to-white relative overflow-hidden">
            {/* Diagonal stripes background */}
            <div className="absolute inset-0 opacity-[0.03]" style={{
              backgroundImage: 'repeating-linear-gradient(45deg, #000 0, #000 1px, transparent 0, transparent 50%)',
              backgroundSize: '20px 20px',
            }} />

            <div className="max-w-6xl mx-auto px-4 relative">
              <header className="text-center mb-12">
                <p className="text-red-600 font-bold uppercase tracking-wider text-sm mb-3">
                  180 hours per year wasted on manual research
                </p>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-4">
                  The Old Way is Costing You Weekends
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Agencies charge £500-2,000/month for contact research. You've been doing it yourself for free... but at what cost?
                </p>
              </header>

              <div className="grid md:grid-cols-3 gap-6">
                {/* Pain Point 1 */}
                <ScrollReveal delay={1}>
                  <div className="bg-white rounded-2xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6 sm:p-8 hover:-translate-y-1 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 h-full">
                    <div className="w-24 h-24 bg-red-100 rounded-2xl flex items-center justify-center mb-5 mx-auto border-2 border-red-200">
                      <Image
                        src="/images/chaos-overwhelmed.png"
                        alt="Overwhelmed by research"
                        width={64}
                        height={64}
                        className="object-contain hidden md:block"
                      />
                      <svg className="w-12 h-12 text-red-500 md:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-black text-gray-900 mb-3 text-center">Your Weekend, Gone. Again.</h3>
                    <p className="text-gray-600 text-center">
                      Copying emails from LinkedIn, checking websites, cross-referencing spreadsheets... 15 hours per campaign, every single time.
                    </p>
                  </div>
                </ScrollReveal>

                {/* Pain Point 2 */}
                <ScrollReveal delay={2}>
                  <div className="bg-white rounded-2xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6 sm:p-8 hover:-translate-y-1 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 h-full">
                    <div className="w-24 h-24 bg-red-100 rounded-2xl flex items-center justify-center mb-5 mx-auto border-2 border-red-200">
                      <Image
                        src="/images/error-state.png"
                        alt="Generic pitches get ignored"
                        width={64}
                        height={64}
                        className="object-contain hidden md:block"
                      />
                      <svg className="w-12 h-12 text-red-500 md:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-black text-gray-900 mb-3 text-center">Straight in the Bin</h3>
                    <p className="text-gray-600 text-center">
                      Sending the same template to BBC Radio 1 and a local station? They can tell. 2% response rate at best.
                    </p>
                  </div>
                </ScrollReveal>

                {/* Pain Point 3 */}
                <ScrollReveal delay={3}>
                  <div className="bg-white rounded-2xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6 sm:p-8 hover:-translate-y-1 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 h-full">
                    <div className="w-24 h-24 bg-red-100 rounded-2xl flex items-center justify-center mb-5 mx-auto border-2 border-red-200">
                      <Image
                        src="/images/processing-organizing.png"
                        alt="Flying blind without tracking"
                        width={64}
                        height={64}
                        className="object-contain hidden md:block"
                      />
                      <svg className="w-12 h-12 text-red-500 md:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-black text-gray-900 mb-3 text-center">Flying Completely Blind</h3>
                    <p className="text-gray-600 text-center">
                      Did they open it? Reply? Add your track? You'll never know... unless you track everything.
                    </p>
                  </div>
                </ScrollReveal>
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
                  Three Tools That Actually Talk to Each Other
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Each tool solves one problem really well, then hands off to the next. Built the way I actually run campaigns.
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
                        <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">Intel</h3>
                        <span className="ml-2 px-3 py-1 text-xs font-bold uppercase bg-intel-600 text-white rounded-full border-2 border-black">
                          Most Popular
                        </span>
                      </div>

                      <p className="text-xl font-semibold text-gray-900 mb-2">Research Contacts in Minutes, Not Hours</p>
                      <p className="text-gray-600 mb-3 text-lg">AI-powered contact enrichment finds emails, social profiles, and submission details for any radio station or playlist curator.</p>

                      <ul className="space-y-2.5 text-gray-700 mb-5">
                        <li className="flex items-start gap-3">
                          <span className="text-green-600 mt-0.5 text-lg">&#10003;</span>
                          <span>Upload any contact list - we enrich with role, platform, submission guidelines</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-green-600 mt-0.5 text-lg">&#10003;</span>
                          <span>Email validation filters dead addresses before you waste time pitching</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-green-600 mt-0.5 text-lg">&#10003;</span>
                          <span>Export to Excel, PDF, or send directly to Pitcher</span>
                        </li>
                      </ul>

                      <div className="bg-intel-100 border-2 border-intel-600 rounded-xl p-4 mb-5">
                        <p className="text-sm font-bold text-intel-900">
                          Turn 15 hours of research into 15 minutes - tested with 47 BBC Radio contacts.
                        </p>
                      </div>

                      <div className="flex items-center gap-4">
                        <a href="https://intel.totalaudiopromo.com" className="cta-button text-base px-6 py-3 bg-intel-600 hover:bg-intel-700">
                          Start Free Trial
                        </a>
                        <span className="text-xl font-bold text-intel-600">£19/month</span>
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
                        style={{ animationDelay: '0.5s' }}
                      />
                    </div>
                    <div className="lg:order-2">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-12 h-12 rounded-full bg-pitch-600 text-white font-bold flex items-center justify-center border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] text-xl">
                          2
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">Pitcher</h3>
                      </div>

                      <p className="text-xl font-semibold text-gray-900 mb-2">Personalised Pitches That Actually Get Replies</p>
                      <p className="text-gray-600 mb-3 text-lg">AI writes pitches in your voice, tailored to each contact's preferences and past coverage.</p>

                      <ul className="space-y-2.5 text-gray-700 mb-5">
                        <li className="flex items-start gap-3">
                          <span className="text-green-600 mt-0.5 text-lg">&#10003;</span>
                        <span>Import enriched contacts from Intel or add manually</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-green-600 mt-0.5 text-lg">&#10003;</span>
                          <span>AI generates pitches referencing each contact's submission guidelines</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-green-600 mt-0.5 text-lg">&#10003;</span>
                          <span>Batch generate 50 pitches, copy all to Gmail with one click</span>
                        </li>
                      </ul>

                      <div className="bg-pitch-100 border-2 border-pitch-600 rounded-xl p-4 mb-5">
                        <p className="text-sm font-bold text-pitch-900">
                          14-18% response rate from BBC Radio 1 (vs 2% for bulk emails)
                        </p>
                      </div>

                      <div className="flex items-center gap-4">
                        <a href="https://pitcher.totalaudiopromo.com" className="cta-button text-base px-6 py-3 bg-pitch-600 hover:bg-pitch-700">
                          Start Free Trial
                        </a>
                        <span className="text-xl font-bold text-pitch-600">£19/month</span>
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
                        <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">Campaign Tracker</h3>
                      </div>

                      <p className="text-xl font-semibold text-gray-900 mb-2">Track Every Submission, See What Works</p>
                      <p className="text-gray-600 mb-3 text-lg">CRM-style tracking for radio campaigns with analytics to optimise your approach.</p>

                      <ul className="space-y-2.5 text-gray-700 mb-5">
                        <li className="flex items-start gap-3">
                          <span className="text-green-600 mt-0.5 text-lg">&#10003;</span>
                          <span>AI campaign autopsy - what worked, what didn't, what to do next</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-green-600 mt-0.5 text-lg">&#10003;</span>
                          <span>Compare results against BBC Radio, Spotify, blog benchmarks</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-green-600 mt-0.5 text-lg">&#10003;</span>
                          <span>Know which contacts open, reply, and add your tracks</span>
                        </li>
                      </ul>

                      <div className="bg-tracker-100 border-2 border-tracker-600 rounded-xl p-4 mb-5">
                        <p className="text-sm font-bold text-tracker-900">
                          "14% response rate - above industry average. Focus on 6 Music next."
                        </p>
                      </div>

                      <div className="flex items-center gap-4">
                        <a href="https://tracker.totalaudiopromo.com" className="cta-button text-base px-6 py-3 bg-tracker-600 hover:bg-tracker-700">
                          Start Free Trial
                        </a>
                        <span className="text-xl font-bold text-tracker-600">£19/month</span>
                      </div>
                    </div>

                    <div className="flex justify-center">
                      <Image
                        src="/images/tracker-mascot.png"
                        alt="Dog with magnifying glass tracking campaigns"
                        width={320}
                        height={320}
                        className="drop-shadow-2xl animate-float"
                        style={{ animationDelay: '1s' }}
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
                icon: 'email',
                title: 'Email Validation',
                description: 'Catches 4/12 bad emails before you send. Stop wasting pitches on dead addresses.',
              },
              {
                icon: 'document',
                title: 'Submission Guidelines',
                description: 'Extracts timing, format, and preferences automatically. Know exactly how to submit.',
              },
              {
                icon: 'user',
                title: 'Role Detection',
                description: 'DJ vs Playlist Curator vs Producer - tailor your pitch to their actual role.',
              },
              {
                icon: 'chart',
                title: 'Confidence Scoring',
                description: 'High/Medium/Low flags so you know which data to trust.',
              },
              {
                icon: 'search',
                title: 'Web Search Enhancement',
                description: 'Finds updated info, role changes, and new contact details.',
              },
            ]}
            image="/images/analyzing-data.png"
            imageAlt="Intel enrichment process"
            mockupContent={{
              name: 'Jack Saunders',
              role: 'BBC Radio 1 DJ, New Music Champion',
              email: 'verified (96% confidence)',
              submission: 'Thursday deadline, WAV format, include metadata',
            }}
          />

          {/* Case Study Banner */}
          <CaseStudyBanner
            title="BBC Radio 1 Campaign Results"
            metrics={[
              { before: '18 hours', after: '1h 48m', label: 'Research Time' },
              { before: '4 bounced', after: '0 bounced', label: 'Email Errors' },
              { before: '9%', after: '32%', label: 'Response Rate' },
              { before: 'No retainer', after: '6 months', label: 'Contract Signed' },
            ]}
          />

          {/* Social Proof - Redesigned with Context */}
          <section className="py-12 sm:py-16 bg-white">
            <div className="max-w-6xl mx-auto px-4">
              <header className="text-center mb-10">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
                  Proven with Real Campaigns
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Not theoretical numbers. Real metrics from 300+ pitches across 15 campaigns (2020-2025).
                </p>
              </header>

              <div className="grid md:grid-cols-3 gap-5">
                <StatCard
                  value="100%"
                  label="Enrichment Success Rate"
                  description="Tested with BBC Radio 1, Spotify, and 200+ industry contacts. Every contact gets enriched."
                  colour="intel"
                  size="large"
                />
                <StatCard
                  value="15hrs - 15min"
                  label="Time Saved Per Campaign"
                  description="From spreadsheet chaos to organised database. Spend your weekends creating music instead."
                  colour="green"
                />
                <StatCard
                  value="14-18%"
                  label="Response Rate"
                  description="vs 2-5% industry average for cold outreach. Personalisation beats volume every time."
                  colour="pitch"
                />
              </div>
            </div>
          </section>

          {/* Pricing Section - Visual Hierarchy */}
          <section id="products" className="py-12 sm:py-16 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4">
              <header className="text-center mb-10">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
                  Choose Your Starting Point
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Each tool works standalone. Start with what you need most.
                </p>
              </header>

              <div className="grid lg:grid-cols-3 gap-6 mb-8">
                {/* Intel Card - Featured */}
                <div className="bg-gradient-to-br from-intel-50 via-white to-white border-4 border-intel-600 shadow-[8px_8px_0px_0px_#2563EB] hover:shadow-[12px_12px_0px_0px_#2563EB] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-200 rounded-2xl p-5 sm:p-6 flex flex-col relative ring-4 ring-intel-200 ring-offset-4 group pt-10">
                  {/* Subtle background pattern */}
                  <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{
                    backgroundImage: 'radial-gradient(circle at 2px 2px, #2563EB 1px, transparent 0)',
                    backgroundSize: '24px 24px',
                  }} />
                  
                  {/* START HERE Badge - Enhanced Visibility */}
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 z-20">
                    <span className="px-6 py-3 text-sm font-black uppercase bg-intel-600 text-white rounded-full border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group-hover:scale-110 group-hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 animate-pulse">
                      START HERE
                    </span>
                  </div>

                  {/* Icon container with enhanced styling */}
                  <div className="relative mb-5 z-10">
                    <div className="w-24 h-24 bg-gradient-to-br from-intel-100 to-intel-50 rounded-2xl flex items-center justify-center mx-auto border-4 border-intel-300 shadow-[4px_4px_0px_0px_#2563EB] group-hover:scale-110 group-hover:rotate-2 transition-all duration-300 p-3 relative overflow-hidden">
                      {/* Animated background shimmer */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                      <Image
                        src="/images/analyzing-data.png"
                        alt="Intel - Contact Research"
                        width={64}
                        height={64}
                        className="object-contain relative z-10"
                      />
                    </div>
                  </div>

                  <h3 className="text-2xl font-black text-gray-900 mb-1 text-center group-hover:text-intel-700 transition-colors">Intel</h3>
                  <p className="text-sm text-intel-600 font-bold text-center mb-4 uppercase tracking-wide">Contact Research</p>

                  {/* Price with enhanced styling */}
                  <div className="text-center mb-4 relative">
                    <div className="inline-flex items-baseline gap-1 px-4 py-2 bg-white/60 rounded-xl border-2 border-intel-200">
                      <span className="text-5xl font-black text-gray-900">£19</span>
                      <span className="text-lg text-gray-500 font-medium">/month</span>
                    </div>
                  </div>

                  <p className="text-base text-gray-700 mb-5 text-center flex-grow font-medium leading-relaxed">
                    AI-powered contact enrichment. Find emails, roles, and submission guidelines in minutes.
                  </p>

                  {/* Feature list with enhanced styling */}
                  <ul className="space-y-2.5 mb-5 text-sm relative z-10">
                    <li className="flex items-start gap-3 group/item">
                      <div className="mt-0.5 flex-shrink-0 w-6 h-6 rounded-md bg-intel-100 border-2 border-intel-300 flex items-center justify-center group-hover/item:bg-intel-200 transition-colors">
                        <svg className="w-4 h-4 text-intel-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700 font-medium pt-0.5">100 enrichments/month</span>
                    </li>
                    <li className="flex items-start gap-3 group/item">
                      <div className="mt-0.5 flex-shrink-0 w-6 h-6 rounded-md bg-intel-100 border-2 border-intel-300 flex items-center justify-center group-hover/item:bg-intel-200 transition-colors">
                        <svg className="w-4 h-4 text-intel-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700 font-medium pt-0.5">Email validation</span>
                    </li>
                    <li className="flex items-start gap-3 group/item">
                      <div className="mt-0.5 flex-shrink-0 w-6 h-6 rounded-md bg-intel-100 border-2 border-intel-300 flex items-center justify-center group-hover/item:bg-intel-200 transition-colors">
                        <svg className="w-4 h-4 text-intel-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700 font-medium pt-0.5">Export to Excel/PDF</span>
                    </li>
                    <li className="flex items-start gap-3 group/item">
                      <div className="mt-0.5 flex-shrink-0 w-6 h-6 rounded-md bg-intel-100 border-2 border-intel-300 flex items-center justify-center group-hover/item:bg-intel-200 transition-colors">
                        <svg className="w-4 h-4 text-intel-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700 font-medium pt-0.5">Direct Pitcher integration</span>
                    </li>
                  </ul>

                  <a
                    href="https://intel.totalaudiopromo.com"
                    className="cta-button w-full text-center bg-intel-600 hover:bg-intel-700 mt-auto text-base font-bold py-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all relative z-10"
                  >
                    Start Free Trial
                  </a>
                </div>

                {/* Pitcher Card */}
                <div className="bg-gradient-to-br from-pitch-50 via-white to-white border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[9px_9px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-200 rounded-2xl p-5 sm:p-6 flex flex-col group overflow-hidden relative">
                  {/* Subtle background pattern */}
                  <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{
                    backgroundImage: 'radial-gradient(circle at 2px 2px, #D97706 1px, transparent 0)',
                    backgroundSize: '24px 24px',
                  }} />
                  
                  {/* Icon container with enhanced styling */}
                  <div className="relative mb-5 z-10">
                    <div className="w-24 h-24 bg-gradient-to-br from-pitch-100 to-pitch-50 rounded-2xl flex items-center justify-center mx-auto border-4 border-pitch-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group-hover:scale-110 group-hover:rotate-2 transition-all duration-300 p-3 relative overflow-hidden">
                      {/* Animated background shimmer */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                      <Image
                        src="/images/vinyl-throw-action.png"
                        alt="Pitcher - AI Pitches"
                        width={64}
                        height={64}
                        className="object-contain relative z-10"
                      />
                    </div>
                  </div>

                  <h3 className="text-2xl font-black text-gray-900 mb-1 text-center group-hover:text-pitch-700 transition-colors">Pitcher</h3>
                  <p className="text-sm text-pitch-600 font-bold text-center mb-4 uppercase tracking-wide">AI-Powered Pitches</p>

                  {/* Price with enhanced styling */}
                  <div className="text-center mb-4 relative">
                    <div className="inline-flex items-baseline gap-1 px-4 py-2 bg-white/60 rounded-xl border-2 border-pitch-200">
                      <span className="text-5xl font-black text-gray-900">£19</span>
                      <span className="text-lg text-gray-500 font-medium">/month</span>
                    </div>
                  </div>

                  <p className="text-base text-gray-700 mb-5 text-center flex-grow font-medium leading-relaxed">
                    Write 50 personalised pitches in 20 minutes. Tailored to each contact's preferences.
                  </p>

                  {/* Feature list with enhanced styling */}
                  <ul className="space-y-2.5 mb-5 text-sm relative z-10">
                    <li className="flex items-start gap-3 group/item">
                      <div className="mt-0.5 flex-shrink-0 w-6 h-6 rounded-md bg-pitch-100 border-2 border-pitch-300 flex items-center justify-center group-hover/item:bg-pitch-200 transition-colors">
                        <svg className="w-4 h-4 text-pitch-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700 font-medium pt-0.5">50 pitches/month</span>
                    </li>
                    <li className="flex items-start gap-3 group/item">
                      <div className="mt-0.5 flex-shrink-0 w-6 h-6 rounded-md bg-pitch-100 border-2 border-pitch-300 flex items-center justify-center group-hover/item:bg-pitch-200 transition-colors">
                        <svg className="w-4 h-4 text-pitch-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700 font-medium pt-0.5">Voice matching</span>
                    </li>
                    <li className="flex items-start gap-3 group/item">
                      <div className="mt-0.5 flex-shrink-0 w-6 h-6 rounded-md bg-pitch-100 border-2 border-pitch-300 flex items-center justify-center group-hover/item:bg-pitch-200 transition-colors">
                        <svg className="w-4 h-4 text-pitch-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700 font-medium pt-0.5">Batch generation</span>
                    </li>
                    <li className="flex items-start gap-3 group/item">
                      <div className="mt-0.5 flex-shrink-0 w-6 h-6 rounded-md bg-pitch-100 border-2 border-pitch-300 flex items-center justify-center group-hover/item:bg-pitch-200 transition-colors">
                        <svg className="w-4 h-4 text-pitch-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700 font-medium pt-0.5">Gmail integration</span>
                    </li>
                  </ul>

                  <a
                    href="https://pitcher.totalaudiopromo.com"
                    className="cta-button w-full text-center bg-pitch-600 hover:bg-pitch-700 mt-auto text-base font-bold py-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all relative z-10"
                  >
                    Try Free
                  </a>
                </div>

                {/* Tracker Card */}
                <div className="bg-gradient-to-br from-tracker-50 via-white to-white border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[9px_9px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-200 rounded-2xl p-5 sm:p-6 flex flex-col group overflow-hidden relative">
                  {/* Subtle background pattern */}
                  <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{
                    backgroundImage: 'radial-gradient(circle at 2px 2px, #0D9488 1px, transparent 0)',
                    backgroundSize: '24px 24px',
                  }} />
                  
                  {/* Icon container with enhanced styling */}
                  <div className="relative mb-5 z-10">
                    <div className="w-24 h-24 bg-gradient-to-br from-tracker-100 to-tracker-50 rounded-2xl flex items-center justify-center mx-auto border-4 border-tracker-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group-hover:scale-110 group-hover:rotate-2 transition-all duration-300 p-3 relative overflow-hidden">
                      {/* Animated background shimmer */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                      <Image
                        src="/images/tracker-mascot.png"
                        alt="Dog with magnifying glass"
                        width={64}
                        height={64}
                        className="object-contain relative z-10"
                      />
                    </div>
                  </div>

                  <h3 className="text-2xl font-black text-gray-900 mb-1 text-center group-hover:text-tracker-700 transition-colors">Tracker</h3>
                  <p className="text-sm text-tracker-600 font-bold text-center mb-4 uppercase tracking-wide">Campaign Analytics</p>

                  {/* Price with enhanced styling */}
                  <div className="text-center mb-4 relative">
                    <div className="inline-flex items-baseline gap-1 px-4 py-2 bg-white/60 rounded-xl border-2 border-tracker-200">
                      <span className="text-5xl font-black text-gray-900">£19</span>
                      <span className="text-lg text-gray-500 font-medium">/month</span>
                    </div>
                  </div>

                  <p className="text-base text-gray-700 mb-5 text-center flex-grow font-medium leading-relaxed">
                    Track every submission. Know which contacts respond and optimise your approach.
                  </p>

                  {/* Feature list with enhanced styling */}
                  <ul className="space-y-2.5 mb-5 text-sm relative z-10">
                    <li className="flex items-start gap-3 group/item">
                      <div className="mt-0.5 flex-shrink-0 w-6 h-6 rounded-md bg-tracker-100 border-2 border-tracker-300 flex items-center justify-center group-hover/item:bg-tracker-200 transition-colors">
                        <svg className="w-4 h-4 text-tracker-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700 font-medium pt-0.5">Unlimited tracking</span>
                    </li>
                    <li className="flex items-start gap-3 group/item">
                      <div className="mt-0.5 flex-shrink-0 w-6 h-6 rounded-md bg-tracker-100 border-2 border-tracker-300 flex items-center justify-center group-hover/item:bg-tracker-200 transition-colors">
                        <svg className="w-4 h-4 text-tracker-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700 font-medium pt-0.5">AI campaign autopsy</span>
                    </li>
                    <li className="flex items-start gap-3 group/item">
                      <div className="mt-0.5 flex-shrink-0 w-6 h-6 rounded-md bg-tracker-100 border-2 border-tracker-300 flex items-center justify-center group-hover/item:bg-tracker-200 transition-colors">
                        <svg className="w-4 h-4 text-tracker-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700 font-medium pt-0.5">Performance reports</span>
                    </li>
                    <li className="flex items-start gap-3 group/item">
                      <div className="mt-0.5 flex-shrink-0 w-6 h-6 rounded-md bg-tracker-100 border-2 border-tracker-300 flex items-center justify-center group-hover/item:bg-tracker-200 transition-colors">
                        <svg className="w-4 h-4 text-tracker-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700 font-medium pt-0.5">Industry benchmarks</span>
                    </li>
                  </ul>

                  <a
                    href="https://tracker.totalaudiopromo.com"
                    className="cta-button w-full text-center bg-tracker-600 hover:bg-tracker-700 mt-auto text-base font-bold py-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all relative z-10"
                  >
                    Try Free
                  </a>
                </div>
              </div>

              {/* Bundle Pricing Option */}
              <div className="mt-8 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-2xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6 sm:p-8 relative overflow-hidden">
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-5" style={{
                  backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                  backgroundSize: '24px 24px',
                }} />

                <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6">
                  <div className="text-center lg:text-left">
                    <div className="inline-flex items-center gap-2 mb-3">
                      <span className="px-3 py-1 text-xs font-bold uppercase bg-green-500 text-white rounded-full">
                        Save £8/month
                      </span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-black text-white mb-2">
                      Get the Complete Workflow
                    </h3>
                    <p className="text-gray-300 max-w-xl">
                      Bundle all three tools and save. Intel finds your contacts, Pitcher writes your emails, Tracker shows you what works.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center gap-4">
                    <div className="text-center">
                      <div className="flex items-baseline justify-center gap-1">
                        <span className="text-gray-400 line-through text-lg">£57</span>
                        <span className="text-4xl sm:text-5xl font-black text-white">£49</span>
                        <span className="text-gray-400 text-lg">/month</span>
                      </div>
                      <p className="text-sm text-gray-400 mt-1">for all 3 tools</p>
                    </div>

                    <a
                      href="https://intel.totalaudiopromo.com"
                      className="px-8 py-4 bg-white text-gray-900 font-bold text-base rounded-xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(255,255,255,0.3)] hover:shadow-[6px_6px_0px_0px_rgba(255,255,255,0.3)] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all whitespace-nowrap"
                    >
                      Start with Intel
                    </a>
                  </div>
                </div>
              </div>

              <p className="text-center text-gray-500 text-sm mt-8">
                All plans include 14-day free trial. Cancel anytime. No credit card required.
              </p>
            </div>
          </section>

          {/* Guarantee/Trust Section */}
          <section className="py-12 bg-white">
            <div className="max-w-4xl mx-auto px-4 text-center">
              <div className="bg-green-50 rounded-2xl border-4 border-green-600 shadow-[8px_8px_0px_0px_#16A34A] p-6 sm:p-10">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  90% Data Accuracy Guarantee
                </h2>
                <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
                  If your enriched contacts are less than 90% accurate, we will refund your month. No questions asked.
                </p>

                <div className="flex flex-wrap justify-center gap-6">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <span>256-bit AES Encryption</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <span>GDPR Compliant</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <span>SOC 2 Infrastructure</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* GDPR & Data Protection Section */}
          <section className="py-12 sm:py-16 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4">
              <header className="text-center mb-10">
                <div className="inline-flex items-center gap-2 rounded-full border-2 border-green-600 bg-green-50 px-4 py-2 shadow-[3px_3px_0px_0px_#16A34A] mb-4">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span className="text-sm font-bold uppercase tracking-wider text-green-700">
                    Your Data, Protected
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
                  Enterprise-Grade Security for Independents
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Your contact lists and campaign data are valuable. We treat them with the same security standards used by banks and healthcare.
                </p>
              </header>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {/* GDPR Compliant */}
                <div className="bg-white rounded-xl border-2 border-gray-200 p-5 hover:border-green-300 hover:shadow-lg transition-all">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">GDPR Compliant</h3>
                  <p className="text-sm text-gray-600">
                    Full compliance with EU data protection regulations. Your rights to access, rectify, and delete your data are guaranteed.
                  </p>
                </div>

                {/* Encryption */}
                <div className="bg-white rounded-xl border-2 border-gray-200 p-5 hover:border-green-300 hover:shadow-lg transition-all">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">256-bit Encryption</h3>
                  <p className="text-sm text-gray-600">
                    All data encrypted at rest and in transit using AES-256. The same standard used by governments and financial institutions.
                  </p>
                </div>

                {/* No Data Selling */}
                <div className="bg-white rounded-xl border-2 border-gray-200 p-5 hover:border-green-300 hover:shadow-lg transition-all">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Never Sold or Shared</h3>
                  <p className="text-sm text-gray-600">
                    Your contact lists are yours alone. We never sell, share, or use your data for training AI models.
                  </p>
                </div>

                {/* Data Deletion */}
                <div className="bg-white rounded-xl border-2 border-gray-200 p-5 hover:border-green-300 hover:shadow-lg transition-all">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Delete Anytime</h3>
                  <p className="text-sm text-gray-600">
                    Request complete data deletion at any time. We'll remove everything within 30 days, no questions asked.
                  </p>
                </div>
              </div>

              <div className="mt-8 text-center">
                <a
                  href="https://intel.totalaudiopromo.com/privacy"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-green-700 hover:text-green-800 transition-colors"
                >
                  Read our full Privacy Policy
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section id="faq" className="py-12 sm:py-16 bg-white">
            <div className="max-w-4xl mx-auto px-4">
              <header className="text-center mb-10">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
                  Frequently Asked Questions
                </h2>
                <p className="text-lg text-gray-600">
                  Everything you need to know before getting started
                </p>
              </header>

              <div className="space-y-4">
                {/* FAQ Item 1 */}
                <details className="group bg-gray-50 rounded-xl border-2 border-gray-200 hover:border-gray-300 transition-colors">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <span className="text-lg font-semibold text-gray-900">How does Intel find contact information?</span>
                    <span className="ml-4 flex-shrink-0 w-8 h-8 rounded-full bg-gray-200 group-open:bg-intel-600 flex items-center justify-center transition-colors">
                      <svg className="w-4 h-4 text-gray-600 group-open:text-white group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </summary>
                  <div className="px-5 pb-5 text-gray-600">
                    Intel uses AI-powered web research to find publicly available contact information, social profiles, and submission guidelines. We cross-reference multiple sources and validate emails to ensure 90%+ data accuracy.
                  </div>
                </details>

                {/* FAQ Item 2 */}
                <details className="group bg-gray-50 rounded-xl border-2 border-gray-200 hover:border-gray-300 transition-colors">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <span className="text-lg font-semibold text-gray-900">Is my data safe and GDPR compliant?</span>
                    <span className="ml-4 flex-shrink-0 w-8 h-8 rounded-full bg-gray-200 group-open:bg-intel-600 flex items-center justify-center transition-colors">
                      <svg className="w-4 h-4 text-gray-600 group-open:text-white group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </summary>
                  <div className="px-5 pb-5 text-gray-600">
                    <p className="mb-3">Yes. Your data security is our top priority:</p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                        <span><strong>256-bit AES encryption</strong> for all data at rest and in transit</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                        <span><strong>Fully GDPR compliant</strong> - we never share or sell your data</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                        <span><strong>SOC 2 certified infrastructure</strong> with regular security audits</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                        <span><strong>Data deletion on request</strong> - your data, your control</span>
                      </li>
                    </ul>
                  </div>
                </details>

                {/* FAQ Item 3 */}
                <details className="group bg-gray-50 rounded-xl border-2 border-gray-200 hover:border-gray-300 transition-colors">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <span className="text-lg font-semibold text-gray-900">Can I use just one tool or do I need all three?</span>
                    <span className="ml-4 flex-shrink-0 w-8 h-8 rounded-full bg-gray-200 group-open:bg-intel-600 flex items-center justify-center transition-colors">
                      <svg className="w-4 h-4 text-gray-600 group-open:text-white group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </summary>
                  <div className="px-5 pb-5 text-gray-600">
                    Each tool works completely standalone. Start with whichever solves your biggest problem - most users begin with Intel for contact research. The tools integrate seamlessly when you're ready to expand your workflow.
                  </div>
                </details>

                {/* FAQ Item 4 */}
                <details className="group bg-gray-50 rounded-xl border-2 border-gray-200 hover:border-gray-300 transition-colors">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <span className="text-lg font-semibold text-gray-900">What happens after my free trial?</span>
                    <span className="ml-4 flex-shrink-0 w-8 h-8 rounded-full bg-gray-200 group-open:bg-intel-600 flex items-center justify-center transition-colors">
                      <svg className="w-4 h-4 text-gray-600 group-open:text-white group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </summary>
                  <div className="px-5 pb-5 text-gray-600">
                    After 14 days, you can choose to subscribe at £19/month per tool. No credit card is required for the trial, and you can cancel anytime with no questions asked.
                  </div>
                </details>

                {/* FAQ Item 5 */}
                <details className="group bg-gray-50 rounded-xl border-2 border-gray-200 hover:border-gray-300 transition-colors">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <span className="text-lg font-semibold text-gray-900">How accurate is the contact data?</span>
                    <span className="ml-4 flex-shrink-0 w-8 h-8 rounded-full bg-gray-200 group-open:bg-intel-600 flex items-center justify-center transition-colors">
                      <svg className="w-4 h-4 text-gray-600 group-open:text-white group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </summary>
                  <div className="px-5 pb-5 text-gray-600">
                    We guarantee 90% data accuracy or your money back. Intel validates emails before delivery and provides confidence scores so you know which data to trust. Tested with 200+ BBC Radio, Spotify, and industry contacts.
                  </div>
                </details>
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
                    Weekly insights from 5+ years of radio promotion. What's working, what's not, and industry intel you won't find elsewhere.
                  </p>

                  <div className="space-y-2.5 mb-6">
                    <div className="flex items-start gap-3 text-gray-700">
                      <span className="text-intel-600 mt-1">&#8594;</span>
                      <span>"How I got 6 plays on BBC Radio 1 with one campaign"</span>
                    </div>
                    <div className="flex items-start gap-3 text-gray-700">
                      <span className="text-intel-600 mt-1">&#8594;</span>
                      <span>"The submission timing that gets 3x more opens"</span>
                    </div>
                    <div className="flex items-start gap-3 text-gray-700">
                      <span className="text-intel-600 mt-1">&#8594;</span>
                      <span>"Why personalisation beats volume every time"</span>
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

        {/* Floating Mobile CTA */}
        <div className="fixed bottom-0 left-0 right-0 z-40 p-4 bg-gradient-to-t from-white via-white to-transparent sm:hidden">
          <a
            href="https://intel.totalaudiopromo.com"
            className="flex items-center justify-center gap-2 w-full py-4 px-6 bg-intel-600 text-white font-bold text-base rounded-xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
          >
            <span>Start Free Trial</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>

        {/* Footer - Complete with Legal */}
        <footer className="bg-gray-900 text-white py-12 sm:py-16 pb-28 sm:pb-16">
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
                  Music promotion tools that actually work. Built by a radio promoter, for radio promoters.
                </p>
                <div className="flex gap-4">
                  <a href="https://x.com/chrisschouk" className="text-gray-400 hover:text-white transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                  <a href="https://www.linkedin.com/in/chrisschofield1/" className="text-gray-400 hover:text-white transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Products */}
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider mb-4">Products</h4>
                <ul className="space-y-2">
                  <li>
                    <a href="https://intel.totalaudiopromo.com" className="text-sm text-gray-400 hover:text-white transition-colors">
                      Intel
                    </a>
                  </li>
                  <li>
                    <a href="https://pitcher.totalaudiopromo.com" className="text-sm text-gray-400 hover:text-white transition-colors">
                      Pitcher
                    </a>
                  </li>
                  <li>
                    <a href="https://tracker.totalaudiopromo.com" className="text-sm text-gray-400 hover:text-white transition-colors">
                      Campaign Tracker
                    </a>
                  </li>
                  <li>
                    <a href="https://dashboard.totalaudiopromo.com" className="text-sm text-gray-400 hover:text-white transition-colors">
                      Dashboard
                    </a>
                  </li>
                </ul>
              </div>

              {/* Resources */}
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider mb-4">Resources</h4>
                <ul className="space-y-2">
                  <li>
                    <a href="https://intel.totalaudiopromo.com/blog" className="text-sm text-gray-400 hover:text-white transition-colors">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#newsletter" className="text-sm text-gray-400 hover:text-white transition-colors">
                      Newsletter
                    </a>
                  </li>
                  <li>
                    <a href="#ecosystem" className="text-sm text-gray-400 hover:text-white transition-colors">
                      How It Works
                    </a>
                  </li>
                  <li>
                    <Link href="/pricing" className="text-sm text-gray-400 hover:text-white transition-colors">
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <a href="mailto:chris@totalaudiopromo.com" className="text-sm text-gray-400 hover:text-white transition-colors">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>

              {/* Legal */}
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider mb-4">Legal</h4>
                <ul className="space-y-2">
                  <li>
                    <a href="https://intel.totalaudiopromo.com/privacy" className="text-sm text-gray-400 hover:text-white transition-colors">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="https://intel.totalaudiopromo.com/terms" className="text-sm text-gray-400 hover:text-white transition-colors">
                      Terms of Service
                    </a>
                  </li>
                  <li>
                    <a href="https://intel.totalaudiopromo.com/cookies" className="text-sm text-gray-400 hover:text-white transition-colors">
                      Cookie Policy
                    </a>
                  </li>
                  <li>
                    <a href="https://intel.totalaudiopromo.com/gdpr" className="text-sm text-gray-400 hover:text-white transition-colors">
                      GDPR
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 text-center">
              <p className="text-sm text-gray-400">
                © {new Date().getFullYear()} Total Audio Promo. Built in Brighton by Chris Schofield.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

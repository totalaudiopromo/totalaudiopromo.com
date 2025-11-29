import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import { useState } from 'react';
import { NewsletterSignup } from '../components/NewsletterSignup';

export default function HomePage() {
  const [showDashboardModal, setShowDashboardModal] = useState(false);

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
                'https://pitch.totalaudiopromo.com',
                'https://tracker.totalaudiopromo.com',
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

        {/* Navigation - Sticky */}
        <nav className="sticky top-0 z-50 bg-white border-b-4 border-black px-4 py-4 shadow-brutal">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center shadow-brutal border-4 border-black overflow-hidden bg-white transition-all group-hover:shadow-brutal-md group-hover:-translate-x-0.5 group-hover:-translate-y-0.5">
                <Image
                  src="/images/total_audio_promo_logo_trans.png"
                  alt="Total Audio Promo Logo"
                  width={40}
                  height={40}
                  className="object-contain w-full h-full"
                  priority
                />
              </div>
              <span className="text-xl font-display font-bold text-gray-900 hidden sm:block">Total Audio Promo</span>
            </Link>

            {/* Tool Links */}
            <div className="flex items-center gap-2 sm:gap-4">
              <a
                href="https://intel.totalaudiopromo.com"
                className="px-3 py-2 text-sm font-semibold text-gray-700 hover:text-intel-600 transition-colors rounded-lg hover:bg-intel-50"
                title="AI-powered contact research - find emails and submission details in minutes"
              >
                <span className="hidden sm:inline">Audio </span>Intel
              </a>
              <a
                href="https://pitch.totalaudiopromo.com"
                className="px-3 py-2 text-sm font-semibold text-gray-700 hover:text-pitch-600 transition-colors rounded-lg hover:bg-pitch-50"
                title="Generate personalised pitches that get replies"
              >
                Pitch<span className="hidden sm:inline"> Generator</span>
              </a>
              <a
                href="https://tracker.totalaudiopromo.com"
                className="px-3 py-2 text-sm font-semibold text-gray-700 hover:text-tracker-600 transition-colors rounded-lg hover:bg-tracker-50"
                title="Track campaign performance and optimise your approach"
              >
                Tracker
              </a>

              {/* Dashboard Button - Coming Soon */}
              <button
                onClick={() => setShowDashboardModal(true)}
                className="relative ml-2 px-4 py-2 text-sm font-bold text-white bg-brand-cyan border-2 border-black rounded-lg shadow-brutal transition-all hover:shadow-brutal-md hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0 active:translate-y-0 active:shadow-brutal"
              >
                Dashboard
                <span className="absolute -top-2 -right-2 px-1.5 py-0.5 text-[10px] font-bold uppercase bg-tracker-400 text-black rounded border border-black">
                  Soon
                </span>
              </button>
            </div>
          </div>
        </nav>

        <main>
          {/* Hero Section */}
          <section className="relative overflow-hidden bg-white py-12 sm:py-20">
            <div className="max-w-6xl mx-auto px-4">
              <div className="glass-panel px-6 py-10 sm:px-10 sm:py-14 animate-fade-in">
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                  {/* Left: Founder Photo & Story */}
                  <div>
                    <div className="flex items-start gap-5 mb-6">
                      <Image
                        src="/images/chris-schofield-founder-photo.jpg"
                        alt="Chris Schofield - Founder of Total Audio Promo, radio promoter with 5+ years experience"
                        width={100}
                        height={100}
                        className="rounded-xl border-4 border-black shadow-brutal flex-shrink-0"
                        priority
                      />
                      <div>
                        <div className="inline-flex items-center gap-2 rounded-full border-2 border-intel-600 bg-intel-50 px-3 py-1 mb-3">
                          <span className="text-xs font-bold uppercase tracking-wider text-intel-700">
                            Built by a Working Radio Promoter
                          </span>
                        </div>
                        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-gray-900 leading-tight">
                          Stop Wasting Weekends on Contact Research
                        </h1>
                      </div>
                    </div>

                    <div className="space-y-4 text-gray-700 mb-8">
                      <p className="text-lg">
                        I'm Chris – I've been promoting music to BBC Radio 1, 6 Music, and Spotify
                        playlists for 5+ years. Every campaign meant switching between SubmitHub,
                        Groover, ChatGPT, Excel spreadsheets... you know the drill.
                      </p>
                      <p className="text-base text-gray-600">
                        So I built Total Audio Promo: <strong>an ecosystem of tools that actually work
                        together</strong>. Research contacts, generate pitches, track results – all connected.
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      <a href="https://intel.totalaudiopromo.com/beta" className="cta-button text-base px-6 py-3">
                        Start Free Trial →
                      </a>
                      <a href="#ecosystem" className="subtle-button text-base px-6 py-3">
                        See How It Works
                      </a>
                    </div>
                  </div>

                  {/* Right: The Problem Illustration */}
                  <div className="flex flex-col items-center justify-center">
                    <Image
                      src="/images/chaos-overwhelmed.png"
                      alt="Overwhelmed by scattered music promotion tools and spreadsheets"
                      width={320}
                      height={320}
                      className="drop-shadow-2xl mb-6"
                      priority
                    />
                    <div className="bg-red-50 border-2 border-red-600 rounded-xl p-4 max-w-sm shadow-brutal">
                      <p className="text-sm font-bold text-red-900 mb-2">The old way is broken:</p>
                      <ul className="text-xs text-gray-700 space-y-1.5">
                        <li className="flex items-start gap-2">
                          <span className="text-red-500">✗</span>
                          <span>15+ hours per campaign researching contacts</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-500">✗</span>
                          <span>Generic pitches get ignored (2% response rate)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-500">✗</span>
                          <span>No idea what's working or what to do next</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Newsletter Section */}
          <section id="newsletter" className="py-12 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4">
              <div className="max-w-2xl mx-auto">
                <NewsletterSignup />
              </div>
            </div>
          </section>

          {/* The Ecosystem - How It Works */}
          <section id="ecosystem" className="py-16 sm:py-20 bg-white">
            <div className="max-w-6xl mx-auto px-4">
              <header className="text-center mb-14">
                <div className="inline-flex items-center gap-2 rounded-full border-2 border-intel-600 bg-white px-4 py-2 shadow-brutal mb-6">
                  <span className="text-sm font-bold uppercase tracking-wider text-intel-600">
                    The Complete Workflow
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-4">
                  Three Tools That Talk to Each Other
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Built the way I actually run campaigns. Each tool solves one problem really well,
                  then hands off to the next.
                </p>
              </header>

              {/* Workflow Steps */}
              <div className="space-y-8">
                {/* Step 1: Audio Intel */}
                <article className="glass-panel px-6 py-8 sm:px-10 bg-gradient-to-br from-intel-50 to-white">
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-full bg-intel-600 text-white font-bold flex items-center justify-center border-2 border-black shadow-brutal text-lg">
                          1
                        </div>
                        <h3 className="text-2xl font-display font-bold text-gray-900">Audio Intel</h3>
                        <span className="ml-auto text-intel-600 font-bold">£19/month</span>
                      </div>

                      <p className="text-xl font-semibold text-gray-900 mb-2">
                        Research Contacts in Minutes, Not Hours
                      </p>
                      <p className="text-gray-600 mb-4">
                        AI-powered contact enrichment finds emails, social profiles, and submission details for any radio station or playlist curator.
                      </p>

                      <ul className="space-y-2 text-gray-700 mb-6">
                        <li className="flex items-start gap-2">
                          <span className="text-green-600 mt-0.5">✓</span>
                          <span>Upload any contact list – we enrich with role, platform, submission guidelines</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-600 mt-0.5">✓</span>
                          <span>Email validation filters dead addresses before you waste time pitching</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-600 mt-0.5">✓</span>
                          <span>Export to Excel, PDF, or send directly to Pitch Generator</span>
                        </li>
                      </ul>

                      <div className="bg-intel-100 border-2 border-intel-600 rounded-lg p-4">
                        <p className="text-sm font-bold text-intel-900">
                          💡 Turn 15 hours of research into 15 minutes – tested with 47 BBC Radio contacts.
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-center">
                      <Image
                        src="/images/intelligence-complete.png"
                        alt="Audio Intel dashboard showing enriched contact data"
                        width={300}
                        height={300}
                        className="drop-shadow-2xl"
                      />
                    </div>
                  </div>
                </article>

                {/* Arrow */}
                <div className="flex justify-center">
                  <div className="text-4xl text-gray-300 animate-bounce-subtle">↓</div>
                </div>

                {/* Step 2: Pitch Generator */}
                <article className="glass-panel px-6 py-8 sm:px-10 bg-gradient-to-br from-pitch-50 to-white">
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div className="flex justify-center lg:order-1">
                      <Image
                        src="/images/processing-contacts.png"
                        alt="Pitch Generator creating personalised emails"
                        width={300}
                        height={300}
                        className="drop-shadow-2xl"
                      />
                    </div>
                    <div className="lg:order-2">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-full bg-pitch-600 text-white font-bold flex items-center justify-center border-2 border-black shadow-brutal text-lg">
                          2
                        </div>
                        <h3 className="text-2xl font-display font-bold text-gray-900">Pitch Generator</h3>
                        <span className="ml-auto text-pitch-600 font-bold">£12/month</span>
                      </div>

                      <p className="text-xl font-semibold text-gray-900 mb-2">
                        Personalised Pitches That Actually Get Replies
                      </p>
                      <p className="text-gray-600 mb-4">
                        AI writes pitches in your voice, tailored to each contact's preferences and past coverage.
                      </p>

                      <ul className="space-y-2 text-gray-700 mb-6">
                        <li className="flex items-start gap-2">
                          <span className="text-green-600 mt-0.5">✓</span>
                          <span>Import enriched contacts from Audio Intel or add manually</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-600 mt-0.5">✓</span>
                          <span>AI generates pitches referencing each contact's submission guidelines</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-600 mt-0.5">✓</span>
                          <span>Batch generate 50 pitches, copy all to Gmail with one click</span>
                        </li>
                      </ul>

                      <div className="bg-pitch-100 border-2 border-pitch-600 rounded-lg p-4">
                        <p className="text-sm font-bold text-pitch-900">
                          📈 14-18% response rate from BBC Radio 1 (vs 2% for bulk emails)
                        </p>
                      </div>
                    </div>
                  </div>
                </article>

                {/* Arrow */}
                <div className="flex justify-center">
                  <div className="text-4xl text-gray-300 animate-bounce-subtle">↓</div>
                </div>

                {/* Step 3: Tracker */}
                <article className="glass-panel px-6 py-8 sm:px-10 bg-gradient-to-br from-tracker-50 to-white relative">
                  <div className="absolute top-4 right-4">
                    <span className="inline-flex items-center rounded-full border-2 border-tracker-600 bg-tracker-400 px-3 py-1 text-xs font-bold uppercase tracking-wider text-black shadow-brutal">
                      Beta Access
                    </span>
                  </div>
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-full bg-tracker-600 text-white font-bold flex items-center justify-center border-2 border-black shadow-brutal text-lg">
                          3
                        </div>
                        <h3 className="text-2xl font-display font-bold text-gray-900">Campaign Tracker</h3>
                        <span className="ml-auto text-tracker-600 font-bold">£15/month</span>
                      </div>

                      <p className="text-xl font-semibold text-gray-900 mb-2">
                        Track Every Submission, See What Works
                      </p>
                      <p className="text-gray-600 mb-4">
                        CRM-style tracking for radio campaigns with analytics to optimise your approach.
                      </p>

                      <ul className="space-y-2 text-gray-700 mb-6">
                        <li className="flex items-start gap-2">
                          <span className="text-green-600 mt-0.5">✓</span>
                          <span>AI campaign autopsy – what worked, what didn't, what to do next</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-600 mt-0.5">✓</span>
                          <span>Compare results against BBC Radio, Spotify, blog benchmarks</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-600 mt-0.5">✓</span>
                          <span>Know which contacts open, reply, and add your tracks</span>
                        </li>
                      </ul>

                      <div className="bg-tracker-100 border-2 border-tracker-600 rounded-lg p-4">
                        <p className="text-sm font-bold text-tracker-900">
                          🎯 "14% response rate – above industry average. Focus on 6 Music next."
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-center">
                      <Image
                        src="/images/success-complete.png"
                        alt="Campaign Tracker showing performance analytics"
                        width={300}
                        height={300}
                        className="drop-shadow-2xl"
                      />
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </section>

          {/* Social Proof */}
          <section className="py-16 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4">
              <div className="glass-panel px-6 py-10 sm:px-10 bg-gradient-to-br from-green-50 to-white">
                <header className="text-center mb-10">
                  <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 mb-4">
                    Proven with Real Campaigns
                  </h2>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Not theoretical numbers. Real metrics from 300+ pitches across 15 campaigns (2020-2025).
                  </p>
                </header>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white rounded-xl border-2 border-black p-6 shadow-brutal text-center">
                    <div className="text-4xl sm:text-5xl font-display font-black text-intel-600 mb-2">100%</div>
                    <p className="font-bold text-gray-900 mb-1">Enrichment Success</p>
                    <p className="text-sm text-gray-600">
                      BBC Radio 1, Spotify, major curators
                    </p>
                  </div>
                  <div className="bg-white rounded-xl border-2 border-black p-6 shadow-brutal text-center">
                    <div className="text-4xl sm:text-5xl font-display font-black text-green-600 mb-2">15hrs→15min</div>
                    <p className="font-bold text-gray-900 mb-1">Time Saved</p>
                    <p className="text-sm text-gray-600">
                      Per campaign, 50+ contacts each
                    </p>
                  </div>
                  <div className="bg-white rounded-xl border-2 border-black p-6 shadow-brutal text-center">
                    <div className="text-4xl sm:text-5xl font-display font-black text-pitch-600 mb-2">14-18%</div>
                    <p className="font-bold text-gray-900 mb-1">Response Rate</p>
                    <p className="text-sm text-gray-600">
                      BBC Radio 1 (vs 2% bulk emails)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Products/Pricing Section */}
          <section id="products" className="py-16 sm:py-20 bg-white">
            <div className="max-w-6xl mx-auto px-4">
              <header className="text-center mb-14">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-4">
                  Choose Your Starting Point
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Each tool works standalone. Start with what you need most.
                </p>
              </header>

              <div className="grid lg:grid-cols-3 gap-6 mb-12">
                {/* Audio Intel Card */}
                <div className="bg-white border-4 border-black shadow-brutal-lg hover:shadow-brutal-xl hover:-translate-x-1 hover:-translate-y-1 transition-all duration-200 rounded-2xl p-6 sm:p-8 flex flex-col">
                  <div className="w-20 h-20 bg-intel-100 rounded-xl flex items-center justify-center mb-5 mx-auto border-2 border-intel-200">
                    <Image
                      src="/images/analyzing-data.png"
                      alt="Audio Intel - Contact Research"
                      width={60}
                      height={60}
                      className="object-contain"
                    />
                  </div>

                  <h3 className="text-xl font-display font-bold text-gray-900 mb-1 text-center">Audio Intel</h3>
                  <p className="text-sm text-intel-600 font-semibold text-center mb-3">Contact Research</p>

                  <div className="text-center mb-4">
                    <span className="text-3xl font-display font-bold text-gray-900">£19</span>
                    <span className="text-gray-500">/month</span>
                  </div>

                  <p className="text-sm text-gray-600 mb-5 text-center flex-grow">
                    AI-powered contact enrichment. Find emails, roles, and submission guidelines in minutes.
                  </p>

                  <ul className="space-y-2 mb-6 text-sm">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-intel-600 rounded-full" />
                      <span>Contact research automation</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-intel-600 rounded-full" />
                      <span>Email validation</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-intel-600 rounded-full" />
                      <span>Export to Excel/PDF</span>
                    </li>
                  </ul>

                  <a
                    href="https://intel.totalaudiopromo.com/beta"
                    className="cta-button w-full text-center bg-intel-600 hover:bg-intel-700 mt-auto"
                  >
                    Start Free Trial
                  </a>
                </div>

                {/* Pitch Generator Card */}
                <div className="bg-white border-4 border-black shadow-brutal-lg hover:shadow-brutal-xl hover:-translate-x-1 hover:-translate-y-1 transition-all duration-200 rounded-2xl p-6 sm:p-8 flex flex-col">
                  <div className="w-20 h-20 bg-pitch-100 rounded-xl flex items-center justify-center mb-5 mx-auto border-2 border-pitch-200">
                    <Image
                      src="/images/vinyl-throw-action.png"
                      alt="Pitch Generator - AI Pitches"
                      width={60}
                      height={60}
                      className="object-contain"
                    />
                  </div>

                  <h3 className="text-xl font-display font-bold text-gray-900 mb-1 text-center">Pitch Generator</h3>
                  <p className="text-sm text-pitch-600 font-semibold text-center mb-3">AI-Powered Pitches</p>

                  <div className="text-center mb-4">
                    <span className="text-3xl font-display font-bold text-gray-900">£12</span>
                    <span className="text-gray-500">/month</span>
                  </div>

                  <p className="text-sm text-gray-600 mb-5 text-center flex-grow">
                    Write 50 personalised pitches in 20 minutes. Tailored to each contact's preferences.
                  </p>

                  <ul className="space-y-2 mb-6 text-sm">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-pitch-600 rounded-full" />
                      <span>AI pitch generation</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-pitch-600 rounded-full" />
                      <span>Contact intelligence</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-pitch-600 rounded-full" />
                      <span>Batch generation</span>
                    </li>
                  </ul>

                  <a
                    href="https://pitch.totalaudiopromo.com"
                    className="cta-button w-full text-center bg-pitch-600 hover:bg-pitch-700 mt-auto"
                  >
                    Start Free Trial
                  </a>
                </div>

                {/* Tracker Card */}
                <div className="bg-white border-4 border-black shadow-brutal-lg hover:shadow-brutal-xl hover:-translate-x-1 hover:-translate-y-1 transition-all duration-200 rounded-2xl p-6 sm:p-8 flex flex-col">
                  <div className="w-20 h-20 bg-tracker-100 rounded-xl flex items-center justify-center mb-5 mx-auto border-2 border-tracker-200">
                    <Image
                      src="/images/success-complete.png"
                      alt="Campaign Tracker - Analytics"
                      width={60}
                      height={60}
                      className="object-contain"
                    />
                  </div>

                  <h3 className="text-xl font-display font-bold text-gray-900 mb-1 text-center">Tracker</h3>
                  <p className="text-sm text-tracker-600 font-semibold text-center mb-3">Campaign Analytics</p>

                  <div className="text-center mb-4">
                    <span className="text-3xl font-display font-bold text-gray-900">£15</span>
                    <span className="text-gray-500">/month</span>
                  </div>

                  <p className="text-sm text-gray-600 mb-5 text-center flex-grow">
                    Track every submission. Know which contacts respond and optimise your approach.
                  </p>

                  <ul className="space-y-2 mb-6 text-sm">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-tracker-600 rounded-full" />
                      <span>Campaign analytics</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-tracker-600 rounded-full" />
                      <span>Response tracking</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-tracker-600 rounded-full" />
                      <span>Performance reports</span>
                    </li>
                  </ul>

                  <a
                    href="https://tracker.totalaudiopromo.com"
                    className="cta-button w-full text-center bg-tracker-600 hover:bg-tracker-700 mt-auto"
                  >
                    Start Free Trial
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12 sm:py-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
              {/* Brand Section */}
              <div className="sm:col-span-2 lg:col-span-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center border-2 border-white/20 overflow-hidden bg-white">
                    <Image
                      src="/images/total_audio_promo_logo_trans.png"
                      alt="Total Audio Promo"
                      width={48}
                      height={48}
                      className="object-contain w-full h-full"
                    />
                  </div>
                  <span className="text-lg font-display font-bold">Total Audio Promo</span>
                </div>
                <p className="text-sm text-gray-400">
                  Music promotion tools that actually work. Built by a radio promoter, for radio promoters.
                </p>
              </div>

              {/* Products */}
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider mb-4">Products</h4>
                <ul className="space-y-2">
                  <li>
                    <a href="https://intel.totalaudiopromo.com" className="text-sm text-gray-400 hover:text-white transition-colors">
                      Audio Intel – Contact Research
                    </a>
                  </li>
                  <li>
                    <a href="https://pitch.totalaudiopromo.com" className="text-sm text-gray-400 hover:text-white transition-colors">
                      Pitch Generator – AI Pitches
                    </a>
                  </li>
                  <li>
                    <a href="https://tracker.totalaudiopromo.com" className="text-sm text-gray-400 hover:text-white transition-colors">
                      Tracker – Campaign Analytics
                    </a>
                  </li>
                </ul>
              </div>

              {/* Resources */}
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider mb-4">Resources</h4>
                <ul className="space-y-2">
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
                    <a href="#products" className="text-sm text-gray-400 hover:text-white transition-colors">
                      Pricing
                    </a>
                  </li>
                </ul>
              </div>

              {/* Legal */}
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider mb-4">Legal</h4>
                <ul className="space-y-2">
                  <li>
                    <a href="/privacy" className="text-sm text-gray-400 hover:text-white transition-colors">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="/terms" className="text-sm text-gray-400 hover:text-white transition-colors">
                      Terms of Service
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 text-center">
              <p className="text-sm text-gray-400">
                © {new Date().getFullYear()} Total Audio Promo. Built with ❤️ in Brighton by Chris Schofield.
              </p>
            </div>
          </div>
        </footer>

        {/* Dashboard Coming Soon Modal */}
        {showDashboardModal && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={() => setShowDashboardModal(false)}
          >
            <div
              className="bg-white rounded-2xl border-4 border-black shadow-brutal-xl p-6 sm:p-8 max-w-md w-full animate-fade-in"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🚀</span>
                </div>
                <h3 className="text-2xl font-display font-bold text-gray-900 mb-2">
                  Dashboard Coming Soon!
                </h3>
                <p className="text-gray-600 mb-6">
                  We're building a unified dashboard to manage all your campaigns in one place.
                  Sign up to get early access when it launches.
                </p>
                <div className="space-y-3">
                  <a
                    href="#newsletter"
                    onClick={() => setShowDashboardModal(false)}
                    className="cta-button w-full text-center bg-brand-cyan hover:bg-brand-cyan/90"
                  >
                    Join the Waitlist
                  </a>
                  <button
                    onClick={() => setShowDashboardModal(false)}
                    className="w-full py-2 text-sm text-gray-500 hover:text-gray-700 transition-colors"
                  >
                    Maybe later
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

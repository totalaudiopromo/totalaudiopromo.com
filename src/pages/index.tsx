import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import { NewsletterSignup } from '../components/NewsletterSignup';
import { StatCard } from '../components/StatCard';
import { CaseStudyBanner } from '../components/CaseStudyBanner';
import { TrustBadges } from '../components/TrustBadges';
import { FeatureShowcase } from '../components/FeatureShowcase';

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

        {/* Navigation - Sticky with scroll shrink */}
        <nav className="sticky top-0 z-50 bg-white border-b-4 border-black px-4 py-4 shadow-[0_4px_0_0_rgba(0,0,0,0.1)]">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] border-4 border-black overflow-hidden bg-white transition-all group-hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] group-hover:-translate-x-0.5 group-hover:-translate-y-0.5">
                <Image
                  src="/images/total_audio_promo_logo_trans.png"
                  alt="Total Audio Promo Logo"
                  width={40}
                  height={40}
                  className="object-contain w-full h-full"
                  priority
                />
              </div>
              <span className="text-xl font-bold text-gray-900 hidden sm:block">Total Audio Promo</span>
            </Link>

            {/* Tool Links */}
            <div className="flex items-center gap-2 sm:gap-4">
              <a
                href="https://intel.totalaudiopromo.com"
                className="px-3 py-2 text-sm font-semibold text-gray-700 hover:text-intel-600 transition-colors rounded-lg hover:bg-intel-50"
              >
                <span className="hidden sm:inline">Audio </span>Intel
              </a>
              <a
                href="https://pitch.totalaudiopromo.com"
                className="px-3 py-2 text-sm font-semibold text-gray-700 hover:text-pitch-600 transition-colors rounded-lg hover:bg-pitch-50"
              >
                Pitch<span className="hidden sm:inline"> Generator</span>
              </a>
              <a
                href="https://tracker.totalaudiopromo.com"
                className="px-3 py-2 text-sm font-semibold text-gray-700 hover:text-tracker-600 transition-colors rounded-lg hover:bg-tracker-50"
              >
                Tracker
              </a>

              {/* Dashboard Button */}
              <a
                href="https://command.totalaudiopromo.com"
                className="ml-2 px-4 py-2 text-sm font-bold text-white bg-gray-900 border-2 border-black rounded-lg shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0 active:translate-y-0 active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
              >
                Dashboard
              </a>
            </div>
          </div>
        </nav>

        <main>
          {/* Hero Section - Complete Reimagining */}
          <section className="relative overflow-hidden bg-white py-16 sm:py-24">
            {/* Subtle grid pattern background */}
            <div className="absolute inset-0 opacity-[0.03]" style={{
              backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }} />

            <div className="max-w-6xl mx-auto px-4 relative">
              <div className="grid lg:grid-cols-5 gap-10 items-center">
                {/* Left Column (60%) */}
                <div className="lg:col-span-3">
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 leading-tight mb-6">
                    Turn 15 Hours of Contact Research Into 15 Minutes
                  </h1>

                  <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                    Built by <span className="font-semibold text-gray-900">Chris Schofield</span> after 5 years of promoting to BBC Radio 1, 6 Music, and Spotify. Stop wasting weekends on spreadsheets.
                  </p>

                  <div className="flex flex-wrap gap-4 mb-8">
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

                    {/* Floating enrichment card mockup */}
                    <div className="absolute -bottom-4 -right-4 bg-white rounded-xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] p-3 z-20 animate-float">
                      <div className="flex items-center gap-2 text-xs">
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        <span className="font-medium">Contact enriched</span>
                      </div>
                    </div>

                    {/* Before/after visual hint */}
                    <div className="absolute -top-4 -left-4 bg-red-100 rounded-xl border-2 border-red-300 p-2 z-0 rotate-[-6deg]">
                      <span className="text-xs text-red-600 font-medium">Spreadsheet chaos</span>
                    </div>
                  </div>

                  <p className="mt-8 text-sm text-gray-500 text-center max-w-xs">
                    From scattered spreadsheets to organised databases in minutes
                  </p>
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
              <header className="text-center mb-14">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                  The Old Way is Costing You Weekends
                </h2>
              </header>

              <div className="grid md:grid-cols-3 gap-6">
                {/* Pain Point 1 */}
                <div className="bg-white rounded-2xl border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] p-6 sm:p-8">
                  <div className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center mb-4 mx-auto">
                    <Image
                      src="/images/chaos-overwhelmed.png"
                      alt="Overwhelmed by research"
                      width={48}
                      height={48}
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">Hours of Googling</h3>
                  <p className="text-gray-600 text-center text-sm">
                    Copying emails from LinkedIn, checking websites, cross-referencing spreadsheets... sound familiar?
                  </p>
                </div>

                {/* Pain Point 2 */}
                <div className="bg-white rounded-2xl border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] p-6 sm:p-8">
                  <div className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center mb-4 mx-auto">
                    <svg className="w-10 h-10 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">Generic Pitches Ignored</h3>
                  <p className="text-gray-600 text-center text-sm">
                    Sending the same template to BBC Radio 1 and a local station? They can tell. 2% response rate.
                  </p>
                </div>

                {/* Pain Point 3 */}
                <div className="bg-white rounded-2xl border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] p-6 sm:p-8">
                  <div className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center mb-4 mx-auto">
                    <svg className="w-10 h-10 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">No Idea What Works</h3>
                  <p className="text-gray-600 text-center text-sm">
                    Did they open it? Reply? Add it? You will never know... unless you track everything.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Solution Section - Interactive Workflow */}
          <section id="ecosystem" className="py-16 sm:py-24 bg-white">
            <div className="max-w-6xl mx-auto px-4">
              <header className="text-center mb-14">
                <div className="inline-flex items-center gap-2 rounded-full border-2 border-intel-600 bg-intel-50 px-4 py-2 shadow-[3px_3px_0px_0px_#2563EB] mb-6">
                  <span className="text-sm font-bold uppercase tracking-wider text-intel-600">
                    The Complete Workflow
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                  Three Tools That Actually Talk to Each Other
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Each tool solves one problem really well, then hands off to the next. Built the way I actually run campaigns.
                </p>
              </header>

              {/* Workflow Steps */}
              <div className="space-y-8">
                {/* Step 1: Audio Intel */}
                <article className="rounded-2xl border-4 border-black bg-gradient-to-br from-intel-50 to-white shadow-[8px_8px_0px_0px_#2563EB] p-6 sm:p-10 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[12px_12px_0px_0px_#2563EB] transition-all duration-200 ring-4 ring-intel-200 ring-offset-4">
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-full bg-intel-600 text-white font-bold flex items-center justify-center border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] text-xl">
                          1
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">Audio Intel</h3>
                        <span className="ml-2 px-3 py-1 text-xs font-bold uppercase bg-intel-600 text-white rounded-full border-2 border-black">
                          Most Popular
                        </span>
                      </div>

                      <p className="text-xl font-semibold text-gray-900 mb-2">Research Contacts in Minutes, Not Hours</p>
                      <p className="text-gray-600 mb-4 text-lg">AI-powered contact enrichment finds emails, social profiles, and submission details for any radio station or playlist curator.</p>

                      <ul className="space-y-3 text-gray-700 mb-6">
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
                          <span>Export to Excel, PDF, or send directly to Pitch Generator</span>
                        </li>
                      </ul>

                      <div className="bg-intel-100 border-2 border-intel-600 rounded-xl p-4 mb-6">
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
                        alt="Audio Intel dashboard showing enriched contact data"
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
                    <div className="w-1 h-8 bg-gray-300 rounded-full" />
                    <div className="text-3xl text-gray-400">&#8595;</div>
                  </div>
                </div>

                {/* Step 2: Pitch Generator */}
                <article className="rounded-2xl border-4 border-black bg-gradient-to-br from-pitch-50 to-white shadow-[8px_8px_0px_0px_#7C3AED] p-6 sm:p-10 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[12px_12px_0px_0px_#7C3AED] transition-all duration-200">
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div className="flex justify-center lg:order-1">
                      <Image
                        src="/images/processing-contacts.png"
                        alt="Pitch Generator creating personalised emails"
                        width={320}
                        height={320}
                        className="drop-shadow-2xl animate-float"
                        style={{ animationDelay: '0.5s' }}
                      />
                    </div>
                    <div className="lg:order-2">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-full bg-pitch-600 text-white font-bold flex items-center justify-center border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] text-xl">
                          2
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">Pitch Generator</h3>
                      </div>

                      <p className="text-xl font-semibold text-gray-900 mb-2">Personalised Pitches That Actually Get Replies</p>
                      <p className="text-gray-600 mb-4 text-lg">AI writes pitches in your voice, tailored to each contact's preferences and past coverage.</p>

                      <ul className="space-y-3 text-gray-700 mb-6">
                        <li className="flex items-start gap-3">
                          <span className="text-green-600 mt-0.5 text-lg">&#10003;</span>
                          <span>Import enriched contacts from Audio Intel or add manually</span>
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

                      <div className="bg-pitch-100 border-2 border-pitch-600 rounded-xl p-4 mb-6">
                        <p className="text-sm font-bold text-pitch-900">
                          14-18% response rate from BBC Radio 1 (vs 2% for bulk emails)
                        </p>
                      </div>

                      <div className="flex items-center gap-4">
                        <a href="https://pitch.totalaudiopromo.com" className="cta-button text-base px-6 py-3 bg-pitch-600 hover:bg-pitch-700">
                          Start Free Trial
                        </a>
                        <span className="text-xl font-bold text-pitch-600">£12/month</span>
                      </div>
                    </div>
                  </div>
                </article>

                {/* Arrow */}
                <div className="flex justify-center">
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-1 h-8 bg-gray-300 rounded-full" />
                    <div className="text-3xl text-gray-400">&#8595;</div>
                  </div>
                </div>

                {/* Step 3: Tracker */}
                <article className="rounded-2xl border-4 border-black bg-gradient-to-br from-tracker-50 to-white shadow-[8px_8px_0px_0px_#D97706] p-6 sm:p-10 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[12px_12px_0px_0px_#D97706] transition-all duration-200">
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-full bg-tracker-600 text-white font-bold flex items-center justify-center border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] text-xl">
                          3
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">Campaign Tracker</h3>
                      </div>

                      <p className="text-xl font-semibold text-gray-900 mb-2">Track Every Submission, See What Works</p>
                      <p className="text-gray-600 mb-4 text-lg">CRM-style tracking for radio campaigns with analytics to optimise your approach.</p>

                      <ul className="space-y-3 text-gray-700 mb-6">
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

                      <div className="bg-tracker-100 border-2 border-tracker-600 rounded-xl p-4 mb-6">
                        <p className="text-sm font-bold text-tracker-900">
                          "14% response rate - above industry average. Focus on 6 Music next."
                        </p>
                      </div>

                      <div className="flex items-center gap-4">
                        <a href="https://tracker.totalaudiopromo.com" className="cta-button text-base px-6 py-3 bg-tracker-600 hover:bg-tracker-700">
                          Start Free Trial
                        </a>
                        <span className="text-xl font-bold text-tracker-600">£15/month</span>
                      </div>
                    </div>

                    <div className="flex justify-center">
                      <Image
                        src="/images/success-complete.png"
                        alt="Campaign Tracker showing performance analytics"
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

          {/* Feature Deep-Dive - Audio Intel Spotlight */}
          <FeatureShowcase
            headline="Why Audio Intel Changes Everything"
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
            imageAlt="Audio Intel enrichment process"
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
          <section className="py-16 sm:py-20 bg-white">
            <div className="max-w-6xl mx-auto px-4">
              <header className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                  Proven with Real Campaigns
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Not theoretical numbers. Real metrics from 300+ pitches across 15 campaigns (2020-2025).
                </p>
              </header>

              <div className="grid md:grid-cols-3 gap-6">
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
          <section id="products" className="py-16 sm:py-24 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4">
              <header className="text-center mb-14">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                  Choose Your Starting Point
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Each tool works standalone. Start with what you need most.
                </p>
              </header>

              <div className="grid lg:grid-cols-3 gap-6 mb-12">
                {/* Audio Intel Card - Featured */}
                <div className="bg-white border-4 border-intel-600 shadow-[8px_8px_0px_0px_#2563EB] hover:shadow-[12px_12px_0px_0px_#2563EB] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-200 rounded-2xl p-6 sm:p-8 flex flex-col relative ring-4 ring-intel-200 ring-offset-4">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1 text-sm font-bold uppercase bg-intel-600 text-white rounded-full border-2 border-black">
                      Start Here
                    </span>
                  </div>

                  <div className="w-20 h-20 bg-intel-100 rounded-xl flex items-center justify-center mb-5 mx-auto border-2 border-intel-200">
                    <Image
                      src="/images/analyzing-data.png"
                      alt="Audio Intel - Contact Research"
                      width={60}
                      height={60}
                      className="object-contain"
                    />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-1 text-center">Audio Intel</h3>
                  <p className="text-sm text-intel-600 font-semibold text-center mb-3">Contact Research</p>

                  <div className="text-center mb-4">
                    <span className="text-4xl font-bold text-gray-900">£19</span>
                    <span className="text-gray-500">/month</span>
                  </div>

                  <p className="text-sm text-gray-600 mb-5 text-center flex-grow">
                    AI-powered contact enrichment. Find emails, roles, and submission guidelines in minutes.
                  </p>

                  <ul className="space-y-2 mb-6 text-sm">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-intel-600 rounded-full" />
                      <span>100 enrichments/month</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-intel-600 rounded-full" />
                      <span>Email validation</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-intel-600 rounded-full" />
                      <span>Export to Excel/PDF</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-intel-600 rounded-full" />
                      <span>Direct Pitch Generator integration</span>
                    </li>
                  </ul>

                  <a
                    href="https://intel.totalaudiopromo.com"
                    className="cta-button w-full text-center bg-intel-600 hover:bg-intel-700 mt-auto"
                  >
                    Start Free Trial
                  </a>
                </div>

                {/* Pitch Generator Card */}
                <div className="bg-white border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[9px_9px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-200 rounded-2xl p-6 sm:p-8 flex flex-col">
                  <div className="w-20 h-20 bg-pitch-100 rounded-xl flex items-center justify-center mb-5 mx-auto border-2 border-pitch-200">
                    <Image
                      src="/images/vinyl-throw-action.png"
                      alt="Pitch Generator - AI Pitches"
                      width={60}
                      height={60}
                      className="object-contain"
                    />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-1 text-center">Pitch Generator</h3>
                  <p className="text-sm text-pitch-600 font-semibold text-center mb-3">AI-Powered Pitches</p>

                  <div className="text-center mb-4">
                    <span className="text-4xl font-bold text-gray-900">£12</span>
                    <span className="text-gray-500">/month</span>
                  </div>

                  <p className="text-sm text-gray-600 mb-5 text-center flex-grow">
                    Write 50 personalised pitches in 20 minutes. Tailored to each contact's preferences.
                  </p>

                  <ul className="space-y-2 mb-6 text-sm">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-pitch-600 rounded-full" />
                      <span>50 pitches/month</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-pitch-600 rounded-full" />
                      <span>Voice matching</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-pitch-600 rounded-full" />
                      <span>Batch generation</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-pitch-600 rounded-full" />
                      <span>Gmail integration</span>
                    </li>
                  </ul>

                  <a
                    href="https://pitch.totalaudiopromo.com"
                    className="cta-button w-full text-center bg-pitch-600 hover:bg-pitch-700 mt-auto"
                  >
                    Try Free
                  </a>
                </div>

                {/* Tracker Card */}
                <div className="bg-white border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[9px_9px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-200 rounded-2xl p-6 sm:p-8 flex flex-col">
                  <div className="w-20 h-20 bg-tracker-100 rounded-xl flex items-center justify-center mb-5 mx-auto border-2 border-tracker-200">
                    <Image
                      src="/images/success-complete.png"
                      alt="Campaign Tracker - Analytics"
                      width={60}
                      height={60}
                      className="object-contain"
                    />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-1 text-center">Tracker</h3>
                  <p className="text-sm text-tracker-600 font-semibold text-center mb-3">Campaign Analytics</p>

                  <div className="text-center mb-4">
                    <span className="text-4xl font-bold text-gray-900">£15</span>
                    <span className="text-gray-500">/month</span>
                  </div>

                  <p className="text-sm text-gray-600 mb-5 text-center flex-grow">
                    Track every submission. Know which contacts respond and optimise your approach.
                  </p>

                  <ul className="space-y-2 mb-6 text-sm">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-tracker-600 rounded-full" />
                      <span>Unlimited tracking</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-tracker-600 rounded-full" />
                      <span>AI campaign autopsy</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-tracker-600 rounded-full" />
                      <span>Performance reports</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-tracker-600 rounded-full" />
                      <span>Industry benchmarks</span>
                    </li>
                  </ul>

                  <a
                    href="https://tracker.totalaudiopromo.com"
                    className="cta-button w-full text-center bg-tracker-600 hover:bg-tracker-700 mt-auto"
                  >
                    Try Free
                  </a>
                </div>
              </div>

              <p className="text-center text-gray-500 text-sm">
                All plans include 14-day free trial. Cancel anytime. No credit card required.
              </p>
            </div>
          </section>

          {/* Guarantee/Trust Section */}
          <section className="py-16 bg-white">
            <div className="max-w-4xl mx-auto px-4 text-center">
              <div className="bg-green-50 rounded-2xl border-4 border-green-600 shadow-[8px_8px_0px_0px_#16A34A] p-8 sm:p-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  90% Data Accuracy Guarantee
                </h2>
                <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
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

          {/* Newsletter Section - Enhanced */}
          <section id="newsletter" className="py-16 sm:py-20 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-10 items-center">
                <div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                    The Unsigned Advantage
                  </h2>
                  <p className="text-lg text-gray-600 mb-6">
                    Weekly insights from 5+ years of radio promotion. What's working, what's not, and industry intel you won't find elsewhere.
                  </p>

                  <div className="space-y-3 mb-8">
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

        {/* Footer - Complete with Legal */}
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
                  <span className="text-lg font-bold">Total Audio Promo</span>
                </div>
                <p className="text-sm text-gray-400 mb-4">
                  Music promotion tools that actually work. Built by a radio promoter, for radio promoters.
                </p>
                <div className="flex gap-4">
                  <a href="https://twitter.com/totalaudiopromo" className="text-gray-400 hover:text-white transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                  <a href="https://linkedin.com/company/total-audio-promo" className="text-gray-400 hover:text-white transition-colors">
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
                      Audio Intel
                    </a>
                  </li>
                  <li>
                    <a href="https://pitch.totalaudiopromo.com" className="text-sm text-gray-400 hover:text-white transition-colors">
                      Pitch Generator
                    </a>
                  </li>
                  <li>
                    <a href="https://tracker.totalaudiopromo.com" className="text-sm text-gray-400 hover:text-white transition-colors">
                      Campaign Tracker
                    </a>
                  </li>
                  <li>
                    <a href="https://command.totalaudiopromo.com" className="text-sm text-gray-400 hover:text-white transition-colors">
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
                  <li>
                    <a href="mailto:chris@totalaudiopromo.com" className="text-sm text-gray-400 hover:text-white transition-colors">
                      Help Centre
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
                  <li>
                    <a href="/cookies" className="text-sm text-gray-400 hover:text-white transition-colors">
                      Cookie Policy
                    </a>
                  </li>
                  <li>
                    <a href="/gdpr" className="text-sm text-gray-400 hover:text-white transition-colors">
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

import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

export default function TermsPage() {
  return (
    <>
      <Head>
        <title>Terms of Service | Total Audio Promo</title>
        <meta name="description" content="Terms and conditions for using Total Audio Promo tools." />
      </Head>

      <div className="min-h-screen bg-stone-50 font-sans">
        <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-stone-200 px-4 py-4">
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="flex-shrink-0">
                <Image
                  src="/images/total_audio_promo_logo_trans.png"
                  alt="Total Audio Promo"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <Image
                src="/images/total-audio-promo-wordmark-stacked.png"
                alt="Total Audio Promo"
                width={100}
                height={100}
                className="object-contain h-12 sm:h-20 w-auto"
              />
            </Link>
            <Link href="/" className="text-sm font-bold hover:underline">Back Home</Link>
          </div>
        </nav>

        <main className="max-w-4xl mx-auto px-4 py-12 sm:py-20">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            Terms of <span className="text-cyan-600">Service</span>
          </h1>
          <p className="text-sm text-gray-500 mb-10">Last Updated: January 12, 2026</p>

          <div className="prose prose-lg max-w-none text-gray-700 space-y-12">
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-stone-200 pb-2 inline-block">1. Agreement to Terms</h2>
              <p>
                By accessing or using Total Audio Promo ("the Service"), operated by Total Audio Promo Ltd, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access the Service.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-stone-200 pb-2 inline-block">2. Description of Service</h2>
              <p>
                Total Audio Promo provides relationship intelligence, drafting assistance, and campaign management tools for music industry professionals. This includes the modules known as Intel, Pitcher, and Tracker.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-stone-200 pb-2 inline-block">3. User Accounts</h2>
              <p>
                When you create an account with us, you must provide information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-stone-200 pb-2 inline-block">4. Subscriptions and Billing</h2>
              <p>
                The Service is billed on a subscription basis. You will be billed in advance on a recurring and periodic basis. Periodic cycles are set either on a monthly or annual basis, depending on the type of subscription plan you select.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Free Trials:</strong> We may offer a Subscription with a Free Trial for a limited period.</li>
                <li><strong>Refunds:</strong> Except when required by law, paid Subscription fees are non-refundable.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-stone-200 pb-2 inline-block">5. Acceptable Use</h2>
              <p>
                You agree not to use the Service for any purpose that is prohibited by these Terms. You are responsible for all of your activity in connection with the Service. You shall not use the service for mass-outreach "spam" or any activity that violates relationship protection guidelines.
              </p>
            </section>

            <section className="bg-gray-900 text-white p-6 sm:p-10 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold mb-4">6. Contact Us</h2>
              <p className="text-gray-300">
                If you have any questions about these Terms, please contact us at:
              </p>
              <p className="mt-4 font-bold text-xl text-cyan-400">
                <a href="mailto:info@totalaudiopromo.com" className="hover:underline transition-all">info@totalaudiopromo.com</a>
              </p>
            </section>
          </div>
        </main>

        <footer className="bg-white border-t border-stone-200 py-12">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <p className="text-sm text-gray-500">© {new Date().getFullYear()} Total Audio Promo Ltd. Registered in England & Wales.</p>
          </div>
        </footer>
      </div>
    </>
  );
}

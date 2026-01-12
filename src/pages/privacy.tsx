import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

export default function PrivacyPage() {
  return (
    <>
      <Head>
        <title>Privacy Policy | Total Audio Promo</title>
        <meta name="description" content="How we handle your data with respect and security." />
      </Head>

      <div className="min-h-screen bg-white font-sans">
        <nav className="sticky top-0 z-50 bg-white border-b-4 border-black px-4 py-4 shadow-[0_4px_0_0_rgba(0,0,0,0.1)]">
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 group">
              <Image
                src="/images/total_audio_promo_logo_trans.png"
                alt="Total Audio Promo"
                width={40}
                height={40}
                className="object-contain"
              />
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
          <h1 className="text-4xl sm:text-5xl font-black text-gray-900 mb-8 lowercase tracking-tight">
            Privacy <span className="text-intel-600">Policy</span>
          </h1>

          <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
            <section className="bg-gray-50 border-4 border-black p-6 sm:p-8 rounded-2xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <p>
                Total Audio Promo Ltd ("we", "us", or "our") operates the Total Audio Promo platform. This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 underline decoration-intel-600 decoration-4 underline-offset-4">Data Collection</h2>
              <p>
                We collect several different types of information for various purposes to provide and improve our Service to you:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Personal Data:</strong> Email address, first name, last name, and usage data.</li>
                <li><strong>Tracking & Cookies:</strong> We use cookies and similar tracking technologies to track the activity on our Service.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 underline decoration-intel-600 decoration-4 underline-offset-4">How We Use Your Data</h2>
              <p>
                We use the collected data for various purposes:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>To provide and maintain our Service.</li>
                <li>To notify you about changes to our Service.</li>
                <li>To provide customer support.</li>
                <li>To gather analysis or valuable information so that we can improve our Service.</li>
              </ul>
            </section>

            <section className="bg-intel-50 border-4 border-black p-6 sm:p-8 rounded-2xl shadow-[8px_8px_0px_0px_#2563EB]">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Data Rights</h2>
              <p>
                Under UK GDPR, you have the right to access, update, or delete the information we have on you. Please contact us to exercise these rights.
              </p>
              <p className="mt-4 font-bold text-lg">
                <a href="mailto:info@totalaudiopromo.com" className="hover:text-intel-600 transition-colors">info@totalaudiopromo.com</a>
              </p>
            </section>
          </div>
        </main>

        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-6xl mx-auto px-4 text-center text-sm text-gray-400">
            <p>© {new Date().getFullYear()} Total Audio Promo Ltd. Registered in England & Wales.</p>
          </div>
        </footer>
      </div>
    </>
  );
}

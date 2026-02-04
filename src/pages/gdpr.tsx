import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

export default function GDPRPage() {
  return (
    <>
      <Head>
        <title>GDPR Compliance | Total Audio Promo</title>
        <meta name="description" content="Our commitment to data protection and UK GDPR compliance." />
      </Head>

      <div className="min-h-screen bg-stone-50 font-sans">
        <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-stone-200 px-4 py-4">
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
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8 tracking-tight">
            GDPR <span className="text-cyan-600">Compliance</span>
          </h1>

          <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
            <section className="bg-white border border-stone-200 p-6 sm:p-8 rounded-2xl shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-cyan-600 text-white rounded-full flex items-center justify-center text-sm">1</span>
                Our Commitment
              </h2>
              <p>
                Total Audio Promo Ltd is committed to ensuring the security and protection of the personal information we process, and to provide a compliant and consistent approach to data protection.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 underline decoration-cyan-600 decoration-2 underline-offset-4">Data Protection Principles</h2>
              <p>
                We process personal data in accordance with the following principles as set out in the UK GDPR:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Lawfulness, fairness and transparency</strong> — Data is processed lawfully, fairly and in a transparent manner.</li>
                <li><strong>Purpose limitation</strong> — Data is collected for specified, explicit and legitimate purposes.</li>
                <li><strong>Data minimisation</strong> — Data is adequate, relevant and limited to what is necessary.</li>
                <li><strong>Accuracy</strong> — Data is accurate and, where necessary, kept up to date.</li>
                <li><strong>Storage limitation</strong> — Data is kept in a form which permits identification of data subjects for no longer than is necessary.</li>
                <li><strong>Integrity and confidentiality</strong> — Data is processed in a manner that ensures appropriate security.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 underline decoration-cyan-600 decoration-2 underline-offset-4">Your Rights</h2>
              <p>
                Under the UK GDPR, you have the following rights:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Right to be informed about how your data is used.</li>
                <li>Right of access to your personal data.</li>
                <li>Right to rectification of inaccurate data.</li>
                <li>Right to erasure (the 'right to be forgotten').</li>
                <li>Right to restrict processing.</li>
                <li>Right to data portability.</li>
                <li>Right to object to processing.</li>
              </ul>
            </section>

            <section className="bg-cyan-50 border border-cyan-200 p-6 sm:p-8 rounded-2xl shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
              <p>
                If you have any questions about our GDPR compliance or wish to exercise your rights, please contact our Data Protection Officer at:
              </p>
              <p className="mt-4 font-bold text-lg">
                <a href="mailto:info@totalaudiopromo.com" className="hover:text-cyan-600 transition-colors">info@totalaudiopromo.com</a>
              </p>
            </section>
          </div>
        </main>

        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <p className="text-sm text-gray-400">© {new Date().getFullYear()} Total Audio Promo Ltd. UK GDPR Registered.</p>
          </div>
        </footer>
      </div>
    </>
  );
}

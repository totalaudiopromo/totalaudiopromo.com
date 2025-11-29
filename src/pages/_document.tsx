import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* Fonts loaded via next/font in _app.tsx (Geist Sans + Geist Mono) */}

        {/* Preconnect to app subdomains */}
        <link rel="dns-prefetch" href="https://intel.totalaudiopromo.com" />
        <link rel="dns-prefetch" href="https://pitch.totalaudiopromo.com" />
        <link rel="dns-prefetch" href="https://tracker.totalaudiopromo.com" />

        {/* Theme colour for mobile browsers */}
        <meta name="theme-color" content="#2563EB" />
        <meta name="msapplication-TileColor" content="#2563EB" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

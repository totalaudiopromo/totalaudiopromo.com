import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Favicon */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />

        {/* Fonts loaded via next/font in _app.tsx (Geist Sans + Geist Mono) */}

        {/* Preconnect to app subdomains */}
        <link rel="dns-prefetch" href="https://intel.totalaudiopromo.com" />
        <link rel="dns-prefetch" href="https://pitcher.totalaudiopromo.com" />
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

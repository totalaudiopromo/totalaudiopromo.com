import type { AppProps } from 'next/app';
import { Geist, Geist_Mono } from 'next/font/google';
import '../styles/globals.css';

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
  display: 'swap',
});

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
  display: 'swap',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
      <Component {...pageProps} />
    </div>
  );
}

import Footer from '@/components/Layout/Footer';
import Header from '@/components/Layout/Header';
import { I18nProviderClient } from '@/locales/client';
import type { Metadata } from 'next';
import { Noto_Sans } from 'next/font/google';
import './globals.css';

const notoSans = Noto_Sans({ subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  title: 'Türkmenistanyň meşhur diplomatlary',
  description:
    'Türkmenistanyň meşhur we abraýly diplomatlaryna bagyşlanan ýörite sahypamyza hoş geldiňiz',
};

export default function RootLayout({
  children,
}: Readonly<{
  params: { locale: string };
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${notoSans.className} bg-background`}>
        <I18nProviderClient locale='en'>
          <Header />
          {children}
          <Footer />
        </I18nProviderClient>
      </body>
    </html>
  );
}

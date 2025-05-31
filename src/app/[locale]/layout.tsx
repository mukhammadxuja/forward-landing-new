import Footer2 from '@/components/home/footer2';
import { LocalizationBanner } from '@/components/home/header/localization-banner';
import Navbar from '@/components/home/navbar';
import { Toaster } from '@/components/ui/toaster';
import { AppContextProvider } from '@/context/app-context';
import '@/styles/globals.css';
import '@/styles/layout.css';
import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Poppins } from 'next/font/google';
import { ReactNode } from 'react';

const inter = Poppins({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });

// export const metadata: Metadata = {
//   metadataBase: new URL('https://paddle-billing.vercel.app'),
//   title: 'Forward',
//   description:
//     '“Forward Advertise” — Jizzax viloyatidagi birinchi va eng yirik tashqi reklama operatoridir. Kompaniyamiz o‘z faoliyatini 2011-yilda, bir nechta billboardlarni joylashtirish bilan boshlagan.',
// };

export default async function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const messages = await getMessages();
  return (
    <html lang="en" className={'min-h-full dark'}>
      <NextIntlClientProvider messages={messages}>
        <body className={inter.className}>
          <Toaster />
          <AppContextProvider>
            <LocalizationBanner />
            <main>
              <Navbar />
              {children}
              <Footer2 />
            </main>
          </AppContextProvider>
        </body>
      </NextIntlClientProvider>
    </html>
  );
}

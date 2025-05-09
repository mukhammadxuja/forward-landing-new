import type { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: {
    default: 'Forward — Shaharning eng ko‘rinadigan joylarida reklama qiling.',
    template: '%s | Forward',
  },
  description:
    'Forward — sizning biznesingizni shahar bo‘ylab targ‘ib qiluvchi professional billboard reklamasi. Ko‘zni qamashtiruvchi dizayn, strategik joylashuv va maksimal ta’sir.',
  keywords: [
    'billboard',
    'reklama',
    'outdoor reklama',
    'Forward',
    'marketing',
    'reklama agentligi',
    'banner',
    'shahar reklama',
    'brending',
    'tashqi reklama',
    'reklama xizmati',
    'reklama agentligi',
    'stella',
    'avtobus reklama',
    'city box',
    'brendmourlar',
    'katta harflar',
  ],
  metadataBase: new URL('https://forward.uz'),
  openGraph: {
    title: 'Forward — Billboard Reklamasi Orqali Brendingizni Yuksaltiring',
    description:
      'Biz sizning biznesingiz uchun strategik joylashgan, professional billboard dizaynlarini taqdim etamiz. Mijozlaringizni o‘ziga jalb qiling!',
    url: 'https://forward.uz',
    siteName: 'Forward',
    images: [
      {
        url: '/og-forward.png',
        width: 1200,
        height: 630,
        alt: 'Forward Billboard Preview',
      },
    ],
    locale: 'uz_UZ',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Forward — Billboard orqali E’tiborni Qozoning',
    description: 'Ko‘zni qamashtiruvchi bannerlar, kuchli brending va natijaga yo‘naltirilgan reklama.',
    creator: '@forward_uz',
    images: ['/og-forward.png'],
  },
  authors: [{ name: 'Forward', url: 'https://forward.uz' }],
  creator: 'Forward Reklama Agentligi',
  icons: {
    icon: '/next.svg',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
};

type Props = {
  children: ReactNode;
};

export default function RootLayout({ children }: Props) {
  return children;
}

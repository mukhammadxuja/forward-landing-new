// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     domains: ['cdn.simpleicons.org', 'localhost', 'paddle-billing.vercel.app'],
//   },
// };

import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin({
  defaultLocale: 'uz',
  locales: ['uz', 'ru', 'en'],
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com',
        pathname: '**',
      },
    ],
  },
};

export default withNextIntl(nextConfig);

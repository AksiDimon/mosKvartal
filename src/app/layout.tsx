import type { Metadata, Viewport } from 'next';
import './globals.css';

import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});
// export const metadata: Metadata = {
//   metadataBase: new URL('https://xn--80aae5aibotfo5h.xn--p1ai'),
//   title: 'Московские кварталы 2025',
//   description: 'Московские кварталы на карте Москвы',
//   keywords: ['Московские кварталы', 'новостройки', 'строительство жилья'],
//   themeColor: '#ffffff',
//   alternates: {
//     canonical: 'https://xn--80aae5aibotfo5h.xn--p1ai/obekty/3-ya-pryadilnaya-ul-vld-4/',
//   },
//   robots: {
//     index: true,
//     follow: true,
//     googleBot: {
//       index: true,
//       follow: true,
//       'max-snippet': -1,
//       'max-image-preview': 'large',
//       'max-video-preview': -1,
//     },
//   },
//   openGraph: {
//     type: 'website',
//     locale: 'ru_RU',
//     url: 'https://xn--80aae5aibotfo5h.xn--p1ai/obekty/3-ya-pryadilnaya-ul-vld-4/',
//     title: 'Московские кварталы 2025',
//     description: 'Подробнее о реализации на нашем сайте',
//     images: [
//       {
//         url: 'https://москварталы.рф/img/og-image.jpg',
//         width: 300,
//         height: 300,
//       },
//     ],
//   },
//   twitter: {
//     card: 'summary_large_image',
//     title: 'Московские кварталы 2025',
//     description: 'Подробнее о реализации на нашем сайте',
//     images: ['https://москварталы.рф/img/og-image.jpg'],
//   },
//   icons: {
//     icon: [
//       { url: '/static/favicon.svg', type: 'image/svg+xml' },
//       { url: '/static/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
//       { url: '/static/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
//     ],
//     apple: '/static/apple-touch-icon.png',
//   },
//   other: {
//     'msapplication-TileColor': '#da532c',
//     'og:image:secure_url': 'https://москварталы.рф/img/og-image.jpg',
//     'og:image:url': 'https://москварталы.рф/img/og-image.jpg',
//     'og:image:width': '300',
//     'og:image:height': '300',
//   },
// };

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1.0,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        // className="renova no-left-margin detail_page"
        className={montserrat.className}
      >
        {children}
      </body>
    </html>
  );
}

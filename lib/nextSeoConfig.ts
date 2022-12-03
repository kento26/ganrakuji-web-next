import { DefaultSeoProps } from 'next-seo';

export const config: DefaultSeoProps = {
  title: '願楽寺',
  description:
    '富山県黒部市にある真宗大谷派の寺院「願楽寺」です。現在の住職で28代目となります。地域の皆様に愛される寺院を目指しております。',
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: 'https://ganrakuji.com/',
    siteName: '願楽寺',
    images: [
      {
        url: '/image/ogp/ogp.jpg',
        width: 1200,
        height: 630,
        alt: '願楽寺',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    handle: '@handle',
    site: '@site',
    cardType: 'summary_large_image',
  },
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/favicon/favicon.ico',
    },
  ],
};

import { Html, Head, Main, NextScript } from 'next/document';

import { GA_TRACKING_ID } from 'lib/gtag';

const Document = () => {
  return (
    <Html lang="ja">
      <Head>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}');
            `,
          }}
        />

        {/* Warningが開発ツールでていたのでスタイルシートはここで読み込み */}
        {/* utils.js?e7ff:97 Do not add stylesheets using next/head (see <link rel="stylesheet"> tag with href="https://fonts.googleapis.com/css2?family=Sawarabi+Mincho&display=swap"). Use Document instead. See more info here: https://nextjs.org/docs/messages/no-stylesheets-in-head-component */}
        <link
          rel="preload"
          as="style"
          href="https://fonts.googleapis.com/css2?family=Sawarabi+Mincho&display=swap"
        />
        <link
          rel="preload"
          as="style"
          href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
        ></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;

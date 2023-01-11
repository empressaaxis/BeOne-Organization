/* eslint-disable @next/next/no-img-element */
import Document, { Html, Head, Main, NextScript } from "next/document";
import React from "react";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&display=swap"
            rel="stylesheet"
          />
          <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />
          <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />

          <title>Be One Organisation</title>
          <meta name="description" content="Be One Organisation" />
          <meta property="og:site_name" content="Be One Organisation" />
          <meta property="og:title" content="Be One Organisation" />
          <meta property="og:description" content="Be One Organisation " />
          {/* <meta
            property="og:image"
            content="https://treact.owaiskhan.me/react-landing-pages-and-components-free-tailwindcss.png"
          />
          <meta property="og:type" content="website" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@owaiswiz" />
          <meta name="twitter:creator" content="@owaiswiz" />
          <meta
            name="twitter:title"
            content="Free Modern React Templates and Components for Building Landing Pages"
          />
          <meta
            name="twitter:description"
            content="seo description to be updated "
          />
          <meta
            name="twitter:image"
            content="https://treact.owaiskhan.me/react-landing-pages-and-components-free-tailwindcss-twitter.png"
          /> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

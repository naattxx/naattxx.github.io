import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#bc42f5" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Sixtyfour+Convergence&family=Jersey+10&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="h-screen bg-gradient-to-br from-violet-700 via-indigo-400 to-indigo-300">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
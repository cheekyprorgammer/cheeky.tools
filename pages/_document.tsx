import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <meta name="propeller" content="ceab150f9bbf2baf5eb56d608d30b09b" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
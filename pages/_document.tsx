import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <meta name="propeller" content="ceab150f9bbf2baf5eb56d608d30b09b" />
        {/* Propeller ads auto script */}
        {/* <Script
          id="propellerads"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            (function(s,u,z,p){s.src=u,s.setAttribute('data-zone',z),p.appendChild(s);})(document.createElement('script'),'https://inklinkor.com/tag.min.js',5415685,document.body||document.documentElement);
          `,
          }}
        /> */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
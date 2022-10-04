import { ColorModeScript, theme } from "@chakra-ui/react";
import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;900&display=swap"
          rel="stylesheet"
        />

        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-VY81J7YSQV"
        ></script>
        <Script>
          {`window.dataLayer = window.dataLayer || []; function gtag()
          {dataLayer.push(arguments)}
          gtag('js', new Date()); gtag('config', 'G-VY81J7YSQV');`}
        </Script>
        <Script
          id="navegg"
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `(function(n,v,g){o="Navegg";if(!n[o]){
              a=v.createElement('script');a.src=g;b=document.getElementsByTagName('script')[0];
              b.parentNode.insertBefore(a,b);n[o]=n[o]||function(parms){
              n[o].q=n[o].q||[];n[o].q.push([this, parms])};}})
            (window, document, 'https://tag.navdmp.com/universal.min.js');
            window.naveggReady = window.naveggReady||[];
            window.nvg83490 = new Navegg({
              acc: 83490
            });`,
          }}
        />
        <Script>
          {`!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1883228101882990');
fbq('track', 'PageView');`}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            src="https://www.facebook.com/tr?id=1883228101882990&ev=PageView&noscript=1"
          />
        </noscript>
      </Head>

      <body>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Main />
        <NextScript />
        {/* Start of HubSpot Embed Code */}
        <script
          type="text/javascript"
          id="hs-script-loader"
          async
          defer
          src="//js.hs-scripts.com/22799683.js"
        ></script>
        {/* End of HubSpot Embed Code */}
      </body>
    </Html>
  );
}

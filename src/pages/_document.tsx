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

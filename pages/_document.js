import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang='en-US'>
        <Head>
          <meta
            name='description'
            content='pointSixtyFive.com tool for finding and searching FAA facility information'
          />
          {/* PWA Meta */}
          <meta name='application-name' content='pointSixtyFive Facility Information' />
          <meta name='apple-mobile-web-app-capable' content='yes' />
          <meta name='apple-mobile-web-app-status-bar-style' content='default' />
          <meta name='apple-mobile-web-app-title' content='pointSixtyFive Facility Information' />
          <meta
            name='description'
            content='pointSixtyFive.com tool for finding and searching FAA facility information'
          />
          <meta name='format-detection' content='telephone=no' />
          <meta name='mobile-web-app-capable' content='yes' />
          {/* <meta name='msapplication-config' content='/icons/browserconfig.xml' /> */}
          <meta name='msapplication-TileColor' content='#14518A' />
          <meta name='msapplication-tap-highlight' content='no' />
          <meta name='theme-color' content='#000000' />

          <link rel='manifest' href='/manifest.json' />
          <link rel='apple-touch-icon' sizes='192x192' href='/icons/icon-192x192.png' />
          <link rel='icon' type='image/png' sizes='72x72' href='/icons/icon-72x72.png' />
          <link rel='icon' type='image/png' sizes='96x96' href='/icons/icon-96x96.png' />
          <link rel='icon' type='image/png' sizes='128x128' href='/icons/icon-128x128.png' />
          <link rel='icon' type='image/png' sizes='144x144' href='/icons/icon-144x144.png' />
          <link rel='icon' type='image/png' sizes='152x152' href='/icons/icon-152x152.png' />
          <link rel='icon' type='image/png' sizes='192x192' href='/icons/icon-192x192.png' />
          <link rel='icon' type='image/png' sizes='384x384' href='/icons/icon-384x384.png' />
          <link rel='icon' type='image/png' sizes='512x512' href='/icons/icon-512x512.png' />
          <link rel='mask-icon' href='/icons/mask-icon.svg' color='#14518A' />
          <link rel='shortcut icon' href='/favicon.ico' />

          <meta name='twitter:card' content='summary' />
          <meta name='twitter:url' content='https://pointsixtyfive.com' />
          <meta name='twitter:title' content='pointSixtyFive Facility Information' />
          <meta
            name='twitter:description'
            content='pointSixtyFive.com tool for finding and searching FAA facility information'
          />
          <meta name='twitter:image' content='https://app.pointsixtyfive.com/icons/icon-192x192.png' />
          <meta property='og:type' content='website' />
          <meta property='og:title' content='pointSixtyFive Facility Information' />
          <meta
            property='og:description'
            content='pointSixtyFive.com tool for finding and searching FAA facility information'
          />
          <meta property='og:site_name' content='pointSixtyFive' />
          <meta property='og:url' content='https://pointsixtyfive.com' />
          <meta property='og:image' content='https://app.pointsixtyfive.com/icons/icon-192x192.png' />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

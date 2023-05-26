import { ColorModeScript } from '@chakra-ui/react'
import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'
import { THEME_INITIAL_COLOR } from 'config/theme'
import { ServerStyleSheet } from 'styled-components'
import { i18n } from 'next-i18next'

export default class MyDocument extends Document {
  // hack for styled-components stylesheet update
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App: any) => (props: any) => sheet.collectStyles(<App {...props}></App>),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: [initialProps.styles, sheet.getStyleElement()],
      }
    } finally {
      sheet.seal()
    }
  }
  render(): JSX.Element {
    return (
      <Html lang={i18n?.language ?? 'en'}>
        <Head>
          <meta charSet="utf-8" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body>
          <ColorModeScript initialColorMode={THEME_INITIAL_COLOR} />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

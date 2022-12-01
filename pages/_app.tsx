import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { CartProvider } from '../src/contexts'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true' />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet" />
      </Head>
      <CartProvider>
        <Component {...pageProps} />
      </CartProvider>
    </>
  )
}

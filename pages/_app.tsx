import '../styles/globals.css'
import { AppProps } from 'next/app'
import { MoralisProvider } from 'react-moralis'
import { CoinMarketProvider } from '../context/context'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MoralisProvider
      serverUrl="https://wyyl632fy9a1.usemoralis.com:2053/server"
      appId="i30541eqjjAycEx2bkGrnXx9sr9nD8nHzv2jdXTu"
    >
      <CoinMarketProvider>
        <Component {...pageProps} />
      </CoinMarketProvider>
    </MoralisProvider>
  )
}

export default MyApp

import type { AppProps } from 'next/app'
import '../src/styles/global.css'
import '../src/styles/styles.css'
import '../src/styles/calc.css'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
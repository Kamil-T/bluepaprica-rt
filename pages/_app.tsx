import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { LanguageProvider } from '../contexts/LanguageContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LanguageProvider>
      <Component {...pageProps} />
    </LanguageProvider>
  )
}

export default MyApp

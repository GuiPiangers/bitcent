import { AutentificacaoProvider } from '@/data/contexts/AutentificacaoContext'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AutentificacaoProvider>
      <Component {...pageProps} />
    </AutentificacaoProvider>
  )
}

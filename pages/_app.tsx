import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/Header'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }: AppProps) {
  return <>
  <Header />
  <div className="p-4 mx-auto lg:max-w-7xl md:items-center md:px-8">
    <Component {...pageProps} />
  </div>
  <Footer />
  </>
}

export default MyApp

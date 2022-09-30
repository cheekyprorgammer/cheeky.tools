import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/Header2'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'

function MyApp({ Component, pageProps }: AppProps) {
  return <>
  <Header />
  
  <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mx-auto lg:max-w-7xl p-4">
    <div className="md:col-span-3"><Component {...pageProps} /></div>
    <div className="md:col-span-2"><Sidebar /></div>
  </div>

  <Footer />
  </>
}

export default MyApp
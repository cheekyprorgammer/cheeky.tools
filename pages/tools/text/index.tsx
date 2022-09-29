import type { NextPage } from 'next'
import Head from 'next/head'
import TextTools from '../../../components/Tools/Text'
import BackHome from '../../../components/BackHome'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Cheeky Text/Word Tools</title>
        <meta name="description" content="A bunch of text and word tools designed to help you live a cheeky life. Made by cheekyprogrammer." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <BackHome />
      <TextTools />

    </div>
  )
}

export default Home

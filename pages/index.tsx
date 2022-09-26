import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import bot from '../public/bot.png'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Cheeky Tools</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="A bunch of web tools designed to help you live a cheeky life. Made by cheekyprogrammer." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    </div>
  )
}

export default Home

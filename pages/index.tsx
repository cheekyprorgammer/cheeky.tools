import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Cheeky Tools</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="A bunch of web tools designed to help you live a cheeky life. Made by cheekyprogrammer." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="p-5">
      <h1 className="text-3xl">Welcome to cheeky.tools</h1>
      <p className="">Fast. Compact. Cheeky.</p>
      <p className="mt-2">A set of tools designed to help you live a cheeky life.</p>
      </div>
      

    </div>
  )
}

export default Home

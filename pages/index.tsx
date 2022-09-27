import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Cheeky Tools</title>
        <meta name="description" content="A bunch of web tools designed to help you live a cheeky life. Made by cheekyprogrammer." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="">
        <h1 className="text-4xl font-bold underline">Welcome to cheeky.tools</h1>
        <p className="text-xl">Fast. Compact. Cheeky.</p>
        <p className="mt-5">A set of tools designed to help you live a better, and cheeky, life.</p>
        <p className="mt-5 underline font-bold">List of Tools:</p>
        <div className="flex">
          <p className="p-2 hover:text-blue-500 hover:scale-105"><Link href="/tools/md5">MD5 Hash Generator</Link></p>
        </div>
      </div>
      

    </div>
  )
}

export default Home

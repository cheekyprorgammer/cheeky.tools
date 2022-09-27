import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

const Page: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>md5 Hash Generator - Cheeky Tools</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="">
        <h1 className="text-center text-3xl underline">md5 Hash Generator</h1>
      </div>

    </div>
  )
}

export default Page
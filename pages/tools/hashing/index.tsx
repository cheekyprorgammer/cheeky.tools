import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Cheeky Hashing Tools</title>
        <meta name="description" content="A bunch of hashing tools designed to help you live a cheeky life. Made by cheekyprogrammer." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="">

      <Link href="/">
        <div className="flex items-center mb-2 cursor-pointer hover:text-blue-500">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
            <path fillRule="evenodd" d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z" clipRule="evenodd" />
          </svg> 
          <p className="text-sm">&nbsp;Home</p>
        </div>
      </Link>

        <h1 className="text-4xl font-bold underline">Hashing Tools</h1>
        <div className="flex-col">
          <p className="p-2 hover:text-blue-500 hover:scale-105 underline"><Link href="/tools/hashing/md5">MD5 Hash Generator</Link></p>
          <p className="p-2 hover:text-blue-500 hover:scale-105 underline"><Link href="/tools/hashing/sha1">SHA-1 Hash Generator</Link></p>
          <p className="p-2 hover:text-blue-500 hover:scale-105 underline"><Link href="/tools/hashing/sha256">SHA-256 Hash Generator</Link></p>
          <p className="p-2 hover:text-blue-500 hover:scale-105 underline"><Link href="/tools/hashing/sha512">SHA-512 Hash Generator</Link></p>
        </div>
      </div>
      

    </div>
  )
}

export default Home

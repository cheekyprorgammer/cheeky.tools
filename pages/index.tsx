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

      <main className="mt-5">
        <Image 
          src={bot}
          alt="Cheeky Tools"
          layout="responsive"
          width={100}
          height={100}
        />
        <h1 className="text-center text-2xl text-blue-500">cheeky.tools</h1>
      </main>

      <footer className="text-center text-sm mt-5">
          Powered by{' '}
          <a href="https://github.com/cheekyprorgammer" target="_blank" rel="noopener noreferrer">
            cheekyprogrammer
          </a>
      </footer>
    </div>
  )
}

export default Home

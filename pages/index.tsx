import { useEffect } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Vercel from '../components/images/vercel'
import NextJS from '../components/images/nextjs'
import TextTools from '../components/Tools/Listings/Text'

const Home: NextPage = () => {
  const colours = []

  function randomColours() {
    for (let index = 0; index < 6; index++) {
      var randomColour = Math.floor(Math.random()*16777215).toString(16);
      colours[index] = randomColour
      document.getElementById("c" + index)!.style.color = "#" + randomColour
    }
  }

  useEffect(() => {
    // randomColours()
  }, [])

  return (
    <div className="cursor-default">
      <Head>
        <title>Fast SEO Tools</title>
        <meta name="description" content="A bunch of web tools designed to help you live a cheeky life. Made by cheekyprogrammer." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="">
        <div className="flex">
          <h1 className="text-4xl md:text-5xl font-bold underline italic">Welcome to<br /><span className="italic text-yellow-500 underline">Fast SEO Tools</span>
          </h1>
        </div>
        <p className="text-xl mb-3 italic">Fast and Compact SEO Tools.</p>
        <p className="mb-3">Built using enterprise level javascript framework NEXT.js and deployed on the cutting edge always online Vercel content delivery network.</p>
        <div className="mb-3 flex items-center gap-5 md:gap-0 justify-evenly">
          <a target="_blank" rel="noopener noreferrer" className='link-item' href="https://vercel.com/about"><Vercel className="w-32 h-fit cursor-pointer" /></a>
          <a target="_blank" rel="noopener noreferrer" className='link-item' href="https://vercel.com/solutions/nextjs"><NextJS className="w-32 h-fit cursor-pointer" /></a>
        </div>

        <p className="font-bold underline text-2xl">Available Tools</p>
        <TextTools />


      </div>
    </div>
  )
}

export default Home

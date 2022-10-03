import { useEffect } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Vercel from '../components/images/vercel'
import NextJS from '../components/images/nextjs'
import TextTools from '../components/Tools/Listings/Text'

const Home: NextPage = () => {
  const colours = []

  // function randomColours() {
  //   for (let index = 0; index < 6; index++) {
  //     colours[index] = Math.floor(Math.random()*16777215).toString(16)
  //     document.getElementById("c" + index)!.style.color = "#" + randomColour
  //   }
  // }

  useEffect(() => {
    // randomColours()
  }, [])

  return (
    <div className="cursor-default">
      <Head>
        <title>Fast SEO Tools - Fast and Handy SEO Tools</title>
        <meta name="description" content="A set of Fast SEO tools all in one place. Built for speed. Tools added and updated often. Check back often." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="">
        <div className="flex">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold underline italic">Welcome to<br /><span className="italic text-yellow-500 underline">Fast SEO Tools</span>
          </h1>
        </div>
        <p className="text-xl mb-3 italic">Fast and Handy SEO Tools</p>
        <p className="mb-3">Built using enterprise level Javascript framework NEXT.js and deployed on the cutting edge Vercel content delivery network. Always online. Always ready.</p>
        
        <div className="mb-3 flex items-center gap-5 md:gap-0 justify-evenly">
          <a target="_blank" rel="noopener noreferrer" className='link-item' href="https://vercel.com/about"><Vercel className="w-32 lg:w-64 h-fit cursor-pointer" /></a>
          <span className="font-bold text-lg md:text-2xl lg:text-3xl lg:mr-3">&</span>
          <a target="_blank" rel="noopener noreferrer" className='link-item' href="https://vercel.com/solutions/nextjs"><NextJS className="w-32 lg:w-64 h-fit cursor-pointer" /></a>
        </div>
      
        <p className="font-bold underline text-2xl">Available Tools</p>
        <TextTools />

      </div>
    </div>
  )
}

export default Home

import { useEffect } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import TextTools from '../components/Tools/Text'

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
    randomColours()
  }, [])

  return (
    <div className="">
      <Head>
        <title>Cheeky Tools</title>
        <meta name="description" content="A bunch of web tools designed to help you live a cheeky life. Made by cheekyprogrammer." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="">
        <div className="flex">
          <h1 className="text-4xl font-bold underline">Welcome to&nbsp;
          <span onClick={randomColours}>
            <span id="c0">c</span>
            <span id="c1">h</span>
            <span id="c2">e</span>
            <span id="c3">e</span>
            <span id="c4">k</span>
            <span id="c5">y</span>
          </span>
          &nbsp;tools
          </h1>
        </div>
        <p className="text-xl">Fast. Compact. Cheeky.</p>
    
        <TextTools />


      </div>
      

    </div>
  )
}

export default Home

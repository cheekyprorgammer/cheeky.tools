import { useEffect } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'

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
        <title>Contact Fast SEO Tools</title>
        <meta name="description" content="Want to get in touch with us? Contact us at info@fastseo.tools or fill out the following form to send us a message! We welcome your feedback." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="p-5">
      <h1 className="text-xl font-bold mb-5">Contact Us</h1>
      <p className="mb-5"><a href="mailto:info@fastseo.tools" className="text-blue-500">info@fastseo.tools</a></p>
      <p>Contact Form Coming Soon...</p>
      </div>
        
    </div>
  )
}

export default Home

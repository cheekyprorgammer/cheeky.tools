import type { NextPage } from 'next'
import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

const Page: NextPage = () => {

  const [inputString, setInputString] = useState("")

  function validateFormWithJS() {
    alert("form validating...")
  }
 
  return (
    <div className="">
      <Head>
        <title>md5 Hash Generator - cheeky.tools</title>
        <meta name="description" content="This MD5 hash generator is a hashing tool for encoding strings, personal data and other information into databases and storage." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="">
        <h1 className="text-center text-5xl font-bold underline">md5 Hash Generator</h1>
        <p className='mt-5'>Quickly compute the MD5 hash of any string. Other hashing tools can be found here.</p>
      </div>
      <form className="my-3" onSubmit={validateFormWithJS}>  
        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Input String(s)</label>
        <textarea id="message" rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="hello world"></textarea>
        <button type="submit" className="mt-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Compute md5</button>
      </form>

<div className="mb-6">
    <label htmlFor="output" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your md5 Hash</label>
    <div id="output" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
  </div>
    </div>
  )
}

export default Page
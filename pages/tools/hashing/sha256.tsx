import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
var hash = require('hash.js')

const Page: NextPage = () => {

  const [inputString, setInputString] = useState("")
  const [copy, setCopy] = useState(false)

  function calculateSha256() {
    let output: any = document.getElementById("output")

    if (inputString === "") {
      output.value = "Enter a valid string"
    } else {
      // const newHash = sha1(inputString)
      const newHash = hash.sha256().update(inputString).digest('hex')

      output.value = newHash
    }
  }

  function copyHash() {
    
  // Get the text field
  var copyText: any = document.getElementById("output")
  setCopy(true)
  // Select the text field
  copyText.select()
  copyText.setSelectionRange(0, 99999) // For mobile devices

   // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value)

  // Alert the copied text
  // alert("Copied the text: " + copyText.value);
  setTimeout(() => setCopy(false), 3000)
  }

  function pasteText() {
    let textArea: any = document.getElementById('message')

    navigator.clipboard
      .readText()
      .then(
          cliptext =>
              (setInputString(cliptext)),
              err => console.log(err),
      )
      
  }

  useEffect(() => {
    calculateSha256()
  }, [inputString])

  return (
    <div className="">
      <Head>
        <title>SHA-256 Hash Generator - cheeky.tools</title>
        <meta name="description" content="This SHA-256 hash generator is a hashing tool for encoding strings, personal data and other information into databases and storage." />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Sha-256 Hash Generator" />
        <meta property="og:site_name" content="cheeky.tools" />
        <meta property="og:url" content="https://cheeky.tools/tools/sha256" />
        <meta property="og:description" content="This Sha-256 hash generator is a hashing tool for encoding strings, personal data and other information into databases and storage." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://cheeky.tools/cryptography.jpg" />
      </Head>
      <div className="">
        <h1 className="text-center text-5xl font-bold underline">SHA-256 Hash Generator</h1>
        <p className='mt-5'>Quickly compute the Sha-256 hash of any string. Other hashing tools can be found <Link href="/tools/hashing"><span className="text-blue-500 hover:text-blue-200 cursor-pointer">here</span></Link>.</p>
      </div>
      <div className="my-3">  
        <div className="flex justify-between">
          <label htmlFor="message" className="block text-sm font-medium text-gray-900 dark:text-gray-400">Input String</label>
          
          <div className="flex gap-2">
            <div onClick={pasteText} className="cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                <path fillRule="evenodd" d="M15.988 3.012A2.25 2.25 0 0118 5.25v6.5A2.25 2.25 0 0115.75 14H13.5V7A2.5 2.5 0 0011 4.5H8.128a2.252 2.252 0 011.884-1.488A2.25 2.25 0 0112.25 1h1.5a2.25 2.25 0 012.238 2.012zM11.5 3.25a.75.75 0 01.75-.75h1.5a.75.75 0 01.75.75v.25h-3v-.25z" clipRule="evenodd" />
                <path fillRule="evenodd" d="M2 7a1 1 0 011-1h8a1 1 0 011 1v10a1 1 0 01-1 1H3a1 1 0 01-1-1V7zm2 3.25a.75.75 0 01.75-.75h4.5a.75.75 0 010 1.5h-4.5a.75.75 0 01-.75-.75zm0 3.5a.75.75 0 01.75-.75h4.5a.75.75 0 010 1.5h-4.5a.75.75 0 01-.75-.75z" clipRule="evenodd" />
              </svg>
            </div>

            <div onClick={() => setInputString('')} className={`text-red-500 ${inputString.length > 0 ? 'block' : 'hidden'} cursor-pointer`}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                <path fillRule="evenodd" d="M8.75 1A2.75 2.75 0 006 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482A41.03 41.03 0 0014 4.193V3.75A2.75 2.75 0 0011.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4zM8.58 7.72a.75.75 0 00-1.5.06l.3 7.5a.75.75 0 101.5-.06l-.3-7.5zm4.34.06a.75.75 0 10-1.5-.06l-.3 7.5a.75.75 0 101.5.06l.3-7.5z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>

        <textarea id="message" value={inputString} onChange={(e) => setInputString(e.target.value)} rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" ></textarea>
        {/* <div onClick={calculateMd5} className="mt-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Compute md5</div> */}
      </div>

      <div className="mb-5 mt-8">
        <label htmlFor="output" className="block text-sm font-medium text-gray-900 dark:text-gray-300">Your SHA-256 Hash</label>
        <input disabled type="text" id="output" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" />
        <div onClick={copyHash} className={`${copy ? 'bg-green-700' : 'bg-blue-700'} mt-3 text-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800
        ${inputString.length > 0 ? 'block' : 'hidden'}`}>{copy ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
      </svg>
       && 'Copied Hash': 'Copy Hash'} </div>
      </div>

      <p className="text-sm"><span className="font-bold underline uppercase">Note:</span> All content generated by this tool is done client-side (on your local computer) using JavaScript. None of your data is recorded or stored by us at all. Please view our <span className="text-blue-500">Privacy Policy</span> for more information.</p>
    </div>
  )
}

export default Page
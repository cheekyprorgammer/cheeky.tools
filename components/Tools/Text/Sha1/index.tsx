import hash from 'hash.js'
import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import InputString from '../../../InputString'
import ToolDisclaimer from '../../../ToolDisclaimer'

export default function Sha1() {
    const [inputString, setInputString] = useState("")
    const [copy, setCopy] = useState(false)
  
    function calculateSha1() {
      let output: any = document.getElementById("output")
  
      if (inputString === "") {
        output.value = "Enter a valid string"
      } else {
        // const newHash = sha1(inputString)
        const newHash = hash.sha1().update(inputString).digest('hex')
  
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
  
    useEffect(() => {
      calculateSha1()
    }, [inputString])
  
    return <>
        <Head>
        <title>SHA-1 Hash Generator - cheeky.tools</title>
        <meta name="description" content="This SHA-1 hash generator is a hashing tool for encoding strings, personal data and other information into databases and storage." />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Sha-1 Hash Generator" />
        <meta property="og:site_name" content="cheeky.tools" />
        <meta property="og:url" content="https://cheeky.tools/tools/text/md5" />
        <meta property="og:description" content="This Sha-1 hash generator is a hashing tool for encoding strings, personal data and other information into databases and storage." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://cheeky.tools/cryptography.jpg" />
      </Head>
      <div className="">
        <h1 className="text-center text-5xl font-bold underline">SHA-1 Hash Generator</h1>
        <p className='mt-5'>Quickly compute the Sha-1 hash of any string. Other hashing tools can be found <Link href="/tools/text"><span className="text-blue-500 hover:text-blue-200 cursor-pointer">here</span></Link>.</p>
      </div>

      <InputString setInputString={setInputString} inputString={inputString} rows={4} />

      <div className="mb-5 mt-8">
        <label htmlFor="output" className="block text-sm font-medium text-gray-900 dark:text-gray-300">Your SHA-1 Hash</label>
        <input disabled type="text" id="output" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" />
        <div onClick={copyHash} className={`${copy ? 'bg-green-700' : 'bg-blue-700'} mt-3 text-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800
        ${inputString.length > 0 ? 'block' : 'hidden'}`}>{copy ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
      </svg>
       && 'Copied Hash': 'Copy Hash'} </div>
      </div>

      <ToolDisclaimer />
        
    </>
  }
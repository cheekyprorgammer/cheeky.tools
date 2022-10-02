import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import InputString from '../../../InputString'
import ToolDisclaimer from '../../../ToolDisclaimer'

export default function CaseChanger() {
  const [inputString, setInputString] = useState("")

  // function handleClick() {

  // }

  // useEffect(() => {
    
  // }, [])

  return <>
    <div className="">
      <Head>
        <title>Case Changer - cheeky.tools</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Case Changer" />
        <meta property="og:site_name" content="cheeky.tools" />
        <meta property="og:url" content="https://cheeky.tools/tools/text/wordcount" />
        <meta property="og:description" content="" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://cheeky.tools/cryptography.jpg" />
      </Head>
      <div className="">
        <h1 className="text-center text-lg font-bold underline">Case Changer</h1>
        <p className='mt-5 text-sm text-center'>This tool counts the number of words given. Other text tools can be found <Link href="/tools/text"><span className="text-blue-500 hover:text-blue-200 cursor-pointer">here</span></Link>.</p>
      </div>

      <InputString title="Input" inputString={inputString} setInputString={setInputString} rows={16} />

      <ToolDisclaimer />
    </div>
  
    </>
  }
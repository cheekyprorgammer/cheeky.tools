import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import InputString from '../../../InputString'
import ToolDisclaimer from '../../../ToolDisclaimer'

export default function CaseChanger() {
  const [inputString, setInputString] = useState("")

  function firstLetterUpper(theString: string) {
    var newString = theString.toLowerCase().replace(/(^\s*\w|[\.\!\?]\s*\w)/g,function(c: string){return c.toUpperCase()});
    return newString;
  }

  function handleClick(e: any) {
    // console.log(e.target.id)
    
    switch (e.target.id) {
      case "default":
        var defaultString = firstLetterUpper(inputString);
        
        setInputString(defaultString)  
        break
      case "lower":
        setInputString(inputString.toLowerCase())
        break
      case "upper":
        setInputString(inputString.toUpperCase())
        break
      case "toggle":
        const toggleString = inputString
          .split("")
          .map(c => (c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase()))
          .join("")
        
        setInputString(toggleString)
        break
      case "caps":
        const capString = inputString
        .toLowerCase().split(' ')
        .map(function(word) {
          return (word.charAt(0).toUpperCase() + word.slice(1));
        })
        .join(' ')

        setInputString(capString)
        break
      case "alternate":
        const altString = inputString
        .split('')
        .map((c,i) => 
          i % 2 == 0 ? c.toLowerCase() : c.toUpperCase())
        .join('')

        setInputString(altString)
        break
      default:
        break
    }
  }

  // useEffect(() => {
    
  // }, [])

  return <>
    <div className="">
      <Head>
        <title>Text Case Changer - Fast SEO Tools</title>
        <meta name="description" content="This tool will change the casing to either uppercase or lowercase depending on what you choose. Quickly change the casing of your text." />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Text Case Changer" />
        <meta property="og:site_name" content="Fast SEO Tools" />
        <meta property="og:url" content="https://www.fastseo.tools/tools/text/casechanger" />
        <meta property="og:description" content="This tool will change the casing to either uppercase or lowercase depending on what you choose. Quickly change the casing of your text." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.fastseo.tools/cryptography.jpg" />
      </Head>
      <div className="">
        <h1 className="text-center text-lg font-bold underline">Case Changer</h1>
        <p className='mt-5 text-sm text-center'>This tool will change the casing to either uppercase or lowercase depending on what you choose. Quickly change the casing of your text. Other text tools can be found <Link href="/tools/text"><span className="text-blue-500 hover:text-blue-200 cursor-pointer">here</span></Link>.</p>
      </div>

      <InputString title="Input" inputString={inputString} setInputString={setInputString} rows={8} copy />
      {/* <div id="default" className={`cursor-pointer text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}>Copy Text</div> */}
      <div className="grid grid-cols-2 md:grid-cols-3 my-3 gap-3">
        <div id="default" onClick={handleClick} className={`cursor-pointer text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}>Default</div>
        <div id="lower" onClick={handleClick} className={`cursor-pointer text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}>lower</div>
        <div id="upper" onClick={handleClick} className={`cursor-pointer text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}>UPPER</div>
        <div id="toggle" onClick={handleClick} className={`cursor-pointer text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}>tOGGLE</div>
        <div id="caps" onClick={handleClick} className={`cursor-pointer text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}>Capatalized</div>
        <div id="alternate" onClick={handleClick} className={`cursor-pointer text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}>aLtErNaTe</div>
      </div>

      <ToolDisclaimer />
    </div>
  
    </>
  }
import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import InputString from '../../../InputString'
import ToolDisclaimer from '../../../ToolDisclaimer'

export default function WordCount() {
  const [inputString, setInputString] = useState("")
  const [words, setWords] = useState(0)
  const [charsWithSpace, setCharsWithSpace] = useState(0)
  const [spaces, setSpaces] = useState(0)
  const [charsWithoutSpace, setCharsWithoutSpace] = useState(0)
  const [syllables, setSyllables] = useState(0)
  const [loading, setLoading] = useState(false)

  function pasteText() {
    let textArea: any = document.getElementById('message')

    navigator.clipboard
      .readText()
      .then(
          cliptext => 
          setInputString(cliptext),
          (err: any) => console.log(err),
      )  
  }

  function handleClick() {

    function syllableCount(word: string) {
      word = word.toLowerCase()
      var t_some = 0
      if(word.length>3)
        {
        if(word.substring(0,4)=="some")
            {
            word = word.replace("some","")
            t_some++
            }
        }
      word = word.replace(/(?:[^laeiouy]|ed|[^laeiouy]e)$/, '')   
      word = word.replace(/^y/, '')                                
      //return word.match(/[aeiouy]{1,2}/g).length  
      var syl = word.match(/[aeiouy]{1,2}/g)
      console.log(syl)
      if(syl)
        {
            //console.log(syl)
            return syl.length+t_some
        }
    }

    const results = document.getElementById("results")
    setLoading(true)

    let words = inputString.split(/\S+/).length - 1
    setWords(words)
    // console.log("There are " + (inputString.split(/\S+/).length - 1) + " words.")

    let charsWithSpace = inputString.length
    setCharsWithSpace(charsWithSpace)
    // console.log("There are " + inputString.length + " characters (with spaces).")

    let spaces = inputString.split(" ").length - 1
    setSpaces(spaces)
    // console.log((inputString.split(" ").length -1) + " space(s)")

    let charsWithoutSpace = charsWithSpace - spaces
    setCharsWithoutSpace(charsWithoutSpace)

    setLoading(false)
    results!.style.display = "block"
    results!.style.opacity = "1"

    let syllables: any = syllableCount(inputString)
    setSyllables(syllables)

  }

  useEffect(() => {
    
  }, [])

  return <>
    <div className="">
      <Head>
        <title>Word Count - cheeky.tools</title>
        <meta name="description" content="This word count tool will count the number of words there are in any given input." />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Word Count" />
        <meta property="og:site_name" content="cheeky.tools" />
        <meta property="og:url" content="https://cheeky.tools/tools/text/wordcount" />
        <meta property="og:description" content="This word count tool will count the number of words there are in any given input." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://cheeky.tools/cryptography.jpg" />
      </Head>
      <div className="">
        <h1 className="text-center text-lg font-bold underline">Word Counter</h1>
        <p className='mt-5 text-sm text-center'>This tool counts the number of words given. Other text tools can be found <Link href="/tools/text"><span className="text-blue-500 hover:text-blue-200 cursor-pointer">here</span></Link>.</p>
      </div>

      <InputString title="Input" inputString={inputString} setInputString={setInputString} rows={16} />
      <div onClick={handleClick} className={`${inputString.length >0 ? 'block' : 'hidden'} my-3 cursor-pointer text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}>Calculate</div>

      {/* Results Displayed Here */}
      <div id="results" className={`hidden animate-fade-in`}>
        <div className="flex gap-2">
            <div onClick={() => {setInputString(''); document.getElementById("results")!.style.display = "none";}} className="cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-red-500">
                <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clipRule="evenodd" />
              </svg>
            </div>
            <p className="font-bold underline">Results:</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 place-items-center text-center my-5">
          <div className='border w-32 h-32 p-4 flex flex-col shadow-lg bg-gray-50 place-items-center justify-center'>
            <p className="text-xl">Words</p>
            <p className="text-3xl text-green-500 font-medium">{words}</p>
          </div>

          <div className='border w-32 h-32 p-4 flex flex-col shadow-lg bg-gray-50 place-items-center justify-center'>
            <p className="text-xl">Characters <span className="text-xs">(with spaces)</span></p>
            <p className="text-3xl text-green-500 font-medium">{charsWithSpace}</p>
          </div>

          <div className='border w-32 h-32 p-4 flex flex-col shadow-lg bg-gray-50 place-items-center justify-center'>
            <p className="text-xl">Characters <span className="text-xs">(without spaces)</span></p>
            <p className="text-3xl text-green-500 font-medium">{charsWithoutSpace}</p>
          </div>

          <div className='border w-32 h-32 p-4 flex flex-col shadow-lg bg-gray-50 place-items-center justify-center'>
            <p className="text-xl">Spaces</p>
            <p className="text-3xl text-green-500 font-medium">{spaces}</p>
          </div>

          <div className='border w-32 h-32 p-4 flex flex-col shadow-lg bg-gray-50 place-items-center justify-center'>
            <p className="text-xl">Syllables</p>
            <p className="text-3xl text-green-500 font-medium">{syllables}</p>
          </div>
        </div>

      </div>

      <ToolDisclaimer />
    </div>
  
    </>
  }
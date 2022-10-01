import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'

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
      <div className="my-3">  
        <div className="flex justify-between">
          <label htmlFor="message" className="block text-sm font-medium text-gray-900 dark:text-gray-400">Input</label>
          
          <div className="flex gap-2">
            <div onClick={pasteText} className="cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                <path fillRule="evenodd" d="M15.988 3.012A2.25 2.25 0 0118 5.25v6.5A2.25 2.25 0 0115.75 14H13.5V7A2.5 2.5 0 0011 4.5H8.128a2.252 2.252 0 011.884-1.488A2.25 2.25 0 0112.25 1h1.5a2.25 2.25 0 012.238 2.012zM11.5 3.25a.75.75 0 01.75-.75h1.5a.75.75 0 01.75.75v.25h-3v-.25z" clipRule="evenodd" />
                <path fillRule="evenodd" d="M2 7a1 1 0 011-1h8a1 1 0 011 1v10a1 1 0 01-1 1H3a1 1 0 01-1-1V7zm2 3.25a.75.75 0 01.75-.75h4.5a.75.75 0 010 1.5h-4.5a.75.75 0 01-.75-.75zm0 3.5a.75.75 0 01.75-.75h4.5a.75.75 0 010 1.5h-4.5a.75.75 0 01-.75-.75z" clipRule="evenodd" />
              </svg>
            </div>

            <div onClick={() => {setInputString(''); document.getElementById("results")!.style.display = "none";}} className={`text-red-500 ${inputString.length > 0 ? 'block' : 'hidden'} cursor-pointer`}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                <path fillRule="evenodd" d="M8.75 1A2.75 2.75 0 006 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482A41.03 41.03 0 0014 4.193V3.75A2.75 2.75 0 0011.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4zM8.58 7.72a.75.75 0 00-1.5.06l.3 7.5a.75.75 0 101.5-.06l-.3-7.5zm4.34.06a.75.75 0 10-1.5-.06l-.3 7.5a.75.75 0 101.5.06l.3-7.5z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>

        <textarea id="message" value={inputString} onChange={(e) => setInputString(e.target.value)} rows={16} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" ></textarea>
        <div onClick={handleClick} className={`${inputString.length >0 ? 'block' : 'hidden'} mt-3 cursor-pointer text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}>Calculate</div>
      </div>

      {/* Results Displayed Here */}
      <div id="results" className={`hidden animate-fade-in`}>
        <p className="font-bold underline">Results:</p>
        <p>Words: {words}</p>
        <p>Characters (including spaces): {charsWithSpace}</p>
        <p>Characters (without spaces): {charsWithoutSpace}</p>
        <p>Spaces: {spaces}</p>
        <p>Syllables: {syllables}</p>
      </div>

      <p className="text-sm"><span className="font-bold underline uppercase">Note:</span> All content generated by this tool is done client-side (on your local computer) using JavaScript. None of your data is recorded or stored by us at all. Please view our <span className="text-blue-500">Privacy Policy</span> for more information.</p>
    </div>
  
    </>
  }
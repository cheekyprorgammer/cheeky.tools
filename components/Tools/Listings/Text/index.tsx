import Link from "next/link"
import Hash from "../../../images/hash"
import WordCount from "../../../images/wordcount"

export default function TextTools() {
    return (
      <div className="flex-col">
      <p className="mt-5 underline font-bold">Text/Word Tools:</p>
      <p className="text-sm mb-2">A wide range of various text and word tools all in one place. Generate hashes, get word counts and more.</p>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 place-items-center">

        <Link href="/tools/text/md5">
          <div className="flex flex-col place-items-center w-36 p-2 hover:text-blue-500 hover:scale-105 transition-all duration-500 cursor-pointer ">
            <div className="p-1 mb-2 underline w-20 text-red-600 border rounded shadow">
              <Hash />
            </div>
            <p className="text-sm font-medium  drop-shadow-md shadow-blue-600/50 text-center">MD5<br />Generator</p>
          </div>
        </Link>

        <Link href="/tools/text/sha1">
          <div className="flex flex-col place-items-center w-36 p-2 hover:text-blue-500 hover:scale-105 transition-all duration-500 cursor-pointer">
            <div className="p-1 mb-2 underline w-20 text-red-600 border rounded shadow">
              <Hash />
            </div>
            <p className="text-sm font-medium  drop-shadow-md shadow-blue-600/50 text-center">SHA-1<br />Generator</p>
          </div>
        </Link>

        <Link href="/tools/text/sha256">
          <div className="flex flex-col place-items-center w-36 p-2 hover:text-blue-500 hover:scale-105 transition-all duration-500 cursor-pointer">
            <div className="p-1 mb-2 underline w-20 text-blue-600 border rounded shadow">
              <Hash />
            </div>
            <p className="text-sm font-medium  drop-shadow-md shadow-blue-600/50 text-center">SHA-256 Generator</p>
          </div>
        </Link>

        <Link href="/tools/text/sha512">
          <div className="flex flex-col place-items-center w-36 p-2 hover:text-blue-500 hover:scale-105 transition-all duration-500 cursor-pointer">
            <div className="p-1 mb-2 underline w-20 text-blue-600 border rounded shadow">
              <Hash />
            </div>
            <p className="text-sm font-medium  drop-shadow-md shadow-blue-600/50 text-center">SHA-512 Generator</p>
          </div>
        </Link>

        <Link href="/tools/text/wordcount">
          <div className="flex flex-col place-items-center w-36 p-2 hover:text-blue-500 hover:scale-105 transition-all duration-500 cursor-pointer">
            <div className="p-1 mb-2 underline w-20 border rounded shadow">
              <WordCount />
            </div>
            <p className="text-sm font-medium  drop-shadow-md shadow-blue-600/50 text-center">Word<br />Counter</p>
          </div>
        </Link>

      </div>

    </div>
    )
  }
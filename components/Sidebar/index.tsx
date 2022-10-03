import Link from "next/link"

export default function Sidebar() {
  return (
    <div className="md:sticky md:top-40 w-full md:w-11/12 md:p-2 mx-auto h-fit bg-gray-50 border border-gray-300 rounded-lg cursor-default">
      <p className="drop-shadow-xl p-2 font-bold uppercase">Most Popular Tools</p>
      <ul className="p-2">
        <li className="hover:font-bold hover:text-blue-800 text-blue-500"><Link href="/tools/text/md5" className="cursor-pointer">MD5 Hash Generator</Link></li>
        <li className="hover:font-bold hover:text-blue-800 text-blue-500"><Link href="/tools/text/sha1" className="cursor-pointer">SHA-1 Hash Generator</Link></li>
        <li className="hover:font-bold hover:text-blue-800 text-blue-500"><Link href="/tools/text/sha512" className="cursor-pointer">SHA-512 Hash Generator</Link></li>
        <li className="hover:font-bold hover:text-blue-800 text-blue-500"><Link href="/tools/text/wordcounter" className="cursor-pointer">Word Counter</Link></li>
        <li className="hover:font-bold hover:text-blue-800 text-blue-500"><Link href="/tools/text/sha256" className="cursor-pointer">SHA-256 Hash Generator</Link></li>
      </ul>
    </div>
  )
}
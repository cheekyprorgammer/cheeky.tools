import Link from "next/link"
import Dot from "../images/dot"

export default function Sidebar() {
  return (
    <div className="md:sticky md:top-40 w-full md:w-11/12 md:p-2 mx-auto h-fit bg-gray-50 border border-gray-300 rounded-lg cursor-default">
      <p className="drop-shadow-xl p-2 font-bold uppercase">Most Popular Tools</p>
      <div className="flex justify-center">
  <ul className="rounded-lg w-96 text-gray-900">
    <li className="px-3 py-2 border-b border-gray-200 w-full rounded-t-lg hover:font-bold cursor-pointer"><Link href="/tools/text/md5"><div className="flex"><Dot className="w-6" />MD5 Hash Generator</div></Link></li>
    <li className="px-3 py-2 border-b border-gray-200 w-full hover:font-bold cursor-pointer"><Link href="/tools/text/sha1"><div className="flex"><Dot className="w-6" />SHA-1 Hash Generator</div></Link></li>
    <li className="px-3 py-2 border-b border-gray-200 w-full hover:font-bold cursor-pointer"><Link href="/tools/text/sha512"><div className="flex"><Dot className="w-6" />SHA-512 Hash Generator</div></Link></li>
    <li className="px-3 py-2 border-b border-gray-200 w-full hover:font-bold cursor-pointer"><Link href="/tools/text/wordcount"><div className="flex"><Dot className="w-6" />Word Counter</div></Link></li>
    <li className="px-3 py-2 w-full rounded-b-lg hover:font-bold cursor-pointer"><Link href="/tools/text/casechanger"><div className="flex"><Dot className="w-6" />Case Changer</div></Link></li>
  </ul>
</div>

    </div>
  )
}
import Link from "next/link";

const d = new Date();
let year = d.getFullYear();

export default function Footer() {
    return (
      <footer className="w-full p-2">
        <div className="w-1/2 mx-auto bg-gray-50 border border-gray-300 rounded-lg p-5">
          <div className="mb-2 text-sm text-center">
              Copyright {year} by <a href="https://github.com/cheekyprorgammer" target="_blank" rel="noopener noreferrer"><span className="text-blue-500 hover:text-blue-300 hover:underline">cheekyprogrammer</span></a>.
          </div>
          <div className="justify-center text-sm gap-3 flex">
            <span className="text-blue-500 hover:text-blue-300 hover:underline"><Link href="/privacy">Privacy</Link></span>
            <span className="text-blue-500 hover:text-blue-300 hover:underline"><Link href="/contact">Contact</Link></span>
          </div>
        </div>
      </footer>
    )
  }
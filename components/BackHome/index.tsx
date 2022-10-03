import Link from "next/link";

const d = new Date();
let year = d.getFullYear();

export default function BackHome() {
    return (
      <Link href="/">
        <div className="flex items-center mb-2 w-fit cursor-pointer hover:text-blue-500">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
            <path fillRule="evenodd" d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z" clipRule="evenodd" />
          </svg> 
          <p className="text-sm">&nbsp;Home</p>
        </div>
      </Link>
    )
  }
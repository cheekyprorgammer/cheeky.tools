import { useEffect, useState } from "react"
import Flash from '../images/flash'
import Link from "next/link"

export default function Header() {
  
  const [navbar, setNavbar] = useState(false)

  useEffect(() => {
    {console.log(document.getElementById("head")?.style.height + " px")}
  }, [])

    return (
        <nav id="head" className="sticky top-0 w-full md:h-36 bg-gray-50/95 shadow z-[100]">
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <Link href="/">
                            <div className="cursor-pointer transform hover:scale-105 transition-all duration-500">
                                {/* <Bot className="h-10 w-10 md:h-20 md:w-20 mx-auto hover:animate-wiggle" /> */}
                                <Flash className="h-10 w-10 md:h-20 md:w-20 mx-auto hover:animate-wiggle text-yellow-500 opacity-100" />
                            </div>
                        </Link>
                        <p className="text-xl font-bold text-center"><Link href="/">Fast SEO Tools</Link></p>
                        <div className="md:hidden">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-2 space-y-3 md:pb-0 md:mt-0 md:flex md:space-x-6 md:space-y-0 ${
                            navbar ? "block" : "hidden"
                        }`}
                    >
                        <div className="flex flex-col md:flex-row gap-5 items-center uppercase">
                            
                            <div className="text-gray-600 hover:text-blue-600 text-xl hover:font-bold cursor-pointer">
                                <Link href="/">Home</Link>
                            </div>                         

{/*                         <div className="text-gray-600 hover:text-blue-600 text-xl hover:font-bold cursor-pointer">
                                Tools
                            </div> */}

                            <div className="text-gray-600 hover:text-blue-600 text-xl hover:font-bold cursor-pointer">
                                <Link href="/contact">Contact</Link>
                            </div>

                            <div className={`cursor-pointer w-10/12 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 drop-shadow-lg hover:drop-shadow-md`}>Subscribe</div>                            
                            
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

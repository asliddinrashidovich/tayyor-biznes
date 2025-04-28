"use client"

import Image from "next/image"
import Link from "next/link";
import { useRouter } from "next/navigation";
import nProgress from "nprogress";
import { useEffect, useState } from "react";
import { FaTelegramPlane } from "react-icons/fa";

function Header() {
    const [scrolled, setScrolled] = useState(false);
    const router = useRouter()

    useEffect(() => {
        const handleScroll = () => {
        setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        
        return () => {
        window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    function handleClick(path) {
        router.push(path)
        nProgress.start();
    }
  return (
    <header className={`fixed  w-full z-1 ${ scrolled ? "bg-[#353a40]" : "bg-transparent"}`}>
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
            <div className="flex-1 flex md:items-center md:gap-12">
                <div className="flex text-teal-600 h-[40px] items-center overflow-hidden rounded-r-full border-t-[2px] border-[#ffd200] border-b-[2px] rounded-l-full cursor-pointer" onClick={() => handleClick('/')}>
                    <Image src={'/logo.png'} alt="Logo" width={100} height={10} className="scale-[110%] rounded-[50%]"/>
                </div>
            </div>

            <div className="flex items-center gap-12">
                <nav aria-label="Global" className="block">
                    <ul className="flex items-center gap-6 text-sm">
                        <li>
                            <p onClick={() => handleClick('/mahsulotlar')} className="transition cursor-pointer  hover:text-gray-500/75"> Biznes rejalar </p>
                        </li>

                        <li>
                            <p onClick={() => handleClick('/contact')}  className=" transition cursor-pointer hidden sm:flex  hover:text-gray-500/75"> Contact </p>
                        </li>
                    </ul>
                </nav>

                <div className="flex items-center gap-4">
                    <div className="sm:flex sm:gap-4">
                        <Link
                        className="rounded-md flex items-center gap-[7px] bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow"
                        href="https://t.me/uzbiznesss" target="_blank"
                        >
                            <FaTelegramPlane className="text-[20px]"/>
                        </Link>

                    </div>
                </div>
            </div>
            </div>
        </div>
        </header>
  )
}

export default Header
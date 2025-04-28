import Image from 'next/image'
import React from 'react'
import { FaTelegramPlane } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

function Footer() {
  return (
    <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="sm:col-span-2">
                <div className="flex-1 flex md:items-center md:gap-12">
                    <a className="flex h-[40px] items-center overflow-hidden rounded-r-full border-t-[2px] border-[#ffd200] border-b-[2px] rounded-l-full" href="#">
                        <Image src={'/logo.png'} alt="Logo" width={100} height={10} className="scale-[110%] rounded-[50%]"/>
                    </a>
                </div>
                <div className="mt-6 lg:max-w-sm">
                    <p className="text-sm ">
                        Tayyor biznes rejalar 
                    </p>
                    <p className="mt-4 text-sm ">
                        Bankdan kredit olish uchun Biznes reja tuzamiz
                    </p>
                </div>
            </div>
            <div >
                    <h2 className='mb-[10px]'>Foydali havolalar</h2>
                    <ul>
                        <li className='text-[14px]'>
                            <a href="#">Biznes rejalar</a>
                        </li>
                        <li className='text-[14px]'>
                            <a href="#">Biz haqimizda</a>
                        </li>
                        <li className='text-[14px]'>
                            <a href="#">Natijalar</a>
                        </li>
                    </ul>
            </div>
            <div className="space-y-2 text-sm">
                <p className="text-base font-bold tracking-wide">Contacts</p>
                <div className="flex gap-[7px] items-center">
                    <FaTelegramPlane />
                    <a href="https://t.me/uzbiznesss" target='_blank' aria-label="Our phone" title="Our phone" className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800">Tayyor biznes rejalar</a>
                </div>
                <div className="flex gap-[7px] items-center">
                    <FaUser />
                    <a href="https://t.me/BoBuRo7o7" target='_blank' aria-label="Our phone" title="Our phone" className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800">Admin</a>
                </div>
            </div>
        </div>
        <div className=" pt-5 pb-10 border-t lg:flex-row">
            <p className="text-sm text-center text-gray-600">
                © Copyright 2025 Barcha huquqlar himoyalangan.
            </p>
        </div>
        </div>
  )
}

export default Footer
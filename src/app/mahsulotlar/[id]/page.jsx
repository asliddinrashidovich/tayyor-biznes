"use client"

import mahsulotlar from '@/data/data'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useState } from 'react'
import { IoDocumentTextSharp } from "react-icons/io5";

function ProductDetails() {
    const {id} = useParams()
    const [product, setProducts] = useState(mahsulotlar[id])
    
    return (
        <div className="pt-[100px] pb-[50px]">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-center text-[28px] md:text-[40px] font-[600] mb-[20px]">Biznes Reja</h1>
                <Link href={'/mahsulotlar'} className="text-center w-[200px] mb-[30px] inline-block bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700 cursor-pointer">Orqaga</Link>
                <div className="flex flex-col md:flex-row  items-center -mx-4">
                    <div className="md:flex-1 px-4 mx-auto">
                        <div className="h-[460px] overflow-hidden rounded-lg  mb-4 items-center flex">
                            <Image src={product.image} alt='products img' width={600} height={500}/>
                        </div>
                    </div>
                    <div className="md:flex-1 px-4">
                        <h2 className="text-[16px] md:text-2xl font-bold text-gray-800 dark:text-white mb-2">{product.title}</h2>
                        <table className='py-[20px] my-[30px]'>
                            <tbody>
                                <tr>
                                    <th className='min-w-[100px] md:min-w-[200px] text-start text-[12px] md:text-[16px]'>Hujjat turi?:</th>
                                    <td className='opacity-[70%] text-[12px] md:text-[16px]'>{product.hujjat_turi.map(dproduct => (dproduct + ' '))} ({product.hujjat_hajmi})</td>
                                </tr>
                                <tr>
                                    <th className='min-w-[150px] text-start text-[12px] md:text-[16px]'>Hujjat varaqlari soni:</th>
                                    <td className='opacity-[70%] text-[12px] md:text-[16px]'>{product.varaqlar}</td>
                                </tr>
                                <tr>
                                    <th className='min-w-[150px] text-start text-[12px] md:text-[16px]'>Kredit Summasi:</th>
                                    <td className='opacity-[70%] text-[12px] md:text-[16px]'>{product.kridit} mln</td>
                                </tr>
                                <tr>
                                    <th className='min-w-[150px] text-start text-[12px] md:text-[16px]'>Yaratiladigan ish oʻrni:</th>
                                    <td className='opacity-[70%] text-[12px] md:text-[16px]'>{product.xodimlar}</td>
                                </tr>
                                <tr>
                                    <th className='min-w-[150px] text-start text-[12px] md:text-[16px]'>Holati:</th>
                                    <td className='opacity-[70%] text-[12px] md:text-[16px]'>{product.holati && 'Bankka taqdim etishga tayyor'}</td>
                                </tr>
                                <tr>
                                    <th className='min-w-[150px] text-start text-[12px] md:text-[16px]'>Yili:</th>
                                    <td className='opacity-[70%] text-[12px] md:text-[16px]'>{product.yil}</td>
                                </tr>
                                <tr>
                                    <th className='min-w-[150px] text-start text-[12px] md:text-[16px]'>Biznes reja narxi:</th>
                                    <td className='opacity-[70%] text-[12px] md:text-[16px]'>{product.narxi.toLocaleString()} so'm</td>
                                </tr>
                            </tbody>
                        </table>
                        <Link href={'https://t.me/business_111'} target='_blank'
                            className="rounded-md inline-block  items-center  gap-[7px] bg-teal-600 px-5 py-2.5 text-sm font-medium cursor-pointer text-white shadow">
                                Xarid qilish
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    
  )
}

export default ProductDetails
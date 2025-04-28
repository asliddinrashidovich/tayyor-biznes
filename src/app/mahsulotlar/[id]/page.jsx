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
    
    
    // useEffect(()=> {
    //     const getData = async () => {
    //         try {
    //             const {data} = await axios.get(`https://67e38f432ae442db76d08ec2.mockapi.io/a-store-products/${id}`)
    //             setProducts(data)
    //         } catch(err) {
    //             console.log(err)
    //         }
    //     } 
    //     getData()
    // }, [id])
  
    return (
        <div className="pt-[150px] pb-[50px]">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row  -mx-4">
                    <div className="md:flex-1 px-4">
                        <div className="h-[460px] rounded-lg  mb-4 items-center flex">
                            <Image src={product.image} alt='products img' width={600} height={500}/>
                        </div>
                        <div className="flex -mx-2 mb-4">
                            <div className="w-1/2 px-2">
                                <button className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700 cursor-pointer">Orqaga</button>
                            </div>
                        </div>
                    </div>
                    <div className="md:flex-1 px-4">
                        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">{product.title}</h2>
                        <table className='py-[20px] my-[30px]'>
                            <tbody>
                                <tr>
                                    <th className='min-w-[200px] text-start'>Hujjat turi?:</th>
                                    <td className='opacity-[70%] '>{product.hujjat_turi.map(dproduct => (dproduct + ' '))} ({product.hujjat_hajmi})</td>
                                </tr>
                                <tr>
                                    <th className='min-w-[150px] text-start'>Hujjat varaqlari soni:</th>
                                    <td className='opacity-[70%] '>{product.varaqlar}</td>
                                </tr>
                                <tr>
                                    <th className='min-w-[150px] text-start'>Kredit Summasi:</th>
                                    <td className='opacity-[70%] '>{product.kridit} mln</td>
                                </tr>
                                <tr>
                                    <th className='min-w-[150px] text-start'>Yaratiladigan ish oʻrni:</th>
                                    <td className='opacity-[70%] '>{product.xodimlar}</td>
                                </tr>
                                <tr>
                                    <th className='min-w-[150px] text-start'>Holati:</th>
                                    <td className='opacity-[70%] '>{product.holati && 'Bankka taqdim etishga tayyor'}</td>
                                </tr>
                                <tr>
                                    <th className='min-w-[150px] text-start'>Yili:</th>
                                    <td className='opacity-[70%] '>{product.yil}</td>
                                </tr>
                                <tr>
                                    <th className='min-w-[150px] text-start'>Biznes reja narxi:</th>
                                    <td className='opacity-[70%] '>{product.narxi.toLocaleString()} so'm</td>
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
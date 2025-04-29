"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"
import nProgress from "nprogress"

function AllProductsAsync({data}) {
    const router = useRouter()
    function handleClick(id) {
        router.push(`/mahsulotlar/${id}`)
        nProgress.start()
    }
  return (
    <div className="max-w-[1200px] mx-auto grid grid-cols-1 justify-center sm:grid-cols-2 lg:grid-cols-4 gap-[30px]">
        {data.map((item) => (
            <div key={item.id} className="max-w-sm mx-auto rounded overflow-hidden shadow-lg">
                <div className="h-[180px]  w-[100%] overflow-hidden">
                    <Image src={item.image} alt={item.title} className="object-cover h-full hover:scale-[105%] transition-all duration-[0.3s] hover:rotate-[2deg]" width={400} height={200}/>
                </div>
                <div className="px-6 py-4">
                    <h2 onClick={()=> handleClick(item.id)} className="font-bold capitalize hover:underline cursor-pointer text-[15px] mb-2 line-clamp-3">{item.title}</h2>
                    <br/>
                    <div className="flex justify-between items-center">
                        {item.narxi.toLocaleString()} so'm
                        <button onClick={()=> handleClick(item.id)} 
                            className="rounded-md flex items-center gap-[7px] bg-teal-600 px-5 py-2.5 text-sm font-medium cursor-pointer text-white shadow">
                                Ko'rish
                        </button>
                    </div>
                </div>
                
            </div>
        ))}
    </div>
  )
}

export default AllProductsAsync
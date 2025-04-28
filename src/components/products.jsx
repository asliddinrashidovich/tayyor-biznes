"use client"

import mahsulotlar from "@/data/data"
import Image from "next/image"
import { useRouter } from "next/navigation"

function Products() {
    const router = useRouter()
    function handleClick(id) {
        router.push(`/mahsulotlar/${id}`)
    }
  return (
    <div className="pt-[100px] px-[20px] md:px-[40px]">
        <h1 className="text-center text-[28px] md:text-[40px] font-[600] mb-[40px]">Biznes Rejalar</h1>
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 justify-center sm:grid-cols-2 lg:grid-cols-4 gap-[30px]">
            {mahsulotlar.map((item, i) => (
                <div key={item.title} className="max-w-sm mx-auto rounded overflow-hidden shadow-lg">
                    <div className="h-[180px]  w-[100%] overflow-hidden">
                        <Image src={item.image} alt={item.title} className="object-cover h-full hover:scale-[105%] transition-all duration-[0.3s] hover:rotate-[2deg]" width={400} height={200}/>
                    </div>
                    <div className="px-6 py-4">
                        <h2 onClick={() => handleClick(i)} className="font-bold capitalize hover:underline cursor-pointer text-[15px] mb-2 line-clamp-3">{item.title}</h2>
                        <p className="opacity-[50%] text-[14px] cursor-pointer hover:underline">Batafsil</p>
                        <br/>
                        <div className="flex justify-between items-center">
                            {item.narxi.toLocaleString()} so'm
                            <button
                                className="rounded-md flex items-center gap-[7px] bg-teal-600 px-5 py-2.5 text-sm font-medium cursor-pointer text-white shadow">
                                    Savatga
                            </button>
                        </div>
                    </div>
                    
                </div>
            ))}
        </div>
    </div>
  )
}

export default Products
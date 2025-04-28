import Link from "next/link"
import { FaTelegramPlane } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";

function Contact() {
  return (
    <div className="pt-[120px] pb-[70px]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
                <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight  sm:text-4xl">
                    Biz bilan Bog'lanish
                </p>
                <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                    Agar Biznes rejalarimiz sizga maqul kelgan bo'lsa, quyidagi manzillar orqali biz bilan bog'lanishingiz mumkin
                </p>
            </div>

            <div className="mt-10">
                <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                    <div className="flex">
                        <div className="flex-shrink-0">
                            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                <FaLocationArrow />
                            </div>
                        </div>
                        <div className="ml-4">
                            <p className="text-lg leading-6  font-medium ">
                                Address
                            </p>
                            <p className="mt-2 text-base text-gray-500">
                                Toshkent<br/>
                                Uzbekiston
                            </p>
                        </div>
                    </div>

                    <div className="flex">
                        <div className="flex-shrink-0">
                            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                            <FaPhoneAlt />
                            </div>
                        </div>
                        <div className="ml-4">
                            <p className="text-lg leading-6  font-medium ">
                                Telefon
                            </p>
                            <p className="mt-2 text-base text-gray-500">
                                (555) 555-5555
                            </p>
                        </div>
                    </div>

                    <div className="flex">
                        <div className="flex-shrink-0">
                            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                            <FaTelegramPlane />
                            </div>
                        </div>
                        <div className="ml-4">
                            <p className="text-lg leading-6  font-medium ">
                                Admin 
                            </p>
                            <Link href={'https://t.me/BoBuRo7o7'} target="_blank" className="mt-2 text-base text-gray-500">
                                @BoBuRo7o7
                            </Link>
                        </div>
                    </div>

                    <div className="flex">
                        <div className="flex-shrink-0">
                            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                            <FaTelegramPlane />
                            </div>
                        </div>
                        <div className="ml-4">
                            <p className="text-lg leading-6  font-medium ">
                                Admin 2
                            </p>
                            <Link href={'https://t.me/business_111'} target="_blank" className="mt-2 text-base text-gray-500">
                                @business_111
                            </Link>
                        </div>
                    </div>
                </dl>
            </div>
        </div>
    </div>
  )
}

export default Contact
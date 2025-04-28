import Image from "next/image"
import { FaShoppingBag } from "react-icons/fa";
import { FaBars } from "react-icons/fa";

function Header() {
  return (
    <header className=" fixed w-full z-1">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
            <div className="flex-1 flex md:items-center md:gap-12">
                <a className="flex text-teal-600 h-[40px] items-center overflow-hidden rounded-r-full border-t-[2px] border-[#ffd200] border-b-[2px] rounded-l-full" href="#">
                    <Image src={'/logo.png'} alt="Logo" width={100} height={10} className="scale-[110%] rounded-[50%]"/>
                </a>
            </div>

            <div className="md:flex md:items-center md:gap-12">
                <nav aria-label="Global" className="hidden md:block">
                <ul className="flex items-center gap-6 text-sm">
                    <li>
                        <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Biznes rejalar </a>
                    </li>

                    <li>
                        <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Contact </a>
                    </li>
                </ul>
                </nav>

                <div className="flex items-center gap-4">
                <div className="sm:flex sm:gap-4">
                    <a
                    className="rounded-md flex items-center gap-[7px] bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow"
                    href="#"
                    >
                        <FaShoppingBag />
                        Savat
                    </a>

                </div>

                <div className="block md:hidden">
                    <FaBars />
                </div>
                </div>
            </div>
            </div>
        </div>
        </header>
  )
}

export default Header
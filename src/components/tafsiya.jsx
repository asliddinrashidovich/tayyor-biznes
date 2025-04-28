import { FaBook } from "react-icons/fa";
import { FaFlag } from "react-icons/fa";
import { RiBankLine } from "react-icons/ri";

function Tafsiya() {
  return (
    <section className='py-[70px]'>
        <div className="max-w-[1200px] mx-auto px-[20px] md:px-[40px]">
            <h1 className="text-center text-[40px] font-[600] mb-[40px]">Biz Tavsiya Qilamiz</h1>
            <div className='flex flex-col md:flex-row gap-[40px]'>
                <div className="flex flex-col items-center">
                    <div className="w-[70px] h-[70px] rounded-[7px] flex justify-center items-center bg-teal-600 mb-[30px]">
                        <FaBook className="text-[30px]" />
                    </div>
                    <h2 className="text-center text-[22px] mb-[10px]">Aniq Biznes reja</h2>
                    <p className="text-center">Biznesni rivojlantirish uchun to‘g‘ri reja ishlab chiqish. Biznesning har bir bosqichi puxta o'ylab chiqilgan.</p>
                </div>
                <div className="flex flex-col items-center">
                    <div className="w-[70px] h-[70px] rounded-[7px] flex justify-center items-center bg-teal-600 mb-[30px]">
                        <RiBankLine  className="text-[30px]" />
                    </div>
                    <h2 className="text-center text-[22px] mb-[10px]">Bankka taqdim etishga tayyor</h2>
                    <p className="text-center">Biznes rejalar pdf formatda bo'lib ularni bemalol bankga taqdim qila olasiz.</p>
                </div>
                <div className="flex flex-col items-center">
                    <div className="w-[70px] h-[70px] rounded-[7px] flex justify-center items-center bg-teal-600 mb-[30px]">
                        <FaFlag className="text-[30px]" />
                    </div>
                    <h2 className="text-center text-[22px] mb-[10px]">Aniq summa va ishchi o'rinlari</h2>
                    <p className="text-center">Biznesni boshlashdan oldin, aniq moliyaviy rejani belgilash va kerakli ishchi o'rinlarini aniqlash.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Tafsiya
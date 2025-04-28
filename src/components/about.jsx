import Image from "next/image"

function About() {
  return (
    <section className="w-full py-[50px] px-[20px] md:px-[40px]">
        <h1 className="text-center text-[40px]  mb-[30px]">Biz haqimizda</h1>
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center justify-center gap-[40px]">
            <div className="rounded-[20px]  overflow-hidden flex justify-center">
                <Image src={'/pexels-fauxels-3184287.jpg'} alt="group image" width={400} className="rounded-[20px]" height={200}/>
            </div>
            <div>
                <p className="mb-[20px] text-[18px] font-[600]">Siz Tadbirkorlikni Boshlamoqchimisiz? Lekin qanday boshlashni bilmaysiz. <br /> Sizga albatta biznes reja kerak. Biz sizga yordam beramiz <br /> <br />Biznesingiz muvaffaqiyati — puxta rejalashtirishdan boshlanadi.
                Biz turli sohalar uchun sifatli va amaliy biznes rejalari tayyorlashga ixtisoslashganmiz. Tajribali mutaxassislarimiz har bir loyiha uchun individual yondashuvni ta'minlab, sizning maqsadlaringizga tezroq yetishingizga yordam beradi.

                Bizning maqsadimiz — har bir mijozga o‘z orzularidagi biznesni yo‘lga qo‘yishda ishonchli tayanch bo‘lish. Ishimizda aniq strategiya, bozorga chuqur tahlil va real natijalarga asoslangan yechimlar taklif etamiz. <br /><br />Yangi biznes boshlayapsizmi yoki mavjud faoliyatingizni kengaytirmoqchimisiz — biz har qadamda siz bilan birgamiz!</p>
                <button className="rounded-md gap-[7px] cursor-pointer relative bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow">
                    Biznes reja sotib olish
                </button>
            </div>
        </div>
    </section>
  )
}

export default About
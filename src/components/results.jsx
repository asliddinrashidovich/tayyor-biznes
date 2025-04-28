"use client"
import CountUp from "react-countup"

function Results() {
  return (
    <section className="mx-auto py-[20px] px-[20px] bg-[#353a40]">
        <div className="max-w-[1200px] mx-auto flex md:flex-row flex-col gap-[70px] justify-center">
            <div className="text-center">
                <CountUp end={175}  className="text-[70px] font-[700]" duration={3}/>
                <h2 className="text-[30px]">Mijozlar</h2>
            </div>
            <div className="text-center">
                <CountUp end={224}  className="text-[70px] font-[700]" duration={3}/>
                <h2 className="text-[30px]">Biznes Rejalar</h2>
            </div>
            <div className="text-center">
                <CountUp end={7034} className="text-[70px] font-[700]"  duration={3}/>
                <h2 className="text-[30px]">Obunachilar</h2>
            </div>
        </div>
    </section>
  )
}

export default Results
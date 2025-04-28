function Hero() {
  return (
    <section className="relative w-full bg-hero h-[100vh] px-[20px] md:px-[40px]" >
        <div className="absolute inset-0 bg-black/70 z-0"></div>
        <div className="max-w-[1200px] flex-col items-start  mx-auto  flex justify-center h-full">
            <h1 className="text-[40px] md:text-[70px] relative leading-[100%] text-[#fff] max-w-[600px] mb-[20px]">O'z biznesingizni hoziroq boshlang!</h1>
            <button className="rounded-md gap-[7px] cursor-pointer relative bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow">
                Biznes rejalar
            </button>
        </div>
    </section>
  )
}

export default Hero
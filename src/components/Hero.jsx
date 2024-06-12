import Mug from "../scenes/Mug";

const Hero = () => {
    return (
        <section id="welcome" className={` w-full h-[100vh] z-10 bg-[url(../oooscillate.svg)] bg-cover bg-[#0e0915]`}>
            <div className={`flex flex-col justify-center items-center`}>

            <div className={`absolute  h-[50vh] inset-0 w-full  text-[#E3DFD9] flex flex-col my-auto z-50`}>
                    <h1 className={`mx-auto mt-5 justify-center font-[FFFFORWARD]`}>Welcome! My name is <span className="text-[#D89340]">Gabriel</span>.</h1>
                    <p className=" font-mono text-[1.65rem]  mx-auto my-[5rem] w-2/5">I&apos;m a <span className=" px-1 text-[#22ac39c5] bg-[#E3DFD9] font-bold">Junior</span> Developer with a passion for exploring creative ways to enhance the <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-orange-500 via-yellow-400 via-green-600 to-blue-500 font-bold">UX</span> with the help of frontend and good cup of coffee.</p>
                </div>
            </div>
            <Mug />
        </section>
    )
}
export default Hero;
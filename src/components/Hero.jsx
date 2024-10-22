import Mug from "../scenes/Mug";

const Hero = () => {
    return (
        <section
            id="welcome"
            className="relative w-full h-[100vh] z-10 bg-[url(../oooscillate.svg)] bg-cover bg-[#0e0915]">
            <div className="flex flex-col justify-center items-center h-full sm:relative z-50">
                <div className="absolute inset-0 text-[#E3DFD9] flex flex-col items-center justify-center">
                    <h1 className="sm:text-[3rem] sm:text-sm text-center mt-5 font-[FFFFORWARD]">
                        Welcome! My name is <span className="text-[#D89340]">Gabriel</span>.
                    </h1>
                    <p className="sm:mx-40 font-mono text-center  sm:text-2xl my-8 sm:w-4/5">
                        I&apos;m a <span className="px-1 text-[#22ac39c5] bg-[#E3DFD9] font-bold">Junior</span> Developer with a passion for exploring creative ways to enhance the <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-orange-500 via-yellow-400 via-green-600 to-blue-500 font-bold">UX</span> with the help of frontend and a good cup of coffee.
                    </p>
                </div>
            </div>
            <div className="absolute inset-0 z-40">
                <Mug />
            </div>
        </section>
    );
};

export default Hero;

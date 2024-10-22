import Projects from '../scenes/Devices';
import { projects } from '../constants/constants';
import { useState } from 'react';

const ShowCase = () => {
    const [currentProject, setCurrentProject] = useState(0);

    const handlePrev = () => {
        setCurrentProject((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentProject((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
    };

    return (
        <section id='showcase' className='relative w-[100vw] h-[130vh] bg-[url(../oooscillate.svg)] bg-cover bg-[#0e0915]'>
            {/* Title */}
            <h2 className='md:text-[3rem] xxs:my-2 xxs:text-[1.75rem] w-screen absolute xxs:z-[1000] mx-auto flex justify-center font-[FFFFORWARD] text-[#D89340] sm:pt-32 sm:pb-10'>
                Showcase
            </h2>

            {/* Render the 3D Models */}
            <div className="absolute sm:pt-10 inset-0 z-[0]">
                <Projects currentProject={currentProject} setCurrentProject={setCurrentProject} />
            </div>

            {/* Overlay Content on Top */}
            <div id='portfolioContainer' 
                 className="text-[#c9dac8] 
                            xxs:bg-opacity-55 
                            xxs:backdrop-blur-[1px]
                            xxs:bg-black
                            xxs:mt-16
                            p-6 rounded-lg 
                            absolute left-0 right-0 
                            z-[10] flex flex-col 
                            items-center 
                            sm:h-[60vh] 
                            mx-auto 
                            sm:px-[27vw] 
                            sm:mt-[12rem] 
                            mt-8">
                <div className='sm:w-[45vw] py-[1rem]'>
                    <h2 className='text-[2rem] text-center xxs:mx-auto'>
                        {projects[currentProject].title}
                    </h2>
                    <p className='font-mono xxs:text-[1.15rem] xxs:backdrop-blur-sm sm:text-[1.35rem] sm:mx-auto mt-10 sm:w-[40vw]'>
                        {projects[currentProject].description}
                    </p>
                    <p className='font-mono text-[1.35rem] my-[2rem] sm:w-[50vw] mx-auto sm:pl-12'>
                        Check the live version <a className='text-pink-500' href={projects[currentProject].url}>here!</a>
                    </p>
                </div>

                {/* Navigation buttons */}
                <div className='relative mt-[2rem] w-screen flex sm:w-[40vw] justify-around flex-row '>
                    <button className='text-[#D89340] ' onClick={handlePrev}>Previous</button>
                    <button className='text-[#D89340]' onClick={handleNext}>Next</button>
                </div>
            </div>
        </section>
    );
};

export default ShowCase;

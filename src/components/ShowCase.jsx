import { Html } from '@react-three/drei'
import { useState } from 'react';
import Projects from '../scenes/Devices'
import { projects } from '../constants/constants';
const ShowCase = () => {
    const [currentProject, setCurrentProject] = useState(0);
    const handlePrev = () => {
        setCurrentProject((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentProject((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
    };
  
    return (
        <section   className='w-[100vw] h-[100vh]  relative bg-[url(../oooscillate.svg)] bg-cover bg-[#0e0915]'>
              
            
            <h2 id='showcase' className=' text-[3rem] mx-auto  flex justify-center font-[FFFFORWARD] text-[#D89340] pt-28 pb-20 '>Showcase</h2>
       
            <div id='portfolioContainer' className="text-[#E3DFD9] flex flex-col w-[100vw] h-[60vh] mx-auto absolute z-[1000] px-[27vw] mt-[2rem]">
                <div className=' w-[45vw]
                py-[1rem]'>

        <h2 className='text-[2rem] text-center'>
                    { projects[currentProject].title}</h2>
                <p className='font-mono text-[1.75rem] mx-auto mt-10  w-[40vw] z-50'>{projects[currentProject].description}</p>
                <p className='font-mono text-[1.75rem] my-[2rem] w-[50vw] mx-auto pl-12'>Check the live version <a href={projects[currentProject].url}>here!</a></p>
                </div>
            <div className='relative mt-[2rem] flex  z-50 w-[40vw] justify-around'>
<button id="prevBtn" className='text-[#D89340]' onClick={handlePrev}>Previous</button>
<button id="nextBtn" className='text-[#D89340]' onClick={handleNext}>Next</button>
        </div>
      
            </div>
            <Projects currentProject={currentProject} setCurrentProject={setCurrentProject} />
               

                

                
                
                

      
        </section>
    )
}
export default ShowCase
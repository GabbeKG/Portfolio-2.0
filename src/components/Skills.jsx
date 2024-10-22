import TechCubes from "../scenes/TechCubes"
import { tech } from "../constants/constants"


const Skills = () => {
    return (
        <section className="bg-[#0e0915]  h-[100vh] xxs:h-auto">
            <h2 id='skills' className='xxs:text-[1.75rem] xxs:pt-20 md:text-[3rem] mx-auto  flex justify-center font-[FFFFORWARD] text-[#D89340] xxs:py-1 md:pt-28 md:pb-20 '>Skills</h2>
            <div className="flex md:flex-row flex-wrap justify-center xxs:pb-20 xxs:gap-5 md:gap-20 md:px-[20vw]">

            {tech.map((icon) => (
                
                <div key={icon.name} className="xxs:w-20 xxs:h-20 sm:m-2 md:w-40 md:h-40 ">

                <TechCubes  icon={icon.icon} />
                </div>
            )
        )}
        </div>
        </section>
    )
}

export default Skills
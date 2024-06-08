import TechCubes from "../scenes/TechCubes"
import { tech } from "../constants/constants"


const Skills = () => {
    return (
        <section className="bg-[#0e0915]  h-[100vh]">
            <h2 id='skills' className=' text-[3rem] mx-auto  flex justify-center font-[FFFFORWARD] text-[#D89340] pt-28 pb-20 '>Skills</h2>
            <div className="flex flex-row flex-wrap justify-center gap-20 px-[20vw]">

            {tech.map((icon) => (
                
                <div key={icon.name} className=" w-40 h-40">

                <TechCubes  icon={icon.icon} />
                </div>
            )
        )}
        </div>
        </section>
    )
}

export default Skills
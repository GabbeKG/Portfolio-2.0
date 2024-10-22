import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import {experiences} from '../constants/constants'
import 'react-vertical-timeline-component/style.min.css';



const TimeCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
    
className="md:w-[50vw]"
contentStyle={{ background: 'center/cover no-repeat url(../oooscillate.svg)', color: '#fff' }}
contentArrowStyle={{ borderRight: '7px solid  #D89340' }}
date={experience.date}
iconStyle={{ background: '#D89340', color: '#fff', width:"20px", height:"20px", left:'10px' }} 
>
    <h3 className=" font-[FFFFORWARD]">{ experience.title}</h3>
    <h4 className="">{experience.location }</h4>
          <p style={{ marginRight:'2rem !important'}} className=' md:text-[1.75rem] font-mono sm:text-sm'>
              {experience.desc}
</p>
</VerticalTimelineElement>
  )
}


const Experiences = () => {
    

    return (
        <section className='bg-[#0e0915]'>
            <h2 id='experience' className=' sm:text-[2rem] md:text-[3rem] mx-auto  flex justify-center font-[FFFFORWARD] text-[#D89340] pt-28 pb-20 '>Experiences & Education</h2>
          <div className='sm:ml-[0] sm:px-0 md:ml-[8vw]'>
        <VerticalTimeline layout='1-column-left' >

          {experiences.map((exp, index) => (
            <TimeCard key={index} experience={exp} />
            
            
          ))}
 
</VerticalTimeline>
          </div>
        </section>
    )
}
export default Experiences
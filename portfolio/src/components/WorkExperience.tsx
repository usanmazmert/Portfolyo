import React from 'react'
import { motion } from 'framer-motion'
import ExperienceCard from './ExperienceCard'
import { Experience } from '@/typings'

type Props = {
  projects?: Experience[]
}

const WorkExperience = (props: Props) => {
  return (
    <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:1.5}} className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'>
        <h3 className='snap-title'>
            Projects
        </h3>
        <div className='relative w-full h-[88%] flex  overflow-x-scroll snap-x snap-mandatory overflow-y-hidden gap-2 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-scrollbar-yellow'>
          {
            props.projects?.map(item => (
              <ExperienceCard key={item._id} project={item} />
            ))
          }
            
        </div>
    </motion.div>
  )
}

export default WorkExperience
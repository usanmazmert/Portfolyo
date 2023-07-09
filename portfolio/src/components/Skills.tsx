import React from 'react'
import { motion } from 'framer-motion'
import SkillComponent from './Skill'
import { Skill } from '@/typings'

type Props = {
  skills?: Skill[]
}

const Skills = (props: Props) => {
  return (
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}}
    className="flex relative flex-col  text-center md:text-left w-full px-4 xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >

        <h3 className='snap-title'>Skills</h3>
        <h3 className='absolute top-28 uppercase px-4 tracking-[3px] text-gray-500 text-sm'>Hover over a skill for experience percentage</h3>

        <div className=' grid grid-cols-2 md:grid-cols-4 gap-4 relative top-10'>
          {
            props?.skills?.map((item, index) => {
              if(index <= 7)
                return(<SkillComponent key={item._id} directionLeft={false} skill={item}/>)
              else
                return(<SkillComponent key={item._id} directionLeft skill={item}/>)
            })
          }
        </div>
    </motion.div>
  )
}

export default Skills
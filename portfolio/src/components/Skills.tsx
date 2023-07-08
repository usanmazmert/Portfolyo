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
    className="flex relative flex-col  text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >

        <h3 className='absolute top-16 uppercase tracking-[20px] text-gray-500 text-2xl'>Skills</h3>
        <h3 className='absolute top-28 uppercase tracking-[3px] text-gray-500 text-sm'>Hover over a skill for experience percentage</h3>

        <div className='grid grid-cols-4 gap-5 relative top-14'>
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
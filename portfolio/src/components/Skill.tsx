import React from 'react'
import { motion } from 'framer-motion'
import { Skill } from '@/typings'
import { urlFor } from '../../sanity'

type Props = {
    directionLeft?: boolean,
    skill: Skill
}

const Skill = ({directionLeft, skill}: Props) => {
  return (
    <motion.div  
    initial={{
        x: directionLeft ? -200 : 200,
        opacity: 0
    }}
    transition={{duration:1}}
    whileInView={{opacity:1, x: 0}}
    viewport={{once:true}}
    className='group relative flex cursor-pointer'>

        <motion.img
            src={urlFor(skill.image).url()}
            className='rounded-full border-gray-500 w-20 h-20 md:h-24 md:w-24 filter group-hover:grayscale transition duration-300 ease-in-out'
        />
        <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-20 w-20 md:w-24 md:h-24 rounded-full z-0'
>
            <div className='h-full text-center flex items-center'>
                <p className='m-auto text-2xl font-bold text-black opacity-100 text-center'>{skill.progress}%</p>
            </div>
        </div>
    </motion.div>
  )
}

export default Skill
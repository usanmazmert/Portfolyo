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
        x: directionLeft ? -100 : 100,
        opacity: 0
    }}
    transition={{duration:1}}
    whileInView={{opacity:1, x: 0}}
    viewport={{once:true}}
    className='group relative flex cursor-pointer'>

        <motion.img
            src={urlFor(skill.image).url()}
            className='rounded-full border-gray-500 w-14 h-14 md:h-20 md:w-20 filter group-hover:grayscale transition duration-300 ease-in-out'
        />
        <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-14 h-14 md:h-20 md:w-20 rounded-full z-0'
>
            <div className='h-full text-center flex items-center'>
                <p className='m-auto text-lg md:text-xl lg:text-2xl font-bold text-black opacity-100 text-center'>{skill.progress}%</p>
            </div>
        </div>
    </motion.div>
  )
}

export default Skill
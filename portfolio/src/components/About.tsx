import React from 'react'
import { motion } from 'framer-motion'
import { PageInfo } from '@/typings'
import { urlFor } from '../../sanity'

type Props = {
    pageInfo: PageInfo
}

function About({pageInfo}: Props) {
    return(
        <motion.div initial={{opacity:0}} 
        whileInView={{opacity:1}} 
        transition={{duration:1.5}} 
        className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-center gap-40 md:gap-10 mx-auto items-center">
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-xl'>About</h3>
            <motion.img initial={{x: -200,
            opacity: 0}}
            transition={{duration:1.2}}
            whileInView={{opacity:1, x: 0}}
            viewport={{once:true}}
            src={urlFor(pageInfo?.profilePic).url()}
            className='relative top-28 md:top-0 md:mb-0 flex-shrink-0 w-28 h-28 rounded-full object-cover md:rounded-lg md:w-48 md:h-80 xl:w-[250px] xl:h-[300px]'
            />
            <div className='space-y-10 px-0 md:px-10'>
                <h4 className='text-3xl font-semibold'>Here is a <span className="underline decoration-[#F7AB0A]">little</span> background</h4>
                <p className='text-base'>
                    {pageInfo.backgroundInformation}
                </p>
            </div>
        </motion.div>
    )
}

export default About
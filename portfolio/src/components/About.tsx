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
            <h3 className='snap-title'>About</h3>
            <motion.img initial={{x: -200,
            opacity: 0}}
            transition={{duration:1.2}}
            whileInView={{opacity:1, x: 0}}
            viewport={{once:true}}
            src={urlFor(pageInfo?.profilePic).url()}
            className='relative top-20 md:top-0 md:mb-0 flex-shrink-0 w-20 h-20 sm:w-40 sm:h-40 rounded-full object-cover md:rounded-lg md:w-48 md:h-80 xl:w-[250px] xl:h-[300px]'
            />
            <div className='space-y-10 -mt-16 px-0 md:px-10'>
                <h4 className='text-lg sm:text-2xl font-semibold'>Here is a <span className="underline decoration-[#F7AB0A]">little</span> background</h4>
                <p className='text-sm smd:text-base'>
                    {pageInfo.backgroundInformation}
                </p>
            </div>
        </motion.div>
    )
}

export default About
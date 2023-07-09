import React from 'react'
import { motion } from 'framer-motion'
import { Project } from '@/typings'
import { urlFor } from '../../sanity'
import Link from 'next/link'

type Props = {
    experiences?: Project[]
}

const Projects = ({experiences}: Props) => {
  return (
    <motion.div initial={{opacity:0}}
    whileInView={{opacity:1}} transition={{duration:0.75}} viewport={{once:true}} className='h-screen relative flex flex-col text-left md:flex-row max-w-full justify-evenly items-center mx-auto z-0'>
        <h3 className='snap-title'>
            Experiences
        </h3>
        <div className='relative w-[90%] h-[90%] flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
            {
                experiences?.map((item,i) => (
                    <div key={item._id} className='w-screen flex-shrink-0 snap-center flex flex-col items-center justify-center gap-10 px-10 h-screen'>
                        <motion.img
                        initial={{y:-300}} transition={{duration:0.75}} whileInView={{opacity:1, y: 0}} viewport={{once:true}} src={item.image ? urlFor(item.image).url() : 'https://burgessforensics.com/wp-content/uploads/2016/10/ManyMobileDevices.jpg'} className='w-64 md:w-[30rem]' alt="" />
                        <div className='flex space-x-2 -mb-6'>{
                            item.technologies.map(tech => (
                                <img key={tech._id} className='h-5 w-5 md:h-10 md:w-10 rounded-full' src={urlFor(tech.image).url()} alt=''/>
                            ))
                            }</div>
                        <div className='px-0 max-w-6xl'>
                            {
                                item.linkToBuild ? 
                                (<Link href={item.linkToBuild}>
                                    <h4 className='text-lg sm:text-lg md:text-2xl font-semibold text-center mb-2'>
                                        <span className='underline decoration-[#F7AB0A]/50'>{item.title}</span>
                                    </h4>
                                </Link>) :
                                (
                                    <h4 className='text-lg sm:text-lg md:text-2xl font-semibold text-center mb-2'>
                                        <span className='underline decoration-scrollbar-yellow'>{item.title}</span>
                                    </h4>
                                )
                            }
                            <p className='text-xs sm:text-sm md:text-base text-center md:text-left'>
                                {item.summary}
                            </p>
                        </div>
                    </div>)
                )
            }

        </div>
        <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12'></div>
    </motion.div>
  )
}

export default Projects
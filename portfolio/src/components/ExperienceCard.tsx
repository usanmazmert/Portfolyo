import React from 'react'
import { motion } from 'framer-motion'
import { Experience } from '@/typings'
import { urlFor } from '../../sanity'
import Link from 'next/link'

type Props = {
    project : Experience
}

const ExperienceCard = ({project}: Props) => {


  return (
    <Link href={project.linkToBuild}>
        <article className='relative flex flex-col rounded-1 items-center space-y-7 flex-shrink-0 w-[300px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 h-[550px] overflow-hidden cursor-pointer hover:opacity-100 opacity-40 transition-opacity top-20'>
            <motion.img
            initial={{y:-100, opacity:0}}
            transition={{duration:1.2}}
            whileInView={{opacity:1, y: 0}}
            viewport={{once:true}}
            className="h-24 w-24 rounded-full xl:w-[100px] xl:h-[100px] object-cover object-center"
            src={urlFor(project.companyImage).url()}
            alt=''
            />
            <div className='px-0 md:px-10'>

                <h4 className='underscore decoration-scrollbar-yellow'>{project.jobTitle}</h4>
                {
                    project.company && (
                        <div>
                            <h4 className='text-2xl font-light'>
                                CEO OF APES
                            </h4>
                            <p className='font-bold text-lg mt-1'>PAPAFAM</p>
                        </div>
                    )
                }
                <div className='flex space-x-2 mt-4'>
                    {project.technologies.map(item => (
                        <img key={item._id} className='h-10 w-10 rounded-full' src={urlFor(item.image).url()} alt=''/>
                    ))}
                </div>
                {
                    project.dateStarted && (<p className='uppercase py-5 text-gray-300'>
                        Started work... - Ended...
                    </p>)
                }
                <ul className='list-disc space-y-4 mt-10 ml-5 text-lg'>
                    {project.points.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </article>
    
    </Link>
  )
}

export default ExperienceCard
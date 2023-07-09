import Link from 'next/link'
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import { motion } from 'framer-motion'
import { PageInfo } from '@/typings'
import { urlFor } from '../../sanity'

type Props = {
  pageInfo?: PageInfo
}

export default function Hero({pageInfo}: Props) {
    const [text, count] = useTypewriter({
        words:[
            `<Hi My Name is ${pageInfo?.name}/>`,
            "<Are you looking for something?/>",
            "<Then you are at the right place/>"
        ],
        loop: true,
        delaySpeed: 2000
    })
  return (
    <motion.div initial={
      {opacity:0}
    } 
    whileInView={{opacity:1}}
    transition={{duration:1}} className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
      <BackgroundCircles />
      <img src={urlFor(pageInfo?.heroImage).url()} alt="" className='relative rounded-full h-32 w-32 mx-auto object-cover'/>
      <div className='z-20'>
        <h2 className='text-xs md:text-sm uppercase text-gray-500 pb-2 tracking-[5px] md:tracking-[10px]'>
          {pageInfo?.role}
        </h2>
        <h1 className='text-xl md:text-4xl font-semibold scroll-px-10'>
          <span>{text}</span><Cursor cursorColor='#F7AB0A' />
        </h1>
        <div className='pt-5'>
          <Link href="#about">
            <button className='heroButton'>about</button>
          </Link>
          <Link href="#experience">
            <button className='heroButton'>experience</button>
          </Link>
          <Link href="#skills">
            <button className='heroButton'>skill</button>
          </Link>
          <Link href="#projects">
            <button className='heroButton'>projects</button>
          </Link>
        </div>
      </div>
    </motion.div>
  )
}
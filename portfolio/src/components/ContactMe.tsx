import React from 'react'
import {PhoneIcon, MapPinIcon, EnvelopeIcon} from "@heroicons/react/24/solid"
import {useForm, SubmitHandler} from "react-hook-form"
import { PageInfo } from '@/typings'

type Props = {
    pageInfo : PageInfo
}

type Inputs = {
    name:string,
    email: string,
    subject: string,
    message: string
}

const ContactMe = ({pageInfo}: Props)=> {
    const {
        register,
        handleSubmit
    } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (data) => window.location.href = `mailto:usanmazmert.info@gmail?subject=${data.subject}&body=Hi, my name is ${data.name}. ${data.message} (${data.email})`;
  return (
    <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-16 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Contact
        </h3>
        <div className='relative flex top-10 flex-col space-y-10'>
            <h4 className='text-3xl font-semibold text-center'>
                I have got just what you need.{" "}<span className='decoration-[#F7AB0A]/50 underline'>Lets Talk.</span>
            </h4>
            
            <div className='space-y-10'>
                <div className='flex items-center space-x-5 justify-center'>
                    <PhoneIcon className='text-[#f7ab0a]/50 h-7 w-7 animate-pulse' />
                    <p className='text-2xl'>{pageInfo.phoneNumber}</p>
                </div>
            </div>
            <div className='space-y-10'>
                <div className='flex items-center space-x-5 justify-center'>
                    <EnvelopeIcon className='text-[#f7ab0a]/50 h-7 w-7 animate-pulse' />
                    <p className='text-2xl'>{pageInfo.email}</p>
                </div>
            </div>
            <div className='space-y-10'>
                <div className='flex items-center space-x-5 justify-center'>
                    <MapPinIcon className='text-[#f7ab0a]/50 h-7 w-7 animate-pulse' />
                    <p className='text-2xl'>{pageInfo.address}</p>
                </div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto'>
                <div className='flex space-x-2'>
                    <input {...register("name")} className='contactInput' type="text" placeholder='Name'/>
                    <input {...register("email")} className='contactInput' type="text" placeholder='Email'/>
                </div>

                <input {...register("subject")} className='contactInput' type="text" placeholder='Subject'/>
                <textarea {...register("message")} className='contactInput' placeholder='Message'/>
                <button className='bg-[#f7ab0a] py-5 px-10 rounded-md text-black font-bold text-lg'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default ContactMe
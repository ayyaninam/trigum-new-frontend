"use client"
import FloatingInput from '@/components/FloatingInput'
import React, { useState } from 'react'

const Contact = () => {
    const [email, setEmail] = useState<string>("")
    const [name, setName] = useState<string>("")
     return (
    <>
    <div className='grid grid-cols-1 md:grid-cols-2 p-0 md:p-10  w-full items-center justify-between container mx-auto'>
     <form action="" className='m-4 p-4 rounded-md flex flex-col bg-gray-200 gap-5 '>
           <div className='flex flex-col gap-2 '>
           <label className=''>Name</label>
            <FloatingInput value={name} valueSetter={setName} inputPlaceHolder={"Enter your name"} inputType='text' />
           </div>
           <div className='flex flex-col gap-2'>
           <label className=''>Email</label>
            <FloatingInput  value={email} valueSetter={setEmail} inputPlaceHolder={"Enter your email"} inputType='email' />
           </div>
           <div className='flex flex-col gap-2 w-full'>
           <label className=''>Message</label>
            <textarea name="message"  className='h-40 rounded-md resize-none text-black p-2' placeholder='Please enter your message'></textarea>
           </div>
            <button type='submit' className='bg-orange-300 hover:bg-orange-400 p-3 rounded-lg text-white '>Submit</button>
        </form>



        <div className='m-4 p-4 rounded-md flex flex-col bg-gray-200 gap-5'>
           <h1 className=''>Direction</h1>
        <iframe className=' md:h-80 ' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2537.195808140612!2d18.779745899999998!3d50.51192340000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4710d7f2a2948607%3A0x6c31e5d00d78938a!2sArmii%20Krajowej%206%2C%2042-690%20Boruszowice%2C%20Poland!5e0!3m2!1sen!2s!4v1716831334068!5m2!1sen!2s"></iframe>
        </div>
        </div>
    </>
  )
}

export default Contact
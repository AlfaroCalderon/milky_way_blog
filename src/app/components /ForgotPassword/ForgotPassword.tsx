'use client'
import { MailCheck, Mail } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

export const ForgotPassword = () => {
  return (
    <>
    <section className='mx-auto w-full flex justify-center items-center p-8'>
                <form action="#" className='w-full max-w-md flex flex-col space-y-7 bg-gradient-to-br from-white to-blue-50 border border-gray-200 rounded-xl p-8 shadow-xl transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl backdrop-blur-sm'>
                    <div className='flex flex-col items-center justify-center space-y-3'>
                        <MailCheck size={40} className='text-blue-500'/>
                        <span className='text-3xl font-bold'>Forgot Password?</span>
                        <span className='text-gray-600 text-center'>Enter your email below and we will send you a temporary password so you can enter and set your new password.</span>
                    </div>
                    <div className='flex flex-col space-y-2'>
                        <label htmlFor="email" className='text-sm font-medium text-gray-700'>Email Address</label>
                        <div className='relative'>
                            <Mail className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400' size={20}/>
                            <input type="email" id='email' placeholder='you@example.com' className='pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 w-full'/>
                        </div>
                    </div>
                    <div className='flex flex-col space-y-5'>
                        <button type='submit' className=' bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-500 cursor-pointer'>Send Email</button>
                        <span className='text-center'><Link href={'#'} className='text-blue-600 hover:text-blue-500 cursor-pointer' >back to sign In</Link></span>
                    </div>
                </form>
    </section>
    </>
  )
}

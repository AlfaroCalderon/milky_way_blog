'use client'
import { sigin } from '@/services/user.service'
import { Mutation, useMutation } from '@tanstack/react-query'
import { Mail, UserRound, Lock } from 'lucide-react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

type InputType = {
    email:string
    password:string
}

export const Signin = () => {

    const {register, handleSubmit, watch, formState: {errors}, reset} = useForm<InputType>();
    const mutation = useMutation({mutationFn: (data:InputType) => sigin({data})});


    useEffect(() => {
        if(mutation.isSuccess){
            reset()
        }

        setTimeout(() => {
            if(mutation.isSuccess){
             window.location.href = '/blogs'; // Replace '/' with your desired redirect URL
            }
            mutation.reset();
        }, 4000)

    }, [mutation.isSuccess, mutation.isError]);

    const onSubmit = (data:InputType) => {

        const user = {
            email: data.email,
            password: data.password
        }

        mutation.mutate(user);
    }

  return (
    <>
    {
        mutation.isSuccess && (
            <div
                className={`fixed z-50 m-2 px-7 py-3 bg-green-300 rounded-lg`}
            >
                <span>
                    {mutation.data?.data?.message}
                </span>
            </div>
        )
    }
     <section className='mx-auto w-full flex justify-center items-center p-8'>
                <form action="#" onSubmit={handleSubmit(onSubmit)} className='w-full max-w-md flex flex-col space-y-7 bg-linear-to-br from-white to-blue-50 border border-gray-200 rounded-xl p-8 shadow-xl transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl backdrop-blur-sm'>
                    <div className='flex flex-col items-center justify-center space-y-3'>
                        <Lock size={40} className='text-blue-500'/>
                        <span className='text-3xl font-bold'>Sign In</span>
                        <span className='text-gray-600 text-center'>Welcome back! Please enter your credentials.</span>
                    </div>
                    <div className='flex flex-col space-y-2'>
                        <label htmlFor="email" className='text-sm font-medium text-gray-700'>Email Address</label>
                        <div className='relative'>
                            <Mail className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400' size={20}/>
                            <input type="email" id='email' {...register('email', {required: 'Email required', pattern:{value:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message: "Invalid email address. Please provide a valid email"}})} placeholder='you@example.com' className='pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 w-full'/>
                        </div>
                    </div>
                    <div className='flex flex-col space-y-2'>
                        <label htmlFor="password" className='text-sm font-medium text-gray-700'>Password</label>
                        <div className='relative'>
                        <Lock className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400' size={20} />
                        <input type="password" id='password' {...register('password', {required: 'Password required', pattern:{value:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d])([^\s]{8,64})$/, message: "Invalid password. Requirements: at least one lowercase letter, one uppercase letter, one digit, one special character, no whitespace, length 8–64 characters."}})} placeholder='Your password' className='pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 w-full'/>
                        </div>
                    </div>
                    <div className='flex flex-col space-y-5'>
                        <span className='text-right'>
                        <Link href={'/signin/forgot-password'} className='text-blue-600 hover:text-blue-500 cursor-pointer' >Forgot Password?</Link>
                        </span>
                        <button type='submit' className=' bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-500 cursor-pointer'>Log In</button>
                        <span className='text-center'>Don&apos;t have an account? <Link href={'/signup'} className='text-blue-600 hover:text-blue-500 cursor-pointer' >Sign Up</Link></span>
                    </div>
                </form>
    </section>
    </>
  )
}

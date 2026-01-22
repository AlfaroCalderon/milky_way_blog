'use client'
import { Mail, UserRound, Lock } from 'lucide-react'
import {useForm} from 'react-hook-form'
import {createUser} from '@/services/user.service'
import {useMutation} from '@tanstack/react-query'
import Link from 'next/link'
import { json } from 'stream/consumers'
import { useEffect } from 'react'

type Inputs = {
    name:string
    lastname:string
    email:string
    password:string
    password_confirmation:string
}

export const Signup = () => {

    const {register, handleSubmit, watch, formState:{ errors }, reset } = useForm<Inputs>();
    const mutation = useMutation({mutationFn: (data: Inputs) => createUser({ data })});

     useEffect(() => {
        setTimeout(() => {
            mutation.reset();
        },3000);
    },[mutation.isSuccess, mutation.isError]);

    const onSubmit = (data: Inputs) => {
        mutation.mutate({
                name: data.name,
                lastname: data.lastname,
                email: data.email,
                password: data.password,
                password_confirmation: data.password_confirmation
            }
        );
        reset();
        console.log(mutation.data);
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

    {
        mutation.isError && (
            <div className='fixed z-50 m-2 px-7 py-3 bg-red-300 rounded-lg'>
                <span>
                 {mutation.error.message}
                </span>
            </div>
        )
    }
    
    <section className='mx-auto w-full flex justify-center items-center p-8'>
                <form action="#" onSubmit={handleSubmit(onSubmit)} className='w-full max-w-md flex flex-col space-y-7 bg-gradient-to-br from-white to-blue-50 border border-gray-200 rounded-xl p-8 shadow-xl transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl backdrop-blur-sm'>
                    <div className='flex flex-col items-center justify-center space-y-3'>
                        <UserRound size={40} className='text-blue-500'/>
                        <span className='text-3xl font-bold'>Create Account</span>
                        <span className='text-gray-600 text-center'>Join our milky way blog community and enjoy sharing and answering blogs.</span>
                    </div>
                    <div className='flex flex-col space-y-2'>
                        <label htmlFor="firstName" className='text-sm font-medium text-gray-700'>First Name</label>
                        <div className='relative'>
                            <UserRound className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400' size={20}/>
                            <input type="text" {...register("name", {required:'First name required', maxLength:{value:60, message:"First name must be less than 60 characters long"}, minLength:{value:3, message: "First name must be larger than 3 characters long"}})} id='firstName' placeholder='Your first name' className='pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 w-full'/>
                            {errors.name && (
                                <span className='text-red-400 font-bold'>{errors.name?.message}</span>
                            )}
                        </div>
                    </div>
                    <div className='flex flex-col space-y-2'>
                        <label htmlFor="lastName" className='text-sm font-medium text-gray-700'>Last Name</label>
                        <div className='relative'>
                            <UserRound className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400' size={20}/>
                            <input type="text" {...register("lastname", {required:'Last name required', maxLength:{value:60, message:"Last name must be less than 60 characters long"}, minLength:{value:3, message: "Last name must be larger than 3 characters long"}})} id='lastName' placeholder='Your last name' className='pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 w-full'/>
                        </div>
                        {errors.lastname && (
                                <span className='text-red-400 font-bold'>{errors.lastname?.message}</span>
                        )}
                    </div>
                    <div className='flex flex-col space-y-2'>
                        <label htmlFor="email" className='text-sm font-medium text-gray-700'>Email Address</label>
                        <div className='relative'>
                            <Mail className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400' size={20}/>
                            <input type="email" {...register( "email", {required:'Email name required', pattern:{value:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message: "Invalid email address. Please provide a valid email"}})} id='email' placeholder='you@example.com' className='pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 w-full'/>
                        </div>
                        {errors.email && (
                                <span className='text-red-400 font-bold'>{errors.email?.message}</span>
                        )}
                    </div>
                    <div className='flex flex-col space-y-2'>
                        <label htmlFor="password" className='text-sm font-medium text-gray-700'>Password</label>
                        <div className='relative'>
                        <Lock className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400' size={20} />
                        <input type="password" {...register("password",{required:'Password required', pattern:{value:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d])([^\s]{8,64})$/, message: "Invalid password. Requirements: at least one lowercase letter, one uppercase letter, one digit, one special character, no whitespace, length 8–64 characters."}})} placeholder='Min 8 characters' id='password' className='pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 w-full'/>
                        </div>
                        {errors.password && (
                                <span className='text-red-400 font-bold'>{errors.password?.message}</span>
                        )}
                    </div>
                    <div className='flex flex-col space-y-2'>
                        <label htmlFor="confirmPassword" className='text-sm font-medium text-gray-700'>Confirm Password</label>
                        <div className='relative'>
                        <Lock className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400' size={20} />
                        <input type="password" {...register("password_confirmation", {required:'Confirm password required', pattern:{value:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d])([^\s]{8,64})$/, message: "Invalid password. Requirements: at least one lowercase letter, one uppercase letter, one digit, one special character, no whitespace, length 8–64 characters."}})} placeholder='Re-enter your password' id='confirmPassword' className='pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 w-full'/>
                        </div>
                        {errors.password_confirmation && (
                                <span className='text-red-400 font-bold'>{errors.password_confirmation?.message}</span>
                        )}
                    </div>
                    <div className='flex flex-col space-y-5'>
                        {mutation.isPending ? (
                            <button className=' bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-500 cursor-pointer animate-pulse' disabled>Saving data...</button>
                        ) : (
                            <button type='submit' className=' bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-500 cursor-pointer'>Sign Up</button>
                        )}
                        <span className='text-center'>Already have an account? <Link href={'/signin'} className='text-blue-600 hover:text-blue-500 cursor-pointer' >Sign in</Link></span>
                    </div>
                </form>
    </section>
    </>
  )
}

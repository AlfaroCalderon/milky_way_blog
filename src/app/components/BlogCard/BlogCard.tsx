import { ArrowLeft, Calendar, UserRound } from 'lucide-react'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export const BlogCard = ({id}: {id:string}) => {
  return (
    <>
    <section className="flex w-full flex-col items-center p-4">
        <article className="bg-white flex flex-col w-full max-w-7xl rounded-lg shadow-lg p-10 mb-5 space-y-3">
            {id}
            <div className="w-full flex justify-center">
            <Image
                src="https://res.cloudinary.com/dxuntrrfo/image/upload/v1753107010/samples/smile.jpg"
                width={600}
                height={300}
                alt="img"
                className="rounded-lg object-cover w-full max-w-2xl h-auto"
            />
            </div>
            <span className='text-left px-6 py-2 inline-block w-fit text-white font-bold bg-green-600 rounded-full'>Lifestyle</span>
            <span className='text-5xl font-bold inline-block'>Finding Simple Joy in the Everyday</span>
            <hr className='text-gray-300' />
            <span className='flex items-center text-gray-500 space-x-5'>
            <span className='flex items-center'><UserRound className='inline-block mr-2' size={20} />Jane Doe</span>
            <span className='flex items-center'><Calendar className='inline-block mr-2' size={20} />2024-10-01</span>
            </span>
            <hr className='text-gray-300' />
            <p className="text-lg text-gray-700">
                In a world that often feels fast-paced and overwhelming, it&apos;s important to pause and appreciate the simple joys that surround us. Whether it&apos;s a warm cup of coffee in the morning, a walk in the park, or a heartfelt conversation with a friend, these moments can bring genuine happiness and fulfillment. Embracing mindfulness and gratitude helps us find beauty in the everyday and reminds us to cherish the present.
            </p>
            <p className="text-lg text-gray-700 mt-3">
                Taking time to notice the little things—a gentle breeze, laughter shared with loved ones, or the colors of a sunset—can transform an ordinary day into something memorable. By focusing on what truly matters, we cultivate a sense of peace and contentment that enriches our lives.
            </p>
            <p className="text-lg text-gray-700 mt-3">
                Practicing gratitude daily, even for the smallest blessings, helps shift our perspective and fosters resilience during challenging times. Simple routines, like journaling or spending a few minutes in nature, can ground us and encourage a deeper appreciation for life’s everyday moments.
            </p>
        </article>
        <div className='w-full max-w-7xl my-3'>
            <Link href={'/personal-blogs'} className='group self-start w-fit bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-md font-semibold cursor-pointer flex items-center gap-2'>
                <ArrowLeft className="inline-block group-hover:-translate-x-1 transition-all duration-300 ease-in" size={18} />
                Go Back List Of Blogs
            </Link>
        </div>
        <div className='w-full max-w-7xl'>
        <span className='text-3xl font-bold'>Comments</span>
        </div>
        <div className="w-full max-w-7xl mt-4 space-y-4">
            {/* Add comment input */}
            <div className="bg-white rounded-lg p-4 shadow flex flex-col space-y-2">
                <textarea
                    className="w-full border border-gray-300 rounded-md p-2 resize-none focus:outline-none focus:ring-2 focus:ring-green-500"
                    rows={3}
                    placeholder="Add a comment..."
                    disabled
                />
                <button className="self-start bg-green-600 text-white px-4 py-2 rounded-md font-semibold cursor-not-allowed opacity-70" disabled>
                    Post Comment
                </button>
            </div>
            {/* Example comment */}
            <div className="bg-gray-100 rounded-lg p-4 flex flex-col">
                <div className="flex items-center space-x-3 mb-2">
                    <UserRound size={18} className="text-gray-600" />
                    <span className="font-semibold text-gray-800">John Smith</span>
                    <span className="text-xs text-gray-400">2 hours ago</span>
                </div>
                <p className="text-gray-700">Great post! I really enjoyed reading about finding joy in everyday moments.</p>
            </div>
            <div className="bg-gray-100 rounded-lg p-4 flex flex-col">
                <div className="flex items-center space-x-3 mb-2">
                    <UserRound size={18} className="text-gray-600" />
                    <span className="font-semibold text-gray-800">Emily Clark</span>
                    <span className="text-xs text-gray-400">1 hour ago</span>
                </div>
                <p className="text-gray-700">Thanks for sharing your perspective. It’s inspiring!</p>
            </div>
        </div>
    </section>
    </>
  )
}

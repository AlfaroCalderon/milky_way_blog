'use client'
import { Calendar, Search, UserRound, MoveRight } from 'lucide-react';
import Link from 'next/link'

export const BlogList = () => {

return (
    <>
    <section className="flex w-full flex-col items-center p-4">
        <div className="bg-white flex flex-col items-center w-full max-w-7xl rounded-lg text-center shadow-lg p-8 mb-5">
            <span className="text-3xl w-fit font-bold bg-linear-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">Milky Way Blog</span>
            <span>Exploring the cosmos of technology, design, and development, one article at a time.</span>
        </div>
        <form action="" className="mx-auto w-full max-w-3xl">
            <div className="relative">
                <input
                    type="text"
                    id="search"
                    className="pl-14 py-3 pr-3 w-full rounded-lg bg-linear-to-r from-blue-50 via-purple-50 to-indigo-50 border border-blue-200 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-200 shadow-sm text-lg"
                    placeholder="Search by title or keyword..."
                />
                <Search className="absolute top-4 left-4 text-purple-500" size={22} />
            </div>
        </form>
        <span className="mt-4 mb-2 text-lg font-medium text-gray-600">Showing 6 posts.</span>
        <div className='grid w-full max-w-7xl grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 bg-amber-600'>
            <div className='flex flex-col bg-white rounded-md p-4 space-y-4'>
                <span className='text-left text-sm px-4 py-1 bg-green-500 text-white w-fit inline rounded-full'>Code</span>
                <span className='text-lg font-bold'>Optimizing Tailwind CSS Build Speed</span>
                <p className='text-sm text-gray-600'>Discover advanced techniques to slash your CSS compilation time using PurgeCSS and JIT mode.</p>
                <hr className='text-gray-300' />
                <span className='flex justify-between items-center text-gray-500'>
                    <span className='flex items-center'><UserRound className='inline-block mr-2' size={20} />Jane Doe</span>
                    <span className='flex items-center'><Calendar className='inline-block mr-2' size={20} />2024-10-01</span>
                </span>
                <Link href={''} className="group w-full flex justify-center items-center py-2 px-4 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out">
                Read Post <MoveRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-all ease-in" />
                </Link>
            </div>
            
        </div>
    </section>
    </>
    );

}
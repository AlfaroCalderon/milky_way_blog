'use client'
import { useQuery } from '@tanstack/react-query';
import { getAllPost } from '@/services/post.service';
import { Calendar, Search, UserRound, MoveRight } from 'lucide-react';
import { useDebounce } from 'use-debounce';
import Link from 'next/link'
import { useForm } from 'react-hook-form';
import ReactPaginate from 'react-paginate';
import { useState } from 'react';


type input = {
    search: string
}

export const BlogList = () => {



 const {register, watch, formState: { errors }} = useForm<input>();
 const search = watch('search', '');
 const [debouncedSearch] = useDebounce(search, 400);
 const [page, setPage] = useState(1);

 const { data, isLoading } = useQuery({
        queryKey: ['allpost', debouncedSearch, page],
        queryFn: () => getAllPost({ search: debouncedSearch, per_page: 1, page }),
    });

    const posts = data?.data.data;
    console.log(data?.data)
    

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
                    {...register('search')}
                    className="pl-14 py-3 pr-3 w-full rounded-lg bg-linear-to-r from-blue-50 via-purple-50 to-indigo-50 border border-blue-200 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-200 shadow-sm text-lg"
                    placeholder="Search by title or keyword..."
                />
                <Search className="absolute top-4 left-4 text-purple-500" size={22} />
            </div>
        </form>
         <span className="mt-4 mb-2 text-lg font-medium text-gray-600">
                    {isLoading ? 'Loading posts...' : `Showing ${data?.data.total} posts.`}
         </span>
        <div className='grid w-full max-w-7xl grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4'>
            {Array.isArray(posts) && posts.length > 0 ? (
                posts.map((post: object, idx: number) => (
                <div className='flex flex-col bg-white rounded-md p-4 space-y-4' key={idx}>
                    <span className='text-left text-sm px-4 py-1 bg-green-500 text-white w-fit inline rounded-full'>{post.category}</span>
                    <span className='text-lg font-bold'>{post.post_title}</span>
                    <p className='text-sm text-gray-600'>{post.summary}</p>
                    <hr className='text-gray-300' />
                    <span className='flex justify-between items-center text-gray-500'>
                    <span className='flex items-center'><UserRound className='inline-block mr-2' size={20} />{post.author}</span>
                    <span className='flex items-center'><Calendar className='inline-block mr-2' size={20} />{post.created_at?.substring(0, 10)}</span>
                    </span>
                    <Link href={`/personal-blogs/${post.id}`} className="group w-full flex justify-center items-center py-2 px-4 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out">
                    Read Post <MoveRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-all ease-in" />
                    </Link>
                </div>
                ))
            ) : (
                <div className="col-span-full text-center text-gray-500 py-8">
                No posts found.
                </div>
            )}
        </div>
        <ReactPaginate
            pageCount={data?.data.last_page}
            pageRangeDisplayed={1} // Only 1 page before and after the current page
            marginPagesDisplayed={1} // Only 1 page at the start and end
            onPageChange={({ selected }) => setPage(selected + 1)}
            containerClassName="flex gap-2 justify-center mt-8"
            pageClassName="rounded-full overflow-hidden"
            pageLinkClassName="block px-4 py-2 rounded-full border border-gray-300 bg-white text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors duration-150 font-semibold shadow-sm cursor-pointer"
            activeClassName="z-10"
            activeLinkClassName="bg-indigo-600 text-gray-700 border-indigo-600 pointer-events-none"
            previousClassName="rounded-full overflow-hidden"
            previousLinkClassName="block px-4 py-2 rounded-full border border-gray-300 bg-white text-gray-700 hover:bg-indigo-100 hover:text-indigo-600 transition-colors duration-150 font-semibold shadow-sm cursor-pointer"
            nextClassName="rounded-full overflow-hidden"
            nextLinkClassName="block px-4 py-2 rounded-full border border-gray-300 bg-white text-gray-700 hover:bg-indigo-100 hover:text-indigo-600 transition-colors duration-150 font-semibold shadow-sm cursor-pointer"
            disabledClassName="opacity-50 cursor-not-allowed"
            breakClassName="rounded-full overflow-hidden"
            breakLinkClassName="block px-4 py-2 text-gray-400"
            previousLabel="←"
            nextLabel="→"
        />
    </section>
    </>
    );

}
import { CirclePlus, Eye, Pencil, Trash2 } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export const PersonalListOfPost = () => {
  return (
    <>
     <section className='mx-auto w-full flex flex-col justify-center items-center p-8'>
        <div className='flex w-full gap-4 max-w-7xl  sm:justify-between items-center flex-wrap bg-gradient-to-r from-purple-100 via-white to-purple-100 p-6 rounded-lg shadow-md mb-4'>
          <span className='text-4xl font-bold tracking-tight'>My Blog Posts</span>
          <Link href='#' className='group flex items-center gap-2 bg-purple-700 hover:bg-purple-600 touch-manipulation active:bg-purple-800 transition-colors text-white font-semibold rounded-md px-6 py-4 shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-400'><CirclePlus className='inline-block mr-2 group-hover:scale-110 transition-transform' />Create New Post</Link>
        </div>
        <div className='flex w-full max-w-7xl overflow-x-auto rounded-lg'>
              <table className='min-w-[600px] w-full border-collapse border border-gray-400 table-auto md:table-fixed'>
                  <thead className='bg-gray-100 text-gray-600'>
                  <tr>
                      <th className='border border-gray-300 p-4 text-left'>TITLE</th>
                      <th className='border border-gray-300 p-4 text-left'>CATEGORY</th>
                      <th className='border border-gray-300 p-4 text-left'>AUTHOR</th>
                      <th className='border border-gray-300 p-4 text-left'>STATUS</th>
                      <th className='border border-gray-300 p-4 text-left'>ACTIONS</th>
                  </tr>
                </thead>
                <tbody className='bg-white'>
                  <tr>
                      <td className='border border-gray-300 font-bold p-2'>Finding Simple Joy in the Everyday</td>
                      <td className='border border-gray-300 p-2'>Lifestyle</td>
                      <td className='border border-gray-300 p-2'>Sam Wilson</td>
                      <td className='border border-gray-300 p-2'><span className='text-left text-sm px-4 py-1 bg-green-500 text-white w-fit inline rounded-full'>Published</span></td>
                      <td className='border border-gray-300 p-2'>
                        <div className='flex gap-3'>
                          <Link href="#" className='p-2 rounded hover:bg-purple-100 touch-manipulation active:bg-purple-100 transition-colors' title="Edit">
                            <Pencil className='inline-block text-purple-700 hover:scale-110 transition-transform' size={20} />
                          </Link>
                          <Link href="#" className='p-2 rounded hover:bg-blue-100 touch-manipulation active:bg-blue-100 transition-colors' title="View">
                            <Eye className='inline-block text-blue-700 hover:scale-110 transition-transform' size={20} />
                          </Link>
                          <Link href="#" className='p-2 rounded hover:bg-red-100 touch-manipulation active:bg-red-100 transition-colors' title="Delete">
                            <Trash2 className='inline-block text-red-700 hover:scale-110 transition-transform' size={20} />
                          </Link>
                        </div>
                      </td>
                  </tr>
                </tbody>
              </table>
        </div>
     </section>
    </>
  )
}

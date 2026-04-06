'use client'
import { CirclePlus, Eye, Pencil, Trash2, Check } from 'lucide-react'
import Link from 'next/link'
import { useIdUser } from '@/store/useAuthStore'
import {  getAllUserPosts, deletePost, activatePost } from '@/services/post.service'
import { useMutation, useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'

export const PersonalListOfPost = () => {
  const useId =  useIdUser((value) => value.id);
  const userIdNumber = Number(useId);
  const queryData = useQuery({
    queryKey: ['post' + userIdNumber],
    queryFn: () => getAllUserPosts({ id: userIdNumber })
  });

  const mutation = useMutation({mutationFn: (id:number) => deletePost({id})});
  const activatePostMutation = useMutation({mutationFn: (id:number) => activatePost({id})});

  useEffect(() => {
    if(mutation.isSuccess || activatePostMutation.isSuccess){
      queryData.refetch();
    } 
  }, [mutation.isSuccess, activatePostMutation.isSuccess]);

  const deletPost = (id:number) => {
      mutation.mutate(id);
  }

  const deactivatePost = (id:number) => {
    activatePostMutation.mutate(id);
  }

  const list_of_posts = queryData.data?.data.data;
  console.log(queryData.data?.data.data);
  return (
    <>
     <section className='mx-auto w-full flex flex-col justify-center items-center p-8'>
        <div className="mb-6 flex justify-between items-center w-full max-w-7xl bg-white rounded-lg shadow-sm p-4">
          <span className='text-xl font-semibold text-gray-700'>My Blog Posts</span>
          <Link href='/personal-blogs/create' className='group flex items-center gap-2 bg-purple-700 hover:bg-purple-600 touch-manipulation active:bg-purple-800 transition-colors text-white font-semibold rounded-md px-4 py-2 shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-400'><CirclePlus className='inline-block mr-2 group-hover:scale-110 transition-transform' />Create New Post</Link>
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
                  {
                    Array.isArray(list_of_posts) && list_of_posts.length > 0 ? (
                        list_of_posts.map((post: {
                          id: number;
                          post_title: string;
                          category: string;
                          author: string;
                          is_active: boolean;
                        }, idx: number) => (
                        <tr key={post.id}>
                            <td className='border border-gray-300 font-bold p-2'>{post.post_title}</td>
                            <td className='border border-gray-300 p-2'>{post.category}</td>
                            <td className='border border-gray-300 p-2'>{post.author}</td>
                            {
                              post.is_active ?(
                                <td className='border border-gray-300 p-2'><span className='text-left text-sm px-4 py-1 bg-green-500 text-white w-fit inline rounded-full'>Published</span></td>
                              ): (
                                <td className='border border-gray-300 p-2'><span className='text-left text-sm px-4 py-1 bg-red-500 text-white w-fit inline rounded-full'>Inactive</span></td>
                              )
                            }
                            
                            <td className='border border-gray-300 p-2'>
                              <div className='flex gap-3'>
                                <Link href="#" className='p-2 rounded hover:bg-purple-100 touch-manipulation active:bg-purple-100 transition-colors' title="Edit">
                                  <Pencil className='inline-block text-purple-700 hover:scale-110 transition-transform' size={20} />
                                </Link>
                                <Link href={"/personal-blogs/"+post.id} className='p-2 rounded hover:bg-blue-100 touch-manipulation active:bg-blue-100 transition-colors' title="View">
                                  <Eye className='inline-block text-blue-700 hover:scale-110 transition-transform' size={20} />
                                </Link>
                                {
                                  post.is_active? (
                                    <button className='p-2 rounded hover:bg-red-100 touch-manipulation active:bg-red-100 transition-colors cursor-pointer' onClick={() => deletPost(post.id)} title="Delete">
                                       <Trash2 className='inline-block text-red-700 hover:scale-110 transition-transform' size={20} />
                                    </button>
                                  ): (
                                    <button className='p-2 rounded hover:bg-red-100 touch-manipulation active:bg-red-100 transition-colors cursor-pointer' onClick={() => deactivatePost(post.id)} title="Deactivate">
                                       <Check className='inline-block text-green-700 hover:scale-110 transition-transform' size={20} />
                                    </button>
                                  )
                                }
                                
                              </div>
                            </td>
                        </tr>
                      ))

                    ) : (
                      <tr>
                        <td colSpan={5} className="text-center p-4 text-gray-500">
                          No posts found.
                        </td>
                      </tr>
                    )
                  } 
                  
                </tbody>
              </table>
        </div>
     </section>
    </>
  )
}

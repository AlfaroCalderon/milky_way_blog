'use client'
import { useMutation } from '@tanstack/react-query'
import { Rocket } from 'lucide-react'
import { postData } from '@/services/user.service'
import { useForm } from 'react-hook-form'
import { useIdUser } from '@/store/useAuthStore'

type InputType = {
       posttitle:string,
       summary:string,
       category:string,
       author:string,
       content:string,
       img:string
}

export const CreationBlogForm = () => {
       
       const {register, handleSubmit, watch, formState:{errors}} = useForm<InputType>();
       const useId = useIdUser((value) => value.id );
       const mutation = useMutation({
              mutationFn: (data: InputType) => {
                     // Map InputType to BlogPost
                     const mappedData = {
                            user_id: useId!,
                            post_title: data.posttitle,
                            summary: data.summary,
                            category: data.category,
                            author: data.author,
                            main_content: data.content,
                            img_url: data.img
                     };
                     return postData({ data: mappedData });
              }
       });

       const onSubmit = (data: InputType) => {
              console.log(useId);
              mutation.mutate(data);
       }

  return (
    <>
    <section className='mx-auto w-full flex justify-center items-center p-8'>
         <form action="#" onSubmit={handleSubmit(onSubmit)} className='w-full max-w-3xl flex flex-col space-y-7 bg-gradient-to-br from-white to-blue-50 border border-gray-200 rounded-xl p-8 shadow-xl transition-all duration-300 ease-in-out hover:scale-103 hover:shadow-2xl backdrop-blur-sm'>
             <div className='flex flex-col items-center justify-center space-y-3'>
                    <span className='text-3xl font-bold'>Create New Post</span>
                    <span className='text-gray-600 text-center'>Create your next great post for the Milky Way Blog</span>
             </div>
             <div className='flex flex-col gap-2'>
                    <label htmlFor="posttitle" className='text-sm font-medium text-gray-700'>Post Title</label>       
                    <input type="text" 
                    {...register('posttitle', {
                     required:'The tittle of the post is required', 
                     maxLength: {value:60, message: 'The title can only be 60 characters long'}, 
                     minLength: {value:3, message: 'The title must be at least 3 characters'}})} id='posttitle' placeholder='Enter a descriptive title for your blog post' className='px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 w-full'/>
                     {errors.posttitle && <span className="text-red-500 text-xs">{errors.posttitle.message}</span>}
             </div>
        <div className='flex flex-col gap-2'>
                     <label htmlFor="summary" className='text-sm font-medium text-gray-700'>Summary (Max 150 chars)</label> 
                     <textarea
                            id="summary"
                            placeholder='A brief summary for the blog list card'
                            className='px-4 py-3 resize-none border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 w-full'
                            {...register('summary', {
                                   required: 'Summary is required',
                                   maxLength: { value: 150, message: 'Summary can be max 150 characters' },
                                   minLength: { value: 10, message: 'Summary must be at least 10 characters' }
                            })}
                     ></textarea>
                     {errors.summary && <span className="text-red-500 text-xs">{errors.summary.message}</span>}
        </div>
        <div className='grid grid-cols-1 gap-6 sm:grid-cols-1 md: md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2'>
                 <div className='flex flex-col space-y-2'>
                            <label htmlFor="category" className='text-sm font-medium text-gray-700'>Category</label>       
                            <select
                                   id="category"
                                   className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 w-full hover:border-blue-400 hover:bg-blue-50 text-gray-700 font-medium"
                                   defaultValue=""
                                   {...register('category', { required: 'Category is required' })}
                            >
                                   <option value="" disabled>
                                          Select a category
                                   </option>
                                   <option value="technology">Technology</option>
                                   <option value="science">Science</option>
                                   <option value="lifestyle">Lifestyle</option>
                                   <option value="travel">Travel</option>
                                   <option value="education">Education</option>
                            </select>
                            {errors.category && <span className="text-red-500 text-xs">{errors.category.message}</span>}
                 </div> 
                 <div className='flex flex-col gap-2'>
                            <label htmlFor="author" className='text-sm font-medium text-gray-700'>Author Name</label>       
                            <input
                                   type="text"
                                   id='author'
                                   placeholder='Your name'
                                   disabled
                                   className='px-4 cursor-not-allowed py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 w-full'
                                   {...register('author')}
                            />
                 </div>
        </div>
        <div className='flex flex-col gap-2'>
                     <label htmlFor="content" className='text-sm font-medium text-gray-700'>Main Content</label>       
                     <textarea
                            id="content"
                            rows={15}
                            placeholder='Start writing your article here using Markdown syntax: **bold**, *italics*, #headings, - lists'
                            className='px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 w-full resize-y'
                            {...register('content', {
                                   required: 'Content is required'
                            })}
                     ></textarea>
                     {errors.content && <span className="text-red-500 text-xs">{errors.content.message}</span>}
        </div>
        <div className='flex flex-col gap-2'>
                     <label htmlFor="img" className='text-sm font-medium text-gray-700'>Hero Image URL (Sits at the top of the post)</label>
                      <input
                            type="url"
                            id='img'
                            placeholder='https://example.com/image.jpg'
                            className='px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 w-full'
                            {...register('img', {
                                   required: false,
                                   pattern: {
                                          value: /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp|svg))$/i,
                                          message: 'Please enter a valid image URL'
                                   }
                            })}
                      />
                      {errors.img && <span className="text-red-500 text-xs">{errors.img.message}</span>}
        </div>
             <div>
              <button
                     type="submit"
                     className="group bg-purple-700 hover:bg-purple-600 text-white rounded-md px-6 py-4 flex items-center justify-center"
              >
                     <Rocket className="inline-block transition-all duration-300 ease-in-out group-hover:animate-bounce mr-2" size={20} />
                     Publish Post
              </button>
             </div>
         </form>
    </section>
    </>
  )
}

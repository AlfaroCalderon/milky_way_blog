'use client'
import { ArrowLeft, Calendar, UserRound } from 'lucide-react'
import React, { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { sileo } from 'sileo'
import { useForm } from 'react-hook-form'
import { useMutation, useQuery } from '@tanstack/react-query'
import { getUserPost, createComment, getPostComments } from '@/services/post.service'
import { Comment } from '@/types/blogPost.type'
import { formatDistanceToNow } from 'date-fns'


type Input = {
    comment: string
    user_id: number
    post_id: number
}

export const BlogCard = ({id}: {id:string}) => {

    const idPost = Number(id);
    const {register, handleSubmit, watch, formState:{errors}, reset, setValue} = useForm<Input>(); 
    const {data, isSuccess, isError} = useQuery({queryKey:['post'+idPost], queryFn: () => getUserPost({id: idPost})});
    const comments = useQuery({queryKey: ['comments'+idPost], queryFn: () => getPostComments({id: idPost}), refetchInterval: 10000, });

    console.log(comments.data?.data);
    const mutate = useMutation({mutationFn: (data:Comment) => {
        return createComment({comment:data})
    }});

    useEffect(() => {
        if(mutate.isSuccess){
                reset()
                sileo.success({
                     title: "The comment has been published",
                     fill: "black",
                     styles: {
                        title: "text-green"
                     }
                });
        }

        if(mutate.error){
            sileo.error({
                     title: "An error has arisen",
                     fill: "black",
                     styles: {
                            title: "text-red-600",
                     }
                })
        }

        setTimeout(() => {
            mutate.reset();
            comments.refetch();
        }, 7300)
    },[mutate.isSuccess, mutate.isError, reset])


     useEffect(() => {
        if (data?.data) {
        setValue('user_id', data.data.user_id);
        setValue('post_id', data.data.id);
        }
     }, [data, setValue]);

    const newComment = (data:Comment) => {
        const comment = data.comment;
        const user_id = Number(data.user_id);
        const post_id = Number(data.post_id);
        mutate.mutate({ comment, user_id, post_id });
    }

    console.log(data?.data.id);

  return (
    <>
    <section className="flex w-full flex-col items-center p-4">
        <article className="bg-white flex flex-col w-full max-w-7xl rounded-lg shadow-lg p-10 mb-5 space-y-3">
            <div className="w-full flex justify-center">
            {data?.data.img_url && (
                <Image
                src={data?.data.img_url ?? '/placeholder.png'}
                width={600}
                height={300}
                alt="img"
                className="rounded-lg object-cover w-full max-w-2xl h-auto"
            />
            )}
            </div>
            <span className='text-left px-6 py-2 inline-block w-fit text-white font-bold bg-green-600 rounded-full'>{data?.data.category?.toUpperCase()}</span>
            <span className='text-5xl font-bold inline-block'>{data?.data.post_title}</span>
            <hr className='text-gray-300' />
            <span className='flex items-center text-gray-500 space-x-5'>
            <span className='flex items-center'><UserRound className='inline-block mr-2' size={20} />{data?.data.author}</span>
            <span className='flex items-center'><Calendar className='inline-block mr-2' size={20} /> {data?.data.updated_at ? data.data.updated_at.substring(0, 10) : ''}</span>
            </span>
            <hr className='text-gray-300' />
            <p className="text-lg text-gray-700 break-words whitespace-pre-line w-full overflow-x-auto">
                {data?.data.main_content}
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
                    <form action="" method="post" onSubmit={handleSubmit(newComment)}>
                        <div>
                        <textarea
                        className="w-full border border-gray-300 rounded-md p-2 resize-none focus:outline-none focus:ring-2 focus:ring-green-500"
                        rows={3}
                        placeholder="Add a comment..."
                        {...register('comment', {
                            required: 'A comment is required',
                            minLength: { value: 5, message: 'Comment must be at least 5 characters' },
                            maxLength: { value: 150, message: 'Comment must be less than 500 characters' }
                        })}
                    />
                    {errors.comment && <span className="text-red-500 text-xs">{errors.comment.message}</span>}
                    </div>
                    <input type="hidden" {...register('user_id')} />
                    <input type="hidden" {...register('post_id')} />
                    <button type='submit' className="self-start bg-green-600 text-white px-4 py-2 rounded-md font-semibold">
                        Post Comment
                    </button>
                 </form> 
            </div>

            {
                comments.data?.data.map((comment:object, idx:number) => (
                    <div className="bg-gray-100 rounded-lg p-4 flex flex-col" key={idx}>
                        <div className="flex items-center space-x-3 mb-2">
                            <UserRound size={18} className="text-gray-600" />
                            <span className="font-semibold text-gray-800">{comment.user.name} {comment.user.lastname}</span>
                            <span className="text-xs text-gray-400">{formatDistanceToNow(comment.created_at , { addSuffix: true})}</span>
                        </div>
                        <p className="text-gray-700">{comment.comment}</p>
                    </div>
                ))
            }

            
        </div>
    </section>
    </>
  )
}

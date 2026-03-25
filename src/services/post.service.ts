import {ApiBlog} from '@/api/blog.api';
import { BlogPost } from '@/types/blogPost.type'

export const postData = async ({data}:{data:BlogPost}): Promise<BlogPost | boolean> => {
        const response = await ApiBlog.post('blog/management/create', data, {
            headers: {
                "X-API-Key": process.env.NEXT_PUBLIC_API_KEY,
                "Authorization": 'bearer '+localStorage.getItem('access_token')
            }
        });

        return response.data
}

export const getAllUserPosts = async ({id}:{id:number}):Promise<object> => {
    const reponse = await ApiBlog.get('blog/management/user_posts/'+id,{
        headers: {
           "X-API-Key": process.env.NEXT_PUBLIC_API_KEY,
           "Authorization": 'bearer '+localStorage.getItem('access_token') 
        }
    });

    return reponse.data;
}



export const deletePost = async ({id}:{id:number}): Promise<never|boolean> => {
    const response = await ApiBlog.delete('blog/management/delete/'+id,{
        headers: {
            "X-API-Key": process.env.NEXT_PUBLIC_API_KEY,
            "Authorization": 'bearer '+localStorage.getItem('access_token')
        }
    });

    return response.data
}
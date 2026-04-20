import {ApiBlog} from '@/api/blog.api';
import { BlogPost, Comment } from '@/types/blogPost.type'

export const postData = async ({data}:{data:BlogPost}): Promise<BlogPost | boolean> => {
        const response = await ApiBlog.post('blog/management/create', data, {
            headers: {
                "X-API-Key": process.env.NEXT_PUBLIC_API_KEY,
                "Authorization": 'bearer '+localStorage.getItem('access_token')
            }
        });

        return response.data
}


export const modifyPost = async ({data, id}:{data:BlogPost, id:number}): Promise<BlogPost|boolean> => {
    const response = await ApiBlog.patch('blog/management/update/'+id, data, {
        headers:{
            "X-API-Key": process.env.NEXT_PUBLIC_API_KEY,
            "Authorization": 'bearer '+localStorage.getItem('access_token')
        }
    })

    return response.data;
}


export const getAllUserPosts = async ({id}:{id:number}):Promise<object> => {
    const response = await ApiBlog.get('blog/management/user_posts/'+id,{
        headers: {
           "X-API-Key": process.env.NEXT_PUBLIC_API_KEY,
           "Authorization": 'bearer '+localStorage.getItem('access_token') 
        }
    });

    return response.data;
}


export const getAllPost = async ({search, per_page}:{search:string, per_page:number}):Promise<object> => {
    const response = await ApiBlog.get('blog/list?search='+search+'&per_page='+per_page, {
        headers:{
           "X-API-Key": process.env.NEXT_PUBLIC_API_KEY,
           "Authorization": 'bearer '+localStorage.getItem('access_token')
        }
    })

    return response.data;
}

export const getUserPost = async ({id}:{id:number}): Promise<never|BlogPost> => {
 const response = await ApiBlog.get('blog/'+id, {
    headers: {
        "X-API-Key": process.env.NEXT_PUBLIC_API_KEY,
        "Authorization": 'bearer '+localStorage.getItem('access_token') 
    }
 })

 return response.data;
}

export const createComment = async ({comment}:{comment:Comment}): Promise<Comment|boolean> => {
    const response = await ApiBlog.post('blog/management/comment', comment, {
        headers: {
            "X-API-Key": process.env.NEXT_PUBLIC_API_KEY,
            "Authorization": 'bearer '+localStorage.getItem('access_token')
        }
    })

    return response.data
}


export const getPostComments = async ({id}:{id:number}): Promise<Comment[]|boolean> => {
    const response = await ApiBlog.get('blog/management/comments/'+id, {
        headers: {
            "X-API-Key": process.env.NEXT_PUBLIC_API_KEY,
            "Authorization": 'bearer '+localStorage.getItem('access_token')
        }
    })

    return response.data;
}


export const activatePost = async({id}:{id:number}): Promise<never|boolean> => {
    const response = await ApiBlog.patch('blog/management/activate/'+id, {}, {
        headers: {
            "X-API-Key": process.env.NEXT_PUBLIC_API_KEY,
            "Authorization": 'bearer '+localStorage.getItem('access_token')
        }
    })

    return response.data
}


export const deletePost = async ({id}:{id:number}): Promise<never|boolean> => {
    const response = await ApiBlog.delete('blog/management/delete/'+id, {
        headers: {
            "X-API-Key": process.env.NEXT_PUBLIC_API_KEY,
            "Authorization": 'bearer '+localStorage.getItem('access_token')
        }
    });

    return response.data
}


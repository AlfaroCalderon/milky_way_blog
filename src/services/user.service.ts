import {ApiBlog} from '@/api/blog.api';
import { UserType, UserLogin } from '@/types/user.type';

export const createUser = async({data}: {data:UserType}): Promise<object|never> => {
        const response = await ApiBlog.post('user/signup', data, {
            headers: {
                "X-API-Key": process.env.NEXT_PUBLIC_API_KEY
            }
        });

        return response;
}

export const sigin = async ({data}:{data:UserLogin}): Promise<object|never> => {
        const response = await ApiBlog.post('user/signin', data, {
            headers: {
                "X-API-Key": process.env.NEXT_PUBLIC_API_KEY
            }
        });

        return response;
}


export const validateAccessToken = async (): Promise<boolean> => {
    const access_token = localStorage.getItem('access_token');

    if(!access_token){
        return false;
    }
    
    try {

        const response = await ApiBlog.post('auth_validation/access_token', {
            "access_token": access_token
        }, {
            headers:{
                "X-API-Key": process.env.NEXT_PUBLIC_API_KEY
            }
        });

        return response.status === 200;
        
    } catch (error: any) {
        return false;
    }
}

export const validateRefreshToken = async (): Promise<boolean | object> => {
    const refresh_token = localStorage.getItem('refresh_token');

    if(!refresh_token){
        return false;
    }

    try {
        const response = await ApiBlog.post('auth_validation/refresh_token',{
            "refresh_token": refresh_token
        },{
            headers: {
                "X-API-Key": process.env.NEXT_PUBLIC_API_KEY,
                    }
        });

        return response;
        
    } catch (error) {
        return false;
    }
}
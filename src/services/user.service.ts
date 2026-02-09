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
import {ApiBlog} from '@/api/blog.api';
import { UserType } from '@/types/user.type';

export const createUser = async({data}: {data:UserType}): Promise<object|never> => {
    try{
        const response = ApiBlog.post('user/signup', data, {
            headers: {
                "X-API-Key": process.env.NEXT_PUBLIC_API_KEY
            }
        });

        return response;

    }catch(error){
        throw new Error('An error has arisen :'+error);
    }
}
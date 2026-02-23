'use client'
import { useRouter } from 'next/navigation'
import { validateAccessToken } from '@/services/user.service'
import { useEffect, useState } from 'react'
import { useAuthStore } from '@/store/useAuthStore'

export const useAuthGuard = () => {
  const router = useRouter();
  const setLoggedIn = useAuthStore(state => state.setIsLogged)
  const [authCheked, setAuthChecked] = useState(false);

  useEffect(() => {

    const checkAuth = async () => {
        const access_token = localStorage.getItem('access_token');

        if(!access_token){
            setLoggedIn(false);
            router.replace('/signin');
            return;
        }

        const isvalid = await validateAccessToken();

        if(!isvalid){
            localStorage.removeItem('access_token');
            localStorage.removeItem("refresh_token");
            setLoggedIn(false);
            router.replace('/signin')
        }else{
            setLoggedIn(true);
        }

        setAuthChecked(true);
    };

    checkAuth();

  }, [router, setLoggedIn])

  return authCheked;
}

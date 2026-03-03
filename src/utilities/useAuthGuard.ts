'use client'
import { useRouter } from 'next/navigation'
import { validateAccessToken,validateRefreshToken } from '@/services/user.service'
import { useEffect, useState } from 'react'
import { useAuthStore } from '@/store/useAuthStore'

export const useAuthGuardLogged = () => {
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
            const newAccessToken = await validateRefreshToken();

            if(!newAccessToken){
              localStorage.removeItem('access_token');
              localStorage.removeItem("refresh_token");
              setLoggedIn(false);
              router.replace('/signin')
            }else{
              setLoggedIn(true);
              localStorage.setItem('access_token', newAccessToken?.data?.access_token)
            }
            
        }else{
            setLoggedIn(true);
        }

        setAuthChecked(true);
    };

    checkAuth();

  }, [router, setLoggedIn])

  return authCheked;
}

export const useAuthGuardNotLogged = () => {
  const setLoggedIn = useAuthStore((status) => (status.setIsLogged));
  const route = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      const access_token = localStorage.getItem('access_token');

      if (!access_token) {
        setLoggedIn(false);
        return;
      }

      const isvalid = await validateAccessToken();

      if (!isvalid) {
        
        const newAccessToken = await validateRefreshToken();

        if(!newAccessToken){
          localStorage.removeItem('access_token');
          localStorage.removeItem('refresh_token');
          setLoggedIn(false);
        }else{
          setLoggedIn(true);
          localStorage.setItem('access_token', newAccessToken?.data?.access_token)
        }
        
      } else {
        setLoggedIn(true);
      }
    };

    checkAuth();
  }, [route, setLoggedIn]);
}

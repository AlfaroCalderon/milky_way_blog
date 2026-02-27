'use client'
import { CreationBlogForm, LoadingSpinner } from '@/app/components'
import { useAuthGuardLogged } from '@/utilities/useAuthGuard';
import { useParams } from 'next/navigation';
import React from 'react'

const Page = () => {
   const params = useParams();
   const id = params.id as string; 
   const authChecked = useAuthGuardLogged();
        
    if(!authChecked){
       return  <LoadingSpinner />
    }
    
  return (
    <>
    <CreationBlogForm />
    </>
  )
}

export default Page
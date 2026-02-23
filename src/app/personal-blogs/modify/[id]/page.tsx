'use client'
import { CreationBlogForm, LoadingSpinner } from '@/app/components'
import { useAuthGuard } from '@/utilities/useAuthGuard';
import { useParams } from 'next/navigation';
import React from 'react'

const Page = () => {
   const params = useParams();
   const id = params.id as string; 
   const authChecked = useAuthGuard();
        
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
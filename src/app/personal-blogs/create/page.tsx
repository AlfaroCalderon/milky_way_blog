'use client'
import { CreationBlogForm, LoadingSpinner } from '@/app/components'
import { useAuthGuard } from '@/utilities/useAuthGuard';
import React from 'react'

const Page = () => {
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
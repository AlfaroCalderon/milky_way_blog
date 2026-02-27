'use client'
import { CreationBlogForm, LoadingSpinner } from '@/app/components'
import { useAuthGuardLogged } from '@/utilities/useAuthGuard';
import React from 'react'

const Page = () => {
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
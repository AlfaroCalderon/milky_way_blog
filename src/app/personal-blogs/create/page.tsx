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
    <CreationBlogForm action={1} id={0}/>
    </>
  )
}

export default Page
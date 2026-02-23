'use client'
import React from 'react'
import { LoadingSpinner, PersonalListOfPost } from '../components'
import { useAuthGuard } from "@/utilities/useAuthGuard"

const Page = () => {
  const authChecked = useAuthGuard();
      
  if(!authChecked){
     return  <LoadingSpinner />
  }
  return (
    <>
    <PersonalListOfPost />
    </>
  )
}

export default Page
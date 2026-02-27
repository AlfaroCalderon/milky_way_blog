'use client'
import React from 'react'
import { LoadingSpinner, PersonalListOfPost } from '../components'
import { useAuthGuardLogged } from "@/utilities/useAuthGuard"

const Page = () => {
  const authChecked = useAuthGuardLogged();
      
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
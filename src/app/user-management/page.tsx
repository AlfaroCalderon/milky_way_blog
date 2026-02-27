'use client'
import React from 'react'
import {  LoadingSpinner, UserManagement } from '../components'
import { useAuthGuardLogged } from '@/utilities/useAuthGuard'

const Page = () => {
  const authChecked = useAuthGuardLogged();
          
      if(!authChecked){
         return  <LoadingSpinner />
      }

  return (
    <UserManagement />
  )
}

export default Page
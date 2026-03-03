import React from 'react'
import { Signup } from '../components'
import { Toaster } from 'sileo'

const page = () => {
  return (
    <>
    <Toaster position='top-right' offset={{ top: 20, right: 16 }} />
    <Signup />
    </>
  )
}

export default page
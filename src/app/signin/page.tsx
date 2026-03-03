import React from 'react'
import { Signin } from '../components'
import { Toaster } from 'sileo';

const page = () => {
  return (
    <>
    <Toaster position='top-right' offset={{ top: 20, right: 16 }} />
    <Signin />
    </>
  )
}

export default page
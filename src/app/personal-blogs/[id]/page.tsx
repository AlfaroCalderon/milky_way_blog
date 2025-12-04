import React from 'react'
import { BlogCard } from '@/app/components'

const page = async ({params}:{ params:Promise<{id:string}>}) => {

    const {id} = await params;

  return (
    <>
    <BlogCard id={id} />
    </>
  )
}

export default page
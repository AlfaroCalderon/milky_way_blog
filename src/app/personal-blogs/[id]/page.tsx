'use client'
import React from 'react'
import { BlogCard, LoadingSpinner } from '@/app/components'
import { useAuthGuardNotLogged  } from '@/utilities/useAuthGuard'
import { useParams } from 'next/navigation'

const Page = () => {
    const params = useParams();
    const id = params.id as string;
    const authChecked = useAuthGuardNotLogged();

        if (!authChecked) {
            return <LoadingSpinner />;
        }

    return (
        <>
            <BlogCard  act={2} id={id}/>
        </>
    );
}

export default Page;
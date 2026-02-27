'use client'
import React from 'react'
import { BlogCard, LoadingSpinner } from '@/app/components'
import { useAuthGuardLogged  } from '@/utilities/useAuthGuard'
import { useParams } from 'next/navigation'

const Page = () => {
    const params = useParams();
    const id = params.id as string;
    const authChecked = useAuthGuardLogged();

    if (!authChecked) {
        return <LoadingSpinner />;
    }

    return (
        <>
            <BlogCard id={id} />
        </>
    );
}

export default Page;
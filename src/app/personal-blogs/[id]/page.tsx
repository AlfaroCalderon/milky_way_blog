'use client'
import React from 'react'
import { BlogCard, LoadingSpinner } from '@/app/components'
import { useAuthGuard } from '@/utilities/useAuthGuard'
import { useParams } from 'next/navigation'

const Page = () => {
    const params = useParams();
    const id = params.id as string;
    const authChecked = useAuthGuard();

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
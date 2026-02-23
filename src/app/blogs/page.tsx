'use client'
import { BlogList, LoadingSpinner } from "@/app/components";
import { useAuthGuard } from "@/utilities/useAuthGuard"

const Page = () => {
    return(
       <>
       <BlogList />
       </>
    )
}

export default Page;
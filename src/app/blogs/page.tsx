'use client'
import { BlogList } from "@/app/components";
import { useAuthGuard } from "@/utilities/useAuthGuard"

const Page = () => {
    useAuthGuard();
    return(
       <>
       <BlogList />
       </>
    )
}

export default Page;
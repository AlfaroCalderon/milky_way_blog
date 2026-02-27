'use client'
import { BlogList, LoadingSpinner } from "@/app/components";
import { useAuthGuardNotLogged } from "@/utilities/useAuthGuard"

const Page = () => {
    useAuthGuardNotLogged();
    return(
       <>
       <BlogList />
       </>
    )
}

export default Page;
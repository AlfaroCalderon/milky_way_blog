'use client'
import { BlogCard } from "@/app/components";
import { useAuthGuardNotLogged } from "@/utilities/useAuthGuard"
import { useParams } from "next/navigation";

const Page = () => {
    useAuthGuardNotLogged();
    const params = useParams();
    const id = params.id as string;
    return(
       <>
       <BlogCard id={id} />
       </>
    )
}

export default Page;
import Image from "next/image";
import { Signin } from "./components /Signin/Signin";
import { Signup } from "./components /Signup/Signup";
import { ForgotPassword } from "./components /ForgotPassword/ForgotPassword";
import { BlogList } from "./components /BlogList/BlogList";
import { BlogCard } from "./components /BlogCard/BlogCard";

export default function Home() {
  return (
    <>
    <BlogCard />
    </>
  );
}

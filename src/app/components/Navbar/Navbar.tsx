'use client'
import { LogIn, LogOut, Menu, MessageSquareText, MessagesSquare, SmilePlus, UserRoundPen, UsersRound } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export const Navbar = () => {

  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {

    const menuItems = document.getElementsByClassName("menu-items");

    if(!menuActive){
        setMenuActive(true);
        Array.from(menuItems).forEach(item => item.classList.remove("hidden"));
    }else{
        setMenuActive(false);
        Array.from(menuItems).forEach(item => item.classList.add("hidden"));
    }
  } 

  
  return (
    <nav className="flex flex-col bg-white lg:flex-row lg:justify-between lg:items-center border-gray-100 sticky top-0 z-50 p-5 shadow-md">
        <span className='flex justify-between'>
        <Link href={'/'} className='flex items-center text-xl font-bold text-gray-800 hover:text-blue-600 transition-colors duration-300 ease-in-out'>
          <Image src="/milkyway.png" alt="Milky Way" width={40} height={40} className="mr-3 rounded-full shadow-lg hover:scale-110 transition-transform duration-300" />
          <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent text-2xl">Milky Way Blog</span>
        </Link>
        <Menu className='cursor-pointer lg:hidden' size={35} onClick={toggleMenu} />
        </span>
        <span className='menu-items hidden lg:flex lg:flex-row lg:space-x-4'>
        <Link href={'/blogs'} className='block py-3 px-7 mb-2 mt-2 lg:mb-0 lg:mt-0 text-blue-600  hover:bg-blue-500 hover:text-white rounded-md hover:scale-105 hover:shadow-md transition-all duration-300 ease-in-out touch-manipulation active:scale-95 active:bg-blue-200' ><MessagesSquare className='inline-block mr-3'/>Blogs</Link>
        <Link href={'/personal-blogs'} className='block py-3 px-7 mb-2 lg:mb-0 text-indigo-600  hover:bg-indigo-500 hover:text-white rounded-md hover:scale-105 hover:shadow-md transition-all duration-300 ease-in-out touch-manipulation active:scale-95 active:bg-indigo-200'><MessageSquareText className='inline-block mr-3'/>My Posts</Link>
        {/*<Link href={'#'} className='block py-3 px-7 mb-2 lg:mb-0 text-purple-600 hover:bg-purple-500 hover:text-white rounded-md hover:scale-105 hover:shadow-md transition-all duration-300 ease-in-out touch-manipulation active:scale-95 active:bg-purple-200'><UserRoundPen className='inline-block mr-3'/>Profile</Link>*/}
        <Link href={'/user-management'} className='block py-3 px-7 mb-2 lg:mb-0 text-orange-600  hover:bg-orange-500 hover:text-white rounded-md hover:scale-105 hover:shadow-md transition-all duration-300 ease-in-out touch-manipulation active:scale-95 active:bg-orange-200'><UsersRound className='inline-block mr-3'/>Users Management</Link>
        </span>
        <span className='menu-items hidden lg:flex lg:flex-row lg:space-x-4'>
        <Link href={'/signin'} className='block py-3 px-7 mb-2 lg:mb-0 text-blue-600  hover:bg-blue-500 hover:text-white rounded-md hover:scale-105 hover:shadow-md transition-all duration-300 ease-in-out touch-manipulation active:scale-95 active:bg-blue-200' ><LogIn className='inline-block mr-3'/>Sign in</Link>
        <Link href={'/signup'} className='block py-3 px-7 mb-2 lg:mb-0 text-emerald-600 hover:bg-emerald-500 hover:text-white rounded-md hover:scale-105 hover:shadow-md transition-all duration-300 ease-in-out touch-manipulation active:scale-95 active:bg-emerald-200'><SmilePlus className='inline-block mr-3'/>Sign Up</Link>
        <Link href={'/'} className='block py-3 px-7 mb-2 lg:mb-0 text-red-600 hover:bg-red-500 hover:text-white rounded-md hover:scale-105 hover:shadow-md transition-all duration-300 ease-in-out touch-manipulation active:scale-95 active:bg-red-200'><LogOut className='inline-block mr-3'/>Log out</Link>
        </span>
    </nav>
  )
}

"use client"
import React from 'react'
import Link from "next/link";
import { FaHeart } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa";
import { useStoreFavorite } from './../../store/favorite.store';
  import {
    SignInButton,
    SignUpButton,
    SignedIn,
    SignedOut,
    UserButton,
  } from '@clerk/nextjs';


export default function NavbarComponent() {
  const {selectedFavoriteIds} = useStoreFavorite()
  const FavoriteSize =selectedFavoriteIds.length
  return (
    <div>
      <nav className="flex justify-between  items-center bg-gray-800 text-white w-full p-4 fixed z-5">
      <h1 className="font-bold text-4xl"> POKEMON </h1>
      <ul className="flex gap-4">
        <div className="flex justify-center items-center relative ">
           <div><FaHeart size={25} /></div>
           <div className="bg-red-700 rounded-full w-4 h-4 absolute bottom-0 right-1 ">{FavoriteSize}</div>
        </div>
        <div className="flex justify-center items-center relative ">
           <div><FaCartArrowDown  size={25} /></div>
           <div className="bg-red-700 rounded-full w-4 h-4 absolute bottom-0 right-1 ">{FavoriteSize}</div>
        </div>

         <li className="cursor-pointer hover:text-gray-400"> <Link href="/"> Home</Link> </li>
         <li className="cursor-pointer hover:text-gray-400">About</li>
        <li className="cursor-pointer hover:text-gray-400"> <Link href="/contact">Contact</Link></li>
        <SignedOut>
              <SignInButton />
              <SignUpButton />
            </SignedOut>
           <SignedIn>
              <UserButton />
            </SignedIn>

      </ul>
      </nav>
    </div>
  )
}
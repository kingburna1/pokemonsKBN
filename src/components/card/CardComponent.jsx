"use client"
import React from 'react'
import { FaHeart } from "react-icons/fa";
import { Image } from 'next/image';
import Link from 'next/link';
import { useStoreFavorite } from './../../store/favorite.store';


export default function CardComponent({ id, Image, name, type, hp, attack}) {
  const {selectedFavoriteIds,toggleHeartIcon} = useStoreFavorite()
  let isSelected = selectedFavoriteIds.includes(id)
  
  
  return (
    <div>
        <div className="border-2 relative w-[300px] h-[460px] overflow-hidden border-gray-200  rounded-md bg-gray-100">
                        {/* image area */}
                        <Link href={`/pokemon/${id}`} className="flex overflow-hidden justify-center items-center w-full bg-gray-200">
                        <img src={Image} width="100%" height="100%"/>
                        </Link>
                        {/* content area */}
                        <div className="mt-4 p-4">
                         <h1 className="text-2xl font-bold ">{ name } </h1>
                         {isSelected?  <FaHeart onClick={()=>toggleHeartIcon (id)} size={25} color="red" className="absolute top-2 right-2 cursor-pointer"/>:<FaHeart onClick={()=>toggleHeartIcon (id)} size={25} color="white" className="absolute top-2 right-2 cursor-pointer"/>}
                           
                            
                            <div className="bg-amber-900 text-white py-3 px-5 rounded-full flex items-center justify-center absolute top-2 left-2"><h3> { type }</h3></div>
                            {isSelected?   <button onClick = {() => toggleHeartIcon(id)} className="mt-4 bg-purple-500 text-white py-2 px-4 rounded-md w-full cursor-pointer hover:bg-purple-400 transition duration-300">added</button> :
                     <button onClick = {() => toggleHeartIcon(id)} className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md w-full cursor-pointer hover:bg-blue-400 transition duration-300">add to card</button> }
                        </div>
             </div>
    </div>
  )
}

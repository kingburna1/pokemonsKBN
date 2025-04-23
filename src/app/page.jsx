"use client";
import Image from "next/image";
import { useState } from "react";
import CardComponent from './../components/card/CardComponent';
import NavbarComponent from './../components/navbar/NavbarComponent';
import HeroComponent from './../components/hero/HeroComponent';
import { Pokemons, Types } from './../Utils/data';
import { type } from "os";






const Page = () => {

  
  console.log(Pokemons);
  const [searchTem,setSearchTem] = useState('');
  const [selectedType, setSelectedType] = useState(null);
  let searchResult = searchTem.length > 0  ? Pokemons.filter(item => item.name.toLowerCase().includes(searchTem.toLowerCase())) : Pokemons ;
 
   
    // onclick function
   let filteredResult = selectedType ? searchResult.filter(item => item.type.toLowerCase() === selectedType.toLowerCase ()) :searchResult;
   searchResult = filteredResult;

    return (

       

    <> 
          <div className="flex flex-col ">
            {/* navbar */}
         <NavbarComponent />  

         <main className="flex-grow">
          {/* hero section */}
           <HeroComponent/>
          
                <div className="">
              <div className="flex justify-center items-center ">
              <input value={searchTem} onChange={(e) =>setSearchTem(e.target.value)} type="search" placeholder="search for a poke man" className="m-5 bg-gray-200 py-3 px-5 rounded-lg outline-none " />
              <div className="flex gap-3" >
                <button onClick={() => setSelectedType(null) } className='bg-blue-500 cursor-pointer text-white px-4 py-2 rounded-2xl  hover:bg-gray-600 transition duration-300' >All</button>
              {Types.map((item,index) => 
                <button key={index} onClick={() => setSelectedType (item.name)} className='bg-blue-500 cursor-pointer text-white px-4 py-2 rounded-2xl  hover:bg-gray-600 focus:bg-gray-600 transition duration-300'> {item.name} </button>
            )}
              </div>
                     
              </div>
             

              <div className="  ">

               <div className="flex flex-wrap  justify-center items-center gap-5">

                { searchResult.map((item,index) =><CardComponent   key={index}id={item.id} Image={item.image} type={item.type} name={item.name}  />) }


            </div>
            
      </div>
      </div>
      </main>

 

  
  </div>

  
</>

)
}


export default Page; 


import React from 'react'
import { Pokemons } from '../../../Utils/data';
import NavbarComponent from './../../../components/navbar/NavbarComponent';
import FooterComponent from './../../../components/footer/FooterComponent';
import HeroComponent from './../../../components/hero/HeroComponent';
import AddcontComponent from '../../../components/addcont/AddcontComponent';


const Page = async ({ params }) => {
  const {id} = await params;

  // Find Pokémon based on its id
  const pokedata = Pokemons.find(item => item.id == id);

  
  return (
    <>
    <NavbarComponent/>
    <HeroComponent/>
    <div className='w-full flex  items-center justify-between px-20 bg-gray-50'>

    <div>
      <img src={pokedata.image} alt="photo" />
    
       </div>

    <div className="flex flex-col justify-center items-center ">
    <h1 className="text-[50px] ml-2"> Hey i am {pokedata.name}</h1>
    <h3 className="text-[30px] ml-2"> my type is {pokedata.type}</h3>
      <h1 className="text-[30px] "> my attack is {pokedata.attack[0].name}</h1>
      <h3 className="text-[30px]"> my attack damage is {pokedata.attack[0].damage}</h3>
    </div>

    </div>
    <AddcontComponent/>
    {/* <FooterComponent/> */}
    </>

  );
}

export default Page;
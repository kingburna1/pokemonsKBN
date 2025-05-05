

import React from 'react'
import { Pokemons } from '../../../Utils/data';
import NavbarComponent from './../../../components/navbar/NavbarComponent';
import FooterComponent from './../../../components/footer/FooterComponent';
import HeroComponent from './../../../components/hero/HeroComponent';
import AddcontComponent from '../../../components/addcont/AddcontComponent';
import { Image } from 'next/image';

export async function generateMetadata({ params }) {
  const { id } = params;
  const pokedata = Pokemons.find(item => item.id == id);

  if (!pokedata) {
    return {
      title: "Pokémon Not Found",
    };
  }

  return {
    title: `${pokedata.name} - Pokémon Explorer`,
    description: `Discover information about ${pokedata.name}, including stats, types, and more.`,
    icons: {
      icon: pokedata.image,
      apple: pokedata.image,
      shortcut: pokedata.image,
    },
    openGraph: {
      title: `${pokedata.name} - Pokémon Explorer`,
      description: `Explore detailed information about ${pokedata.name} in our modern Pokédex.`,
      url: `${pokedata.image}`,
      siteName: "Pokémon Explorer",
      images: [
        {
          url: pokedata.image,
          width: 1200,
          height: 630,
          alt: `${pokedata.name} Pokémon`,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${pokedata.name} - Pokémon Explorer`,
      description: `Explore ${pokedata.name} on Pokémon Explorer powered by PokéAPI.`,
      images: [pokedata.image],
    },
  };
}

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
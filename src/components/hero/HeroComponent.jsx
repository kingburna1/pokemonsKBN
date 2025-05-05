import React from 'react'


export default function HeroComponent() {
  return (
    <div className="flex  flex-wrap justify-between items-center h-fit bg-gray-100 p-4 px-20 gap-5 pt-15 text-black-900">
        <div className="flex flex-col justify-center gap-4">
        <h1 className=" flex flex-wrap font-bold text-3xl text-black-900"> Welcome to pokemon home of lies and lack of home training destruction and desobidience never you tell us what to do</h1>
        <p> We are the best in what we do</p>
        <p> We are the best in what we do</p>
        <p>you must buy even if you don't want to </p>
        </div>

        <div className="flex flex-col gap-4 mt-4">
        <div>
                <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png" alt="photo of man " />
            </div>
            
            <div className="flex">
            <button className="bg-blue-500 text-white py-2 px-2 w-30 rounded-md cursor-pointer hover:bg-blue-600 transition duration-300 m-3">Get Started</button>
            <button className="bg-gray-500 text-white py-2 px-2 w-30 rounded-md cursor-pointer hover:bg-gray-600 transition duration-300 m-3">Learn More</button>

            </div>
           
           </div>
     

    </div>
  )
}

import React from 'react'

export default function FooterComponent() {
  return (
    
    <footer className="flex   bg-gray-800 text-white p-4 w-full z-5  bottom-0 mt-10"> 


       <div className="flex w-full justify-between  p-4 flex-wrap">

        <div className="bg-gray-800 text-white p-4 ">
            <p className="text-sm">© 2023 Pokemon. All rights reserved.</p>
            <p className="text-sm">Created by Your Name</p>
        </div>

    <div className="bg-gray-700 text-white p-2 ">
            <p className="text-sm">Follow us on social media</p>
            <div className="flex justify-center gap-4 mt-2">
                <a href="#" className="text-sm">Facebook</a>
                <a href="#" className="text-sm">Twitter</a>
                <a href="#" className="text-sm">Instagram</a>
            </div>
            </div>

            </div>


    </footer>
   
  
  )
}

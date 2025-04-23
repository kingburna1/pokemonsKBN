import React from 'react'
import { useRef } from 'react';
import { FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { ToastContainer, toast } from 'react-toastify';
import { toastConfig } from '../../Utils/constanst';
import  { useState } from 'react';

import emailjs from '@emailjs/browser';

 


export default function FormComponent() {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  // const notify = () => toast('Wow so easy !',toastConfig);
  

   

  const handleSendEmail = () => {
    if (isSubmitting) return;
    setIsSubmitting(true); 
    emailjs
    .sendForm('service_055paa4', 'template_dkgkx89', form.current, {
      publicKey: 'JyuGqUQDro8qUYCNW',
    })
    .then(
      () => {
        toast.success('email sent successful!',toastConfig)
        form.current.reset(); 
          setIsSubmitting(false);
      },
      (error) => { 
        toast.error('Ooopps something went wrong!',toastConfig)
        setIsSubmitting(false);
      },
    );
    }
  return (
    <div>
        <ToastContainer />
        <div>
                       {/* login form */}
                        <div className="flex gap-5 mt-2 px-20 bg-gray-100">
                          <form ref={form} >
                       <div className=" bg-gray-200  mt-3 p-5 mb-3">
                         
                       <h1 className="text-center text-3xl mb-2">create an account</h1>
                       <p className="text-center font-bold"> signup and get 20% bonnus on your first archivement</p>
       
                       <label htmlFor="" className="text-xl font-bold ">name</label>
                       <input name="name" type="text" placeholder="enter name " className=" border-2 w-full h-10 rounded-3xl p-3" required/>
       
                       <label htmlFor="" className="text-xl font-bold ">email</label>
                       <input name='email' type="text"  placeholder="burna@gmail.com" className=" border-2 w-full h-10 rounded-3xl p-3" required />
       
                       <label htmlFor="" className="text-xl font-bold "> password </label>
                       <input name="password" type="text" placeholder="enter yor password" className=" border-2 w-full h-10 rounded-3xl p-3" required />
                        <label htmlFor="" className="mt-2">Enter your security code</label>
                       <textarea  name="message" type="text" placeholder="enter your private message" className="border-2 w-full mt-2 h-25 p-3 " required></textarea>
                       {/* <button onClick={ handleSendEmail}
                        type="button" 
                        className=" border-2 w-full h-10 mt-3 rounded-3xl bg-blue-300 hover:bg-blue-400 transition duration-300 focus:bg-gray-600 "
                      >submit</button> */}
                         <button
                onClick={handleSendEmail}
                type="button"
                className={`border-2 w-full h-10 mt-3 rounded-3xl ${
                  isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-blue-300 hover:bg-blue-400 transition duration-300 focus:bg-gray-600'
                }`}
                disabled={isSubmitting} // Disable button during submission
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
                       <div className="flex justify-between mx-3 gap-3">
                           <div  className=" border-2 w-full h-10 mt-3 rounded-3xl flex justify-center items-center">
                           <FaApple size={25}/>
       
                          
                           <button > apple</button>
                           </div>
                           
                           
                              <div  className=" border-2 w-full h-10 mt-3 rounded-3xl flex justify-center items-center">
                              <FcGoogle size={25} />
                              <button>google</button>
                              </div>
       
                          
                       </div>
                       </div>
                       </form>
                       <div> 
                           <div className="p-5"><img src="https://api.time.com/wp-content/uploads/2024/08/australia-disconnect-law-office-call.jpg" alt="" /></div>
                       </div>
                       </div>
                        
                      
                   </div>
    </div>
  )
}

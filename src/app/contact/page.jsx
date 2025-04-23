"use client"
import {useState} from "react";
import NavbarComponent from './../../components/navbar/NavbarComponent';
import { FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

import FormComponent from "../../components/form/FormComponent";
import { ToastContainer, toast } from 'react-toastify';









const Page = () => {
    // let number = 15
    const notify = () => toast('Wow so easy !');
    const [number, setNumber] = useState(0)
    const [textEntered, setTextEntered] = useState("")
    const [hasSubmited, setHasSubmited] = useState(false)


    const increment = () => {
        setNumber(number+1)
    }

    const decrement = () => {
        setNumber(number >0 ? number-1 : 0)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        
    const inputValue = e.target.elements[0].value;
        setHasSubmited(inputValue); "submited"
        
    }


    // date function
    var weekday = ["sun","mon","tue","wed","thu","fri","sat"];
    var day = new Date().getDay();
    var weekday = day[day];
    // var date = new FullYearDate();
    // FullYearDate({ date});
    return (
        <> 
        <div className="w-full ">
        <NavbarComponent />
        <ToastContainer />
          <div className="w-full ">
        <div className="flex flex-col justify-center  items-center ">
            {/* <h1 key={index}> {dateStr}</h1> */}
            <h1 className="text-6xl font-bold mt-30"> the day of today is :{day ==="mon" ? "mon" :"not mon"} </h1>
            <h1 className="text-6xl font-bold">{number}</h1>
        <div className="flex gap-4 mt-8">
            <button onClick={increment} className="bg-purple-800 text-white text-md p-3 cursor-pointer">Increment</button>
            {number > 0 && (
            <button onClick={decrement} className="bg-pink-800 text-white text-md p-3 cursor-pointer">Decrement</button>
            )}
            </div>
            <form onSubmit={handleSubmit}>
                <div className="flex gap-5">
                <input value={textEntered} onChange={(e) => setTextEntered (e.target.value)} className="px-5 py-3 bg-gray-200 w-[750px] font-bold  mt-2 mb-5 h-20" type="text" placeholder="enter a value " />
                <button className="bg-green-700 p-1 text-amber-50 cursor-pointer px-5 py-3 w-[100px] h-[80px] mt-2 ">submit</button>
                </div>
               
                <h1 className="text-center text-2xl">{hasSubmited}</h1>
            </form>
           
            <FormComponent/>
            
        </div>
        </div>
       
          {/* <FooterComponent/> */}
          </div>
        </>
    )
}

export default Page;

//{day == "wed"? "wed":"not wed"}
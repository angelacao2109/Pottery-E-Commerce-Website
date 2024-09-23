import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { IoIosArrowDown } from "react-icons/io";

const titleHeader : string ="font-cormorant-SC text-5xl flex justify-center p-10 text-center " 
const subtitleHeader : string ="font-cormorant-SC text-2xl flex justify-center p-5 font-light"
const pText : string ="font-cormorant text-xl flex justify-center  p-2 font-thin leading-relaxed text-justify max-w-4xl  "
const FAQ: React.FC = () => {
   
return(
    <>
    <Header/>
    <h1 className="font-crimson flex justify-center font-bold text-6xl p-5 bg-sage border-black border-x-2 border-b-2">Frequently Asked Questions</h1>

    <h2 className={titleHeader}> Care & Materials </h2>

    <div className="flex items-center justify-center flex-row">
        
    <h4 className={subtitleHeader}>Are your pieces dishwasher and microwave safe?</h4>
    <button className="pb-5 pl-20">
    <span className=" ml-4 text-l  ">
    <IoIosArrowDown />
    </span>
    </button>
   
    </div>

    <div className="flex justify-center text-center mt-4">
        <p className={pText}>Many of my pieces are dishwasher and microwave safe, but I recommend handwashing to preserve their longevity. Please check each product description for specific care instructions.</p>
    </div>

    <hr/> 


    <h2 className={titleHeader}> Shipping & Returns </h2>
    <h2 className={titleHeader}> Trade & Wholesale </h2>
    <h2 className={titleHeader}> Payments & Gift Options </h2>
    <h2 className={titleHeader}> Account & Newsletter </h2>
    

</>

);
}

export default FAQ;
import React from "react";
import { HiOutlineArrowRightCircle } from "react-icons/hi2";
import { MdOutlineEmail } from "react-icons/md";


const Footer: React.FC  = () => {
    return (
        <>
     
        <footer className="bg-[#5C95BC] text-white px-4 py-3 fixed bottom-0 left-0 right-0 w-full z-50 max-h-24 font-crimson ">
        <hr className="border-solid  border-black -mt-3 absolute left-0 w-full" />

            
            <div className="flex items-baseline">
                <h3 className="text-lg font-light mb-2 pl-1">Stay informed about our newest collections and updates!</h3>
                <ul className="flex gap-8 justify-end pr-5 text-lg flex-1 ml-40">
                    <li>  
                    <span className="inline-block mr-2 -mb-1">
                            <MdOutlineEmail />
                        </span>
                        Email: <a className="text-white" href="mailto:Info@PotteryByAngela.com">Info@PotteryByAngela.com</a></li>
                    <li><a className="text-white" href="/shippingandreturns">Shipping & Returns</a></li>
                    <li><a className="text-white" href="/faq">FAQ</a></li>
                    <li><a className="text-white" href="/contact">Contact</a></li>
                </ul>
            </div>

            <div className="flex items-center border border-black rounded-full p-1 bg-white max-w-[200px]">
                <input 
                    type="email" 
                    id="email" 
                    placeholder="EMAIL ADDRESS" 
                    className="border-none outline-none  text-black focus:outline-none focus:ring-0 flex-1 text-sm px-3 py-2 rounded-full font-crimson max-w-[150px] h-[30px]" 
                    required 
                />
                <button type="submit" className="bg-transparent border-none cursor-pointer flex items-center justify-center pl-4">
                    <span className="text-black w-6 h-6 text-2xl " >
                    <HiOutlineArrowRightCircle />
                    </span>
                </button>
            </div>

            <p className="text-lg font-semibold pl-[1275px] -mt-5"> &copy; {new Date().getFullYear()} Pottery By Angela</p>
        </footer>
        </>
    );
}

export default Footer;

import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { IoSearchSharp } from "react-icons/io5";
import { NavLink } from "react-router-dom";
const buttonStyles: string = "text-black hover:underline hover:bg-darker-button-pink transition duration-300 text-2xl bg-button-pink rounded-lg px-2 border border-black p-1";

const Header: React.FC = () => {
return (
    <>
   <header className="flex justify-between items-center text-black p-4">

   <div className="font-crimson">
  <h1 className="font-semibold text-[3.55rem]">Pottery By Angela</h1>
  </div>
  <nav className=" flex justify-end pr-7">
  <ul className="flex space-x-8 text-lg  font-crimson">
      <li><NavLink to="/" className={buttonStyles} >Home</NavLink></li>
      <li><NavLink to="/about" className={buttonStyles}>About</NavLink></li>
      <li><NavLink to="/faq" className={buttonStyles}>FAQ</NavLink></li>
      <li><NavLink to="/contact" className={buttonStyles}>Contact</NavLink></li>
      <li><NavLink to="/account" className={buttonStyles}>Account</NavLink></li>
      <li><button className="img-li text-3xl cursor-pointer" ><IoSearchSharp /> </button></li>
<li><button className="img-li text-3xl cursor-pointer" ><FiShoppingCart /> </button></li>

    </ul>
  </nav>
 
</header>
<hr className="border-black border-[1.5px]" />

    </>
    
);
}

export default Header;
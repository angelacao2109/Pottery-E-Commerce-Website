import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { IoSearchSharp } from "react-icons/io5";
const buttonStyles: string = "text-black hover:underline hover:bg-darker-button-pink transition duration-300 text-2xl bg-button-pink rounded-lg px-2 border border-black p-1";

const Header: React.FC = () => {
return (
    <>
   <header className="flex justify-between items-center text-black p-4">

   <div className="font-crimson">
  <h1 className="font-semibold text-[3.55rem]">Pottery by Angela</h1>
  </div>
  <nav className=" flex justify-end pr-7">
  <ul className="flex space-x-8 text-lg  font-crimson">
      <li><a href="/#" className={buttonStyles} >Home</a></li>
      <li><a href="/about" className={buttonStyles}>About</a></li>
      <li><a href="/faq" className={buttonStyles}>FAQ</a></li>
      <li><a href="/contact" className={buttonStyles}>Contact</a></li>
      <li><a href="/account" className={buttonStyles}>Account</a></li>
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
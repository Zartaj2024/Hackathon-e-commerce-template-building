import React from "react";
import Link from "next/link";
import Logo from "../components/Bandage.png";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
    <div className="bg-white flex flex-row justify-center items-center pb-3 pt-3 font-bold p-3 h-[100px] ">
            <div>
            <img src={Logo.src} alt="" className="w-10 h-10 "/>
            </div>
            <div>
                <Link href={"/"}>Home</Link>
                <Link href={"/shop"}>Shop</Link>
                <Link href={"/about"}>About</Link>
                <Link href={"/contact"}>Contact</Link>
                <h1>Pages</h1>
                
            </div>
         </div>
    </nav>
  );
};

export default Navbar;


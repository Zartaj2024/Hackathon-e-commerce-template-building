import React from "react";
import login from "../components/login.png";
import bandage from "../components/Bandage.png";
import Link from "next/link";
import Image from "next/image";

const Header1 = () => {
  return (
    <div className="flex  w-full h-[105px] bg-white pb-3 pt-3 text-black justify-between items-center p-4">
      <div className="font-bold text-3xl ">
        <Image src={bandage.src} alt="" />{" "}
      </div>
      <div className="flex gap-4 font-bold">
      
      <div className="flex gap-4">
          <Link href="/">Home</Link>
          <Link href="/shop">Shop</Link>
          <Link href="/Page4">About</Link>
          <Link href="/contact">Contact</Link>
          <h1>Pages</h1>
        </div>
    
      </div>
      <div className="font-bold text-blue-[500] font-Monsterrat">
        <Image src={login.src} alt="login"></Image>
      </div>
    </div>
  );
};

export default Header1;

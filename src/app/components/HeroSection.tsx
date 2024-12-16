import Image from "next/image";
import React from "react";
import bg from "./public/bg.jpg";
import Link from "next/link";
//  import Page2 from "./Page2";

function HeroSection() {
  return (
    <div className="bg-[url('/bg.jpg')] bg-[bg] bg-cover">
      <div className="container mx-auto px-4 text-left py-80 px-70 space-y-6 md:space-y-12 font-bold text-2xl md:text-3xl space-y-4">
        <p className="text-white uppercase tracking-wider text-sm font-semibold">
          Summer 2020
        </p>
        <div>
          <h1 className="text-5xl md:text-6xl text-white font-bold mt-4">
            New Collection
          </h1>
        </div>
        <div>
          <p className="text-white mt-4 text-lg md:text-xl">
            We know how large objects will act,
            <br />
            but things on a small scale.
          </p>
        </div>
        <div>
          <Link href="/Page2"className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-md">
             
              Shop Now
            
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;

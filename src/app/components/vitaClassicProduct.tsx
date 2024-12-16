// pages/products/vita-classic.js
import React from "react";
import Image from "next/image";

import shopheroImageSrc from "../components/shop-hero.png";

const VitaClassicProduct = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between h-screen bg-[#23856D] text-white  p-40 mt-100px">
     
      <div className="md:w-1/2 font-bold text-2xl space-y-10">
      <h2 className="text-2xl font-bold pb-4 pt-4">Summer 2020</h2>
        <h1 className="text-8xl font-bold">Vita Classic Product</h1>
        <p className="text-xl">We know how large objects will act. We know
           how are objects will act. We know.</p>
        <div className="flex items-center space-x-4">
          <span className="text-3xl font-bold">$16.48</span>
          <button className="bg-green-600 hover:bg-green-500 text-white font-bold py-2 px-4 rounded-md size-lg">
            ADD TO CART
          </button>
        </div>
      </div>
    <div className="md:w-[660px] mt-8 md:mt-0 pt-10 m-50 ">
        {shopheroImageSrc && (
          <Image
            src={shopheroImageSrc}
            alt="Vita Classic Product"
            width={500}
            height={500}
            className="w-full h-auto"
          />
        )}
      </div>
     
    </div>
  );
};

export default VitaClassicProduct;
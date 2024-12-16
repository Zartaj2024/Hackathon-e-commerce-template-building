// components/HeroSection.js
import React from "react";
import Image from "next/image";
import Hero from "../components/hero-cover-1.png";

export default function HeroSection() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center h-screen py-2 bg-gray-100 w-[100%] p-40 mt-100px">
      <div className="relative w-[880px] h-[880px] px-100px py-20px">
        {Hero && (
          <Image
            src={Hero}
            alt="People wrapped in a blanket"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        )}
        ;
      </div>
      <div className="w-1/2 p-8 space-y-10">
        <h2 className="text-gray-500 font-bold text-2xl">SUMMER 2020</h2>
        <h1 className="text-6xl font-bold text-gray-900">
          Part of the Neural Universe
        </h1>
        <p className="mt-4 text-2xl text-gray-700 font-bold">
          We know how large objects will act, but things on a small scale.
        </p>
        <div className="mt-6 text-2xl">
          <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded mr-4">
            BUY NOW
          </button>
          <button className="bg-white hover:bg-gray-100 text-green-500 border border-green-500 px-4 py-2 rounded">
            READ MORE
          </button>
        </div>
      </div>
    </div>
  );
}

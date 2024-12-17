"use client";
import React from "react";
import P1 from "../components/p1.png";
import P2 from "../components/p2.png";
import P3 from "../components/p3.png";  
import P4 from "../components/p4.png";
import P5 from "../components/p5.png";
import P6 from "../components/p6.png";
import P7 from "../components/p7.png";
import P8 from "../components/p8.png";
import Image from "next/image";

import Link from "next/link";

export default function Home() {
    const products = [
      {
        title: "Graphic Design",
        department: "English Department",
        originalPrice: "$16.48",
        salePrice: "$6.48",
        image:P1,
      },
      {
        title: "Graphic Design",
        department: "English Department",
        originalPrice: "$16.48",
        salePrice: "$6.48",
        image:P2,
      },
      {
        title: "Graphic Design",
        department: "English Department",
        originalPrice: "$16.48",
        salePrice: "$6.48",
        image:P3,
      },
      {
        title: "Graphic Design",
        department: "English Department",
        originalPrice: "$16.48",
        salePrice: "$6.48",
        image:P4,
      },
      {
        title: "Graphic Design",
        department: "English Department",
        originalPrice: "$16.48",
        salePrice: "$6.48",
        image:P5,
      },
      {
        title: "Graphic Design",
        department: "English Department",
        originalPrice: "$16.48",
        salePrice: "$6.48",
        image:P6,
      },
      {
        title: "Graphic Design",
        department: "English Department",
        originalPrice: "$16.48",
        salePrice: "$6.48",
        image:P7,
      },
      {
        title: "Graphic Design",
        department: "English Department",
        originalPrice: "$16.48",
        salePrice: "$6.48",
        image:P8,
      },
      {
        title: "Graphic Design",
        department: "English Department",
        originalPrice: "$16.48",
        salePrice: "$6.48",
        image:P1,
      },
      {
        title: "Graphic Design",
        department: "English Department",
        originalPrice: "$16.48",
        salePrice: "$6.48",
        image:P2,
      },
      {
        title: "Graphic Design",
        department: "English Department",
        originalPrice: "$16.48",
        salePrice: "$6.48",
        image:P3,
      },
      {
        title: "Graphic Design",
        department: "English Department",
        originalPrice: "$16.48",
        salePrice: "$6.48",
        image:P4,
      },
    ];
  

    return (
      <div className="min-h-screen bg-gray-100 py-8">
        {/* Container */}
        
        <div className="container mx-auto px-4">
      
          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                onClick={() => (product)}
              >
                <Link href="shop">
                  {/* Product Image */}
                  <Image
                    src={product.image}
                    alt={product.title}
                    className="w-full h-auto object-cover"
                  />
  
                  {/* Product Content */}
                  <div className="p-4 text-center">
                    <h2 className="text-lg font-semibold text-gray-800">
                      {product.title}
                    </h2>
                    <p className="text-gray-500 text-sm">{product.department}</p>
  
                    {/* Price */}
                    <div className="mt-2">
                      <span className="line-through text-gray-400 mr-2">
                        {product.originalPrice}
                      </span>
                      <span className="text-green-500 font-bold">
                        {product.salePrice}
                      </span>
                    </div>
  
                    {/* Color Dots */}
                    <div className="flex justify-center space-x-2 mt-3">
                      <span className="h-4 w-4 bg-blue-500 rounded-full"></span>
                      <span className="h-4 w-4 bg-green-500 rounded-full"></span>
                      <span className="h-4 w-4 bg-orange-500 rounded-full"></span>
                      <span className="h-4 w-4 bg-red-500 rounded-full"></span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>

        
        
  
          {/* Pagination */}
          <div className="flex justify-center mt-8 ">
            <nav className="inline-flex items-center px-4 py-4 ">
              <Link
                href="/"
                className=" w-[50px] h-[50px] px-3 py-3 bg-gray-200 text-gray-600 rounded-l hover:bg-gray-300"
              >
                First
              </Link>
              <Link
                href="Page2"
                className=" w-[50px] h-[50px] px-3 py-3 bg-blue-500 text-white hover:bg-blue-600"
              >
                1
              </Link>
              <Link
                href="shop"
                className=" w-[50px] h-[50px] px-3 py-3 bg-gray-200 text-gray-600 hover:bg-gray-300"
              >
                2
              </Link>
              <Link
                href="About u"
                className=" w-[50px] h-[50px] px-3 py-3 bg-gray-200 text-gray-600 hover:bg-gray-300"
              >
                3
              </Link>
              <Link
                href=""
                className=" w-[50px] h-[50px] px-3 py-3 bg-gray-200 text-gray-600 rounded-r hover:bg-gray-300"
              >
                Next
              </Link>
            </nav>
          </div>
        </div>
      </div>
    );
  }
  

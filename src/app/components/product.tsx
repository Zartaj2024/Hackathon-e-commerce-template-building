// pages/index.js
import Image from "next/image";
import product1 from "../components/p1.png" assert { type: "image/png" };
import product2 from "../components//p2.png";
import product3 from "../components/p3.png";
import product4 from "../components/p4.png";
import product5 from "../components/p5.png";
import product6 from "../components/p6.png";
import product7 from "../components/p7.png";
import product8 from "../components/p8.png";
import React from "react";

const products = [
  {
    image: product1,
    title: "Graphic Design",
    price: "$8.48",
    colors: ["#0077B6", "#F44336", "#FFC107", "#4CAF50"],
  },
  {
    image: product2,
    title: "Graphic Design",
    price: "$8.48",
    colors: ["#0077B6", "#F44336", "#FFC107", "#4CAF50"],
  },
  {
    image: product3,
    title: "Graphic Design",
    price: "$8.48",
    colors: ["#0077B6", "#F44336", "#FFC107", "#4CAF50"],
  },
  {
    image: product4,
    title: "Graphic Design",
    price: "$8.48",
    colors: ["#0077B6", "#F44336", "#FFC107", "#4CAF50"],
  },
  {
    image: product5,
    title: "Graphic Design",
    price: "$8.48",
    colors: ["#0077B6", "#F44336", "#FFC107", "#4CAF50"],
  },
  {
    image: product6,
    title: "Graphic Design",
    price: "$8.48",
    colors: ["#0077B6", "#F44336", "#FFC107", "#4CAF50"],
  },
  {
    image: product7,
    title: "Graphic Design",
    price: "$8.48",
    colors: ["#0077B6", "#F44336", "#FFC107", "#4CAF50"],
  },
  {
    image: product8,
    title: "Graphic Design",
    price: "$8.48",
    colors: ["#0077B6", "#F44336", "#FFC107", "#4CAF50"],
  }
];           

const ProductGrid = () => {
  return (
    <div className="bg-white text-gray-900 text-white py-80 px-40">
      <div className="text-center py-10 px-40">
        <h1 className="font-bold text-2xl text-gray-400">Featured Products</h1>
        <h2 className="text-4xl font-bold mb-4 text-black">
          Bestseller Products
        </h2>
        <h3 className="text-gray-400 text-sm font-bold">
          Problems trying to resolve the conflict between
        </h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white rounded-lg overflow-hidden shadow "
          >
            <Image
              src={product.image}
              alt={product.title ?? ""}
              width={300}
              height={400}
              className="w-[100] h-[100] object-cover mb-4 mx-auto"
            />

            <div className="p-4 place-items-center ">
              <h3 className="text-lg text-black font-bold mb-2">
                {product.title}
                Graphic Design
              </h3>
              <h3 className="text-lg text-gray-400 font-bold mb-2">
                English Department
              </h3>
              <div className="flex font-bold gap-1">
                <h1 className="text-black">$96.48</h1>
                <p className="text-green-500 font-bold mb-2">{product.price}</p>
              </div>
              <div className="flex space-x-2">
                {product.colors?.map((color, index) => (
                  <div   key={index} className="w-4 h-4 rounded-full" style={{ backgroundColor: color }}
                
                  
                   
                    ></div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;


import React from "react";
import acce from "../components/acce.png";
import men from "../components/men.png";
import women from "../components/women.png";
import kids from "../components/kids.png";
import Image from "next/image";

const EditorPick = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl text-gray-800 md:text-3xl font-bold uppercase">
            Editor's Pick
          </h2>
          <p className="text-gray-500 mt-2 font-bold">
            Problems trying to resolve the conflict between
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Large Image */}
          <div className="col-span-2 relative">
            <Image
              src={men.src}
              alt="Men"
              className="w-full h-full object-cover"
            />
            <button className="absolute bottom-4 left-4 bg-white text-gray-800 font-semibold py-2 px-4 rounded shadow-lg">
              Men
            </button>
          </div>

          {/* Smaller Images */}
          <div className="grid grid-cols-2 gap-4">
            {/* Women */}
            <div className="relative">
              <Image
                src={women.src}
                alt="Women"
                className="w-full h-full object-cover"
              />
              <button className="absolute bottom-4 left-4 bg-white text-gray-800 font-semibold py-2 px-4 rounded shadow-lg">
                Women
              </button>
            </div>
            {/* Accessories */}
            <div className="relative">
              <Image
                src={acce.src}
                alt="Accessories"
                className="w-full h-full object-cover"
              />
              <button className="absolute bottom-4 left-4 bg-white text-gray-800 font-semibold py-2 px-4 rounded shadow-lg">
                Accessories
              </button>
            </div>
            {/* Kids */}
            <div className="relative col-span-2">
              <Image
                src={kids.src}
                alt="Kids"
                className="w-full h-full object-cover"
              />
              <button className="absolute bottom-4 left-4 bg-white text-gray-800 font-semibold py-2 px-4 rounded shadow-lg">
                Kids
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditorPick;


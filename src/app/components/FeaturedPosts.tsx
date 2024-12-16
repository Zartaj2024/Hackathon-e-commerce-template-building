// components/FeaturedPosts.js
import React from "react";
import car from "../components/car.png";
import road from "../components/road.png";
import umbrella from "../components/umbrella.png";
import icon1 from "../components/icon1.png";
import icon2 from "../components/icon2.png";
const FeaturedPosts = () => {
  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
            Practice Advice
          </h2>
          <h1 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Featured Posts
          </h1>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics.
          </p>
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8 ">
            {/* Post 1 */}
            <div className="relative border border-gray-200 rounded-lg shadow-gray-300 shadow ">
              <div className="absolute top-0 left-0 bg-red-500 text-white px-2 py-1 text-xs font-bold">
                NEW
              </div>
              <div>
                {" "}
                {road && (
                  <img
                    className="h-48 w-full object-cover"
                    src={road.src}
                    alt="Colorful houses"
                  />
                )}
              </div>
              <div className="mt-4 space-y-8 py-4 px-4">
                <div className="flex items-center text-sm text-gray-500 gap-4">
                  <span className="text-blue-500">Google</span>

                  <span>Trending</span>

                  <span>New</span>
                </div>
                <h3 className="mt-2 text-lg leading-6 font-medium text-gray-900">
                  Loudest à la Madison #1 (L'integral)
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  We focus on ergonomics and meeting you where you work. It's
                  only a keystroke away.
                </p>
                <div className="mt-2 flex items-center text-sm text-gray-500 gap-[140px] ">
                  <div className="flex">
                  <img src={icon1.src} alt="" className="w-4 h-4 gap-1" /> <span>22 April 2021</span>
                  </div>
                  <div className="flex gap-1">
                  <img src={icon2.src} alt="" className="w-4 h-4 " />
                  <span>10 comments</span>
                  </div>
                </div>
                <div>
                <a
                  href="#"
                  className="mt-2 text-indigo-600 hover:text-indigo-900 text-sm font-medium"
                >
                  Learn More
                </a>
                </div>
              </div>
            </div>
            {/* Post 2 */}
            <div className="relative border border-gray-200 rounded-lg shadow">
              <div className="absolute top-0 left-0 bg-red-500 text-white px-2 py-1 text-xs font-bold">
                NEW
              </div>
              <div>
                <img
                  className="h-48 w-full object-cover"
                  src={car.src}
                  alt="Pink car"
                />
              </div>
              <div className="mt-4 space-y-8 py-4 px-4">
                <div className="flex items-center text-sm text-gray-500 gap-4">
                  <span className="text-blue-500">Google</span>

                  <span>Trending</span>

                  <span>New</span>
                </div>
                <h3 className="mt-2 text-lg leading-6 font-medium text-gray-900">
                  Loudest à la Madison #1 (L'integral)
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  We focus on ergonomics and meeting you where you work. It's
                  only a keystroke away.
                </p>
                <div className="mt-2 flex gap-[140px] items-center text-sm text-gray-500 ">
                  <div className="flex gap-1">
                  <img src={icon1.src} alt="" className="w-4 h-4"/> <span>22 April 2021</span>
                  </div>
                  <div className="flex">
                  <img src={icon2.src} alt="" /> <span>10 comments</span>
                  </div>
                </div>
                <div>
                <a
                  href="#"
                  className="mt-2 text-indigo-600 hover:text-indigo-900 text-sm font-medium"
                >
                  Learn More
                </a>
                </div>
              </div>
            </div>
            {/* Post 3 */}
            <div className="relative   border-gray-200 rounded-lg shadow ">
              <div className="absolute top-0 left-0 bg-red-500 text-white px-2 py-1 text-xs font-bold">
                NEW
              </div>
              <div>
                {" "}
                <img
                  className="h-48 w-full object-cover"
                  src={umbrella.src}
                  alt="Colorful umbrellas"
                />
              </div>
              <div className="mt-4 space-y-8 py-4 px-4">
                <div className="flex items-center text-sm text-gray-500 gap-4">
                  <span className="text-blue-500">Google</span>

                  <span>Trending</span>

                  <span>New</span>
                </div>
                <h3 className="mt-2 text-lg leading-6 font-medium text-gray-900">
                  Loudest à la Madison #1 (L'integral)
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  We focus on ergonomics and meeting you where you work. It's
                  only a keystroke away.
                </p>
                <div className="mt-2 flex  gap-[140px]  items-center text-sm text-gray-500   ">
                 <div className="flex gap-1">
                   
                  <img src={icon1.src} alt="" className="w-4 h-4"/>   22 April 2021
               </div>
               <div className="flex">

                  
                    
                  <img src={icon2.src} alt="w-4-h-4" />  10 comments
                </div>
                </div>
                <div>
                <a
                  href="#"
                  className="mt-2 text-indigo-600 hover:text-indigo-900 text-sm font-medium"
                >

               
                  Learn More
                </a>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPosts;

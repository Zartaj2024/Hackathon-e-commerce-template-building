// components/Footer.js
import React from "react";

import Social2 from "../components/social2.png";
import bandage from "../components/Bandage.png";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-white w-full">
      <footer className="bg-white text-white py-12 bg-white justify-center items-center w-full mr-[-200px]  ">
        <div className="max-w-10xl mx-auto px-4 sm:px-6 lg:px-8 m-40px p-40px ">
          <div className=" flex justify-between mr-[-200px] items-center bg-[#FAFAFA] p-7 w-full h-[120px] space-between  ">
            <div>
              <img src={bandage.src} alt="" className="w-[100px]" />
            </div>
            <div className="flex space-x-4 ">
              <img src={Social2.src} alt="social" />
            </div>
          </div>
          <div className="mt-10 mb-10 grid grid-cols-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 pt-10 pb-10   ">
            <div className="font-bold">
              <h2 className="text-sm font-bold text-black  uppercase tracking-wider">
                Company Info
              </h2>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Carrier
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    We are hiring
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div className="font-bold">
              <h2 className="text-sm text-black font-bold uppercase tracking-wider">
                Legal
              </h2>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Carrier
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    We are hiring
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div className="font-bold"> 
              <h2 className="text-sm text-black font-bold uppercase tracking-wider">
                Features
              </h2>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 font-bold hover:text-white">
                    Business Marketing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    User Analytic
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Live Chat
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Unlimited Support
                  </Link>
                </li>
              </ul>
            </div>
            <div className="font-bold">
              <h2 className="text-sm font-bold text-black uppercase tracking-wider">
                Resources
              </h2>
              <ul className="mt-4 space-y-2 text-black-400">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    IOS & Android
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Watch a Demo
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Customers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    API
                  </Link>
                </li>
              </ul>
            </div>
            <div className="font-bold">
              <h2 className="text-sm font-bold text-black uppercase tracking-wider">
                Get in Touch
              </h2>

              <form className="mt-4 mb-4 flex flex-row  ml-[-70px] rounded-[50px] w-full">
                <div className="flex rounded">
                  <input
                    type="email"
                    placeholder="Your Email "
                    className="w-[190px] h-[70px] px-4 py-2 text-gray-900 bg-gray-200 focus:outline-none focus:bg-white "
                  />
                  <button
                    type="submit"
                    className=" w-[90px] h-[70px] mt-0 bg-blue-500 text-white hover:bg-red-700  "
                  >
                    Subscribe
                  </button>
                </div>
              </form>
              <p className="mt-4 text-gray-400">Lore imp sum dolor Amit.</p>
            </div>
          </div>
          <div className="pb-25px pt-25px px-5 py-5 text-center font-bold text-gray-400 bg-[#FAFAFA] h-[70px]">
            <p>Made With Love By Finland All Right Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

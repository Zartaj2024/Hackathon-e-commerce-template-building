import React from "react";
import Page31 from "../components/Page31";
import Count from "../components/count.png";
import Deskimage from "../components/desktop-video-3.png";
import Social from "../components/social2.png";
import T1 from "../components/t1.png";
import T2 from "../components/t2.jpg";
import T3 from "../components/t3.jpg";
import Logo from "../components/Page2.4.png";
import Pic from "../components/page333.png";
import Bandage from "../components/Bandage.png";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div>
      <section className="grid bg-white">
        <div>
          <div className="justify-center items-center text-center py-[50px] px-[50px] space-y-4">
            <div className="text-black font-bold text-6xl">
              Big Companies Are Here
            </div>
            <div className="text-black font-bold text-1xl px-[100px]">
              Problems trying to resolve the conflict between <br />
              the two major realms of Classical physics: Newtonian mechanics
            </div>
          </div>
          <div>
            <Image src={Logo.src} alt="" className="w-full" />
          </div>
        </div>
      </section>
       <section className="text-gray-600 body-font w-screen bg-white">
         <div className="container mx-auto flex  md:flex-row flex-col items-center ">
           <div className="lg:flex-grow md:w-6/1 bg-blue-500 text-white  flex flex-col md:items-start md:text-left mb-16 md:mb-0 py-[300px] px-[300px]" style={{ height: "600px" }}> 
           <h2 className="text-sm uppercase mb-4 font-bold">Work With Us</h2> <h1 className="text-4xl font-bold mb-4">Now Let's Grow Yours</h1> 
           
           < p className="text-sm mb-8 leading-relaxed fon-bold"> The gradual accumulation of information about atomic and small-scale behavior during the first quarter of the 20th </p> 
            <Link href="#" className="bg-transparent border border-white text-white py-2 px-4 rounded hover:bg-white hover:text-blue-500 transition duration-300"> Button </Link>
             </div> <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6" style={{ height: "600px" }}> 
             
             <Image className="object-cover object-center h-full w-full" alt="hero" src={Pic.src}/> </div> 
      </div>
      </section>

      <section>
        <div>
          <div className="flex flex-row justify-between items-center pb-5 pt-5 font-bold px-[150px] bg-white h-[150px]">
            <div>
              <Image src={Bandage.src} alt="" className="h-8" />
            </div>
            <div>
              <Image src={Social.src} alt="" className="h-8" />
            </div>
          </div>
          <hr />

          <div className="mt-13 mb-13 grid grid-cols-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 pt-10 pb-10 bg-white px-[150px]">
            <div className="font-bold">
              <h2 className="text-sm font-bold text-black uppercase tracking-wider">
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
              <ul className="mt-4 space-y-2">
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
              <form className="mt-4 mb-4 flex flex-row ml-[-70px] rounded-[50px] w-full">
                <div className="flex rounded">
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-[190px] h-[70px] px-4 py-2 text-gray-900 bg-gray-200 focus:outline-none focus:bg-white"
                  />
                  <Link href="#" className="w-[90px] h-[70px] mt-0 bg-blue-500 text-white hover:bg-red-700">
                    Subscribe
                  </Link>
                </div>
              </form>
              <p className="mt-4 text-gray-400">Lore imp sum dolor Amit.</p>
            </div>
          </div>
          <div>
            <div className="pb-6 pt-6 text-left px-[150px] font-bold text-gray-400 bg-[#FAFAFA] h-[70px]">
              <p>Made With Love By Finland All Right Reserved.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};


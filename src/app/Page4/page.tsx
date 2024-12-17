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

export default function About() {
  return (
    <div>
      <Page31 />
      <section className="flex h-[236px] w-full justify-center items-center text-black font-bold bg-white gap-10 py-10 px-10">
        <div className="flex flex-col gap-4 text-2xl">
          <div className="text-sm text-red-500">Problems trying</div>
          <div>
            Met minim Mollie non desert <br />
            Alamo est sit cliquey dolor do <br />
            met sent.
          </div>
        </div>
        <div className="py-[50px] text-gray-500">
          Problems trying to resolve the conflict between the two major realms
          of <br />
          Classical physics: Newtonian mechanics
        </div>
      </section>

      <section className="text-gray-600 body-font bg-white">
        <div className="container px-10 py-10 mx-auto justify-center items-center space-x-15 ">
          <Image src={Count.src} alt="" className="w-full" />
        </div>
      </section>

      <section>
        <div>
          <Image src={Deskimage.src} alt="" className="w-full" />
        </div>
      </section>

      <section className="bg-white ">
        {" "}
        <div className="container px-5 py-24 mx-auto">
          {" "}
          <div className="text-center mb-12">
            {" "}
            <h1 className="sm:text-4xl text-3xl font-medium title-font text-gray-900 mb-4">
              {" "}
              Meet Our Team{" "}
            </h1>{" "}
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-black">
              {" "}
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics{" "}
            </p>{" "}
          </div>{" "}
          <div className="flex flex-wrap -m-4 text-center">
            {" "}
            <div className="p-4 sm:w-1/3 w-1/2">
              {" "}
              <div className="bg-white p-6 ">
                {" "}
                <div className="h-50 w-full mb-6">
                  {" "}
                  <img
                    className="object-cover object-center w-full h-full "
                    src={T1.src}
                    alt="Team Member 1"
                  />{" "}
                </div>{" "}
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                  {" "}
                  Username 1{" "}
                </h3>{" "}
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  {" "}
                  Profession 1{" "}
                </h2>{" "}
                <div className="flex justify-center space-x-4">
                  {" "}
                  <img src={Social.src} alt="" />
                </div>{" "}
              </div>{" "}
            </div>{" "}
            <div className="p-4 sm:w-1/3 w-1/2">
              {" "}
              <div className="bg-white p-6 ">
                {" "}
                <div className="h-50 w-full object-cover object-center mb-6">
                  {" "}
                  <Image
                    className="object-cover object-center w-full h-full "
                    src={T2.src}
                    alt="Team Member 2"
                  />{" "}
                </div>{" "}
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                  {" "}
                  Username 2{" "}
                </h3>{" "}
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  {" "}
                  Profession 2{" "}
                </h2>{" "}
                <div className="flex justify-center space-x-4">
                  {" "}
                  <Image src={Social.src} alt="" />
                </div>{" "}
              </div>{" "}
            </div>{" "}
            <div className="p-4 sm:w-1/3 w-1/2">
              {" "}
              <div className="bg-white p-6 ">
                {" "}
                <div className="h-50 w-full  mb-6">
                  {" "}
                  <Image
                    className="  w-full h-full"
                    src={T3.src}
                    alt="Team Member 3"
                  />{" "}
                </div>{" "}
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                  {" "}
                  Username 3{" "}
                </h3>{" "}
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  {" "}
                  Profession 3{" "}
                </h2>{" "}
                <div className="flex justify-center space-x-4">
                  {" "}
                  <Image src={Social.src} alt="" />
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>

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
            <button className="bg-transparent border border-white text-white py-2 px-4 rounded hover:bg-white hover:text-blue-500 transition duration-300"> Button </button>
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
                  <a href="#" className="text-gray-400 hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Carrier
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    We are hiring
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div className="font-bold">
              <h2 className="text-sm text-black font-bold uppercase tracking-wider">
                Legal
              </h2>
              <ul className="mt-4 space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Carrier
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    We are hiring
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div className="font-bold">
              <h2 className="text-sm text-black font-bold uppercase tracking-wider">
                Features
              </h2>
              <ul className="mt-4 space-y-2">
                <li>
                  <a href="#" className="text-gray-400 font-bold hover:text-white">
                    Business Marketing
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    User Analytic
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Live Chat
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Unlimited Support
                  </a>
                </li>
              </ul>
            </div>
            <div className="font-bold">
              <h2 className="text-sm font-bold text-black uppercase tracking-wider">
                Resources
              </h2>
              <ul className="mt-4 space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    IOS & Android
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Watch a Demo
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Customers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    API
                  </a>
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
                  <button
                    type="submit"
                    className="w-[90px] h-[70px] mt-0 bg-blue-500 text-white hover:bg-red-700"
                  >
                    Subscribe
                  </button>
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
// </section>

import Link from "next/link";
import React from "react";
import Mail from "../components/mail.png";
import Phone from "../components/phone.png";
import Social from "../components/social media.png";
import Logo from "../components/Bandage.png";
import Login from "../components/login.png";
import Shopcloths from "../components/shopcloths.png";
import Page22 from "../components/page2.3.png";
import Page23 from "../components/page2.4.png";
import Social2 from "../components/social2.png";
import image from "next/image";
import Products from "../components/Page2products";


export default function Page2() {
  return (
    <div>
      {/* header */}
      <div className="flex flex-row justify-center items-center pb-3 pt-3 font-bold p-3 bg-[#23856D] text-500 space-x-10 pb-10 py-10">
        <div className="flex gap-4">
          <div className="flex pt-3 pb-3 ">
            <div>
              <img src={Phone.src} alt="phone" />
            </div>
            <div>(225) 555-0118</div>
          </div>
          <div className="flex gap-1">
            <p className="flex pb-3 pt-3 gap-2">
              <img src={Mail.src} alt="mail" />
              michelle.rivera@example.com
            </p>
          </div>
        </div>

        <div>
          <div className="flex pt-3 pb-3">
            <p>Follow Us and get a chance to win 80% off</p>
          </div>
        </div>
        <div className="flex">
          <p className="flex">
            Follow Us :<img src={Social.src} alt="media"></img>
          </p>
        </div>
      </div>
      {/*Navbar */}

      <div className="bg-white flex flex-row justify-between items-center pb-5 pt-5 font-bold px-[150px]  h-[90px] text-black  ">
        <div>
          <img src={Logo.src} alt="" className=" " />
        </div>
        <div className="flex gap-4">
          <Link href="/">Home</Link>
          <Link href="/shop">Shop</Link>
          <Link href="/Page4">About</Link>
          <Link href="/contact">Contact</Link>
          <h1>Pages</h1>
        </div>
        <div>
          <img src={Login.src} alt="" />
        </div>
      </div>

      <div className="bg-[#FAFAFA] m-full h-[500px]">
        <div className=" text-black flex flex-row justify-between items-center pb-5 pt-5 font-bold px-[150px]">
          <div className="font-bold text-3xl ">shop</div>
          <div className="flex gap-4">
            <div>
              <Link href="/">home</Link>
            </div>

            <div>
              <h1>shop</h1>
            </div>
          </div>
        </div>

        <div className="justify-center items-center  font-bold px-[160px]">
          <img src={Shopcloths.src} alt="" className="w-100 h-80" />
        </div>
      </div>
      <div className="bg-white px-[350px]">
        <img src={Page22.src} alt="" />
      </div>
      <div className="bg-[#FAFAFA] px-[350px]">
        <img src={Page23.src} alt="" className="h-60 w-120" />
      </div>

      <div>
        <div className="flex flex-row justify-between items-center pb-5 pt-5 font-bold px-[150px] bg-white h-[150px] ">
          <div>
            <img src={Logo.src} alt="" className="h-8" />
          </div>
          <div>
            <img src={Social2.src} alt="" className="h-8" />
          </div>
        </div>
        <hr />

        <div className="mt-13 mb-13 grid grid-cols-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 pt-10 pb-10  bg-white px-[150px] ">
          <div className="font-bold">
            <h2 className="text-sm font-bold text-black  uppercase tracking-wider">
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
                <a
                  href="#"
                  className="text-gray-400 font-bold hover:text-white"
                >
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
            <ul className="mt-4 space-y-2 text-black-400">
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
        <div>
          <div className="pb-25px pt-25px py-6 px-6text-left px-[150px] font-bold text-gray-400 bg-[#FAFAFA] h-[70px]">
            <p>Made With Love By Finland All Right Reserved.</p>
          </div>
        </div>
      </div>
      <div>
        <Products />
      </div>
    </div>
  );
}


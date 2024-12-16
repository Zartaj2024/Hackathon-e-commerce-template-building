"use client";
import React from "react";
import Link from "next/link";
import Phone from "../../components/phone.png";
import Mail from "../../components/mail.png";
import Social from "../../components/social media.png";
import Logo from "../../components/Bandage.png";
import Login from "../../components/login.png";
import P1 from "../../components/p1.png";
import P2 from "../../components/p2.png";
import P3 from "../../components/p3.png"
import P4 from "../../components/p4.png"
import P5 from "../../components/p5.png"
import P6 from "../../components/p6.png"
import P7 from "../../components/p7.png"
import P8 from "../../components/p8.png"
import Page23 from "../../components/page2.4.png";
function Shop() {
  return (
    <div>
      {/* header */}
      <div className="flex flex-row justify-center items-center pb-3 pt-3 font-bold p-3 bg-[#23856D] text-500 space-x-10 pb-10 py-10">
        <div className="flex gap-4">
          <div className="flex pt-3 pb-3">
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
            Follow Us :<img src={Social.src} alt="media" />
          </p>
        </div>
      </div>
      {/*Navbar */}

      <div className="bg-white flex flex-row justify-between items-center pb-5 pt-5 font-bold px-[150px] h-[90px] text-black">
        <div>
          <img src={Logo.src} alt="" className="" />
        </div>
        <div className="flex gap-4">
          <Link href="/">Home</Link>
          <Link href="/shop">Shop</Link>
          <Link href="/Page4">About</Link>
          <Link href="/contact">Contact</Link>
          <h1>Pages</h1>
        </div>
        <div>
          <img src={Login.src} alt="login" />
        </div>
      </div>

      <div className="bg-[#FAFAFA]  text-black flex flex-row justify-between items-center pb-5 pt-5 font-bold px-[150px]">
        <div className="flex gap-2">
          <Link href="/">home</Link>

          <h1>shop</h1>
        </div>
      </div>
      <section className="bg-[#FAFAFA] text-gray-600 body-font overflow-hidden bg-[FAFAFA]">
        <div className="container px-5 py-10 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            {/* Image Section */}
            <div className="lg:w-1/2 w-full flex flex-col items-center">
              <div className="relative mb-4 w-[400px] ">
                <img
                  alt="product"
                  className="w-full object-cover object-center rounded"
                  src={P1.src}
                />
                <button className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600">
                  &larr;
                </button>
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600">
                  &rarr;
                </button>
              </div>
              {/* Thumbnail Images */}
              <div className="flex gap-5 mr-[250px]">
                <img
                  src={P2.src}
                  alt="thumbnail"
                  className="w-16 h-16 object-cover border-2 border-gray-300 hover:border-blue-400"
                />
                <img
                  src={P3.src}
                  alt="thumbnail"
                  className="w-16 h-16 object-cover border-2 border-gray-300 hover:border-blue-400"
                />
              </div>
            </div>

      {/* Product Details Section */}
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 font-bold space-y-6">
        <h1 className="text-gray-900 text-3xl font-medium mb-4">Floating Phone</h1>

        {/* Star Rating */}
        <div className="flex items-center mb-4">
          <span className="flex">
            {[...Array(4)].map((_, i) => (
              <svg
                key={i}
                fill="currentColor"
                className="w-5 h-5 text-yellow-500"
                viewBox="0 0 20 20"
              >
                <path d="M10 15l-5.878 3.09 1.124-6.573L1 6.91l6.564-.954L10 1l2.436 4.956 6.564.954-4.746 4.607 1.124 6.573z" />
              </svg>
            ))}
            <svg
              fill="none"
              stroke="currentColor"
              className="w-5 h-5 text-gray-300"
              viewBox="0 0 20 20"
            >
              <path d="M10 15l-5.878 3.09 1.124-6.573L1 6.91l6.564-.954L10 1l2.436 4.956 6.564.954-4.746 4.607 1.124 6.573z" />
            </svg>
          </span>
          <span className="ml-2 text-gray-600">10 Reviews</span>
        </div>
        
        {/* Price */}
        <p className="text-2xl font-semibold mb-4">$1,139.33</p>
            <div className="flex">
        <p>Avaliability :</p>
        <p className="text-blue-500">In stock</p>
</div>
<div className="space-y-9">
    <div>
        {/* Description */}
        <p className="leading-relaxed mb-6 text-gray-700">
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official
          consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
        </p>
        </div>

        <div>
            <hr />
            </div>
        {/* Color Options */}
        <div>
        <div className="flex items-center mb-6">
          <span className="mr-3 text-gray-700">Colors</span>
          <button className="w-6 h-6 rounded-full bg-blue-500 border-2 border-gray-300 focus:outline-none" />
          <button className="w-6 h-6 ml-2 rounded-full bg-green-500 border-2 border-gray-300 focus:outline-none" />
          <button className="w-6 h-6 ml-2 rounded-full bg-orange-500 border-2 border-gray-300 focus:outline-none" />
          <button className="w-6 h-6 ml-2 rounded-full bg-gray-800 border-2 border-gray-300 focus:outline-none" />
        </div>
        </div>

        {/* Select Options Button */}
        <div className="flex items-center">
          <button className="text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded">
            Select Options
          </button>
          <button className="ml-4 rounded-full w-10 h-10 bg-gray-200 inline-flex items-center justify-center text-gray-600 hover:bg-gray-300">
            <svg
              fill="currentColor"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
            </svg>
          </button>
          
           <button className="ml-4 rounded-full w-10 h-10 bg-gray-200 inline-flex items-center justify-center text-gray-600 hover:bg-gray-300"> 
            <svg
              fill="currentColor"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M14.31 8l5.74 9H8.65l-5.74-9h11.4z" />
            </svg>
           </button>

           <button className="ml-4 rounded-full w-10 h-10 bg-gray-200 inline-flex items-center justify-center text-gray-600 hover:bg-gray-300"> 
            <svg
              fill="currentColor"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M14.31 8l5.74 9H8.65l-5.74-9h11.4z" />
            </svg>
           </button>
           </div> 
        </div>
      </div>
    </div>
  </div>
</section>

<section className="bg-[#FFFFFF]" >
    <div className="flex justify-center gap-[80px] font-bold  text-[#969696] w-[1400px] h-[100px] px-10 py-10">
        <div>Description</div>
        <div> Additional Information</div>
        <div>Reviews (0)</div>
    </div>
    <div><hr /></div>
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 font-bold justify-center px-10 py-10">
        {/* Left Section */}
        <div className="flex justify-center items-center">
          <div className="bg-gray-100 rounded-lg shadow-lg overflow-hidden">
            <img
              src={P1.src} // Replace with your image URL
              alt="Decor Image"
              className="object-cover"
            />
          </div>
        </div>

        {/* Middle Section */}
        <div className="col-span-1">
            <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            the quick fox jumps over
          </h2>
          </div>
          <div>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official
            consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
          </p>
          </div>
          <div>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official
            consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
          </p>
          </div>
          <div>
          <p className="text-gray-600 leading-relaxed">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official
            consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
          </p></div>
        </div>

        {/* Right Section */}
        <div className="col-span-1">
          {/* Heading with items */}
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            the quick fox jumps over
          </h2>
          <ul className="space-y-2 mb-6">
            <li className="flex items-center text-gray-600">
              <span className="mr-2 text-gray-400">&gt;</span>
              the quick fox jumps over the lazy dog
            </li>
            <li className="flex items-center text-gray-600">
              <span className="mr-2 text-gray-400">&gt;</span>
              the quick fox jumps over the lazy dog
            </li>
            <li className="flex items-center text-gray-600">
              <span className="mr-2 text-gray-400">&gt;</span>
              the quick fox jumps over the lazy dog
            </li>
            <li className="flex items-center text-gray-600">
              <span className="mr-2 text-gray-400">&gt;</span>
              the quick fox jumps over the lazy dog
            </li>
          </ul>

          {/* Another block of heading and items */}
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            the quick fox jumps over
          </h2>
          <ul className="space-y-2">
            <li className="flex items-center text-gray-600">
              <span className="mr-2 text-gray-400">&gt;</span>
              the quick fox jumps over the lazy dog
            </li>
            <li className="flex items-center text-gray-600">
              <span className="mr-2 text-gray-400">&gt;</span>
              the quick fox jumps over the lazy dog
            </li>
            <li className="flex items-center text-gray-600">
              <span className="mr-2 text-gray-400">&gt;</span>
              the quick fox jumps over the lazy dog
            </li>
          </ul>
        </div>
      </div>

</section>

   <section>
  <div className="min-h-screen bg-gray-100 py-8">
    {/* Container */}
    <div className="container mx-auto px-4">
      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {[
          { title: "Graphic Design", department: "English Department", originalPrice: "$16.48", salePrice: "$6.48", image: P1 },
          { title: "Graphic Design", department: "English Department", originalPrice: "$16.48", salePrice: "$6.48", image: P2 },
          { title: "Graphic Design", department: "English Department", originalPrice: "$16.48", salePrice: "$6.48", image: P3 },
          { title: "Graphic Design", department: "English Department", originalPrice: "$16.48", salePrice: "$6.48", image: P4 },
          { title: "Graphic Design", department: "English Department", originalPrice: "$16.48", salePrice: "$6.48", image: P5 },
          { title: "Graphic Design", department: "English Department", originalPrice: "$16.48", salePrice: "$6.48", image: P6 },
          { title: "Graphic Design", department: "English Department", originalPrice: "$16.48", salePrice: "$6.48", image: P7 },
          { title: "Graphic Design", department: "English Department", originalPrice: "$16.48", salePrice: "$6.48", image: P8 },
        ].map((product, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <Link href="shop">
              {/* Product Image */}
         <img src={product.image.src} alt="" className="w-full" />
              {/* Product Content */}
              <div className="p-4 text-center">
                <h2 className="text-lg font-semibold text-gray-800">{product.title}</h2>
                <p className="text-gray-500 text-sm">{product.department}</p>
                {/* Price */}
                <div className="mt-2">
                  <span className="line-through text-gray-400 mr-2">{product.originalPrice}</span>
                  <span className="text-green-500 font-bold">{product.salePrice}</span>
                </div>
           
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

<section>
<div className="bg-[#FAFAFA] px-[350px]">
        <img src={Page23.src} alt="" className="h-60 w-90" />
      </div>
<div>
        <div className="flex flex-row justify-between items-center pb-5 pt-5 font-bold px-[150px] bg-white h-[150px] ">
          <div>
            <img src={Logo.src} alt="" className="h-8" />
          </div>
          <div>
            <img src={Social.src} alt="" className="h-8" />
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
</section>
    </div>
  );
}

export default Shop;


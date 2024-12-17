import React from "react";
import mail from "../components/mail.png";
import social from "../components/social media.png";
import phone from "../components/phone.png";
import Image from "next/image";
const Header1 = () => {
  return (
    <div className="flex justify-between items-center pb-3 pt-3 font-bold p-3">
      <div className="flex gap-4">
        <div className="flex pt-3 pb-3 gap-2">
          <div>
            <Image src={phone.src} alt="phone" className="w-[20px] h-[20px]" />
          </div>
          <div>(225) 555-0118</div>
        </div>
        <div className="flex gap-1">
          <p className="flex pb-3 pt-3 gap-2">
            <Image src={mail.src} alt="mail" className="w-[20px]" />
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
          Follow Us :<img src={social.src} alt="media"></img>
        </p>
      </div>
    </div>
  );
};

export default Header1;

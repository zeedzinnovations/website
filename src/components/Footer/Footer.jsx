import React from "react";
import { CiInstagram } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { useLocation } from "react-router-dom";

function Footer() {
  const location = useLocation();
  const isHome = location.pathname === "/" || location.pathname === "/home";

  return (
    <>
      <div className="bg-[#14171E] w-full py-12 px-4 sm:px-6 md:px-12 lg:px-20">

        {/* Home Page Header */}
        {isHome && (
          <>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#03B7FF] text-center">
              Ready to Elevate Your Brand?
            </h1>
            <p className="text-[15px] sm:text-[16px] md:text-[18px] font-medium text-white text-center mt-4 max-w-xl mx-auto">
              Contact us today to explore how Zeedz Innovations can transform your ideas into impactful solutions.
            </p>
          </>
        )}

        <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-16 text-white mt-16">

          {/* Contact Address */}
          <div className="max-w-xs">
            <h2 className="text-xl sm:text-2xl font-semibold">Contact Address:</h2>

            <p className="text-[18px] font-medium mt-4">Register Office</p>
            <p className="text-[15px] sm:text-[16px] mt-3 text-gray-400">
              2nd Floor, SKCL Tech Square, No 14 SP, SIDCOT, Guindy Industrial Area,
              Chennai - 600032
            </p>

            <p className="text-[18px] font-medium mt-6">Administer Office</p>
            <p className="text-[15px] sm:text-[16px] mt-3 text-gray-400">
              1st Floor, Krishna Palaza, Door No: 12-D, Panachamoodu, Panachamoodu Post,
              Thiruvananthapuram - 695505
            </p>
          </div>

          {/* Get in Touch */}
          <div className="max-w-xs">
            <h2 className="text-xl sm:text-2xl font-semibold">Get in Touch:</h2>

            <p className="text-[18px] font-medium mt-4">Email</p>
            <p className="text-[15px] sm:text-[16px] mt-3 text-gray-400 ">
              zeedzinnovationsofficial@gmail.com
            </p>

            <p className="text-[18px] font-medium mt-6">Number</p>
            <p className="text-[15px] sm:text-[16px] mt-3 text-gray-400">
              9442041197
            </p>
          </div>

          {/* Quick Links + Follow Us */}
          <div className="max-w-xs">
            <h2 className="text-xl sm:text-2xl font-semibold">Quick Links:</h2>

            <ul className="text-[15px] sm:text-[16px] mt-4 text-gray-400 space-y-2">
              <li>Home</li>
              <li>About</li>
              <li>Service</li>
              <li>Contact</li>
            </ul>

            <p className="text-[18px] font-medium mt-6">Follow Us:</p>
            <div className="flex gap-4 mt-4">

             <a 
  href="https://www.instagram.com/zeedzinnovations/" 
  
 
  className="w-10 h-10 sm:w-12 sm:h-12 rounded-md bg-[#5CD1FF9E] flex items-center justify-center hover:bg-[#46c0ed] transition"
>
  <CiInstagram className="text-black text-2xl sm:text-3xl" />
</a>

<a 
  href="twitter link" 
 
  className="w-10 h-10 sm:w-12 sm:h-12 rounded-md bg-[#5CD1FF9E] flex items-center justify-center hover:bg-[#46c0ed] transition"
>
  <FaXTwitter className="text-black text-xl sm:text-2xl" />
</a>

<a 
  href="facebook link" 
 
  className="w-10 h-10 sm:w-12 sm:h-12 rounded-md bg-[#5CD1FF9E] flex items-center justify-center hover:bg-[#46c0ed] transition"
>
  <FaFacebookF className="text-black text-xl sm:text-2xl" />
</a>

<a 
  href="https://www.linkedin.com/in/zeedz-innovations-b00b85391/" 
  
  className="w-10 h-10 sm:w-12 sm:h-12 rounded-md bg-[#5CD1FF9E] flex items-center justify-center hover:bg-[#46c0ed] transition"
>
  <FaLinkedinIn className="text-black text-xl sm:text-2xl" />
</a>


            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default Footer;

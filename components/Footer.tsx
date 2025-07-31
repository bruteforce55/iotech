import { FaTwitter, FaFacebookF, FaGooglePlusG } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#2b1700] text-white px-[24px] py-[40px]">
      <div className="space-y-[24px]">
        {/* Top Row: Email + Contacts + Social Icons */}
        <div className="flex justify-end items-center space-x-[15px]">
          {/* Email Input */}
          <div className="relative w-[350px]">
            <input
              type="email"
              placeholder="Email"
              className="w-[95%] pl-[16px] py-[8px] rounded-[6px] text-black text-[14px] outline-none"
            />
            <button className="absolute w-[40%] right-[4px] top-1/2 -translate-y-1/2 bg-[#2b1700] text-[#ffffff] px-[12px] py-[6px] rounded-[6px] font-semibold text-[12px]">
              Subscribe
            </button>
          </div>

          {/* Contacts Text */}
          <span className="text-[14px]">Contacts</span>

          {/* Social Icons */}
          <div className="flex items-center space-x-[10px] text-[18px]">
            <FaTwitter className="hover:text-gray-300 cursor-pointer" />
            <FaFacebookF className="hover:text-gray-300 cursor-pointer" />
            <FaGooglePlusG className="hover:text-gray-300 cursor-pointer" />
          </div>
        </div>

        {/* Divider */}
        <hr className="border-t border-[#6d4e38]" />

        {/* Navigation */}
        <nav className="flex flex-wrap justify-center gap-x-[24px] gap-y-[12px] text-[14px]">
          <a href="#">About</a>
          <a href="#">Our Strategy</a>
          <a href="#">Our Advantages</a>
          <a href="#">Social Responsibility</a>
          <a href="#">Our Services</a>
        </nav>

        {/* Copyright */}
        <div className="text-[14px] text-center mt-[16px]">
          © 2024. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

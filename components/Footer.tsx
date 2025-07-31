"use client";
import { useState } from "react";
import { FaTwitter, FaFacebookF, FaGooglePlusG } from "react-icons/fa";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [status, setStatus] = useState("");

  const handleSubscribe = async () => {
    setError("");
    setStatus("");

    // Basic frontend email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    try {
      // Simulating an API call using setTimeout
      setStatus("Submitting...");
      await new Promise((resolve) => setTimeout(resolve, 1000)); // fake delay

      // Simulate random API response
      const success = Math.random() > 0.3; // 70% chance of success
      if (success) {
        setStatus("Subscribed successfully!");
        setEmail("");
      } else {
        throw new Error("Email already subscribed.");
      }
    } catch (err) {
      setError(err.message || "Something went wrong.");
    }
  };

  return (
    <footer className="bg-[#2b1700] text-white px-[24px] py-[40px]">
      <div className="space-y-[24px]">
        <div className="flex justify-end items-center space-x-[15px]">
          {/* Email Input */}
          <div className="relative w-[350px]">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-[95%] pl-[16px] py-[8px] rounded-[6px] text-black text-[14px] outline-none"
            />
            <button
              onClick={handleSubscribe}
              className="absolute w-[40%] right-[4px] top-1/2 -translate-y-1/2 bg-[#2b1700] text-[#ffffff] px-[12px] py-[6px] rounded-[6px] font-semibold text-[12px]"
            >
              Subscribe
            </button>
          </div>

          <span className="text-[14px]">Contacts</span>

          <div className="flex items-center space-x-[10px] text-[18px]">
            <FaTwitter className="hover:text-gray-300 cursor-pointer" />
            <FaFacebookF className="hover:text-gray-300 cursor-pointer" />
            <FaGooglePlusG className="hover:text-gray-300 cursor-pointer" />
          </div>
        </div>
        {/* Container to align error/status on the right */}
        <div className="flex justify-end space-x-2 mr-[250px]">
          {error && (
            <p className="text-[#f87171] text-[12px] whitespace-nowrap">
              {error}
            </p>
          )}
          {!error && status && (
            <p className="text-[#4ade80] text-[12px] whitespace-nowrap">
              {status}
            </p>
          )}
        </div>

        <hr className="border-t border-[#6d4e38]" />

        <nav className="flex flex-wrap justify-center gap-x-[24px] gap-y-[12px] text-[14px]">
          <a href="#">About</a>
          <a href="#">Our Strategy</a>
          <a href="#">Our Advantages</a>
          <a href="#">Social Responsibility</a>
          <a href="#">Our Services</a>
        </nav>

        <div className="text-[14px] text-center mt-[16px]">
          © 2024. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

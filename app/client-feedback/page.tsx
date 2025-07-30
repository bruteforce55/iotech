"use client";
import React, { useState } from "react";

const clientFeedback = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [inTransition, setInTransition] = useState(false);

  // Sample client data
  const clients = [
    {
      name: "Mohammed Saif",
      image: "/team4.jpg", // Image inside public/team folder
      comment: `"With the help of the hospitable staff of Al Safar and Partners, I was able to get my work done without any hassle. The help I received helped me a great deal to overcome the issues that I faced. I was always updated about my case and my queries never went unanswered."`,
      position: "CEO/Company",
    },
    {
      name: "Jane Doe",
      image: "/team2.png", // Image inside public/team folder
      comment: `"The team at Al Safar and Partners was incredibly helpful and professional. They provided clear and concise answers to all my questions. I highly recommend them!"`,
      position: "Manager/Company",
    },
    {
      name: "John Smith",
      image: "/team.png", // Image inside public/team folder
      comment: `"Excellent service! The team was always available and made the process smooth and efficient. Their expertise was evident in every interaction."`,
      position: "Founder/Company",
    },
  ];

  // Function to handle next client
  const nextClient = () => {
    setInTransition(true); // Trigger transition
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % clients.length);
      setInTransition(false); // End transition
    }, 500); // Match duration of transition time
  };

  // Function to handle previous client
  const prevClient = () => {
    setInTransition(true); // Trigger transition
    setTimeout(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + clients.length) % clients.length
      );
      setInTransition(false); // End transition
    }, 500); // Match duration of transition time
  };

  return (
    <section className="min-h-screen w-full flex items-center justify-center bg-[#2b1700]">
      <div className="w-full px-[8%] space-y-[2rem]">
        {/* First Row: Title */}
        <div className="text-white text-[2.5rem] font-bold">
          What our clients are saying
        </div>

        {/* Second Row: Details */}
        <div className="text-white text-[1.25rem]">
          Our clients range from individual investors to local, international,
          as well as fortune 500 companies.
        </div>

        {/* Third Row: Client Image, Comment, and Name */}
        <div className="flex w-full space-x-[2rem]">
          {/* Image Column */}
          <div className="w-[33.33%] flex justify-center items-center">
            <img
              src={clients[currentIndex].image}
              alt="client"
              className={`w-[8rem] h-[8rem] rounded-full object-cover transition-opacity duration-500 ${
                inTransition ? "opacity-0" : "opacity-100"
              }`}
            />
          </div>

          {/* Comments Column */}
          <div className="w-[66.66%] space-y-[1rem]">
            <div
              className={`text-white text-[1.25rem] italic transition-opacity duration-500 ${
                inTransition ? "opacity-0" : "opacity-100"
              }`}
            >
              {clients[currentIndex].comment}
            </div>
            <div
              className={`text-white text-[1.125rem] font-semibold transition-opacity duration-500 ${
                inTransition ? "opacity-0" : "opacity-100"
              }`}
            >
              {clients[currentIndex].name}
            </div>
            <div
              className={`text-white text-[0.875rem] transition-opacity duration-500 ${
                inTransition ? "opacity-0" : "opacity-100"
              }`}
            >
              {clients[currentIndex].position}
            </div>
          </div>
        </div>

        {/* Arrow Buttons */}
        <div className="flex justify-end space-x-[1rem] mt-[1rem]">
          <button
            onClick={prevClient}
            className="text-[#2b1700] text-[1.25rem] bg-[#fff5e1] h-[50px] w-[50px] rounded-full flex items-center justify-center
             hover:bg-[#f5f5dc] active:scale-95 transition duration-200 ease-in-out shadow-sm hover:shadow-md"
          >
            &lt; {/* Left Arrow */}
          </button>
          <button
            onClick={nextClient}
            className="text-[#2b1700] text-[1.25rem] bg-[#fff5e1] h-[50px] w-[50px] rounded-full flex items-center justify-center
             hover:bg-[#f6e6d7] active:scale-95 transition duration-200 ease-in-out shadow-sm hover:shadow-md"
          >
            &gt; {/* Right Arrow */}
          </button>
        </div>
      </div>
    </section>
  );
};

export default clientFeedback;

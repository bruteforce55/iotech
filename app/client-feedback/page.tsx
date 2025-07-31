"use client";
import React, { useState, useContext, useMemo } from 'react';
import { LanguageContext } from '@/contexts/languageContext';
import en from '@/messages/en.json';
import ar from '@/messages/ar.json';

const clientFeedback = () => {
const { language } = useContext(LanguageContext);
const t = useMemo(() => (language === 'ar' ? ar : en), [language]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [inTransition, setInTransition] = useState(false);

  const clients = t.clientFeedback.clients;

  const nextClient = () => {
    setInTransition(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % clients.length);
      setInTransition(false);
    }, 500);
  };

  const prevClient = () => {
    setInTransition(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + clients.length) % clients.length);
      setInTransition(false);
    }, 500);
  };

  return (
    <section className="min-h-screen w-full flex items-center justify-center bg-[#2b1700] rtl:text-right text-left">
      <div className="w-full px-[8%] space-y-[2rem]">
        {/* Title */}
        <div className="text-white text-[2.5rem] font-bold">
          {t.clientFeedback.title}
        </div>

        {/* Subtitle */}
        <div className="text-white text-[1.25rem]">
          {t.clientFeedback.subtitle}
        </div>

        {/* Feedback */}
        <div className="flex w-full space-x-[2rem] rtl:space-x-reverse">
          <div className="w-[33.33%] flex justify-center items-center">
            <img
              src={clients[currentIndex].image} // use dynamic path from JSON
              alt="client"
              className={`w-[8rem] h-[8rem] rounded-full object-cover transition-opacity duration-500 ${
                inTransition ? 'opacity-0' : 'opacity-100'
              }`}
            />
          </div>

          <div className="w-[66.66%] space-y-[1rem]">
            <div
              className={`text-white text-[1.25rem] italic transition-opacity duration-500 ${
                inTransition ? 'opacity-0' : 'opacity-100'
              }`}
            >
              “{clients[currentIndex].comment}”
            </div>
            <div
              className={`text-white text-[1.125rem] font-semibold transition-opacity duration-500 ${
                inTransition ? 'opacity-0' : 'opacity-100'
              }`}
            >
              {clients[currentIndex].name}
            </div>
            <div
              className={`text-white text-[0.875rem] transition-opacity duration-500 ${
                inTransition ? 'opacity-0' : 'opacity-100'
              }`}
            >
              {clients[currentIndex].position}
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-end space-x-[1rem] rtl:space-x-reverse mt-[1rem]">
          <button
            onClick={prevClient}
            className="text-[#2b1700] text-[1.25rem] bg-[#fff5e1] h-[50px] w-[50px] rounded-full flex items-center justify-center hover:bg-[#f5f5dc] active:scale-95 transition duration-200 ease-in-out shadow-sm hover:shadow-md"
          >
            &lt;
          </button>
          <button
            onClick={nextClient}
            className="text-[#2b1700] text-[1.25rem] bg-[#fff5e1] h-[50px] w-[50px] rounded-full flex items-center justify-center hover:bg-[#f6e6d7] active:scale-95 transition duration-200 ease-in-out shadow-sm hover:shadow-md"
          >
            &gt;
          </button>
        </div>
      </div>
    </section>
  );
};

export default clientFeedback;

"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import SearchToggle from "./SearchToggle";

export default function Header() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState("EN"); // default language
  const servicesRef = useRef();
  const langDropdownRef = useRef();

  const languages = ["EN", "AR"]; // example languages

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        servicesRef.current &&
        !servicesRef.current.contains(event.target) &&
        langDropdownRef.current &&
        !langDropdownRef.current.contains(event.target)
      ) {
        setIsServicesOpen(false);
        setIsLangDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close language dropdown when megamenu closes
  useEffect(() => {
    if (!isServicesOpen) {
      setIsLangDropdownOpen(false);
    }
  }, [isServicesOpen]);

  function scrollToOurTeam() {
  const element = document.getElementById('our-team');
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}


  return (
    <header
      className={`w-full shadow p-4 sticky top-0 z-50 transition-colors duration-300 ${
        isServicesOpen ? "bg-[#2b1700]" : "bg-black/80"
      }`}
    >
      <nav className="max-w-7xl mx-auto grid grid-cols-3 items-center relative">
        <div>
          <div className="flex items-center">
            <Link href="/">
              <Image
                src="/header-logo.svg"
                alt="Company Logo"
                width={120}
                height={50}
                priority
              />
            </Link>
          </div>
        </div>

        <ul className="flex justify-center space-x-6 list-none relative w-max">
          {[
            ["Home", "/"],
            ["About Us", "/about"],
            ["Services", null],
            ["Blog", "/blog"],
            ["Our Team", "scrollToOurTeam"],
            ["Contact Us", "/contact"],
          ].map(([label, href]) => (
            <li
              key={label}
              className="relative mx-[10px]"
              ref={label === "Services" ? servicesRef : null}
            >
              {label === "Services" ? (
                <>
                  <div
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className="cursor-pointer flex items-center space-x-1 text-white text-[15px] font-medium hover:text-gray-300 transition select-none"
                  >
                    <span>Services</span>
                    <svg
                      className={`w-4 h-4 transform transition-transform ${
                        isServicesOpen ? "rotate-180" : "rotate-0"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      width="15px"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  </div>

                  {isServicesOpen && (
                    <div className="absolute left-1/2 transform -translate-x-1/2 top-[150%] px-[20px] py-[20px] mt-2 w-[1400px] bg-[#2b1700] text-white shadow-lg p-6 grid grid-cols-4 gap-6 z-50 h-[250px]">
                      {/* Column 1 */}
                      <div className="space-y-2 text-center">
                        <Link
                          href="/services/legal-consultation"
                          className="block px-[15px] py-[15px] hover:underline text-[12px]"
                        >
                          Legal Consultation Services
                        </Link>
                        <Link
                          href="/services/foreign-investigation"
                          className="block px-[15px] py-[15px] hover:underline text-[12px]"
                        >
                          Foreign Investigation Services
                        </Link>
                        <Link
                          href="/services/contracts"
                          className="block px-[15px] py-[15px] hover:underline text-[12px]"
                        >
                          Contracts
                        </Link>
                        <Link
                          href="/services/notarization"
                          className="block px-[15px] py-[15px] hover:underline text-[12px]"
                        >
                          Notarization
                        </Link>
                        <Link
                          href="/services/insurance"
                          className="block px-[15px] py-[15px] hover:underline text-[12px]"
                        >
                          Insurance
                        </Link>
                      </div>

                      {/* Column 2 */}
                      <div className="space-y-2 text-center">
                        <Link
                          href="/services/defense"
                          className="block px-[15px] py-[15px] hover:underline text-[12px]"
                        >
                          Defense in All Cases
                        </Link>
                        <Link
                          href="/services/banks"
                          className="block px-[15px] py-[15px] hover:underline text-[12px]"
                        >
                          Banks and Financial Institution
                        </Link>
                        <Link
                          href="/services/governance"
                          className="block px-[15px] py-[15px] hover:underline text-[12px]"
                        >
                          Corporate Governance Services
                        </Link>
                        <Link
                          href="/services/liquidation"
                          className="block px-[15px] py-[15px] hover:underline text-[12px]"
                        >
                          Companies Liquidation
                        </Link>
                        <Link
                          href="/services/internal-regulation"
                          className="block px-[15px] py-[15px] hover:underline text-[12px]"
                        >
                          Internal Regulation for Companies
                        </Link>
                      </div>

                      {/* Column 3 */}
                      <div className="space-y-2 text-center">
                        <Link
                          href="/services/company-support"
                          className="block px-[15px] py-[15px] hover:underline text-[12px]"
                        >
                          Services for Companies and Institution
                        </Link>
                        <Link
                          href="/services/arbitration"
                          className="block px-[15px] py-[15px] hover:underline text-[12px]"
                        >
                          Arbitration
                        </Link>
                        <Link
                          href="/services/ip"
                          className="block px-[15px] py-[15px] hover:underline text-[12px]"
                        >
                          Intellectual Property
                        </Link>
                        <Link
                          href="/services/restructuring"
                          className="block px-[15px] py-[15px] hover:underline text-[12px]"
                        >
                          Corporate Restructuring and Reorganization
                        </Link>
                      </div>

                      {/* Column 4 */}
                      <div className="space-y-2 text-center">
                        <Link
                          href="/services/company-formation"
                          className="block px-[15px] py-[15px] hover:underline text-[12px]"
                        >
                          Establishing National and Foreign Companies
                        </Link>
                        <Link
                          href="/services/commercial-agencies"
                          className="block px-[15px] py-[15px] hover:underline text-[12px]"
                        >
                          Commercial Agencies
                        </Link>
                        <Link
                          href="/services/vision-2030"
                          className="block px-[15px] py-[15px] hover:underline text-[12px]"
                        >
                          Supporting Vision 2030
                        </Link>
                        <Link
                          href="/services/estates"
                          className="block px-[15px] py-[15px] hover:underline text-[12px]"
                        >
                          Estates
                        </Link>
                      </div>
                    </div>
                  )}
                </>
              ) : href === "scrollToOurTeam" ? (
                <span
                  onClick={() => {
                    const element = document.getElementById("our-team");
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                    setIsServicesOpen(false); // close services menu if open
                  }}
                  className="cursor-pointer text-white text-[15px] font-medium hover:text-gray-300 transition"
                >
                  {label}
                </span>
              ) : (
                <Link
                  href={href}
                  className="text-white text-[15px] font-medium hover:text-gray-300 transition"
                >
                  {label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        <div className="flex justify-around items-center space-x-4 whitespace-nowrap relative">
          {!isServicesOpen && <SearchToggle />}

          {isServicesOpen && (
            <div className="relative" ref={langDropdownRef}>
              <div
                onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                className="cursor-pointer flex items-center space-x-1 text-white text-[15px] font-medium hover:text-gray-300 transition select-none px-3 py-2 rounded"
              >
                <span>{currentLang}</span>
                <svg
                  className={`w-4 h-4 transform transition-transform ${
                    isLangDropdownOpen ? "rotate-180" : "rotate-0"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  width="15px"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </div>

              {isLangDropdownOpen && (
                <div
                  className="absolute mt-2 w-24 bg-white text-black rounded shadow-lg z-50"
                  style={{ backgroundColor: "white", color: "black" }}
                >
                  <ul
                    className="list-none m-0"
                    style={{ paddingInline: "10px" }}
                  >
                    {languages.map((lang) => (
                      <li key={lang} className="w-full">
                        <div
                          onClick={() => {
                            setCurrentLang(lang);
                            setIsLangDropdownOpen(false);
                          }}
                          className={`cursor-pointer w-full text-center px-2 py-2 hover:bg-gray-200 ${
                            currentLang === lang ? "font-bold bg-gray-300" : ""
                          }`}
                        >
                          {lang}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          <Link
            href="/appointment"
            className="bg-blue-600 text-white text-[15px] px-[16px] py-[8px] rounded-full hover:bg-blue-700 transition border border-white"
          >
            Book Appointment
          </Link>
        </div>
      </nav>
    </header>
  );
}

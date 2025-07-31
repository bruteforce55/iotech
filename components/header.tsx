"use client";

import Link from "next/link";
import { useState, useEffect, useRef, useContext } from "react";
import Image from "next/image";
import SearchToggle from "./SearchToggle";
import { LanguageContext } from '@/contexts/languageContext';
import en from '@/messages/en.json';
import ar from '@/messages/ar.json';

export default function Header() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState("EN");

  const servicesRef = useRef(null);
  const langDropdownRef = useRef(null);

  const languages = ["EN", "AR"];

  const { language, toggleLanguage } = useContext(LanguageContext);
  const t = language === "ar" ? ar : en;

  // Sync local currentLang state with language from context
  useEffect(() => {
    setCurrentLang(language.toUpperCase());
  }, [language]);

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        servicesRef.current &&
        !servicesRef.current.contains(event.target as Node) &&
        langDropdownRef.current &&
        !langDropdownRef.current.contains(event.target as Node)
      ) {
        setIsServicesOpen(false);
        setIsLangDropdownOpen(false);
      }
    };

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

  // Update document directionality and lang attribute based on currentLang
  useEffect(() => {
    document.documentElement.dir = currentLang === "AR" ? "rtl" : "ltr";
    document.documentElement.lang = currentLang === "AR" ? "ar" : "en";

    document.body.classList.remove("rtl", "ltr");
    document.body.classList.add(currentLang === "AR" ? "rtl" : "ltr");

    localStorage.setItem("preferredLang", currentLang);
  }, [currentLang]);

  // Load from localStorage on mount
  useEffect(() => {
    const storedLang = localStorage.getItem("preferredLang");
    if (storedLang === "AR" || storedLang === "EN") {
      setCurrentLang(storedLang);
    }
  }, []);

  return (
    <header
      className={`w-full shadow p-4 sticky top-0 z-50 transition-colors duration-300 ${
        isServicesOpen ? "bg-[#2b1700]" : "bg-black/80"
      }`}
    >
      <nav className="max-w-7xl mx-auto grid grid-cols-3 items-center relative">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/header-logo.svg"
              alt={t.header.logoAlt} 
              width={120}
              height={50}
              priority
            />
          </Link>
        </div>

        <ul className="flex justify-center space-x-6 list-none relative w-max">
          {[
            [t.header.home, "/"],
            [t.header.aboutUs, "/about"],
            [t.header.services, null],
            [t.header.blog, "/blog"],
            [t.header.ourTeam, "scrollToOurTeam"],
            [t.header.contactUs, "/contact"],
          ].map(([label, href]) => (
            <li
              key={label as string}
              className="relative mx-[10px]"
              ref={label === t.header.services ? servicesRef : null}
            >
              {label === t.header.services ? (
                <>
                  <div
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className="cursor-pointer flex items-center space-x-1 text-white text-[15px] font-medium hover:text-gray-300 transition select-none"
                  >
                    <span>{label}</span>
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
                    <div className="absolute left-1/2 rtl:text-right text-left transform -translate-x-1/2 top-[150%] px-[20px] py-[20px] mt-2 w-[1400px] bg-[#2b1700] text-white shadow-lg p-6 grid grid-cols-4 gap-6 z-50 h-[250px]">
                      {/* Column 1 */}
                      <div className="space-y-2 text-center">
                        <Link href="/services/legal-consultation" className="block rtl:text-right text-left px-[15px] py-[15px] hover:underline text-[12px]">
                          {t.header.servicesList.legalConsultation}
                        </Link>
                        <Link href="/services/foreign-investigation" className="block rtl:text-right text-left px-[15px] py-[15px] hover:underline text-[12px]">
                          {t.header.servicesList.foreignInvestigation}
                        </Link>
                        <Link href="/services/contracts" className="block rtl:text-right text-left px-[15px] py-[15px] hover:underline text-[12px]">
                          {t.header.servicesList.contracts}
                        </Link>
                        <Link href="/services/notarization" className="block rtl:text-right text-left px-[15px] py-[15px] hover:underline text-[12px]">
                          {t.header.servicesList.notarization}
                        </Link>
                        <Link href="/services/insurance" className="block rtl:text-right text-left px-[15px] py-[15px] hover:underline text-[12px]">
                          {t.header.servicesList.insurance}
                        </Link>
                      </div>

                      {/* Column 2 */}
                      <div className="space-y-2 text-center">
                        <Link href="/services/defense" className="block rtl:text-right text-left px-[15px] py-[15px] hover:underline text-[12px]">
                          {t.header.servicesList.defense}
                        </Link>
                        <Link href="/services/banks" className="block rtl:text-right text-left px-[15px] py-[15px] hover:underline text-[12px]">
                          {t.header.servicesList.banks}
                        </Link>
                        <Link href="/services/governance" className="block rtl:text-right text-left px-[15px] py-[15px] hover:underline text-[12px]">
                          {t.header.servicesList.governance}
                        </Link>
                        <Link href="/services/liquidation" className="block rtl:text-right text-left px-[15px] py-[15px] hover:underline text-[12px]">
                          {t.header.servicesList.liquidation}
                        </Link>
                        <Link href="/services/internal-regulation" className="block rtl:text-right text-left px-[15px] py-[15px] hover:underline text-[12px]">
                          {t.header.servicesList.internalRegulation}
                        </Link>
                      </div>

                      {/* Column 3 */}
                      <div className="space-y-2 text-center">
                        <Link href="/services/company-support" className="block rtl:text-right text-left px-[15px] py-[15px] hover:underline text-[12px]">
                          {t.header.servicesList.companySupport}
                        </Link>
                        <Link href="/services/arbitration" className="block rtl:text-right text-left px-[15px] py-[15px] hover:underline text-[12px]">
                          {t.header.servicesList.arbitration}
                        </Link>
                        <Link href="/services/ip" className="block rtl:text-right text-left px-[15px] py-[15px] hover:underline text-[12px]">
                          {t.header.servicesList.intellectualProperty}
                        </Link>
                        <Link href="/services/restructuring" className="block rtl:text-right text-left px-[15px] py-[15px] hover:underline text-[12px]">
                          {t.header.servicesList.restructuring}
                        </Link>
                      </div>

                      {/* Column 4 */}
                      <div className="space-y-2 text-center">
                        <Link href="/services/company-formation" className="block rtl:text-right text-left px-[15px] py-[15px] hover:underline text-[12px]">
                          {t.header.servicesList.companyFormation}
                        </Link>
                        <Link href="/services/commercial-agencies" className="block rtl:text-right text-left px-[15px] py-[15px] hover:underline text-[12px]">
                          {t.header.servicesList.commercialAgencies}
                        </Link>
                        <Link href="/services/vision-2030" className="block rtl:text-right text-left px-[15px] py-[15px] hover:underline text-[12px]">
                          {t.header.servicesList.vision2030}
                        </Link>
                        <Link href="/services/estates" className="block rtl:text-right text-left px-[15px] py-[15px] hover:underline text-[12px]">
                          {t.header.servicesList.estates}
                        </Link>
                      </div>
                    </div>
                  )}
                </>
              ) : href === "scrollToOurTeam" ? (
                <span
                  onClick={() => {
                    scrollToOurTeam();
                    setIsServicesOpen(false);
                  }}
                  className="cursor-pointer text-white text-[15px] font-medium hover:text-gray-300 transition"
                >
                  {label}
                </span>
              ) : (
                <Link
                  href={href as string}
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
                  />
                </svg>
              </div>

              {isLangDropdownOpen && (
                <div
                  className="absolute mt-2 w-24 bg-white text-black rounded shadow-lg z-50"
                  style={{ backgroundColor: "white", color: "black" }}
                >
                  <ul className="list-none m-0" style={{ paddingInline: "10px" }}>
                    {languages.map((lang) => (
                      <li key={lang} className="w-full">
                        <div
                          onClick={() => {
                            setCurrentLang(lang);
                            setIsLangDropdownOpen(false);
                            toggleLanguage();
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
            {t.header.bookAppointment}
          </Link>
        </div>
      </nav>
    </header>
  );
}

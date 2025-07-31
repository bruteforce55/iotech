"use client";

import { useState, useRef, useEffect } from "react";
import {
  MagnifyingGlassIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { services } from "@/data/servicesData";

export default function SearchToggle() {
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const showSearchInput = isHovered || isFocused;

  const filteredServices =
    query.length > 0
      ? services.filter(
          (service) =>
            service.title.toLowerCase().includes(query.toLowerCase()) ||
            service.description.toLowerCase().includes(query.toLowerCase())
        )
      : [];

  console.log("filteredServices", filteredServices);

  useEffect(() => {
    if (!showSearchInput) {
      setQuery("");
      if (inputRef.current) {
        inputRef.current.value = "";
      }
    }
  }, [showSearchInput]);

  useEffect(() => {
    if (showSearchInput && inputRef.current) {
      inputRef.current.focus();
    }
  }, [showSearchInput]);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setTimeout(() => setIsFocused(false), 150)}
      tabIndex={-1}
      className={`
       relative flex items-center rounded-full border-2
       border-gray-800 bg-gray-900
       transition-all duration-300 ease-in-out
       ${showSearchInput ? "max-w-[18rem] w-full" : "max-w-[40px] w-[40px]"}
     `}
      style={{ minWidth: "40px", minHeight: "40px", cursor: "pointer" }}
    >
      <input
        ref={inputRef}
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ color: "white" }}
        className={`
          bg-transparent text-white text-sm m-[10px]
          border-none outline-none
          transition-all duration-300 ease-in-out
          ${
            showSearchInput
              ? "opacity-100 pl-4 max-w-full"
              : "opacity-0 max-w-0"
          }
          w-full
        `}
      />

      <div
        role="button"
        tabIndex={0}
        className="
          p-2 bg-transparent text-white cursor-pointer transition-colors duration-200 select-none
        "
        style={{ position: "absolute", right: 0, margin: "10px 10px 6px 10px" }}
        onClick={() => {
          if (!showSearchInput) {
            setIsFocused(true);
            inputRef.current?.focus();
          } else {
            setIsFocused(false);
          }
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            if (!showSearchInput) {
              setIsFocused(true);
              inputRef.current?.focus();
            } else {
              setIsFocused(false);
            }
          }
        }}
      >
        {showSearchInput ? (
          <ArrowRightIcon
            className="w-[20px] h-[20px]"
            style={{ color: "#ffffff", stroke: "#ffffff" }}
            strokeWidth={2}
          />
        ) : (
          <MagnifyingGlassIcon
            className="w-[20px] h-[20px]"
            style={{ color: "#ffffff", stroke: "#ffffff" }}
            strokeWidth={2}
          />
        )}
      </div>

      {showSearchInput && query.length > 0 && filteredServices.length > 0 && (
        <ul
          className="absolute p-[10px] w-[100%] top-[100%] left-[0] right-[0] bg-[#2b1700] border border-[#ffffff] rounded-[5px] max-h-[15rem] overflow-auto list-none"
        >
          {filteredServices.map((service) => (
            <li key={service.slug}>
              <Link
                href={`/services/${service.slug}`}
                className="block px-4 py-2 text-[#ffffff] hover:bg-[#374151]"
                onClick={() => setIsFocused(false)}
              >
                {service.title}
              </Link>
            </li>
          ))}
        </ul>
      )}

      {showSearchInput && query.length > 0 && filteredServices.length === 0 && (
        <div
          className="absolute top-full left-0 right-0 bg-gray-900 border border-gray-800 rounded-b-md px-4 py-2 text-gray-400 z-50"
          style={{ marginTop: "4px" }}
        >
          No results found
        </div>
      )}
    </div>
  );
}

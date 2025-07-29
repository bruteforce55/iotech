"use client";

import { useState, useRef, useEffect } from "react";
import {
  MagnifyingGlassIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";

export default function SearchToggle() {
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const showSearchInput = isHovered || isFocused;

  useEffect(() => {
    if (!showSearchInput && inputRef.current) {
      inputRef.current.value = "";
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
      onBlur={() => setTimeout(() => setIsFocused(false), 100)} // prevent premature collapse
      tabIndex={-1}
      className={`
       relative flex items-center rounded-full border-2
       border-gray-800 bg-gray-900
       transition-all duration-300 ease-in-out overflow-hidden
       ${showSearchInput ? "max-w-[18rem] w-full" : "max-w-[40px] w-[40px]"}
     `}
      style={{ minWidth: "40px", minHeight: "40px", cursor: "pointer" }}
    >
      {/* Search Input */}
      <input
        ref={inputRef}
        type="text"
        placeholder="Search..."
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

      {/* Icon button */}
      <div
        role="button"
        tabIndex={0}
        className="
          p-2
          bg-transparent
          text-white
          cursor-pointer
          transition-colors duration-200
          select-none
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
    </div>
  );
}

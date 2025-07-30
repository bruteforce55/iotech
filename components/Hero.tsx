"use client";

import { useEffect, useState, useRef } from "react";

export default function Hero() {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [mediaItems, setMediaItems] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const fadeDuration = 500; // fade duration in ms

  useEffect(() => {
    async function fetchMedia() {
      try {
        const res = await fetch(
          "http://localhost:1337/api/medias?populate=videos"
        );
        const json = await res.json();

        const mediaEntry = json.data[0]; // First media entry
        if (!mediaEntry) return;

        setTitle(mediaEntry.title || "");
        setDetails(mediaEntry.details || "");
        setMediaItems(mediaEntry.videos || []);
      } catch (err) {
        console.error("Failed to fetch media", err);
      }
    }

    fetchMedia();
  }, []);

  useEffect(() => {
    if (mediaItems.length === 0) return;

    const interval = setInterval(() => {
      // Start fade out
      setFade(false);

      // After fadeDuration, switch video and fade back in
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % mediaItems.length);
        setFade(true);
      }, fadeDuration);
    }, 3000);

    return () => clearInterval(interval);
  }, [mediaItems]);

  if (mediaItems.length === 0) {
    return <div>Loading...</div>;
  }

  const currentMedia = mediaItems[currentIndex];
  const { id, mime, url } = currentMedia;
  const fullUrl = `http://localhost:1337${url}`;
  const isVideo = mime?.startsWith("video");

  return (
    <section className="min-h-screen flex items-center bg-transparent">
      {/* Left: Vertical indicators + Title and Details */}
      <div className="w-[1/2] flex px-[50px]">
        {/* Vertical Indicators */}
        <div className="flex flex-col space-y-[12px] mr-[16px] p-[50px]">
          {mediaItems.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-[15px] h-[15px] rounded-full border-2 duration-300
                ${
                  index === currentIndex
                    ? "bg-white border-white"
                    : "border-white bg-transparent hover:bg-white/50 hover:scale-150"
                }
              `}
              style={{ border: '2px solid white' }}
              aria-label={`Go to media item ${index + 1}`}
            />
          ))}
        </div>

        {/* Title and Details */}
        <div className="flex flex-col">
          <h2 className="text-4xl font-bold mb-4">{title}</h2>
          <p className="text-lg text-gray-30 text-[14px] w-[600px]">{details}</p>
        </div>
      </div>

      {/* Right: Single Video Carousel with fade */}
      <div className="w-1/2 flex p-[50px] ">
        <div
          className={`w-[450px] h-[300px] rounded-lg overflow-hidden bg-black/50 shrink-0`}
          style={{
            border: "3px solid white",
            opacity: fade ? 1 : 0,
            transition: `opacity ${fadeDuration}ms ease-in-out`,
          }}
        >
          {isVideo ? (
            <video
              key={id}
              src={fullUrl}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          ) : (
            <img
              key={id}
              src={fullUrl}
              alt="Hero Media"
              className="w-full h-full object-cover"
            />
          )}
        </div>
      </div>
    </section>
  );
}

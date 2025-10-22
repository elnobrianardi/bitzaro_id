'use client'

import { useState, useEffect } from "react";
import Image from "next/image";
import crypto1 from "../assets/crypto1.jpg"
import crypto2 from "../assets/crypto2.webp"
import crypto3 from "../assets/crypto3.jpg"

const slides = [
    crypto1,
    crypto2,
    crypto3
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide}
            alt={`Slide ${index + 1}`}
            fill
            className="object-cover"
            priority={index === 0}
          />
        </div>
      ))}

      {/* Pagination oval */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-1 w-8 rounded-full transition-all duration-300 ${
              index === current ? "bg-[#6842ff]" : "bg-white"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}

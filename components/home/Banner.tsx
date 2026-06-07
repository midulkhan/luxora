"use client";

import React, { useEffect, useState } from "react";

const slides = [
    "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=2200&auto=format&fit=crop",
  ];


function Banner() {
  
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[760px] overflow-hidden bg-slate-950">
      {slides.map((slide, index) => (
        <img
          key={index}
          src={slide}
          alt="Luxury hotel pool"
          className={`absolute inset-0 size-full object-cover transition-opacity duration-1000 ease-in-out ${
            index === activeSlide ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      <div className="absolute inset-0 bg-gradient-to-r from-[#071d3a]/95 via-[#071d3a]/60 to-black/10" />

      <div className="relative z-10 mx-auto flex min-h-[760px] max-w-7xl items-center px-5 pt-24 lg:px-8">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-amber-400">
            Welcome to Luxora
          </p>

          <h1 className=" text-4xl font-bold leading-[1] text-white sm:text-6xl lg:text-6xl">
            Stay in Style. <br />
            <span className="text-amber-400">Relax in Luxury.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-white/85">
            Handpicked hotels, unforgettable experiences and comfort that feels
            like home.
          </p>

          <div className="mt-8 mb-12 flex flex-col gap-4 sm:flex-row">
            <button className="rounded-xl bg-amber-500 px-7 py-4 font-semibold text-white shadow-xl shadow-amber-500/20 transition hover:bg-amber-600">
              Explore Hotels
            </button>

            <button className="rounded-xl border border-white/30 px-7 py-4 font-semibold text-white backdrop-blur transition hover:bg-white/10">
              Watch Video
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;

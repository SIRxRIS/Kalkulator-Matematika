import React from "react";
import Link from "next/link";
import { IoArrowBack } from "react-icons/io5";
import InfiniteScroll from "../assets/InfiniteScroll";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

const BangunDatar = () => {
  const items = [
    {
      content: (
        <Link
          href="/bangun-datar/persegi"
          className="w-full py-2 text-white hover:opacity-75 transition-all duration-300 font-poppins text-[20px] block text-center"
        >
          Persegi
        </Link>
      ),
    },
    {
      content: (
        <Link
          href="/bangun-datar/jajar-genjang"
          className="w-full py-2 text-white hover:opacity-75 transition-all duration-300 font-poppins text-[20px] block text-center"
        >
          Jajar Genjang
        </Link>
      ),
    },
    {
      content: (
        <Link
          href="/bangun-datar/persegi-panjang"
          className="w-full py-2 text-white hover:opacity-75 transition-all duration-300 font-poppins text-[20px] block text-center"
        >
          Persegi Panjang
        </Link>
      ),
    },
    {
      content: (
        <Link
          href="/bangun-datar/layang-layang"
          className="w-full py-2 text-white hover:opacity-75 transition-all duration-300 font-poppins text-[20px] block text-center"
        >
          Layang-layang
        </Link>
      ),
    },
    {
      content: (
        <Link
          href="/bangun-datar/persegi-panjang2"
          className="w-full py-2 text-white hover:opacity-75 transition-all duration-300 font-poppins text-[20px] block text-center"
        >
          Persegi Panjang II
        </Link>
      ),
    },
    {
      content: (
        <Link
          href="/bangun-datar/lingkaran"
          className="w-full py-2 text-white hover:opacity-75 transition-all duration-300 font-poppins text-[20px] block text-center"
        >
          Lingkaran
        </Link>
      ),
    },
    {
      content: (
        <Link
          href="/bangun-datar/belah-ketupat"
          className="w-full py-2 text-white hover:opacity-75 transition-all duration-300 font-poppins text-[20px] block text-center"
        >
          Belah Ketupat
        </Link>
      ),
    },
    {
      content: (
        <Link
          href="/bangun-datar/segitiga"
          className="w-full py-2 text-white hover:opacity-75 transition-all duration-300 font-poppins text-[20px] block text-center"
        >
          Segitiga
        </Link>
      ),
    },
    {
      content: (
        <Link
          href="/bangun-datar/trapesium"
          className="w-full py-2 text-white hover:opacity-75 transition-all duration-300 font-poppins text-[20px] block text-center"
        >
          Trapesium
        </Link>
      ),
    },
  ];

  return (
    <BackgroundBeamsWithCollision>
      <div className="min-h-screen w-full relative">
        {/* Navigation bar */}
        <nav className="flex justify-between items-center px-6 py-4 relative z-20">
          <div className="text-white font-bold text-[32px] font-poppins ml-[150px]">
            Kelompok 4
          </div>
          <div className="text-white font-bold text-[32px] font-poppins mr-[150px]">
            Website Kalkulator
          </div>
        </nav>

        {/* Back button */}
        <Link
          href="/home"
          className="absolute top-4 left-4 z-30 text-white text-5xl"
        >
          <IoArrowBack />
        </Link>

        {/* Main content with InfiniteScroll */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div style={{ height: "100vh", width: "100%", position: "relative" }}>
            <InfiniteScroll
              items={items}
              isTilted={true}
              tiltDirection="left"
              autoplay={true}
              autoplaySpeed={0.1}
              autoplayDirection="down"
              pauseOnHover={true}
            />
          </div>
        </div>
      </div>
    </BackgroundBeamsWithCollision>
  );
};

export default BangunDatar;

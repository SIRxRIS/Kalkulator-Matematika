import React from "react";
import Link from "next/link";
import { IoArrowBack } from "react-icons/io5";
import InfiniteScroll from './InfiniteScroll';

const BangunRuang = () => {
  const items = [
    { 
      content: (
        <Link href="/bangun-ruang/kubus" className="w-full py-2 text-white hover:opacity-75 transition-all duration-300 font-poppins text-[20px] block text-center">
          Kubus
        </Link>
      )
    },
    {
      content: (
        <Link href="/bangun-ruang/limas-segitiga" className="w-full py-2 text-white hover:opacity-75 transition-all duration-300 font-poppins text-[20px] block text-center">
          Limas Segitiga
        </Link>
      )
    },
    {
      content: (
        <Link href="/bangun-ruang/balok" className="w-full py-2 text-white hover:opacity-75 transition-all duration-300 font-poppins text-[20px] block text-center">
          Balok
        </Link>
      )
    },
    {
      content: (
        <Link href="/bangun-ruang/tabung" className="w-full py-2 text-white hover:opacity-75 transition-all duration-300 font-poppins text-[20px] block text-center">
          Tabung
        </Link>
      )
    },
    {
      content: (
        <Link href="/bangun-ruang/limas-segiempat" className="w-full py-2 text-white hover:opacity-75 transition-all duration-300 font-poppins text-[20px] block text-center">
          Limas Segiempat
        </Link>
      )
    },
    {
      content: (
        <Link href="/bangun-ruang/tabung2" className="w-full py-2 text-white hover:opacity-75 transition-all duration-300 font-poppins text-[20px] block text-center">
          Tabung II
        </Link>
      )
    },
    {
      content: (
        <Link href="/bangun-ruang/kerucut" className="w-full py-2 text-white hover:opacity-75 transition-all duration-300 font-poppins text-[20px] block text-center">
          Kerucut
        </Link>
      )
    },
    {
      content: (
        <Link href="/bangun-ruang/prisma-segitiga" className="w-full py-2 text-white hover:opacity-75 transition-all duration-300 font-poppins text-[20px] block text-center">
          Prisma Segitiga
        </Link>
      )
    },
    {
      content: (
        <Link href="/bangun-ruang/bola" className="w-full py-2 text-white hover:opacity-75 transition-all duration-300 font-poppins text-[20px] block text-center">
          Bola
        </Link>
      )
    }
  ];

  return (
    <div className="min-h-screen w-full bg-black relative">
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
      <Link href="/home" className="absolute top-4 left-4 z-30 text-white text-5xl">
        <IoArrowBack />
      </Link>

      {/* Main content with InfiniteScroll */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div style={{ height: '100vh', width: '100%', position: 'relative' }}>
          <InfiniteScroll
            items={items}
            isTilted={true}
            tiltDirection='left'
            autoplay={true}
            autoplaySpeed={0.1}
            autoplayDirection="down"
            pauseOnHover={true}
          />
        </div>
      </div>
    </div>
  );
};

export default BangunRuang;

import React from "react";
import Link from "next/link";
import { IoArrowBack } from "react-icons/io5"; // Import ikon

const BangunRuang = () => {
  return (
    <div className="min-h-screen w-full pattern-background relative">
      {/* Tombol Kembali */}
      <Link
        href="/home"
        className="absolute top-4 left-4 z-30 text-white text-5xl"
      >
        <IoArrowBack />
      </Link>

      {/* Main content wrapper */}
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                      w-[90%] max-w-2xl bg-[#F7E581] rounded-xl p-6 shadow-lg"
      >
        <h1 className="text-black text-center text-2xl font-poppins font-bold mb-6">
          Kalkulator Bangun Ruang
        </h1>

        {/* Grid layout for buttons */}
        <div className="grid grid-cols-2 gap-4">
          <Link href="/bangun-ruang/kubus">
            <button
              className="w-full py-2 bg-[#5AA1FF] text-white rounded-full 
                             hover:bg-[#4891f0] transition-all duration-300 
                             font-poppins text-[20px] shadow-xl"
            >
              Kubus
            </button>
          </Link>

          <Link href="/bangun-ruang/limas-segitiga">
            <button
              className="w-full py-2 bg-[#5AA1FF] text-white rounded-full 
                             hover:bg-[#4891f0] transition-all duration-300 
                             font-poppins text-[20px] shadow-xl"
            >
              Limas Segitiga
            </button>
          </Link>

          <Link href="/bangun-ruang/balok">
            <button
              className="w-full py-2 bg-[#5AA1FF] text-white rounded-full 
                             hover:bg-[#4891f0] transition-all duration-300 
                             font-poppins text-[20px] shadow-xl"
            >
              Balok
            </button>
          </Link>

          <Link href="/bangun-ruang/tabung">
            <button
              className="w-full py-2 bg-[#5AA1FF] text-white rounded-full 
                             hover:bg-[#4891f0] transition-all duration-300 
                             font-poppins text-[20px] shadow-xl"
            >
              Tabung
            </button>
          </Link>

          <Link href="/bangun-ruang/limas-segiempat">
            <button
              className="w-full py-2 bg-[#5AA1FF] text-white rounded-full 
                             hover:bg-[#4891f0] transition-all duration-300 
                             font-poppins text-[20px] shadow-xl"
            >
              Limas Segiempat
            </button>
          </Link>

          <Link href="/bangun-ruang/tabung">
            <button
              className="w-full py-2 bg-[#5AA1FF] text-white rounded-full 
                             hover:bg-[#4891f0] transition-all duration-300 
                             font-poppins text-[20px] shadow-xl"
            >
              Tabung II
            </button>
          </Link>

          <Link href="/bangun-ruang/kerucut">
            <button
              className="w-full py-2 bg-[#5AA1FF] text-white rounded-full 
                             hover:bg-[#4891f0] transition-all duration-300 
                             font-poppins text-[20px] shadow-xl"
            >
              Kerucut
            </button>
          </Link>

          <Link href="/bangun-ruang/prisma-segitiga">
            <button
              className="w-full py-2 bg-[#5AA1FF] text-white rounded-full 
                             hover:bg-[#4891f0] transition-all duration-300 
                             font-poppins text-[20px] shadow-xl"
            >
              Prisma Segitiga
            </button>
          </Link>

          <Link href="/bangun-ruang/bola">
            <button
              className="w-full py-2 bg-[#5AA1FF] text-white rounded-full 
                             hover:bg-[#4891f0] transition-all duration-300 
                             font-poppins text-[20px] shadow-xl"
            >
              Bola
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BangunRuang;

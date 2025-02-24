import React from "react";
import Link from "next/link";
import { IoArrowBack } from "react-icons/io5"; // Import ikon

const BangunDatar = () => {
  return (
    <div className="min-h-screen w-full pattern-background relative">
      {/* Tombol Kembali */}
      <Link
        href="/home"
        className="absolute top-4 left-4 z-30 text-white text-6xl"
      >
        <IoArrowBack />
      </Link>

      {/* Main content wrapper */}
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                      w-[90%] max-w-2xl bg-[#F7E581] rounded-xl p-6 shadow-lg"
      >
        <h1 className="text-black text-center text-2xl font-poppins font-bold mb-6">
          Kalkulator Bangun Datar
        </h1>

        {/* Grid layout for buttons */}
        <div className="grid grid-cols-2 gap-4">
          <Link href="/bangun-datar/persegi">
            <button
              className="w-full py-2 bg-[#5AA1FF] text-white rounded-full 
                             hover:bg-[#4891f0] transition-all duration-300 
                             font-poppins text-sm"
            >
              Persegi
            </button>
          </Link>

          <Link href="/bangun-datar/jajar-genjang">
            <button
              className="w-full py-2 bg-[#5AA1FF] text-white rounded-full 
                             hover:bg-[#4891f0] transition-all duration-300 
                             font-poppins text-sm"
            >
              Jajar Genjang
            </button>
          </Link>

          <Link href="/bangun-datar/persegi-panjang">
            <button
              className="w-full py-2 bg-[#5AA1FF] text-white rounded-full 
                             hover:bg-[#4891f0] transition-all duration-300 
                             font-poppins text-sm"
            >
              Persegi Panjang
            </button>
          </Link>

          <Link href="/bangun-datar/layang-layang">
            <button
              className="w-full py-2 bg-[#5AA1FF] text-white rounded-full 
                             hover:bg-[#4891f0] transition-all duration-300 
                             font-poppins text-sm"
            >
              Layang-layang
            </button>
          </Link>

          <Link href="/bangun-datar/lingkaran">
            <button
              className="w-full py-2 bg-[#5AA1FF] text-white rounded-full 
                             hover:bg-[#4891f0] transition-all duration-300 
                             font-poppins text-sm"
            >
              Lingkaran
            </button>
          </Link>

          <Link href="/bangun-datar/belah-ketupat">
            <button
              className="w-full py-2 bg-[#5AA1FF] text-white rounded-full 
                             hover:bg-[#4891f0] transition-all duration-300 
                             font-poppins text-sm"
            >
              Belah Ketupat
            </button>
          </Link>

          <Link href="/bangun-datar/segitiga">
            <button
              className="w-full py-2 bg-[#5AA1FF] text-white rounded-full 
                             hover:bg-[#4891f0] transition-all duration-300 
                             font-poppins text-sm"
            >
              Segitiga
            </button>
          </Link>

          <Link href="/bangun-datar/trapesium">
            <button
              className="w-full py-2 bg-[#5AA1FF] text-white rounded-full 
                             hover:bg-[#4891f0] transition-all duration-300 
                             font-poppins text-sm"
            >
              Trapesium
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BangunDatar;

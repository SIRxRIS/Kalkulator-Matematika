import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Intro = () => {
  return (
    <div className="min-h-screen w-full pattern-background relative overflow-hidden">
      {/* Navigation */}
      <nav className="flex px-[6%] py-[2%] items-center justify-start relative z-20">
        <h2 className="text-white text-2xl font-bold font-poppins">
          Kelompok 4
        </h2>
      </nav>

      {/* Main content */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] text-center z-20">
        <h1 className="text-white text-5xl md:text-6xl font-poppins mb-4">
          Website Kalkulator
        </h1>

        <p className="text-white font-medium text-[20px] mb-5">
          Selamat datang di website kami, <br />
          tempat Anda dapat dengan mudah menghitung <br /> Luas dan Keliling
          Bangun Datar serta Luas dan Volume Bangun Ruang!
        </p>

        <Link href="/home">
        <motion.button
        className="inline-block px-8 py-3 font-bold text-[18px] text-white border border-white rounded-full 
        hover:bg-[#8CBEFF] hover:border-[#8CBEFF] transition-all duration-50
        cursor-pointer"
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.95 }}
> 
          
            Masuk
          
          </motion.button>
        </Link>
      </div>
    </div>
  );
};

export default Intro;

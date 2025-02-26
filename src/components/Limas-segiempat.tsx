"use client";

import { useState } from "react";
import Link from "next/link";
import { IoArrowBack } from "react-icons/io5";

export default function PyramidCalculator() {
  const [base, setBase] = useState(0);
  const [height, setHeight] = useState(0);
  const [volume, setVolume] = useState(0);

  const calculate = () => {
    const vol = (1 / 3) * base * base * height;
    setVolume(vol);
  };

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
      <Link href="/bangun-ruang" className="absolute top-4 left-4 z-30 text-white text-5xl">
        <IoArrowBack />
      </Link>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-2xl">
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-xl">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Kalkulator Limas Segi Empat</h2>
          
          {/* Formula display */}
          <div className="mb-6 text-white text-center">
            <p className="text-lg">Rumus Volume: V = 1/3 × s² × t</p>
          </div>

          <div className="space-y-4">
            <input 
              type="number" 
              placeholder="Panjang Alas" 
              onChange={(e) => setBase(Number(e.target.value))}
              className="w-full p-2 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/50"
            />
            <input 
              type="number" 
              placeholder="Tinggi" 
              onChange={(e) => setHeight(Number(e.target.value))}
              className="w-full p-2 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/50"
            />
            <button 
              onClick={calculate}
              className="w-full py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors"
            >
              Hitung
            </button>
            {volume > 0 && (
              <div className="text-white text-center p-4 bg-white/5 rounded-lg">
                Volume: {volume.toFixed(2)} cm³
              </div>
            )}
          </div>
        </div>
        
        {/* Added watermark */}
        <div className="text-white text-center mt-4 opacity-50">
          by Asrar sonic
        </div>
      </div>
    </div>
  );
}

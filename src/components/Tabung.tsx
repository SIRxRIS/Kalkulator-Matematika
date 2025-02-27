import React, { useState } from "react";
import Link from "next/link";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import SpotlightCard from "../assets/SpotlightCard";
import TrueFocus from "@/assets/TrueFocus";

const KalkulatorTabung = () => {
  const [jariJari, setJariJari] = useState("");
  const [tinggi, setTinggi] = useState("");
  const [hasil, setHasil] = useState({ luasAlas: "", volume: "" });

  const hitungTabung = () => {
    const r = parseFloat(jariJari);
    const t = parseFloat(tinggi);

    if (!isNaN(r) && !isNaN(t)) {
      const luasAlas = Math.PI * r * r;
      const volume = luasAlas * t;
      setHasil({
        luasAlas: luasAlas.toFixed(2),
        volume: volume.toFixed(2),
      });
    }
  };

  return (
    <BackgroundBeamsWithCollision>
      {/* Header with back button and names */}
      <div className="flex justify-between items-center p-4 fixed top-0 left-0 right-0 z-30">
        {/* Bagian Kiri */}
        <div className="flex items-center gap-4">
          <Link href="/bangun-datar">
            <IoArrowBack className="text-white text-5xl" />
          </Link>
          <span className="text-white font-bold text-[32px] font-poppins ml-[100px]">
            Kelompok 4
          </span>
        </div>

        {/* Bagian Kanan */}
        <div className="flex items-center gap-4">
          <div className="mr-[100px]">
            <TrueFocus
              sentence="Faris Hazim Supriyadi"
              manualMode={false}
              blurAmount={2}
              borderColor="red"
              animationDuration={3}
              pauseBetweenAnimations={2}
            />
          </div>
          <Link href="/bangun-datar/persegi-panjang">
            <IoArrowForward className="text-white text-5xl" />
          </Link>
        </div>
      </div>

      {/* Main Container - Centered Both Vertically and Horizontally */}
      <div className="min-h-screen w-full flex items-center justify-center">
        <SpotlightCard
          className="w-[90%] max-w-2xl p-6 mt-16"
          spotlightColor="rgba(90, 161, 255, 0.2)"
        >
          <h1 className="text-center text-[28px] text-white font-poppins font-bold mb-6">
            Kalkulator Tabung
          </h1>

          {/* Rumus Section */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <h2 className="font-poppins text-white text-[24px] font-semibold mb-2">
                Rumus Luas Alas
              </h2>
              <div className="bg-white/10 backdrop-blur-sm text-white p-2 rounded text-center font-poppins border border-white/20">
                π × r²
              </div>
            </div>
            <div>
              <h2 className="font-poppins text-[24px] text-white font-semibold mb-2">
                Rumus Volume
              </h2>
              <div className="bg-white/10 backdrop-blur-sm p-2 rounded text-white text-center font-poppins border border-white/20">
                Luas Alas × Tinggi
              </div>
            </div>
          </div>

          {/* Input Fields */}
          <div className="space-y-4 mb-6">
            <div>
              <label className="block font-poppins text-[24px] text-white font-semibold mb-2">
                Jari-Jari (r)
              </label>
              <input
                type="number"
                value={jariJari}
                onChange={(e) => setJariJari(e.target.value)}
                className="w-full p-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 font-poppins"
                placeholder="Masukkan jari-jari (cm)"
              />
            </div>
            <div>
              <label className="block text-white text-[24px] font-poppins font-semibold mb-2">
                Tinggi (t)
              </label>
              <input
                type="number"
                value={tinggi}
                onChange={(e) => setTinggi(e.target.value)}
                className="w-full p-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 font-poppins"
                placeholder="Masukkan tinggi (cm)"
              />
            </div>
          </div>

          {/* Calculate Button */}
          <div className="flex justify-center">
            <button
              onClick={hitungTabung}
              className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
            >
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-[20px] font-medium text-white backdrop-blur-3xl">
                Hitung
              </span>
            </button>
          </div>

          {/* Results */}
          <div className="space-y-2">
            <div>
              <label className="block text-white font-poppins font-semibold mb-1">
                Luas Alas
              </label>
              <input
                type="text"
                value={hasil.luasAlas}
                readOnly
                className="w-full p-2 rounded text-white font-poppins bg-white/10 border border-white/20"
              />
            </div>
            <div>
              <label className="block font-poppins text-white font-semibold mb-1">
                Volume
              </label>
              <input
                type="text"
                value={hasil.volume}
                readOnly
                className="w-full p-2 rounded text-white font-poppins bg-white/10 border border-white/20"
              />
            </div>
          </div>
        </SpotlightCard>
      </div>
    </BackgroundBeamsWithCollision>
  );
};

export default KalkulatorTabung;

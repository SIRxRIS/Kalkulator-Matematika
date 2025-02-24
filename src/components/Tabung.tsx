import React, { useState } from "react";
import Link from "next/link";
import { IoArrowBack } from "react-icons/io5";

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
    <div className="min-h-screen w-full pattern-background relative">
      {/* Header with back button and names */}
      <div className="flex justify-between items-center p-4 absolute top-0 left-0 right-0 z-30">
        <div className="flex items-center gap-4 ml-[100px]">
          <Link href="/bangun-ruang">
            <IoArrowBack className="absolute top-4 left-4 z-30 text-white text-6xl" />
          </Link>
          <span className="text-white font-bold text-[32px] font-poppins ml-[50px]">
            Kelompok 4
          </span>
        </div>
        <span className="text-white font-bold text-[32px] font-poppins mr-[150px]">
          Faris Hazim Supriyadi
        </span>
      </div>

      {/* Main Calculator Card */}
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                      w-[90%] max-w-2xl bg-[#F7E581] rounded-xl p-6 shadow-lg"
      >
        <h1 className="text-center text-[28px] text-black font-poppins font-bold mb-6">
          Kalkulator Tabung
        </h1>

        {/* Rumus Section */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <h2 className="font-poppins text-black text-[24px] font-semibold mb-2">
              Rumus Luas Alas
            </h2>
            <div className="bg-white text-black p-2 rounded text-center font-poppins">
              π × r²
            </div>
          </div>
          <div>
            <h2 className="font-poppins text-[24px] text-black font-semibold mb-2">
              Rumus Volume
            </h2>
            <div className="bg-white p-2 rounded text-black text-center font-poppins">
              Luas Alas × Tinggi
            </div>
          </div>
        </div>

        {/* Input Fields */}
        <div className="space-y-4 mb-6">
          <div>
            <label className="block font-poppins text-[24px] text-black font-semibold mb-2">
              Jari-Jari (r)
            </label>
            <input
              type="number"
              value={jariJari}
              onChange={(e) => setJariJari(e.target.value)}
              className="w-full p-2 text-black rounded font-poppins"
              placeholder="Masukkan jari-jari"
            />
          </div>
          <div>
            <label className="block text-black text-[24px] font-poppins font-semibold mb-2">
              Tinggi (t)
            </label>
            <input
              type="number"
              value={tinggi}
              onChange={(e) => setTinggi(e.target.value)}
              className="w-full p-2 rounded text-black font-poppins"
              placeholder="Masukkan tinggi"
            />
          </div>
        </div>

        {/* Calculate Button */}
        <div className="flex justify-center">
          <button
            onClick={hitungTabung}
            className="w-[130px] py-3 bg-[#5AA1FF] text-white rounded-full 
                       hover:bg-[#4891f0] transition-all duration-300 
                       font-poppins text-[20px] text-sm mb-6"
          >
            Hitung
          </button>
        </div>

        {/* Results */}
        <div className="space-y-2">
          <div>
            <label className="block text-black font-poppins font-semibold mb-1">
              Luas Alas
            </label>
            <input
              type="text"
              value={hasil.luasAlas}
              readOnly
              className="w-full p-2 rounded text-black font-poppins bg-white"
            />
          </div>
          <div>
            <label className="block font-poppins text-black font-semibold mb-1">
              Volume
            </label>
            <input
              type="text"
              value={hasil.volume}
              readOnly
              className="w-full p-2 rounded text-black font-poppins bg-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default KalkulatorTabung;

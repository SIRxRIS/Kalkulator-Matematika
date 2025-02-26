import React, { useState } from "react";
import Link from "next/link";
import { IoArrowBack, IoArrowForward } from "react-icons/io5"; // Import ikon

const PersegiPanjang = () => {
  const [panjang, setPanjang] = useState("");
  const [lebar, setLebar] = useState("");
  const [hasil, setHasil] = useState({ luas: "", keliling: "" });

  const hitungPersegiPanjang = () => {
    const p = parseFloat(panjang);
    const l = parseFloat(lebar);

    if (!isNaN(p) && !isNaN(l)) {
      const luas = p * l;
      const keliling = 2 * (p + l);
      setHasil({
        luas: luas.toFixed(2),
        keliling: keliling.toFixed(2),
      });
    }
  };

  return (
    <div className="min-h-screen w-full pattern-background relative">
      {/* Header with back button and names */}
      <div className="flex justify-between items-center p-4 absolute top-0 left-0 right-0 z-30">
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
          <span className="text-white font-bold text-[32px] font-poppins mr-[100px]">
            Faris Hazim Supriyadi
          </span>
          <Link href="/bangun-ruang/tabung">
            <IoArrowForward className="text-white text-5xl" />
          </Link>
        </div>
      </div>

      {/* Main Calculator Card */}
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                      w-[90%] max-w-2xl  rounded-xl p-6 shadow-2xl bg-[#F7E581]"
      >
        <h1 className="text-center text-[28px] text-black font-poppins font-bold mb-6">
          Kalkulator Persegi Panjang
        </h1>

        {/* Rumus Section */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <h2 className="font-poppins text-black text-[24px] font-semibold mb-2">
              Rumus Luas
            </h2>
            <div className="bg-white text-[16] text-black p-2 rounded text-center font-poppins outline outline-1 outline-black">
              Panjang × Lebar
            </div>
          </div>
          <div>
            <h2 className="font-poppins text-[24px] text-black font-semibold mb-2">
              Rumus Keliling
            </h2>
            <div className="bg-white p-2 rounded text-[16px] text-black text-center font-poppins outline outline-1 outline-black">
              (2 × Panjang) + (2 × Lebar)
            </div>
          </div>
        </div>

        {/* Input Fields */}
        <div className="space-y-4 mb-6">
          <div>
            <label className="block font-poppins text-[24px] text-black font-semibold mb-2">
              Panjang
            </label>
            <input
              type="number"
              value={panjang}
              onChange={(e) => setPanjang(e.target.value)}
              className="w-full p-2 text-black rounded font-poppins"
              placeholder="Masukkan panjang (cm)"
            />
          </div>
          <div>
            <label className="block text-black text-[24px] font-poppins font-semibold mb-2">
              Lebar
            </label>
            <input
              type="number"
              value={lebar}
              onChange={(e) => setLebar(e.target.value)}
              className="w-full p-2 rounded text-black font-poppins"
              placeholder="Masukkan lebar (cm)"
            />
          </div>
        </div>

        {/* Calculate Button */}
        <div className="flex justify-center">
          <button
            onClick={hitungPersegiPanjang}
            className="w-[130px] py-3 bg-[#5AA1FF] text-white rounded-full 
                       hover:bg-[#4891f0] transition-all duration-300 
                       font-poppins text-[20px] text-sm mb-6 shadow-xl"
          >
            Hitung
          </button>
        </div>

        {/* Results */}
        <div className="space-y-2">
          <div>
            <label className="block text-black font-poppins font-semibold mb-1">
              Luas
            </label>
            <input
              type="text"
              value={hasil.luas}
              readOnly
              className="w-full p-2 rounded text-black font-poppins bg-white outline outline-1 outline-black"
            />
          </div>
          <div>
            <label className="block font-poppins text-black font-semibold mb-1">
              Keliling
            </label>
            <input
              type="text"
              value={hasil.keliling}
              readOnly
              className="w-full p-2 rounded text-black font-poppins bg-white outline outline-1 outline-black"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersegiPanjang;

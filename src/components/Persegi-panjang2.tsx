import React, { useState } from "react";
import Link from "next/link";
import { IoArrowBack,IoClose } from "react-icons/io5";

const PersegiPanjang2 = () => {
  const [panjang, setPanjang] = useState<string>("");
  const [lebar, setLebar] = useState<string>("");
  const [satuan, setSatuan] = useState<string>("cm");
  const [luas, setLuas] = useState<number | null>(null);
  const [keliling, setKeliling] = useState<number | null>(null);
  const [showRumus, setShowRumus] = useState(false);
  const [showPerkalian, setShowPerkalian] = useState(false);

  const hitungLuasKeliling = () => {
    const p = parseFloat(panjang);
    const l = parseFloat(lebar);
    if (!isNaN(p) && !isNaN(l)) {
      setLuas(p * l);
      setKeliling(2 * (p + l));
    }
  };

  return (
    <div className="min-h-screen w-full pattern-background relative flex items-center justify-center">
      <Link href="/home" className="absolute top-4 left-4 z-30 text-white text-6xl">
        <IoArrowBack />
      </Link>
      
      <div className="absolute top-8 left-15 text-white text-4xl font-bold">Kelompok 4</div>
      <div className="absolute top-6 right-8 text-white text-xl font-bold">Achmad Qaafi Mulyan Misbah</div>

      <div className="w-[90%] max-w-2xl bg-[#FFD95F] rounded-xl p-6 shadow-2xl text-center relative">
        <h1 className="text-black text-2xl font-poppins font-bold mb-4">Kalkulator Persegi Panjang</h1>
        <p className="text-black mb-2 font-semibold">Masukkan Nilai</p>
        
        <label className="block text-left font-semibold">Panjang:</label>
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Masukkan Panjang"
            value={panjang}
            onChange={(e) => setPanjang(e.target.value)}
            className="w-full p-3 mb-4 border border-gray-400 rounded-lg shadow-md"
          />
          <select value={satuan} onChange={(e) => setSatuan(e.target.value)} className="ml-2 p-2 border border-gray-400 rounded-lg">
            <option value="cm">cm</option>
            <option value="m">m</option>
          </select>
        </div>
        
        <label className="block text-left font-semibold">Lebar:</label>
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Masukkan Lebar"
            value={lebar}
            onChange={(e) => setLebar(e.target.value)}
            className="w-full p-3 mb-4 border border-gray-400 rounded-lg shadow-md"
          />
          <select value={satuan} onChange={(e) => setSatuan(e.target.value)} className="ml-2 p-2 border border-gray-400 rounded-lg">
            <option value="cm">cm</option>
            <option value="m">m</option>
          </select>
        </div>
        
        <button
          onClick={hitungLuasKeliling}
          className="w-full py-3 bg-[#493D9E] text-white font-bold rounded-full hover:bg-[#155E95] transition-all duration-300 font-poppins text-lg mb-4 shadow-md "
        >
          Hitung
        </button>

        <div className="border border-gray-400 p-4 bg-white rounded-lg shadow-md text-left">
          <p className="font-semibold">Hasil Luas: {luas !== null ? `${luas} ${satuan}²` : "-"}</p>
          <p className="font-semibold">Hasil Keliling: {keliling !== null ? `${keliling} ${satuan}` : "-"}</p>
        </div>

        <div className="flex justify-between mt-4">
          <div className="relative w-[48%]">
            <div
              className="py-3 bg-[#D70654] text-white rounded-full font-poppins cursor-pointer text-center shadow-md hover:bg-[#B90545] transition-all font-bold"
              onClick={() => setShowRumus(!showRumus)}
            >
              Lihat Rumus
            </div>
            {showRumus && (
              <div className="absolute w-full mt-2 p-3 bg-white border border-gray-400 rounded-lg text-left shadow-md animate-fade-in">
                <p><strong>Rumus Luas:</strong> Panjang x Lebar</p>
                <p><strong>Rumus Keliling:</strong> 2 x (Panjang + Lebar)</p>
              </div>
            )}
          </div>

          <div className="w-[48%]">
            <div
              className="py-3 bg-[#D70654] text-white rounded-full font-poppins cursor-pointer text-center shadow-md hover:bg-[#B90545] transition-all font-bold"
              onClick={() => setShowPerkalian(true)}
            >
              Lihat Hasil Perkalian
            </div>
          </div>
        </div>
      </div>

      {showPerkalian && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-[90%] max-w-lg relative shadow-2xl">
            <button
              className="absolute top-2 right-2 text-black text-xl"
              onClick={() => setShowPerkalian(false)}
            >
              <IoClose />
            </button>
            <h2 className="text-xl font-bold text-center mb-4">Hasil Perkalian</h2>
            <div className="flex flex-col space-y-2">
              <p>Panjang x Lebar = {panjang} x {lebar} <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= {luas}</p>
              <p>2 x (Panjang + Lebar) = 2 x ({panjang} + {lebar}) <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= {keliling}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};



export default PersegiPanjang2;

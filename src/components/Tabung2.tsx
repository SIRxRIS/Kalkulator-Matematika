import React, { useState } from "react";
import Link from "next/link";
import { IoArrowBack, IoClose } from "react-icons/io5";

// Fungsi formatNumber untuk memformat angka dengan titik sebagai pemisah ribuan dan koma sebagai pemisah desimal
const formatNumber = (num: number): string => {
  return num.toLocaleString("id-ID", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });
};

const Tabung2 = () => {
  const [jariJari, setJariJari] = useState<string>("");
  const [tinggi, setTinggi] = useState<string>("");
  const [satuan, setSatuan] = useState<string>("cm");
  const [phiOption, setPhiOption] = useState<string>("3.14159265359");
  const [volume, setVolume] = useState<number | null>(null);
  const [luasPermukaan, setLuasPermukaan] = useState<number | null>(null);
  const [luasAlas, setLuasAlas] = useState<number | null>(null);
  const [luasSelimut, setLuasSelimut] = useState<number | null>(null);
  const [showRumus, setShowRumus] = useState(false);
  const [showPerhitungan, setShowPerhitungan] = useState(false);

  const hitungTabung = () => {
    const r = parseFloat(jariJari);
    const t = parseFloat(tinggi);
    const phi = parseFloat(phiOption);
    if (!isNaN(r) && !isNaN(t)) {
      const luasAlasHasil = phi * r * r;
      const luasSelimutHasil = 2 * phi * r * t;
      const luasPermukaanHasil = 2 * phi * r * (r + t);
      const volumeHasil = phi * r * r * t;

      setLuasAlas(luasAlasHasil);
      setLuasSelimut(luasSelimutHasil);
      setLuasPermukaan(luasPermukaanHasil);
      setVolume(volumeHasil);
    }
  };

  // Hitung hasil untuk Formula 2: 2 × Luas Alas × Luas Selimut
  const formula2 =
    luasAlas !== null && luasSelimut !== null
      ? 2 * luasAlas * luasSelimut
      : null;

  return (
    <div className="min-h-screen w-full pattern-background relative flex items-center justify-center">
      <Link
        href="/home"
        className="absolute top-4 left-4 z-30 text-white text-6xl"
      >
        <IoArrowBack />
      </Link>

      <div className="absolute top-4 left-15 text-white text-4xl font-bold">
        Kelompok 4
      </div>
      <div className="absolute top-6 right-8 text-white text-xl font-bold">
        Achmad Qaafi Mulyan Misbah
      </div>

      <div className="w-[90%] max-w-2xl bg-[#FFD95F] rounded-xl p-6 shadow-2xl text-center relative">
        <h1 className="text-black text-3xl font-poppins font-bold mb-5">
          Kalkulator Tabung
        </h1>
        <p className="text-black mb-2 font-semibold">Masukkan Nilai</p>

        <label className="block text-left font-semibold text-black">
          Jari-Jari (r):
        </label>
        <input
          type="number"
          placeholder="Masukkan Jari-Jari"
          value={jariJari}
          onChange={(e) => setJariJari(e.target.value)}
          className="w-full p-3 mb-4 border border-gray-400 rounded-lg shadow-md text-black"
        />

        <label className="block text-left font-semibold text-black">
          Tinggi (t):
        </label>
        <input
          type="number"
          placeholder="Masukkan Tinggi"
          value={tinggi}
          onChange={(e) => setTinggi(e.target.value)}
          className="w-full p-3 mb-4 border border-gray-400 rounded-lg shadow-md text-black"
        />

        <label className="block text-left font-semibold text-black">Pilih π:</label>
        <select
          value={phiOption}
          onChange={(e) => setPhiOption(e.target.value)}
          className="w-full p-3 mb-4 border border-gray-400 rounded-lg shadow-md text-black"
        >
          <option value="3.14159265359">π ≈ 3.1416</option>
          <option value="3.14285714286">π ≈ 22/7</option>
        </select>

        <button
          onClick={hitungTabung}
          className="w-full py-3 bg-[#493D9E] text-white font-bold rounded-full hover:bg-[#155E95] transition-all duration-300 font-poppins text-lg mb-4 shadow-md"
        >
          Hitung
        </button>

        <label className="block text-left font-semibold text-black text-2xl">Hasil:</label>
        <div className="border border-gray-400 p-4 bg-white rounded-lg shadow-md text-left">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="font-semibold text-black">
                Volume:{" "}
                {volume !== null
                  ? `${formatNumber(volume)} ${satuan}³`
                  : "-"}
              </p>
              <p className="font-semibold text-black">
                Luas Permukaan:{" "}
                {luasPermukaan !== null
                  ? `${formatNumber(luasPermukaan)} ${satuan}²`
                  : "-"}
              </p>
            </div>
            <div>
              <p className="font-semibold text-black">
                Luas Alas:{" "}
                {luasAlas !== null
                  ? `${formatNumber(luasAlas)} ${satuan}²`
                  : "-"}
              </p>
              <p className="font-semibold text-black">
                Luas Selimut:{" "}
                {luasSelimut !== null
                  ? `${formatNumber(luasSelimut)} ${satuan}²`
                  : "-"}
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-between mt-4">
          <div className="w-[48%]">
            <button
              onClick={() => setShowRumus(true)}
              className="py-3 bg-[#D70654] text-white rounded-full font-poppins cursor-pointer text-center shadow-md hover:bg-[#B90545] transition-all font-bold w-full"
            >
              Lihat Rumus
            </button>
          </div>
          <div className="w-[48%]">
            <button
              onClick={() => setShowPerhitungan(true)}
              className="py-3 bg-[#D70654] text-white rounded-full font-poppins cursor-pointer text-center shadow-md hover:bg-[#B90545] transition-all font-bold w-full"
            >
              Lihat Perhitungan
            </button>
          </div>
        </div>
      </div>

      {showRumus && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-[90%] max-w-lg relative shadow-2xl">
            <button
              className="absolute top-2 right-2 text-black text-xl"
              onClick={() => setShowRumus(false)}
            >
              <IoClose />
            </button>
            <h2 className="text-xl font-bold text-center mb-4 text-black">Rumus Tabung</h2>
            <p>
              <strong>Volume:</strong> π × r² × t
            </p>
            <p>
              <strong>Luas Permukaan 1:</strong> 2 × π × r (r + t)
            </p>
            <p>
              <strong>Luas Permukaan 2:</strong> 2 × Luas Alas × Luas Selimut
            </p>
            <p>
              <strong>Luas Selimut:</strong> 2 × π × r × t
            </p>
            <p>
              <strong>Luas Alas:</strong> π × r²
            </p>
          </div>
        </div>
      )}

      {showPerhitungan && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-[90%] max-w-lg relative shadow-2xl">
            <button
              className="absolute top-2 right-2 text-black text-xl"
              onClick={() => setShowPerhitungan(false)}
            >
              <IoClose />
            </button>
            <h2 className="text-xl font-bold text-center mb-4 ">
              Hasil Perhitungan
            </h2>
            <div className="space-y-3">
              <div>
                <p>
                  <strong>Volume:</strong> π × r² × t
                </p>
                <p>= π × ({jariJari})² × ({tinggi})</p>
                <p>={" "}{volume !== null ? formatNumber(volume) : "-"} {satuan}³</p>
              </div>
              <div>
                <p>
                  <strong>Luas Alas:</strong> π × r²
                </p>
                <p>= π × ({jariJari})²</p>
                <p>={" "}{luasAlas !== null ? formatNumber(luasAlas) : "-"} {satuan}²</p>
              </div>
              <div>
                <p>
                  <strong>Luas Selimut:</strong> 2 × π × r × t
                </p>
                <p>= 2 × π × ({jariJari}) × ({tinggi})</p>
                <p>={" "}{luasSelimut !== null ? formatNumber(luasSelimut) : "-"} {satuan}²</p>
              </div>
              <div>
                <p>
                  <strong>Luas Permukaan 1 : </strong> 2 × π × r (r + t)
                </p>
                <p>= 2 × π × ({jariJari}) × (({jariJari}) + ({tinggi}))</p>
                <p>={" "}{luasPermukaan !== null ? formatNumber(luasPermukaan) : "-"} {satuan}²</p>
              </div>
              <div>
                <p>
                  <strong>Luas Permukaan 2:</strong> 2 × Luas Alas × Luas Selimut
                </p>
                <p>= 2 ×{" "}{luasAlas !== null ? formatNumber(luasAlas) : "-"} ×{" "}{luasSelimut !== null ? formatNumber(luasSelimut) : "-"}</p>
                <p>={" "}{luasAlas !== null && luasSelimut !== null ? formatNumber(2 * luasAlas * luasSelimut) : "-"} {satuan}²</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Tabung2;

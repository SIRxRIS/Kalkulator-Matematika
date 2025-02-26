"use client"

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { IoArrowBack } from "react-icons/io5";

export default function TrapezoidCalculator() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [h, setH] = useState("");
  const [c, setC] = useState("");
  const [d, setD] = useState("");
  const [area, setArea] = useState(null);
  const [perimeter, setPerimeter] = useState(null);

  const calculate = () => {
    const numA = parseFloat(a);
    const numB = parseFloat(b);
    const numH = parseFloat(h);
    const numC = parseFloat(c);
    const numD = parseFloat(d);
    
    if (isNaN(numA) || isNaN(numB) || isNaN(numH) || isNaN(numC) || isNaN(numD)) {
      alert("Harap masukkan angka yang valid");
      return;
    }
    
    const trapezoidArea = 0.5 * (numA + numB) * numH;
    const trapezoidPerimeter = numA + numB + numC + numD;

    setArea(trapezoidArea.toFixed(2));
    setPerimeter(trapezoidPerimeter.toFixed(2));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-500 to-pink-500 p-6">
      <Link
        href="/bangun-datar"
        className="absolute top-4 left-4 z-30 text-white text-6xl"
      >
        <IoArrowBack />
      </Link>
      <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.5 }} className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md text-center">
        <h2 className="text-3xl font-extrabold mb-6 text-gray-900">🔢 Kalkulator Trapesium</h2>
        <div className="flex flex-col gap-4">
          <input type="number" placeholder="Panjang Alas Atas (a)" value={a} onChange={(e) => setA(e.target.value)} className="p-3 border rounded-xl text-gray-700 focus:ring focus:ring-indigo-400 shadow-md" />
          <input type="number" placeholder="Panjang Alas Bawah (b)" value={b} onChange={(e) => setB(e.target.value)} className="p-3 border rounded-xl text-gray-700 focus:ring focus:ring-indigo-400 shadow-md" />
          <input type="number" placeholder="Tinggi (h)" value={h} onChange={(e) => setH(e.target.value)} className="p-3 border rounded-xl text-gray-700 focus:ring focus:ring-indigo-400 shadow-md" />
          <input type="number" placeholder="Panjang Sisi Miring Kiri (c)" value={c} onChange={(e) => setC(e.target.value)} className="p-3 border rounded-xl text-gray-700 focus:ring focus:ring-indigo-400 shadow-md" />
          <input type="number" placeholder="Panjang Sisi Miring Kanan (d)" value={d} onChange={(e) => setD(e.target.value)} className="p-3 border rounded-xl text-gray-700 focus:ring focus:ring-indigo-400 shadow-md" />
          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={calculate} className="bg-indigo-600 text-white font-bold py-3 rounded-xl hover:bg-indigo-800 transition shadow-lg">Hitung</motion.button>
        </div>
        {area && perimeter && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} className="mt-6 bg-gray-100 p-5 rounded-xl shadow-md">
            <p className="text-gray-900 font-semibold text-lg">📐 Luas: {area} cm²</p>
            <p className="text-gray-900 font-semibold text-lg">📏 Keliling: {perimeter} cm</p>
          </motion.div>
        )}
      </motion.div>
      <h1 className="absolute bottom-4">
          Zaki Dzul Hannan
        </h1>
    </div>
  );
}

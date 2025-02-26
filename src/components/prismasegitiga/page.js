'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { IoArrowBack } from "react-icons/io5";

export default function PrismaCalculator() {
  const [base, setBase] = useState('');
  const [height, setHeight] = useState('');
  const [length, setLength] = useState('');
  const [surfaceArea, setSurfaceArea] = useState(null);
  const [volume, setVolume] = useState(null);
  const [error, setError] = useState('');

  const calculate = () => {
    const baseValue = parseFloat(base);
    const heightValue = parseFloat(height);
    const lengthValue = parseFloat(length);

    if (isNaN(baseValue) || isNaN(heightValue) || isNaN(lengthValue) || baseValue <= 0 || heightValue <= 0 || lengthValue <= 0) {
      setError('Harap masukkan angka yang valid dan lebih dari 0!');
      setSurfaceArea(null);
      setVolume(null);
      return;
    }

    setError('');

    const baseArea = 0.5 * baseValue * heightValue;
    const sideSlope = Math.sqrt((baseValue / 2) ** 2 + heightValue ** 2);
    const perimeter = baseValue + 2 * sideSlope;
    const surfaceAreaResult = 2 * baseArea + perimeter * lengthValue;
    const volumeResult = baseArea * lengthValue;

    setSurfaceArea(surfaceAreaResult.toFixed(2));
    setVolume(volumeResult.toFixed(2));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 p-5">
      <Link
        href="/bangun-ruang"
        className="absolute top-4 left-4 z-30 text-white text-6xl"
      >
        <IoArrowBack />
      </Link>
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 0.5 }}
        className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-lg transform transition-all hover:scale-105"
      >
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-6 tracking-wide">
          Kalkulator Prisma Segitiga
        </h2>

        <div className="space-y-5">
          <input
            type="number"
            placeholder="Panjang Alas (cm)"
            value={base}
            onChange={(e) => setBase(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-400 shadow-md transition-all hover:shadow-lg"
            min="0"
          />
          <input
            type="number"
            placeholder="Tinggi Segitiga (cm)"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-500 shadow-md transition-all hover:shadow-lg"
            min="0"
          />
          <input
            type="number"
            placeholder="Panjang Prisma (cm)"
            value={length}
            onChange={(e) => setLength(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-600 shadow-md transition-all hover:shadow-lg"
            min="0"
          />

          {error && (
            <p className="text-red-500 text-center font-semibold bg-red-100 p-2 rounded-lg">
              {error}
            </p>
          )}

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={calculate}
            className="w-full bg-gradient-to-r from-blue-900 to-blue-500 hover:from-blue-800 hover:to-blue-400 text-white font-bold py-3 rounded-xl transition shadow-lg hover:shadow-2xl"
          >
            Hitung
          </motion.button>

          {surfaceArea !== null && volume !== null && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5 }}
              className="bg-gray-100 p-5 rounded-xl text-center shadow-lg mt-5"
            >
              <p className="text-xl font-semibold text-gray-700">
                Luas Permukaan: <span className="text-blue-600">{surfaceArea} cm²</span>
              </p>
              <p className="text-xl font-semibold text-gray-700">
                Volume: <span className="text-blue-700">{volume} cm³</span>
              </p>
            </motion.div>
          )}
        </div>
      </motion.div>
      <h1 className="absolute bottom-4">
          Zaki Dzul Hannan
        </h1>
    </div>
  );
}

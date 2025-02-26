'use client'

import React, { useState } from 'react';
import { Calculator } from 'lucide-react';
import { BackgroundGradient } from "../Bola/components/ui/background-gradient";
import { IoArrowBack } from "react-icons/io5";
import Link from "next/link";
import { motion } from 'framer-motion';

export default function SphereCalculator() {
  const [radius, setRadius] = useState<string>('');
  const [surfaceArea, setSurfaceArea] = useState<number | null>(null);
  const [volume, setVolume] = useState<number | null>(null);

  const calculateSphere = (): void => {
    const r = parseFloat(radius);
    if (!isNaN(r) && r > 0) {
      // Luas permukaan bola = 4πr²
      setSurfaceArea(4 * Math.PI * r * r);
      // Volume bola = (4/3)πr³
      setVolume((4 / 3) * Math.PI * r * r * r);
    }
  };

  const reset = (): void => {
    setRadius('');
    setSurfaceArea(null);
    setVolume(null);
  };

  return (
    <div className="absolute inset-0 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:30px_30px]">
      <div className="min-h-screen flex items-center justify-center p-8">
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
            >
        <BackgroundGradient className="rounded-[24px] bg-white dark:bg-zinc-900">
          <div className="bg-gray-800 rounded-[30px] shadow-xl p-12 w-full max-w-lg">
            <div className="flex items-center gap-4 mb-8">
              <h1 className="w-6 h-6">🔵</h1>
              <h1 className="text-3xl font-bold text-white">Kalkulator Bola</h1>
            </div>
            <div className="space-y-8">
              <div>
                <label className="block text-base font-medium text-white-700 mb-3">
                  Jari-jari (r)
                </label>
                <div className="relative">
                  <input
                    value={radius}
                    onChange={(e) => setRadius(e.target.value)}
                    className="text-black w-full px-6 py-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    placeholder="Masukkan jari-jari..."
                  />
                  <span className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-400 text-lg">
                    cm
                  </span>
                </div>
              </div>
              <div className="flex gap-6">
                <button
                  onClick={calculateSphere}
                  className="flex-1 bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-medium flex items-center justify-center gap-3 transition-colors"
                >
                  <Calculator className="w-6 h-6" />
                  Hitung
                </button>
                <button
                  onClick={reset}
                  className="px-8 py-4 rounded-lg font-medium border border-gray-300 hover:bg-gray-50 transition-colors"
                >
                  Reset
                </button>
              </div>
              {(surfaceArea !== null && volume !== null) && (
                <div className="space-y-6 p-8 bg-gray-50 rounded-xl">
                  <div>
                    <h3 className="text-base font-medium text-gray-600 mb-2">
                      Luas Permukaan Bola
                    </h3>
                    <p className="text-3xl font-bold text-blue-600">
                      {surfaceArea.toFixed(2)} cm²
                    </p>
                    <p className="text-base text-gray-500 mt-2">
                      L = 4 × π × r²
                    </p>
                  </div>
                  <div className="border-t border-gray-200 pt-6">
                    <h3 className="text-base font-medium text-gray-600 mb-2">
                      Volume Bola
                    </h3>
                    <p className="text-3xl font-bold text-purple-600">
                      {volume.toFixed(2)} cm³
                    </p>
                    <p className="text-base text-gray-500 mt-2">
                      V = 4/3 × π × r³
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </BackgroundGradient>
        </motion.div>
        <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
        <h1 className="absolute bottom-4 right-4">
          Muhammad Naufal Habibi
        </h1>
        </motion.div>
      </div>
    </div>
  );
}
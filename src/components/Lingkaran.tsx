'use client'

import React, { useState } from 'react';
import { Calculator, Circle, } from 'lucide-react';
import { BackgroundGradient } from "../components/Bola/components/ui/background-gradient";
import { IoArrowBack } from "react-icons/io5";
import Link from "next/link";


export default function CircleCalculator() {
  const [radius, setRadius] = useState<string>('');
  const [area, setArea] = useState<number | null>(null);
  const [perimeter, setPerimeter] = useState<number | null>(null);

  const calculateCircle = () => {
    const r = parseFloat(radius);
    if (!isNaN(r) && r > 0) {
      setArea(Math.PI * r * r);
      setPerimeter(2 * Math.PI * r);
    }
  };

  const reset = () => {
    setRadius('');
    setArea(null);
    setPerimeter(null);
  };

  return (
    <div
      className="absolute inset-0 h-full w-full  bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"
    > 
    <Link
        href="/bangun-datar"
        className="absolute top-4 left-4 z-30 text-white text-6xl"
      >
        <IoArrowBack />
      </Link>

      <div className="min-h-screen flex items-center justify-center p-8">
        <BackgroundGradient className="rounded-[24px] bg-white dark:bg-zinc-900">
          <div className="bg-gray-800 rounded-[30px] shadow-xl p-12 w-full max-w-lg">
            <div className="flex items-center gap-4 mb-8">
              <Circle className="w-10 h-10 text-blue-500" />
              <h1 className="text-3xl font-bold text-white">Kalkulator Lingkaran</h1>
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
                  onClick={calculateCircle}
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

              {(area !== null && perimeter !== null) && (
                <div className="space-y-6 p-8 bg-gray-50 rounded-xl">
                  <div>
                    <h3 className="text-base font-medium text-gray-600 mb-2">
                      Luas Lingkaran
                    </h3>
                    <p className="text-3xl font-bold text-blue-600">
                      {area.toFixed(2)} cm²
                    </p>
                    <p className="text-base text-gray-500 mt-2">
                      L = π × r²
                    </p>
                  </div>
                  <div className="border-t border-gray-200 pt-6">
                    <h3 className="text-base font-medium text-gray-600 mb-2">
                      Keliling Lingkaran
                    </h3>
                    <p className="text-3xl font-bold text-purple-600">
                      {perimeter.toFixed(2)} cm
                    </p>
                    <p className="text-base text-gray-500 mt-2">
                      K = 2 × π × r
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </BackgroundGradient>
        <h1 className="absolute bottom-4 right-4">
          Muhammad Naufal Habibi
        </h1>
      </div>
    </div>
  );
}
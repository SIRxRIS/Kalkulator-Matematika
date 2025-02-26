"use client";

import { useState } from "react";
import Link from "next/link";

export default function TriangularPyramidCalculator() {
  const [baseLength, setBaseLength] = useState("");
  const [baseHeight, setBaseHeight] = useState("");
  const [pyramidHeight, setPyramidHeight] = useState("");
  const [volumeResult, setVolumeResult] = useState<number | null>(null);
  const [surfaceAreaResult, setSurfaceAreaResult] = useState<number | null>(
    null
  );
  const [slantHeightResult, setSlantHeightResult] = useState<number | null>(
    null
  );

  const calculateResults = () => {
    const a = Number.parseFloat(baseLength);
    const b = Number.parseFloat(baseHeight);
    const h = Number.parseFloat(pyramidHeight);

    if (a && b && h) {
      // Volume
      const volume = (1 / 3) * (1 / 2) * a * b * h;
      setVolumeResult(volume);

      // Slant height
      const slantHeight = Math.sqrt(
        Math.pow(h, 2) + Math.pow(a / 2, 2) + Math.pow(b / 2, 2)
      );
      setSlantHeightResult(slantHeight);

      // Surface Area
      const baseArea = (1 / 2) * a * b;
      const sideArea1 = (1 / 2) * a * slantHeight;
      const sideArea2 = (1 / 2) * b * slantHeight;
      const sideArea3 =
        (1 / 2) * Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2)) * slantHeight;
      const surfaceArea = baseArea + sideArea1 + sideArea2 + sideArea3;
      setSurfaceAreaResult(surfaceArea);
    } else {
      setVolumeResult(null);
      setSurfaceAreaResult(null);
      setSlantHeightResult(null);
    }
  };

  const resetCalculator = () => {
    setBaseLength("");
    setBaseHeight("");
    setPyramidHeight("");
    setVolumeResult(null);
    setSurfaceAreaResult(null);
    setSlantHeightResult(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 to-amber-100 p-4">
      <Link
        href="/bangun-ruang"
        className="inline-flex items-center mb-4 px-4 py-2 bg-yellow-500 text-white rounded-full hover:bg-yellow-600 transition-colors duration-200 ease-in-out shadow-md"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mr-2"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
            clipRule="evenodd"
          />
        </svg>
        Kembali
      </Link>

      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-6 w-full">
          <h2 className="text-3xl font-bold text-center mb-6 text-yellow-800">
            Kalkulator Limas Segitiga
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-1">
              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="baseLength"
                    className="block text-sm font-medium text-yellow-700"
                  >
                    Panjang Alas
                  </label>
                  <input
                    type="number"
                    id="baseLength"
                    value={baseLength}
                    onChange={(e) => setBaseLength(e.target.value)}
                    className="mt-1 block w-full rounded-md border-yellow-300 shadow-sm focus:border-yellow-500 focus:ring focus:ring-yellow-200 focus:ring-opacity-50 text-yellow-900 font-medium bg-yellow-50 placeholder-yellow-400"
                    placeholder="Masukkan panjang alas"
                  />
                </div>
                <div>
                  <label
                    htmlFor="baseHeight"
                    className="block text-sm font-medium text-yellow-700"
                  >
                    Tinggi Alas
                  </label>
                  <input
                    type="number"
                    id="baseHeight"
                    value={baseHeight}
                    onChange={(e) => setBaseHeight(e.target.value)}
                    className="mt-1 block w-full rounded-md border-yellow-300 shadow-sm focus:border-yellow-500 focus:ring focus:ring-yellow-200 focus:ring-opacity-50 text-yellow-900 font-medium bg-yellow-50 placeholder-yellow-400"
                    placeholder="Masukkan tinggi alas"
                  />
                </div>
                <div>
                  <label
                    htmlFor="pyramidHeight"
                    className="block text-sm font-medium text-yellow-700"
                  >
                    Tinggi Limas
                  </label>
                  <input
                    type="number"
                    id="pyramidHeight"
                    value={pyramidHeight}
                    onChange={(e) => setPyramidHeight(e.target.value)}
                    className="mt-1 block w-full rounded-md border-yellow-300 shadow-sm focus:border-yellow-500 focus:ring focus:ring-yellow-200 focus:ring-opacity-50 text-yellow-900 font-medium bg-yellow-50 placeholder-yellow-400"
                    placeholder="Masukkan tinggi limas"
                  />
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={calculateResults}
                    className="flex-1 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition duration-150 ease-in-out"
                  >
                    Hitung
                  </button>
                  <button
                    onClick={resetCalculator}
                    className="flex-1 py-2 px-4 border border-yellow-600 rounded-md shadow-sm text-sm font-medium text-yellow-600 bg-white hover:bg-yellow-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition duration-150 ease-in-out"
                  >
                    Reset
                  </button>
                </div>
              </div>
            </div>

            <div className="md:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-md p-4 shadow-md hover:shadow-lg transition-shadow duration-200 ease-in-out">
                  <h3 className="font-semibold mb-2 text-yellow-800">Volume</h3>
                  <p className="text-sm text-yellow-700 mb-2">
                    Rumus: V = (1/3) * (1/2) * a * b * h
                  </p>
                  <p className="text-sm text-yellow-700 mb-2">
                    Volume = (1/3) * luas alas * tinggi limas
                  </p>
                  {volumeResult !== null && (
                    <p className="font-medium text-amber-700">
                      Hasil: {volumeResult.toFixed(2)} satuan kubik
                    </p>
                  )}
                </div>

                <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-md p-4 shadow-md hover:shadow-lg transition-shadow duration-200 ease-in-out">
                  <h3 className="font-semibold mb-2 text-yellow-800">
                    Luas Permukaan
                  </h3>
                  <p className="text-sm text-yellow-700 mb-2">
                    Rumus: L = luas alas + jumlah luas sisi tegak
                  </p>
                  <p className="text-sm text-yellow-700 mb-2">
                    Luas Permukaan = luas alas + 3 * luas sisi tegak
                  </p>
                  {surfaceAreaResult !== null && (
                    <p className="font-medium text-amber-700">
                      Hasil: {surfaceAreaResult.toFixed(2)} satuan persegi
                    </p>
                  )}
                </div>
              </div>

              <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-md p-4 shadow-md hover:shadow-lg transition-shadow duration-200 ease-in-out">
                <h3 className="font-semibold mb-2 text-yellow-800">
                  Tinggi Sisi Miring
                </h3>
                <p className="text-sm text-yellow-700 mb-2">
                  Rumus: s = √(h² + (a/2)² + (b/2)²)
                </p>
                <p className="text-sm text-yellow-700 mb-2">
                  Tinggi Sisi Miring = akar(tinggi limas² + (panjang alas/2)² +
                  (tinggi alas/2)²)
                </p>
                {slantHeightResult !== null && (
                  <p className="font-medium text-amber-700">
                    Hasil: {slantHeightResult.toFixed(2)} satuan
                  </p>
                )}
              </div>
            </div>
          </div>

          <p className="text-center text-sm text-yellow-600 mt-6">
            Dibuat oleh Faqih
          </p>
        </div>
      </div>
    </div>
  );
}

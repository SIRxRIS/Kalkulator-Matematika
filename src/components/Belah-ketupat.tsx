"use client";

import { useState } from "react";
import Link from "next/link";

export default function RhombusCalculator() {
  const [d1, setD1] = useState("");
  const [d2, setD2] = useState("");
  const [side, setSide] = useState("");
  const [areaResult, setAreaResult] = useState<number | null>(null);
  const [perimeterResult, setPerimeterResult] = useState<number | null>(null);
  const [sideLengthResult, setSideLengthResult] = useState<number | null>(null);

  const calculateResults = () => {
    if (d1 && d2) {
      setAreaResult((Number.parseFloat(d1) * Number.parseFloat(d2)) / 2);
      setSideLengthResult(
        Math.sqrt(
          Math.pow(Number.parseFloat(d1) / 2, 2) +
            Math.pow(Number.parseFloat(d2) / 2, 2)
        )
      );
    } else {
      setAreaResult(null);
      setSideLengthResult(null);
    }

    if (side) {
      setPerimeterResult(4 * Number.parseFloat(side));
    } else {
      setPerimeterResult(null);
    }
  };

  const resetCalculator = () => {
    setD1("");
    setD2("");
    setSide("");
    setAreaResult(null);
    setPerimeterResult(null);
    setSideLengthResult(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 to-amber-100 p-4">
      <Link
        href="/bangun-datar"
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

      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6 text-yellow-800">
          Kalkulator Belah Ketupat
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-1">
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="d1"
                  className="block text-sm font-medium text-yellow-700"
                >
                  Diagonal 1
                </label>
                <input
                  type="number"
                  id="d1"
                  value={d1}
                  onChange={(e) => setD1(e.target.value)}
                  className="mt-1 block w-full rounded-md border-yellow-300 shadow-sm focus:border-yellow-500 focus:ring focus:ring-yellow-200 focus:ring-opacity-50 text-yellow-900 font-medium bg-yellow-50 placeholder-yellow-400"
                  placeholder="Masukkan diagonal 1"
                />
              </div>
              <div>
                <label
                  htmlFor="d2"
                  className="block text-sm font-medium text-yellow-700"
                >
                  Diagonal 2
                </label>
                <input
                  type="number"
                  id="d2"
                  value={d2}
                  onChange={(e) => setD2(e.target.value)}
                  className="mt-1 block w-full rounded-md border-yellow-300 shadow-sm focus:border-yellow-500 focus:ring focus:ring-yellow-200 focus:ring-opacity-50 text-yellow-900 font-medium bg-yellow-50 placeholder-yellow-400"
                  placeholder="Masukkan diagonal 2"
                />
              </div>
              <div>
                <label
                  htmlFor="side"
                  className="block text-sm font-medium text-yellow-700"
                >
                  Panjang Sisi
                </label>
                <input
                  type="number"
                  id="side"
                  value={side}
                  onChange={(e) => setSide(e.target.value)}
                  className="mt-1 block w-full rounded-md border-yellow-300 shadow-sm focus:border-yellow-500 focus:ring focus:ring-yellow-200 focus:ring-opacity-50 text-yellow-900 font-medium bg-yellow-50 placeholder-yellow-400"
                  placeholder="Masukkan panjang sisi"
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
              <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-md p-4 shadow">
                <h3 className="font-semibold mb-2 text-yellow-800">Luas</h3>
                <p className="text-sm text-yellow-700 mb-2">
                  Rumus: A = (d1 * d2) / 2
                </p>
                <p className="text-sm text-yellow-700 mb-2">
                  Luas = (diagonal 1 * diagonal 2) / 2
                </p>
                {areaResult !== null && (
                  <p className="font-medium text-amber-700">
                    Hasil: {areaResult.toFixed(2)} satuan persegi
                  </p>
                )}
              </div>

              <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-md p-4 shadow">
                <h3 className="font-semibold mb-2 text-yellow-800">Keliling</h3>
                <p className="text-sm text-yellow-700 mb-2">Rumus: K = 4 * s</p>
                <p className="text-sm text-yellow-700 mb-2">
                  Keliling = 4 * panjang sisi
                </p>
                {perimeterResult !== null && (
                  <p className="font-medium text-amber-700">
                    Hasil: {perimeterResult.toFixed(2)} satuan
                  </p>
                )}
              </div>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-md p-4 shadow">
              <h3 className="font-semibold mb-2 text-yellow-800">
                Panjang Sisi
              </h3>
              <p className="text-sm text-yellow-700 mb-2">
                Rumus: s = √((d1/2)² + (d2/2)²)
              </p>
              <p className="text-sm text-yellow-700 mb-2">
                Panjang sisi = √((diagonal 1 / 2)² + (diagonal 2 / 2)²)
              </p>
              {sideLengthResult !== null && (
                <p className="font-medium text-amber-700">
                  Hasil: {sideLengthResult.toFixed(2)} satuan
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
  );
}

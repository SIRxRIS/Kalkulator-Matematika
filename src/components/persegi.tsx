// pages/bangun-datar/persegi.tsx
"use client";
import React, { useState } from "react";
import Link from "next/link";
import { IoArrowBack } from "react-icons/io5";

const Persegi: React.FC = () => {  
  const [side, setSide] = useState("");
  const [perimeter, setPerimeter] = useState<number | null>(null);
  const [area, setArea] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [inputUnit, setInputUnit] = useState("cm"); 
  const [outputUnit, setOutputUnit] = useState("cm"); 
  const [isInputUnitChanging, setIsInputUnitChanging] = useState(false);
  const [isOutputUnitChanging, setIsOutputUnitChanging] = useState(false);

  const calculate = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const s = parseFloat(side);

    if (isNaN(s) || side === "") {
      setError("Please enter a valid number for the side.");
      return;
    }

    if (s <= 0) {
      setError("Side length must be positive.");
      return;
    }

    setPerimeter(4 * s);
    setArea(s * s);
    setError(null);
  };

  const handleInputUnitChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setInputUnit(event.target.value);
    setIsInputUnitChanging(false);
  };

  const handleOutputUnitChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setOutputUnit(event.target.value);
    setIsOutputUnitChanging(false);
  };

  const convertUnits = (
    value: number | null,
    fromUnit: string,
    toUnit: string
  ) => {
    if (value === null) return null;

    if (fromUnit === toUnit) return value; // No conversion needed

    const valueInCm = convertToCm(value, fromUnit);
    return convertFromCm(valueInCm, toUnit);
  };

  const convertToCm = (value: number, unit: string) => {
    switch (unit) {
      case "cm":
        return value;
      case "m":
        return value * 100;
      case "km":
        return value * 100000;
      case "mm":
        return value / 10;
      default:
        return value;
    }
  };

  const convertFromCm = (value: number, unit: string) => {
    switch (unit) {
      case "cm":
        return value;
      case "m":
        return value / 100;
      case "km":
        return value / 100000;
      case "mm":
        return value * 10;
      default:
        return value;
    }
  };

  return (
    <div className="min-h-screen w-full pattern-background relative">
      {/* Header with back button and names */}
      <div className="flex justify-between items-center p-4 absolute top-0 left-0 right-0 z-30">
        <div className="flex items-center gap-4 ml-[100px]">
          <Link href="/bangun-datar">
            <IoArrowBack className="absolute top-4 left-4 z-30 text-white text-6xl" />
          </Link>
          <span className="text-white font-bold text-[32px] font-poppins ml-[50px]">
            Kelompok 4
          </span>
        </div>
        <span className="text-white font-bold text-[32px] font-poppins mr-[150px]">
          Muhammad Arrafif Prikusuma
        </span>
      </div>

      {/* Main Calculator Card */}
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                   w-[90%] max-w-2xl bg-[#F7E581] rounded-xl p-6 shadow-lg"
      >
        <h1 className="text-center text-[28px] text-black font-poppins font-bold mb-6">
          Kalkulator Persegi
        </h1>

        {/* Rumus Section */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <h2 className="font-poppins text-black text-[24px] font-semibold mb-2">
              Rumus Keliling
            </h2>
            <div className="bg-white text-black p-2 rounded text-center font-poppins">
              4 × s
            </div>
          </div>
          <div>
            <h2 className="font-poppins text-[24px] text-black font-semibold mb-2">
              Rumus Luas
            </h2>
            <div className="bg-white p-2 rounded text-black text-center font-poppins">
              s × s
            </div>
          </div>
        </div>

        {/* Input Fields */}
        <form onSubmit={calculate} className="space-y-4 mb-6">
          <div>
            <label className="block font-poppins text-[24px] text-black font-semibold mb-2">
              Sisi (s)
            </label>
            <div className="flex items-center">
              <input
                type="number"
                id="side"
                name="side"
                value={side}
                onChange={(e) => setSide(e.target.value)}
                className="w-full p-2 text-black rounded-l font-poppins"
                placeholder="Masukkan sisi"
                required
              />
              <button
                type="button"
                onClick={() => setIsInputUnitChanging(!isInputUnitChanging)}
                className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-r"
              >
                {inputUnit}
              </button>
            </div>
            {isInputUnitChanging && (
              <select
                value={inputUnit}
                onChange={handleInputUnitChange}
                className="border border-gray-300 px-3 py-2 rounded mt-2 w-full"
              >
                <option value="cm">cm</option>
                <option value="m">m</option>
                <option value="km">km</option>
                <option value="mm">mm</option>
              </select>
            )}
          </div>
          <div>
            <label className="block text-black text-[24px] font-poppins font-semibold mb-2">
              Ubah Satuan Hasil
            </label>
            <div className="flex items-center">
              <button
                type="button"
                onClick={() => setIsOutputUnitChanging(!isOutputUnitChanging)}
                className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded"
              >
                {outputUnit}
              </button>
            </div>
            {isOutputUnitChanging && (
              <select
                value={outputUnit}
                onChange={handleOutputUnitChange}
                className="border border-gray-300 px-3 py-2 rounded mt-2 w-full text-black"
              >
                <option value="cm">cm</option>
                <option value="m">m</option>
                <option value="km">km</option>
                <option value="mm">mm</option>
              </select>
            )}
          </div>

          {error && <p className="text-red-500">{error}</p>}

          {/* Calculate Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-[130px] py-3 bg-[#5AA1FF] text-white rounded-full 
                         hover:bg-[#4891f0] transition-all duration-300 
                         font-poppins text-[20px] text-sm mb-6"
            >
              Hitung
            </button>
          </div>
        </form>

        {/* Results */}
        {perimeter !== null && (
          <div className="space-y-2">
            <div>
              <label className="block text-black font-poppins font-semibold mb-1">
                Keliling
              </label>
              <input
                type="text"
                value={`${convertUnits(perimeter, inputUnit, outputUnit)} ${outputUnit}`}
                readOnly
                className="w-full p-2 rounded text-black font-poppins bg-white"
              />
            </div>
            <div>
              <label className="block font-poppins text-black font-semibold mb-1">
                Luas
              </label>
              <input
                type="text"
                value={`${convertUnits(area, inputUnit, outputUnit)} ${outputUnit}²`}
                readOnly
                className="w-full p-2 rounded text-black font-poppins bg-white"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Persegi; 
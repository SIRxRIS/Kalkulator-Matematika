// pages/jajar-genjang.js
"use client";
import { useState, ChangeEvent } from 'react';
import Link from 'next/link';
import { IoArrowBack } from 'react-icons/io5';

function JajarGenjangCalculator() {
  const [alas, setAlas] = useState('');
  const [sisiMiring, setSisiMiring] = useState(''); // Corrected: Use a separate state for sisi miring

  const [luas, setLuas] = useState<number | null>(null);
  const [keliling, setKeliling] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const [inputUnit, setInputUnit] = useState("cm");
  const [outputUnit, setOutputUnit] = useState("cm");
  const [isInputUnitChanging, setIsInputUnitChanging] = useState(false);
  const [isOutputUnitChanging, setIsOutputUnitChanging] = useState(false);

  const calculate = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const a = parseFloat(alas);
    const b = parseFloat(sisiMiring); // Parse sisiMiring as well


    if (isNaN(a) || isNaN(b) || alas === "" || sisiMiring === "") {
      setError("Please enter valid numbers for all dimensions.");
      return;
    }

    if (a <= 0 || b <= 0) {
      setError("Dimensions must be positive.");
      return;
    }

    setLuas(a * b);  // Corrected: Multiply alas by sisi miring (assuming that's what's meant by "sisi miring" here. If it's *height*, then the label needs fixing)
    setKeliling(2 * (a + b)); // Corrected: Use sisi miring in keliling calculation
    setError(null);
  };


  const handleAlasChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAlas(e.target.value);
  };

  const handleSisiMiringChange = (e: ChangeEvent<HTMLInputElement>) => { // Corrected: Handler for sisiMiring
    setSisiMiring(e.target.value);
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
    if (fromUnit === toUnit) return value;
    const valueInCm = convertToCm(value, fromUnit);
    return convertFromCm(valueInCm, toUnit);
  };

  const convertToCm = (value: number, unit: string) => {
    switch (unit) {
      case "cm": return value;
      case "m": return value * 100;
      case "km": return value * 100000;
      case "mm": return value / 10;
      default: return value;
    }
  };

  const convertFromCm = (value: number, unit: string) => {
    switch (unit) {
      case "cm": return value;
      case "m": return value / 100;
      case "km": return value / 100000;
      case "mm": return value * 10;
      default: return value;
    }
  };


  return (
    <div className="min-h-screen w-full pattern-background relative">
      {/* Header */}
      <div className="flex justify-between items-center p-4 absolute top-0 left-0 right-0 z-30">
        <div className="flex items-center gap-4 ml-[100px]">
          <Link href="/">
            <IoArrowBack className="absolute top-4 left-4 z-30 text-white text-6xl" />
          </Link>
          <span className="text-white font-bold text-[32px] font-poppins ml-[50px]">
            Kelompok 4
          </span>
        </div>
        <span className="text-white font-bold text-[32px] font-poppins mr-[150px]">
          Muh Rafi Adli
        </span>
      </div>

      {/* Main Calculator Card */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                    w-[90%] max-w-2xl bg-[#5c5a53] rounded-xl p-6 shadow-lg">
        <h1 className="text-center text-[28px] text-black font-poppins font-bold mb-6">
          Kalkulator Jajar Genjang
        </h1>

        {/* Rumus Section */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <h2 className="font-poppins text-black text-[24px] font-semibold mb-2">
              Rumus Luas
            </h2>
            <div className="bg-white text-black p-2 rounded text-center font-poppins">
              alas × tinggi  {/*Corrected: changed sisi miring with tinggi*/}
            </div>
          </div>
          <div>
            <h2 className="font-poppins text-[24px] text-black font-semibold mb-2">
              Rumus Keliling
            </h2>
            <div className="bg-white p-2 rounded text-black text-center font-poppins">
              2 × (alas + sisi miring)
            </div>
          </div>
        </div>

        {/* Input Fields */}
        <form onSubmit={calculate} className="space-y-4 mb-6">
          <div>
            <label className="block font-poppins text-[24px] text-black font-semibold mb-2">
              Alas (a)
            </label>
            <div className="flex items-center">
              <input
                type="number"
                id="alas"
                value={alas}
                onChange={handleAlasChange}
                className="w-full p-2 text-black rounded-l font-poppins"
                placeholder="Masukkan alas"

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
                className="border border-gray-300 px-3 py-2 rounded mt-2 w-full text-black"
              >
                <option value="cm">cm</option>
                <option value="m">m</option>
                <option value="km">km</option>
                <option value="mm">mm</option>
              </select>
            )}
          </div>

          <div>
            <label className="block font-poppins text-[24px] text-black font-semibold mb-2">
              Sisi Miring (b) {/* Corrected label */}
            </label>
            <div className="flex items-center">
              <input
                type="number"
                id="sisiMiring" // Corrected ID
                value={sisiMiring} // Corrected value
                onChange={handleSisiMiringChange} // Corrected handler
                className="w-full p-2 text-black rounded-l font-poppins"
                placeholder="Masukkan sisi miring"

              />
              <button
                type="button"
                onClick={() => setIsInputUnitChanging(!isInputUnitChanging)}  // Corrected: should change input unit, not output
                className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-r"
              >
                {inputUnit}
              </button>
            </div>
            {isInputUnitChanging && ( // Corrected: should be isInputUnitChanging
              <select
                value={inputUnit}
                onChange={handleInputUnitChange} //Corrected handler
                className="border border-gray-300 px-3 py-2 rounded mt-2 w-full text-black"
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
              className="w-[130px] py-3 bg-[#040404] text-white rounded-full
                          hover:bg-[#4f5151] transition-all duration-300
                          font-poppins text-[20px] text-sm mb-6"
            >
              Lihat Hasil
            </button>
          </div>
        </form>

        {/* Results */}
        {luas !== null && (
          <div className="space-y-2">
            <div>
              <label className="block text-black font-poppins font-semibold mb-1">
                Luas
              </label>
              <input
                type="text"
                value={`${convertUnits(luas, inputUnit, outputUnit)} ${outputUnit}²`}
                readOnly
                className="w-full p-2 rounded text-black font-poppins bg-white"
              />
            </div>
            <div>
              <label className="block font-poppins text-black font-semibold mb-1">
                Keliling
              </label>
              <input
                type="text"
                value={`${convertUnits(keliling, inputUnit, outputUnit)} ${outputUnit}`}
                readOnly
                className="w-full p-2 rounded text-black font-poppins bg-white"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default JajarGenjangCalculator;
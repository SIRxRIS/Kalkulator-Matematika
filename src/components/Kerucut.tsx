import { useState } from "react";
import { motion } from "framer-motion";

export default function Kerucut() {
  const [radius, setRadius] = useState("");
  const [height, setHeight] = useState("");
  const [slantHeight, setSlantHeight] = useState("");
  const [volume, setVolume] = useState<number | null>(null);
const [surfaceArea, setSurfaceArea] = useState<number | null>(null);


  const calculate = () => {
    if (radius && height && slantHeight) {
      const r = parseFloat(radius);
      const h = parseFloat(height);
      const s = parseFloat(slantHeight);
      setVolume((1 / 3) * Math.PI * r * r * h);
      setSurfaceArea(Math.PI * r * (r + s));
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-800 to-gray-900 p-6 text-white">
      <motion.h1 
        className="text-yellow-400 text-3xl font-bold mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Kalkulator Kerucut
      </motion.h1>
      <motion.h2 
        className="text-slate-200 font-bold mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Muh Rafi Adli
      </motion.h2>

      <div className="w-full max-w-md bg-gray-700 p-6 rounded-2xl shadow-lg">
        <div className="space-y-4">
          <input
            type="number"
            placeholder="Masukkan jari-jari"
            value={radius}
            onChange={(e) => setRadius(e.target.value)}
            className="w-full border border-gray-500 p-2 rounded-lg text-black"
          />
          <input
            type="number"
            placeholder="Masukkan tinggi"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="w-full border border-gray-500 p-2 rounded-lg text-black"
          />
          <input
            type="number"
            placeholder="Masukkan garis pelukis"
            value={slantHeight}
            onChange={(e) => setSlantHeight(e.target.value)}
            className="w-full border border-gray-500 p-2 rounded-lg text-black"
          />
          
          <button 
            onClick={calculate} 
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-black p-2 rounded-lg"
          >
            Hitung
          </button>
          
          {volume !== null && surfaceArea !== null && (
            <motion.div 
              className="mt-4 p-4 bg-gray-800 rounded-lg text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <p className="text-lg font-semibold text-yellow-400">Volume: {volume.toFixed(2)} cm³</p>
              <p className="text-lg font-semibold text-yellow-400">Luas Permukaan: {surfaceArea.toFixed(2)} cm²</p>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}

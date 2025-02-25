import React, { useState } from 'react';
import Link from 'next/link';

const Segitiga = () => {
  const [alas, setAlas] = useState<string>('');
  const [tinggi, setTinggi] = useState<string>('');
  const [sisi, setSisi] = useState<string>('');
  const [luas, setLuas] = useState<number | null>(null);
  const [keliling, setKeliling] = useState<number | null>(null);

  // Menghitung luas dan keliling segitiga
  const hitungSegitiga = () => {
    const a = parseFloat(alas);
    const t = parseFloat(tinggi);
    const s = parseFloat(sisi);
    
    if (!isNaN(a) && !isNaN(t)) {
      const luasSegitiga = 0.5 * a * t;
      setLuas(luasSegitiga);
    }
    
    if (!isNaN(s)) {
      const kelilingSegitiga = 3 * s;
      setKeliling(kelilingSegitiga);
    } else if (!isNaN(a)) {
      const kelilingSegitiga = 3 * a;
      setKeliling(kelilingSegitiga);
    }
  };

  return (
    <div className="pattern-background min-h-screen flex items-center justify-center py-12 px-4">
      <div className="bg-yellow-200 rounded-lg shadow-xl max-w-md w-full mx-auto p-6">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center">
            {/* Ganti button dengan Link */}
            <Link href="/bangun-datar" className="text-gray-700 mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </Link>
            <h2 className="text-xl font-bold text-gray-800">Kelompok 4</h2>
          </div>
          <h2 className="text-sm text-gray-800">Muh.fadlan kamil</h2>
        </div>
        
        <h1 className="text-2xl font-bold text-center text-black mb-6">Kalkulator Segitiga</h1>
        
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-black mb-1">Rumus Luas</label>
            <div className="bg-white p-2 rounded border border-gray-300 text-center text-black">
              1/2 × a × t
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-800 mb-1">Rumus Keliling</label>
            <div className="bg-white p-2 rounded border border-gray-300 text-center text-black">
              s × s × s
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-800 mb-1">Alas</label>
            <input 
              type="number" 
              className="w-full rounded border border-gray-300 p-2 text-black"
              value={alas}
              onChange={(e) => setAlas(e.target.value)}
              placeholder="Alas"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-800 mb-1">Tinggi</label>
            <input 
              type="number" 
              className="w-full rounded border border-gray-300 p-2 text-black"
              value={tinggi}
              onChange={(e) => setTinggi(e.target.value)}
              placeholder="Tinggi"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-800 mb-1">Sisi</label>
            <input 
              type="number" 
              className="w-full rounded border border-gray-300 p-2 text-black"
              value={sisi}
              onChange={(e) => setSisi(e.target.value)}
              placeholder="Sisi"
            />
          </div>
        </div>
        
        <div className="mb-6">
          <button 
            className="bg-blue-400 hover:bg-blue-500 text-white px-4 py-2 rounded w-full"
            onClick={hitungSegitiga}
          >
            Hitung
          </button>
        </div>
        
        <div className="border border-gray-300 rounded overflow-hidden">
          <table className="w-full">
            <thead>
              <tr>
                <th className="border-b border-r border-gray-300 p-2 text-center bg-gray-100 text-black">Luas</th>
                <th className="border-b border-gray-300 p-2 text-center bg-gray-100 text-black">Keliling</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-r border-gray-300 p-2 text-center text-black">
                  {luas !== null ? luas.toFixed(2) : ''}
                </td>
                <td className="p-2 text-center text-black">
                  {keliling !== null ? keliling.toFixed(2) : ''}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Segitiga;

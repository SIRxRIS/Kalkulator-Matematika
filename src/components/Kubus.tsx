'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const Kubus = () => {
  const [rusuk, setRusuk] = useState<string>('');
  const [luas, setLuas] = useState<number | null>(null);
  const [volume, setVolume] = useState<number | null>(null);

  // Menghitung luas permukaan dan volume kubus
  const hitungKubus = () => {
    const r = parseFloat(rusuk);
    
    if (!isNaN(r)) {
      // Luas permukaan kubus = 6 × r²
      const luasPermukaan = 6 * r * r;
      
      // Volume kubus = r³
      const volumeKubus = r * r * r;
      
      setLuas(luasPermukaan);
      setVolume(volumeKubus);
    }
  };

  return (
    <div className="pattern-background min-h-screen flex items-center justify-center py-12 px-4">
      <div className="bg-yellow-200 rounded-lg shadow-xl max-w-md w-full mx-auto p-6">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center">
            <Link href="/bangun-ruang" className="text-gray-700 mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </Link>
            <h2 className="text-xl font-bold text-gray-800">Kelompok 4</h2>
          </div>
          <h2 className="text-sm text-gray-800">Muh.fadlan kamil</h2>
        </div>
        
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">Kalkulator Kubus</h1>
        
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-800 mb-1">Rumus Luas</label>
            <div className="bg-white p-2 rounded border border-gray-300 text-center">
              6 × R^2
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-800 mb-1">Rumus Volume</label>
            <div className="bg-white p-2 rounded border border-gray-300 text-center">
              R^3
            </div>
          </div>
        </div>
        
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-800 mb-1">Rusuk</label>
          <input 
            type="number" 
            className="w-full rounded border border-gray-300 p-2"
            value={rusuk}
            onChange={(e) => setRusuk(e.target.value)}
            placeholder="Masukkan panjang rusuk"
          />
        </div>
        
        <div className="mb-6">
          <button 
            className="bg-blue-400 hover:bg-blue-500 text-white px-4 py-2 rounded w-full"
            onClick={hitungKubus}
          >
            Hitung
          </button>
        </div>
        
        <div className="border border-gray-300 rounded overflow-hidden">
          <table className="w-full">
            <thead>
              <tr>
                <th className="border-b border-r border-gray-300 p-2 text-center bg-gray-100">Luas</th>
                <th className="border-b border-gray-300 p-2 text-center bg-gray-100">Volume</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-r border-gray-300 p-2 text-center">
                  {luas !== null ? luas.toFixed(2) : ''}
                </td>
                <td className="p-2 text-center">
                  {volume !== null ? volume.toFixed(2) : ''}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Kubus;
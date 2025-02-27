"use client";

import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Mesh } from "three";
import { useEffect, useRef } from "react";

export default function KiteCalculator() {
  const [diagonal1, setDiagonal1] = useState(0);
  const [diagonal2, setDiagonal2] = useState(0);
  const [area, setArea] = useState(0);
  const meshRef = useRef<Mesh | null>(null);

  const calculate = () => {
    const luas = (diagonal1 * diagonal2) / 2;
    setArea(luas);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-black p-8">
      <div className="max-w-md mx-auto bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-xl">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">Kalkulator Layang-Layang</h2>
        <div className="space-y-4">
          <input 
            type="number" 
            placeholder="Diagonal 1" 
            onChange={(e) => setDiagonal1(Number(e.target.value))}
            className="w-full p-2 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/50"
          />
          <input 
            type="number" 
            placeholder="Diagonal 2" 
            onChange={(e) => setDiagonal2(Number(e.target.value))}
            className="w-full p-2 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/50"
          />
          <button 
            onClick={calculate}
            className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Hitung
          </button>
          {area > 0 && (
            <div className="text-white text-center p-4 bg-white/5 rounded-lg">
              Luas: {area}
            </div>
          )}
        </div>
      </div>

      <div className="h-[400px] mt-8 rounded-xl overflow-hidden">
        <Canvas>
          <ambientLight intensity={0.5} />
          <directionalLight position={[2, 2, 2]} />
          <OrbitControls />
          <mesh ref={meshRef}>
            <planeGeometry args={[diagonal1 || 1, diagonal2 || 1]} />
            <meshStandardMaterial color="orange" />
          </mesh>
        </Canvas>
      </div>

      <div className="text-white text-center mt-4 opacity-50">
        tugas kalkulator by asrar_sonic
      </div>
    </div>
  );
}

"use client"

import Navbar from "@/components/molecules/Navbar";
import FuzzyText from "@/components/reactbits/fuzzytext";
import Orb from "@/components/reactbits/orb";

export default function NotFound() {
  return (
    <div>
      <div style={{ width: '100%', height: '100vh', position: 'absolute' }}>
        <Orb
          hoverIntensity={0.5}
          rotateOnHover={true}
          hue={0}
          forceHoverState={false}
        />
      </div>
      <Navbar />
      <div className="bg-gray-300 h-screen flex flex-col items-center justify-center">
        <div className="text-center text-gray-700">
          <FuzzyText
            baseIntensity={0.2}
            hoverIntensity={0.5}
            enableHover={true}
            fontSize={200}
          >404
          </FuzzyText>
          <h1 className="text-4xl font-extrabold  mb-4 mt-10">Halaman Tidak Ditemukan</h1>
          <p>Maaf, halaman yang Anda cari tidak ditemukan.</p>
          <p>Silakan periksa URL atau kembali ke halaman utama.</p>
        </div>
      </div>
    </div>
  )
}

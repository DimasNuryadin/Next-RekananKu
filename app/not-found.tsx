"use client"

import Navbar from "@/components/molecules/Navbar";
import FuzzyText from "@/components/reactbits/fuzzytext";

export default function NotFound() {
  return (
    <div className="bg-amber-900">
      <Navbar />
      <FuzzyText
        baseIntensity={0.2}
        hoverIntensity={0.5}
        enableHover={true}
      >404</FuzzyText>
    </div>
  )
}

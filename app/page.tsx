"use client"

import Navbar from "@/components/molecules/Navbar";
import SplitText from "@/components/reactbits/splittext";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Navbar />
      <SplitText
        text="Pengajuan Rekanan Jadi Lebih Mudah"
        delay={100}
        duration={0.6}
      />
      <Link href="signin">Sign In</Link>
    </div>
  );
}

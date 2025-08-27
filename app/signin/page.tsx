"use client"
import Navbar from "@/components/molecules/Navbar";
import Orb from "@/components/reactbits/orb";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSign() {
    console.log("data", email, password);
  }

  return (
    <div className="bg-amber-400 py-8">
      <div style={{ width: '100%', height: '100vh', position: 'absolute' }}>
        <Orb
          hoverIntensity={0.5}
          rotateOnHover={true}
          hue={0}
          forceHoverState={false}
        />
      </div>
      <Navbar />
      <div className="flex justify-center items-center h-screen z-10">
        <div className="w-1/4">
          <div className="formAuth">
            <div className="flex justify-center items-center">
              <Image src="/img/logo.svg" width={180} height={180} alt="Logo RekananKu" />
            </div>
            <div className="flex justify-center items-center mt-4">
              <Image src="/img/logo-text.svg" width={150} height={150} alt="RekananKu" />
            </div>
            <Input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" className="bg-white/70 mt-12 mb-4" />
            <Input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" className="bg-white/70 mb-4" />
            <Button onClick={handleSign} className="w-full cursor-pointer">Button</Button>
            <div className="text-center mt-4 text-sm">
              Forgot Password?
              <Link href="/forgot-password" className=""> Click Here</Link>
            </div>
          </div>
          <div className="text-sm text-center mt-4 z-10 backdrop-brightness-100">
            <Link href="/signup" className="">
              Dont have an account? Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}



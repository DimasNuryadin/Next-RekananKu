"use client"
import Navbar from "@/components/molecules/Navbar";
import Orb from "@/components/reactbits/orb";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { setSignUp } from "@/services/auth";
import { toast } from 'react-toastify';
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const _ = require('lodash');

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  async function handleSignUp() {
    const data = { email, password }
    const result = await setSignUp(data);
    if (!_.isEmpty(result?.error)) {
      return toast.error(result.error.message)
    } else {
      toast.success('Register berhasil, silahkan login')
    }
  }

  return (
    <div className="bg-gray-100">
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
            <Input value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} type="password" placeholder="Confirm Password" className="bg-white/70 mb-4" />
            <Button onClick={handleSignUp} className="w-full cursor-pointer bg-gray-800">Sign Up</Button>
            <div className="text-center mt-4 text-sm text-gray-800">
              Already have account?
              <Link href="/signin" className="font-medium"> Sign In</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}



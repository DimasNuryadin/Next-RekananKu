"use client"
import Navbar from "@/components/molecules/Navbar";
import Orb from "@/components/reactbits/orb";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { setSignIn } from "@/services/auth";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

// Cookies
import Cookies from 'js-cookie';

export default function SignIn() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSignIn() {
    const data = {
      email,
      password
    }
    if (!email || !password) {
      return toast.error("Email dan password wajib diisi!");
    } else {
      const response = await setSignIn(data);
      if (response.error) {
        return toast.error(response?.message);
      } else {
        toast.success("Login Berhasil!");
        const token = response?.data?.token;
        const tokenBase64 = btoa(token);
        Cookies.set('token', tokenBase64, { expires: 1 })
        router.push("/users/data-perusahaan");
      }
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
            <Button onClick={handleSignIn} className="w-full cursor-pointer">Sign Up</Button>
            <div className="text-center mt-4 text-sm text-gray-800">
              Forgot Password?
              <Link href="/forgot-password" className="font-medium"> Click Here</Link>
            </div>
          </div>
          <div className="text-sm text-center mt-4 z-10 backdrop-brightness-100 text-gray-800">
            Dont have an account?
            <Link href="/signup" className="font-medium">
              { } Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}



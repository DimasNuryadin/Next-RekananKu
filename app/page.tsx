"use client"

import CardBenefit from "@/components/atoms/CardBenefit";
import HowItWorks from "@/components/atoms/CardHowItWorks";
import Navbar from "@/components/molecules/Navbar";
import VendorKami from "@/components/molecules/VendorKami";
import SplitText from "@/components/reactbits/splittext";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const moveSignIn = () => {
    router.push('/signin');
  }

  return (
    <div className="bg-gray-100">
      <Navbar />
      <div className="container mx-auto">

        {/* Hero Section */}
        <section className="grid grid-cols-2 py-40">
          <div className="grid place-items-center h-100 ">
            <div className="pt-10 text-gray-800">
              <SplitText
                text="Pengajuan Rekanan Jadi Lebih Mudah"
                delay={100}
                duration={0.6}
                className="text-5xl/16 font-bold "
              />
              <p className="font-medium text-lg mt-7 mb-7">Ajukan kerja sama secara online, pantau status real-time, dokumen aman tersimpan.</p>
              <Button onClick={() => moveSignIn()} className="cursor-pointer bg-gray-800">Sign In</Button>
            </div>
          </div>
          <div className="flex justify-center">
            <Image src="/img/hero.png" alt="Hero Image" width={450} height={450} />
          </div>
        </section>

        {/* Section Benefit */}
        <section>
          <p className="text-4xl font-medium text-center text-gray-800 mb-10">Keunggulan</p>
          <div className="grid grid-cols-2">
            <div>
              <CardBenefit title="Formulir Online Mudah" desc="Isi data cepat, step by step." icon="/ic/form.svg" />
              <CardBenefit title="Dokumen Aman" desc="Data terenkripsi & terjamin" icon="/ic/lock.svg" />
              <CardBenefit title="Proses Cepat" desc="Status transparan & realtime" icon="/ic/time.svg" />
              <CardBenefit title="Notifikasi Otomatis" desc="Tidak perlu cek manual, selalu terupdate" icon="/ic/bell.svg" />
            </div>
            <div className="mt-16">
              <Image src="/img/benefit.png" alt="Benefit Image" width={400} height={400} />
            </div>
          </div>
        </section>

        {/* Section How It Works */}
        <section>
          <p className="text-4xl font-medium text-center text-gray-800 mt-20 mb-10">How It Works</p>
          <div className="grid grid-cols-4 gap-6">
            <HowItWorks icon="/ic/signin.svg" title="1. Daftar Akun" />
            <HowItWorks icon="/ic/edit.svg" title="2. Isi Form & Upload Dokumen" />
            <HowItWorks icon="/ic/wait.svg" title="3. Tunggu Verifikasi" />
            <HowItWorks icon="/ic/check.svg" title="4. Kerja Sama Dimulai 🚀" />
          </div>
        </section>

        {/* Section How It Works */}
        <section>
          <p className="text-4xl font-medium text-center text-gray-800 mt-20 mb-10">Vendor Kami</p>
          <div className="">
            <VendorKami />
          </div>
        </section>
      </div>

      {/* Section Footer */}
      <footer className="bg-gray-800 text-white py-6 mt-1">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Your Company. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

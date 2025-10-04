"use client"

import Navbar from "@/components/molecules/Navbar";
import VendorKami from "@/components/atoms/VendorKami";
import { ShoppingCart, Users, FileText, TrendingUp, Check, ArrowRight } from 'lucide-react';
import Image from "next/image";
import Link from "next/link";

export default function Home() {

  const features = [
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: "Procurement Digital",
      description: "Kelola pengadaan barang dan jasa secara digital dengan proses yang efisien dan transparan"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Vendor Management",
      description: "Database vendor terpercaya dengan sistem rating dan verifikasi yang kredibel"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Dokumen Terintegrasi",
      description: "Semua dokumen tender, kontrak, dan invoice tersimpan dengan aman dalam satu platform"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Analitik & Laporan",
      description: "Dashboard analitik real-time untuk monitoring dan pengambilan keputusan yang lebih baik"
    }
  ];

  const benefits = [
    "Hemat waktu hingga 70% dalam proses pengadaan",
    "Transparansi penuh di setiap tahap procurement",
    "Akses ke ribuan vendor terverifikasi",
    "Keamanan data dengan enkripsi tingkat enterprise",
    "Dukungan 24/7 dari tim profesional"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
              Platform E-Procurement
              {''}
              <span className="block bg-gradient-to-r from-blue-400 to-cyan-300 text-transparent bg-clip-text">
                Terpercaya #1 di Indonesia
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transformasi digital untuk pengadaan barang dan jasa perusahaan Anda.
              Efisien, transparan, dan terintegrasi dalam satu platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/signup" className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-2xl hover:shadow-blue-500/50 transition transform hover:scale-105 flex items-center justify-center">
                Mulai Sekarang
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <a href="#features" className="bg-white/10 backdrop-blur text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/20 transition border border-white/20">
                Pelajari Lebih Lanjut
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">10K+</div>
              <div className="text-gray-300">Perusahaan</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">50K+</div>
              <div className="text-gray-300">Vendor</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">1M+</div>
              <div className="text-gray-300">Transaksi</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">99.9%</div>
              <div className="text-gray-300">Uptime</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Fitur Unggulan
            </h2>
            <p className="text-xl text-gray-300">
              Solusi lengkap untuk semua kebutuhan procurement Anda
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index + 1}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-blue-500/50 transition hover:shadow-xl hover:shadow-blue-500/20 transform hover:-translate-y-2"
              >
                <div className="text-blue-400 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900/30 to-cyan-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Kenapa Memilih RekananKu?
              </h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index + 1} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center mt-1">
                      <Check size={16} className="text-white" />
                    </div>
                    <p className="text-gray-200 text-lg">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl p-8 border border-blue-500/30 backdrop-blur">
              <div className="space-y-6">
                <div className="bg-white/10 rounded-lg p-6">
                  <div className="text-3xl font-bold text-white mb-2">Trusted by Industry Leaders</div>
                  <p className="text-gray-300">Dipercaya oleh perusahaan-perusahaan terkemuka di Indonesia</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-blue-400">ISO 27001</div>
                    <div className="text-sm text-gray-300">Certified</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-cyan-400">24/7</div>
                    <div className="text-sm text-gray-300">Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl p-12 shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Siap Memulai?
            </h2>
            <p className="text-xl text-blue-50 mb-8">
              Bergabunglah dengan ribuan perusahaan yang telah mempercayai RekananKu
            </p>
            <Link href="/signup" className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-2xl transition transform hover:scale-105">
              Daftar Gratis Sekarang
            </Link>
          </div>
        </div>
      </section>

      <section className="py-4 px-4 sm:px-6 lg:px-8 bg-white">
        <VendorKami />
      </section>

      {/* Footer */}
      <footer className="bg-slate-900/50 backdrop-blur border-t border-white/10 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Image
              src="/img/logo-text-white.svg"
              alt="Logo"
              width={160}
              height={100}
              sizes="(max-width: 768px) 100vw, 160px"
            />
          </div>
          <p className="text-gray-400">
            © 2025 RekananKu. Platform E-Procurement Terpercaya Indonesia.
          </p>
        </div>
      </footer>
    </div>
  );
}

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-slate-900/80 backdrop-blur-lg border-b border-blue-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href={`/`} className="flex items-center">
            <Image
              src="/img/logo-text-white.svg"
              alt="Logo"
              width={160}
              height={100}
              sizes="(max-width: 768px) 100vw, 160px"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/#features" className="text-gray-300 hover:text-white transition px-3 py-2">Fitur</Link>
            <Link href="/#benefits" className="text-gray-300 hover:text-white transition px-3 py-2">Keunggulan</Link>
            <Link href="/signin" className="text-gray-300 hover:text-white transition px-3 py-2">Login</Link>
            <Link href="/signup" className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-6 py-2 rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition">
              Register
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-lg border-t border-blue-500/20">
          <div className="px-4 py-4 space-y-3">
            <Link href="#features" className="block text-gray-300 hover:text-white transition py-2">Fitur</Link>
            <Link href="#benefits" className="block text-gray-300 hover:text-white transition py-2">Keunggulan</Link>
            <Link href="/signin" className="block text-gray-300 hover:text-white transition py-2">Login</Link>
            <Link href="/signup" className="block bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-6 py-2 rounded-lg text-center">
              Register
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

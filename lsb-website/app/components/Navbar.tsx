"use client";

import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-4 backdrop-blur-lg bg-black/30 border-b border-white/10 shadow-lg">
      {/* Logo section */}
      <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
        <Image 
          src="/lsb.jpg" 
          alt="Lucky Shot Billiards" 
          width={60} 
          height={60} 
          className="rounded-lg shadow-md"
        />
        <span className="text-white text-xl md:text-2xl font-bold hidden md:block">
          Lucky Shot Billiards
        </span>
      </Link>

      {/* Navigation links with better styling */}
      <div className="flex items-center gap-2 md:gap-6 text-white/90 text-sm md:text-base">
        <Link 
          href="/" 
          className="px-3 py-2 rounded-lg hover:bg-white/20 hover:text-white transition-all duration-200 font-medium"
        >
          Home
        </Link>
        <Link 
          href="#about" 
          className="px-3 py-2 rounded-lg hover:bg-white/20 hover:text-white transition-all duration-200 font-medium"
        >
          About
        </Link>
        <Link 
          href="#hours" 
          className="px-3 py-2 rounded-lg hover:bg-white/20 hover:text-white transition-all duration-200 font-medium"
        >
          Hours
        </Link>
        <Link 
          href="#tournaments" 
          className="px-3 py-2 rounded-lg hover:bg-white/20 hover:text-white transition-all duration-200 font-medium"
        >
          Tournaments
        </Link>
        <Link 
          href="#prices" 
          className="px-3 py-2 rounded-lg hover:bg-white/20 hover:text-white transition-all duration-200 font-medium"
        >
          Prices
        </Link>
        <Link 
          href="#contact" 
          className="px-3 py-2 rounded-lg hover:bg-white/20 hover:text-white transition-all duration-200 font-medium"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}
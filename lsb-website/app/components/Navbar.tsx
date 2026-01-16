"use client";

import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4">
      <Link href="/">
        <Image src="/lsb.jpg" alt="Lucky Shot Billiards" width={100} height={100} />
      </Link>
      <span className="text-2xl font-bold">Lucky Shot Billiards</span>

      <div className="flex items-center gap-4" text-gray-600>
        <Link href="/" className="hover:text-white">Home</Link>
        <Link href="#about" className="hover:text-white">About</Link>
        <Link href="#contact" className="hover:text-white">Contact</Link>
        <Link href="#prices" className="hover:text-white">Login</Link>
      </div>
    </nav>
  );
}
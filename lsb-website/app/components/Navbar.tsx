"use client";

import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-4 backdrop-blur-md">
      <Link href="/">
        <Image src="/lsb.jpg" alt="Lucky Shot Billiards" width={100} height={100} />
      </Link>
      <span className="text-2xl font-bold">Lucky Shot Billiards</span>

      <div className="flex items-center gap-4 text-gray-400">
        <Link href="/" className="hover:text-black">Home</Link>
        <Link href="#about" className="hover:text-black">About</Link>
        <Link href="#hours" className="hover:text-black">Hours</Link>
        <Link href="#tournaments" className="hover:text-black">Tournaments</Link>
        <Link href="#contact" className="hover:text-black">Contact</Link>
        <Link href="#prices" className="hover:text-black">Prices</Link>
      </div>
    </nav>
  );
}
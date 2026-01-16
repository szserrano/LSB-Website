import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-zinc-50">
      <section id="home" className="min-h-screen w-full bg-cover bg-[center_center] flex items-center justify-center"
      style={{ backgroundImage: "url('/lsb_alt.png')" }}
      >
        <h1 className="text-white text-4xl font-bold backdrop-blur-md">Welcome to Lucky Shot Billiards Sunnyvale</h1>
      </section>
      <section id="about" className="min-h-screen w-full bg-slate-500 flex items-center justify-center">
        <h1 className="text-white text-4xl font-bold">About Us</h1>
      </section>
      <section id="hours" className="min-h-screen w-full bg-gray-800 flex items-center justify-center">
        <h1 className="text-white text-4xl font-bold">Hours of Operation</h1>
      </section>
      <section id="contact" className="min-h-screen w-full bg-white flex items-center justify-center">
        <h1 className="text-black text-4xl font-bold">Contact Us</h1>
      </section>
      <section id="prices" className="min-h-screen w-full bg-blue flex items-center justify-center">
        <h1 className="text-black text-4xl font-bold">Prices</h1>
      </section>
    </div>
  );
}

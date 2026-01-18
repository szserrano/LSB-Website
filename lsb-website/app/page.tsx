import Image from "next/image";
import MapSection from "./components/MapSection";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-zinc-50">
      <section id="home" className="min-h-screen w-full bg-cover bg-[center_center] flex items-center justify-center"
      style={{ backgroundImage: "url('/lsb_alt.png')" }}
      >
        <h1 className="text-white text-4xl font-bold backdrop-blur-md">Welcome to Lucky Shot Billiards Sunnyvale</h1>
      </section>
      <section id="about" className="min-h-screen w-full bg-slate-500 flex items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-6">
          <h1 className="text-white text-4xl font-bold">About Us</h1>
          <p className="text-white text-center max-w-2xl">Lucky Shot Billiards is a family-owned and operated billiards club proudly serving Sunnyvale, California for over 25 years. We are a proud member of the Billiards Congress of America (BCA) and the American Poolplayers Association (APA).</p>
          <p className="text-white text-center max-w-2xl">We are a billiards club with a selection of snacks and drinks. We have a selection of 14 9-foot pool tables available for use, along with a 7-foot pool table available paired with a dartboard in a more private area. Feel free to queue up some tunes using our TouchTunes jukebox!</p>
        </div>
      </section>
      <section id="hours" className="min-h-screen w-full bg-gray-800 flex items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-6">
          <h1 className="text-white text-4xl font-bold">Hours of Operation</h1>
          <p className="text-white text-center max-w-2xl">We are open 7 days a week! However, we are closed on major holidays and towards the end of the year for general maintenance.</p>
          <p className="text-white text-center max-w-2xl">Sunday - Thursday: 4:00 PM - 12:00 AM</p>
          <p className="text-white text-center max-w-2xl">Friday/Saturday: 4:00 PM - 2:00 AM</p>
        </div>
      </section>
      <section id="tournaments" className="min-h-screen w-full bg-blue-500 flex items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-6">
          <h1 className="text-white text-4xl font-bold">Tournaments</h1>
          <p className="text-white text-center max-w-2xl">We host weekly 8-ball/9-ball tournaments on Friday nights at 7:00 PM PST! More details per tournament will be posted on our Instagram page found in the contact section.</p>
          <p className="text-white text-center max-w-2xl">Tournament entry fee is $15 per person.</p>
          <p className="text-white text-center max-w-2xl">Tournament format is 8-ball with a $500 prize pool.</p>
        </div>
      </section>
      <section id="contact" className="min-h-screen w-full bg-white flex items-center justify-center gap-6">
        <div className="flex flex-col items-center justify-center gap-6">
          <h1 className="text-black text-4xl font-bold">Contact Us</h1>
          <p className="text-black text-center max-w-2xl">Give us a call at (408) 739-7665 and we'll be happy to help you with any questions you may have.</p>
          <p className="text-black text-center max-w-2xl">You can also find us on Instagram at <a href="https://www.instagram.com/luckyshotbilliards/" className="text-blue-500">https://www.instagram.com/luckyshotbilliards/</a>.</p>
          <MapSection />
        </div>
      </section>
      <section id="prices" className="min-h-screen w-full bg-blue flex items-center justify-center">
        <h1 className="text-black text-4xl font-bold">Prices</h1>
      </section>
    </div>
  );
}
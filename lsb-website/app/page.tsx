import Image from "next/image";
import MapSection from "./components/MapSection";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-zinc-50">
      {/* Hero Section - First impression of your site */}
      <section id="home" className="relative min-h-screen w-full bg-cover bg-[center_center] flex items-center justify-center overflow-hidden"
      style={{ backgroundImage: "url('/lsb_alt.png')" }}
      >
        {/* Overlay for better text readability - darkens background slightly */}
        <div className="absolute inset-0 bg-black/40"></div>
        {/* Text container with better styling */}
        <div className="relative z-10 px-6 text-center">
          <h1 className="text-white text-5xl md:text-6xl font-bold mb-4 drop-shadow-2xl">
            Welcome to Lucky Shot Billiards
          </h1>
          <p className="text-white text-xl md:text-2xl font-light backdrop-blur-sm bg-white/10 px-6 py-3 rounded-lg inline-block">
            Sunnyvale's Premier Billiards Experience
          </p>
        </div>
      </section>
      {/* About Section - Gradient background and better spacing */}
      <section id="about" className="min-h-screen w-full bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center py-20 px-4">
        <div className="flex flex-col items-center justify-center gap-8 max-w-4xl">
          {/* Section title with decorative underline */}
          <div className="text-center mb-4">
            <h1 className="text-white text-5xl md:text-6xl font-bold mb-3">About Us</h1>
            <div className="w-24 h-1 bg-yellow-500 mx-auto rounded-full"></div>
          </div>
          {/* Paragraphs with better spacing and readability */}
          <div className="space-y-6">
            <p className="text-white/90 text-lg md:text-xl text-center max-w-3xl leading-relaxed">
              Lucky Shot Billiards is a family-owned and operated billiards club proudly serving Sunnyvale, California for over 20 years. We are a proud member of the Billiards Congress of America (BCA) and the American Poolplayers Association (APA).
            </p>
            <p className="text-white/90 text-lg md:text-xl text-center max-w-3xl leading-relaxed">
              We are a billiards club with a selection of snacks and drinks. We have a selection of 14 9-foot pool tables available for use, along with a 7-foot pool table available paired with a dartboard in a more private area. Feel free to queue up some tunes using our TouchTunes jukebox!
            </p>
          </div>
        </div>
      </section>
      {/* Hours Section - Olive green background like pool table felt */}
      <section id="hours" className="min-h-screen w-full bg-gradient-to-br from-green-900 to-green-800 flex items-center justify-center py-20 px-4">
        <div className="flex flex-col items-center justify-center gap-8 max-w-4xl">
          <div className="text-center mb-4">
            <h1 className="text-white text-5xl md:text-6xl font-bold mb-3">Hours of Operation</h1>
            <div className="w-24 h-1 bg-yellow-500 mx-auto rounded-full"></div>
          </div>
          {/* Card container with shadow for depth */}
          <div className="bg-green-900/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-2xl border border-green-700/50 w-full max-w-3xl">
            <p className="text-white/90 text-lg text-center mb-8">We are open 7 days a week! However, we are closed on major holidays and towards the end of the year for general maintenance.</p>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-green-700/50">
                <span className="text-white font-semibold text-lg">Sunday - Thursday:</span>
                <span className="text-yellow-400 font-bold text-lg">4:00 PM - 12:00 AM</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-green-700/50">
                <span className="text-white font-semibold text-lg">Friday/Saturday:</span>
                <span className="text-yellow-400 font-bold text-lg">4:00 PM - 2:00 AM</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Tournaments Section - Highlighted information cards */}
      <section id="tournaments" className="min-h-screen w-full bg-gradient-to-br from-slate-800 to-slate-950 flex items-center justify-center py-20 px-4">
        <div className="flex flex-col items-center justify-center gap-8 max-w-4xl">
          <div className="text-center mb-4">
            <h1 className="text-white text-5xl md:text-6xl font-bold mb-3">Tournaments</h1>
            <div className="w-24 h-1 bg-yellow-500 mx-auto rounded-full"></div>
          </div>
          <div className="space-y-6">
            <p className="text-white/95 text-lg md:text-xl text-center max-w-3xl leading-relaxed">
              We host weekly 8-ball/9-ball tournaments on Friday nights at 7:00 PM PST! More details per tournament will be posted on our Instagram page found in the contact section.
            </p>
            {/* Highlight boxes for important info */}
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-lg">
                <h3 className="text-yellow-400 font-bold text-xl mb-2">Entry Fee</h3>
                <p className="text-white text-2xl font-semibold">$15 per person</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-lg">
                <h3 className="text-yellow-400 font-bold text-xl mb-2">Prize Pool</h3>
                <p className="text-white text-2xl font-semibold">$500</p>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-lg mt-4">
              <h3 className="text-yellow-400 font-bold text-xl mb-2">Format</h3>
              <p className="text-white text-lg">8-ball and 9-ball tournaments alternating each week</p>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Section - Dark red background like pool table felt */}
      <section id="contact" className="min-h-screen w-full bg-gradient-to-br from-red-900 to-red-950 flex items-center justify-center py-20 px-4">
        <div className="flex flex-col items-center justify-center gap-8 max-w-4xl">
          <div className="text-center mb-4">
            <h1 className="text-white text-5xl md:text-6xl font-bold mb-3">Contact Us</h1>
            <div className="w-24 h-1 bg-yellow-500 mx-auto rounded-full"></div>
          </div>
          <div className="space-y-6 text-center">
            {/* Phone number with icon-style emphasis */}
            <div className="bg-red-900/50 backdrop-blur-sm rounded-xl p-6 shadow-md border border-red-700/50">
              <p className="text-white/90 text-lg mb-2">Give us a call!</p>
              <a href="tel:408-739-7665" className="text-yellow-400 text-2xl md:text-3xl font-bold hover:text-yellow-300 transition-colors">
                (408) 739-7665
              </a>
            </div>
            <p className="text-white/90 text-lg max-w-2xl leading-relaxed">
              We'll be happy to help you with any questions you may have.
            </p>
            {/* Instagram link with better styling */}
            <div className="bg-red-900/50 backdrop-blur-sm rounded-xl p-6 shadow-md border border-red-700/50">
              <p className="text-white/90 text-lg mb-3">Keep up to date with what's happening at Lucky Shot Billiards!</p>
              <a 
                href="https://www.instagram.com/luckyshotbilliards/" 
                className="inline-block px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105 font-semibold" 
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Our Instagram →
              </a>
            </div>
            <p className="text-white text-xl font-semibold mt-8">Stop by and see us in person!</p>
            <MapSection />
          </div>
        </div>
      </section>
      {/* Prices Section - Menu background image covering full screen */}
      <section id="prices" className="relative w-full bg-cover bg-center bg-fixed flex items-start justify-center pt-32 pb-20 px-4"
      style={{ 
        backgroundImage: "url('/lsbmenupic.jpeg')",
        minHeight: "100vh"
      }}
      >
        {/* Subtle overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30"></div>
        {/* Content container - allows scrolling to see all menu items */}
        <div className="relative z-10 w-full max-w-4xl text-center">
          <h1 className="text-white text-5xl md:text-6xl font-bold mb-3 drop-shadow-2xl">Prices</h1>
          <div className="w-24 h-1 bg-yellow-500 mx-auto rounded-full mb-8"></div>
          {/* Menu content area with semi-transparent background for readability */}
          <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-2xl border border-white/20">
          <p className="text-white/90 text-lg drop-shadow-lg">Scroll to see all menu items and house rules</p>
            <p className="text-white text-xl md:text-2xl drop-shadow-lg mb-4">Hot Dogs.. $6.00</p>
            <p className="text-white text-xl md:text-2xl drop-shadow-lg mb-4">Corn Dogs.. $6.00</p>
            <p className="text-white text-xl md:text-2xl drop-shadow-lg mb-4">Chicken Bake.. $6.00</p>
            <p className="text-white text-xl md:text-2xl drop-shadow-lg mb-4">Nachos.. $6.00</p>
            <p className="text-white text-xl md:text-2xl drop-shadow-lg mb-4">Cup of Noodles.. $6.00</p>
            {/* This container will expand to show all menu content as you add it */}
            <div className="mt-8 space-y-4">
              {/* Add your menu items and house rules here */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
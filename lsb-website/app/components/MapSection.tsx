"use client";

export default function MapSection() {
  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3170.5720234465725!2d-122.03050580000001!3d37.3763024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb65db2acbf33%3A0xf590f97c087f9a8d!2sLucky%20Shot%20Billiards!5e0!3m2!1sen!2sus!4v1768704125623!5m2!1sen!2sus" 
            width="600" height="450" 
            style={{border:0}} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade" 
          />
    </div>
  );
}
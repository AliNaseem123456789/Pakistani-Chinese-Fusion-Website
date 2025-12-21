import { MapPin } from 'lucide-react';

export function MapSection() {
  const address = "30 Nassau Blvd, Garden City, NY 11530";
  const encodedAddress = encodeURIComponent(address);
  
  // Fixed Google Maps URL
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
  const iframeSrc = `https://maps.google.com/maps?q=${encodedAddress}&t=&z=15&ie=UTF8&iwloc=&output=embed&hl=en&maptype=roadmap&controls=0`;

  return (
    <section className="bg-gray-50 py-12">
      <div className="w-full max-w-7xl mx-auto px-4">
        {/* MAP CONTAINER */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
          <iframe
            src={iframeSrc}
            width="100%"
            height="500"
            className="w-full h-[400px] md:h-[500px]"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps Location"
          />
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 bg-black/20 hover:bg-black/30 flex flex-col items-center justify-center text-center transition-colors duration-300 group"
          >   
          </a>
        </div>
      </div>
    </section>
  );
}

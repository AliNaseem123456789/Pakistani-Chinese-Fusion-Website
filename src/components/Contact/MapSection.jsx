import { MapPin } from 'lucide-react';

export function MapSection() {
  const address = "123 Fusion Avenue, New York, NY 10001";
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl text-center mb-12">Find Us</h2>

        {/* Clickable Google Maps */}
        <a
          href={googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
        >
          {/* Embedded Map */}
          <iframe
  src="https://maps.google.com/maps?q=123+Fusion+Avenue,+New+York,+NY+10001&output=embed"
  width="100%"
  height="500"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
/>


          {/* Optional overlay info */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none">
            <MapPin size={64} className="text-white drop-shadow-lg mb-4" />
            <h3 className="text-2xl text-white drop-shadow-lg">{address}</h3>
          </div>
        </a>
      </div>
    </section>
  );
}

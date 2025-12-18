import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import pic1 from '../../public/assets/review_pictures/pic1.jpg';
import pic2 from '../../public/assets/review_pictures/pic2.jpg';
import pic3 from '../../public/assets/review_pictures/pic3.jpg';
import pic4 from '../../public/assets/review_pictures/pic4.jpg';
import pic5 from '../../public/assets/review_pictures/pic5.jpg';
import pic6 from '../../public/assets/review_pictures/pic6.jpg';
import pic7 from '../../public/assets/review_pictures/pic7.jpg';
import pic8 from '../../public/assets/review_pictures/pic8.jpg';
import pic9 from '../../public/assets/review_pictures/pic9.jpg';
import pic10 from '../../public/assets/review_pictures/pic10.jpg';

const images = [
  pic1, pic2, pic3, pic4, pic5,
 pic7, pic9, pic10
];

export function ImageSlider({ interval = 3500 }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCount = 2;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + visibleCount) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev - visibleCount < 0
        ? images.length - visibleCount
        : prev - visibleCount
    );
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, interval);
    return () => clearInterval(timer);
  }, [interval]);

  const visibleImages =
    images.slice(currentIndex, currentIndex + visibleCount).length === visibleCount
      ? images.slice(currentIndex, currentIndex + visibleCount)
      : [
          ...images.slice(currentIndex),
          ...images.slice(0, visibleCount - (images.length - currentIndex)),
        ];

  return (
    <div className="w-full bg-gray-100 py-10">
      <div className="max-w-5xl mx-auto px-6 relative">

        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10
                     bg-white/90 hover:bg-white p-2 rounded-full shadow-lg"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10
                     bg-white/90 hover:bg-white p-2 rounded-full shadow-lg"
        >
          <ChevronRight size={24} />
        </button>

        {/* Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-12">
          {visibleImages.map((img, index) => (
            <motion.div
              key={index}
              className="
                w-full
                aspect-[4/3]
                bg-white
                rounded-xl
                shadow-md
                overflow-hidden
                flex items-center justify-center
              "
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              <img
                src={img}
                alt={`Review ${index + 1}`}
                className="w-full h-full object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

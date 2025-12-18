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
  pic6, pic7, pic8, pic9, pic10
];

export function ImageSlider({ interval = 3500 }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCount = 4; // show 4 images at once

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
    <div className="w-full bg-gray-100 py-6">
      <div className="max-w-full mx-auto px-4 relative flex items-center">

        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-0 z-10 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-0 z-10 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg"
        >
          <ChevronRight size={24} />
        </button>

        {/* Images */}
        <div className="flex gap-4 overflow-hidden w-full px-12">
          {visibleImages.map((img, index) => (
            <motion.div
              key={index}
              className="flex-shrink-0 h-36 rounded-lg overflow-hidden shadow-md" // increased height
              style={{ width: '23%' }} // width for 4 images
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              <img
                src={img}
                alt={`Review ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

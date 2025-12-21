import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Hero } from '../components/Home/Hero';
import { WhyChoose } from '../components/Home/WhyChoose';
import { FeaturedDishes } from '../components/Home/FeaturedDishes';
import { AboutUs } from '../components/Home/AboutUs';
import { ImageSlider } from '../components/Home/ImageSlider';
import { Testimonials } from '../components/Home/Testimonials';
import { Footer } from '../components/Footer';
export function Home() {
  const contentRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
    const backgroundY = useTransform(scrollY, [0, 2000], [0, 400]);
  const backgroundOpacity = useTransform(scrollY, [0, 800, 1600], [0.7, 0.5, 0.3]);

  return (
    <div className="relative">
      <Hero />
      <div ref={contentRef} className="relative">
        <motion.div
          style={{
            y: backgroundY,
            opacity: backgroundOpacity,
          }}
          className="fixed inset-0 z-0 pointer-events-none"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 z-10"></div>
       
                 <img
                   src="/assets/banners/mainbanner.jpeg"
                   alt="Background"
                   className="w-full h-full object-cover"
                 />
        </motion.div>
        {/* Scrolling Content */}
        <div className="relative z-10 bg-white">
          <WhyChoose />
          <FeaturedDishes />
          <AboutUs /> 
          <Testimonials />
          <ImageSlider/>
          <Footer />
        </div>
      </div>
    </div>
  );
}

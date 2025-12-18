import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import pic from "../../public/assets/banners/aboutuspic.jpg";

export function AboutUs() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src={pic}
                alt="KHAO Chef"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-8 left-8 text-white">
                <p className="text-3xl mb-2">Master Chef</p>
                <p className="text-xl text-amber-300">From Pakistan's Finest Hotels</p>
              </div>
            </div>

            {/* Decorative Elements */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-6 -right-6 w-24 h-24 bg-red-600 rounded-full opacity-20 blur-xl"
            ></motion.div>
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-6 -left-6 w-32 h-32 bg-amber-600 rounded-full opacity-20 blur-xl"
            ></motion.div>
          </motion.div>

          {/* Right Side - Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h2
              className="text-5xl md:text-6xl mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              About KHAO
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-4 text-lg text-gray-700 leading-relaxed"
            >
              <p>
                KHAO brings authentic halal Chinese cuisine with a Pakistani twist.
              </p>
              <p>
                Our master chefs, trained in top Pakistani hotels, blend bold spices with classic techniques to create unique flavors.
              </p>
              <p>
                Every dish is halal-certified and crafted to deliver a memorable dining experience.
              </p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="pt-8"
              >
                <div className="grid grid-cols-3 gap-8 border-t border-gray-200 pt-8">
                  <div className="text-center">
                    <p className="text-4xl text-red-600 mb-2">15+</p>
                    <p className="text-gray-600">Years Experience</p>
                  </div>
                  <div className="text-center">
                    <p className="text-4xl text-red-600 mb-2">100%</p>
                    <p className="text-gray-600">Halal Certified</p>
                  </div>
                  <div className="text-center">
                    <p className="text-4xl text-red-600 mb-2">5★</p>
                    <p className="text-gray-600">Hotel Trained</p>
                  </div>
                </div>
              </motion.div>

              <motion.a
                href="/menu"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg mt-8 transition-colors"
              >
                Experience KHAO Today
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

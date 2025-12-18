import { motion } from 'motion/react';

export function HeroSection() {
  return (
    <section className="pt-32 pb-20 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-7xl mb-6"
        >
          Contact Us
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-amber-300 max-w-3xl mx-auto"
        >
          We'd Love to Hear From You
        </motion.p>
      </div>
    </section>
  );
}

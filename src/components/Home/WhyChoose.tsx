import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { ChefHat, Heart, Leaf, Sprout } from 'lucide-react';


export function WhyChoose() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const reasons = [
    {
      icon: <ChefHat className="w-16 h-16 text-red-600" />,
      title: '5-Star Hotel Chefs',
      description: 'Our culinary team, trained in prestigious 5-star international establishments, brings decades of expertise'
    },
    {
      icon: <Leaf className="w-16 h-16 text-green-600" />,
      title: '100% Halal',
      description: 'Certified halal ingredients and preparation methods ensuring authentic Muslim-friendly dining'
    },
    {
      icon: <Heart className="w-16 h-16 text-pink-600" />,
      title: 'Unique Culinary Fusion',
      description: 'Traditional South Asian flavors meet precise Chinese cooking techniques for a unique fusion experience.'
    },
 {
  icon: <Sprout className="w-16 h-16 text-green-600" />,
  title: 'Freshly Prepared',
  description: 'Every dish is cooked fresh after you order, using the highest quality ingredients to ensure the most vibrant, delicious.'
}

  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl mb-4">Why Choose KHAO?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the perfect blend of Pakistani hospitality and Chinese culinary excellence
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center p-8 rounded-xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <motion.div
                className="flex justify-center mb-6"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {reason.icon}
              </motion.div>
              <h3 className="text-2xl mb-4">{reason.title}</h3>
              <p className="text-gray-600 leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

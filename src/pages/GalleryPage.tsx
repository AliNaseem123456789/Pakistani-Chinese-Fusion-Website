import { useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { X } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Footer } from '../components/Footer';
export function GalleryPage() {
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 2000], [0, 400]);
  const backgroundOpacity = useTransform(scrollY, [0, 800], [0.6, 0.3]);

  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState('All');
const galleryImages = [
  // 🐔 Chicken
  { url: "/assets/menuitems/img90_Sesame_Chicken_Plate.jpg", title: "Sesame Chicken", category: "Chicken" },
  { url: "/assets/menuitems/img18_Chicken_Manchurian.jpg", title: "Chicken Manchurian", category: "Chicken" },
  { url: "/assets/menuitems/img19_Chicken_W_Garlic.jpg", title: "Chicken w/ Garlic", category: "Chicken" },
  { url: "/assets/menuitems/img20_Hakka_Chicken.jpg", title: "Hakka Chicken", category: "Chicken" },
  { url: "/assets/menuitems/img21_Chicken_Bamboo_Shoot.jpg", title: "Chicken Bamboo Shoot", category: "Chicken" },
  { url: "/assets/menuitems/img22_Chicken_Chilli.jpg", title: "Chicken Chilli", category: "Chicken" },
  { url: "/assets/menuitems/img23_Chicken_w_mashrooms.jpg", title: "Chicken w/ Mushrooms", category: "Chicken" },
  { url: "/assets/menuitems/img24_Black_Pepper_Beef.jpg", title: "Black Pepper Chicken", category: "Chicken" },
  { url: "/assets/menuitems/img25_hunan_chicken.jpg", title: "Hunan Chicken", category: "Chicken" },

  // 🍲 Soups
  { url: "/assets/menuitems/img26_Chicken_Corn_Soup.jpg", title: "Chicken Corn Soup", category: "Soups" },
  { url: "/assets/menuitems/img27_Hot_Sour_Soup.jpg", title: "Hot & Sour Soup", category: "Soups" },
  { url: "/assets/menuitems/img28_Egg_Drop_Soup.jpg", title: "Egg Drop Soup", category: "Soups" },
  { url: "/assets/menuitems/img29_Wonton_Soup.jpg", title: "Wonton Soup", category: "Soups" },
  { url: "/assets/menuitems/img30_Tom_Yum_Soup.jpg", title: "Tom Yum Soup", category: "Soups" },

  // 🥩 Beef
  { url: "/assets/menuitems/img31_Beef_Broccoli.jpg", title: "Beef Broccoli", category: "Beef" },
  { url: "/assets/menuitems/img32_Sesame_Beef.jpg", title: "Sesame Beef", category: "Beef" },
  { url: "/assets/menuitems/img33_Hakka_Beef.jpg", title: "Hakka Beef", category: "Beef" },
  { url: "/assets/menuitems/img34_Beef_w_Garlic_Sauce.jpg", title: "Beef w/ Garlic Sauce", category: "Beef" },
  { url: "/assets/menuitems/img35_Beef_w_Mushrooms.jpg", title: "Beef w/ Mushrooms", category: "Beef" },
  { url: "/assets/menuitems/img36_Beef_w_Scallion.jpg", title: "Beef w/ Scallion", category: "Beef" },
  { url: "/assets/menuitems/img37_Beef_Bamboo_Shoot.jpg", title: "Beef Bamboo Shoot", category: "Beef" },
  { url: "/assets/menuitems/img38_Crispy_Beef_Chilli.jpg", title: "Crispy Beef Chilli", category: "Beef" },
  { url: "/assets/menuitems/img39_Hunan_Beef.jpg", title: "Hunan Beef", category: "Beef" },
  { url: "/assets/menuitems/img24_Black_Pepper_Beef.jpg", title: "Black Pepper Beef", category: "Beef" },

  // 🍤 Seafood
  { url: "/assets/menuitems/img40_Shrimp_Broccoli.jpg", title: "Shrimp Broccoli", category: "Seafood" },
  { url: "/assets/menuitems/img41_Sesame_Shrimp.jpg", title: "Sesame Shrimp", category: "Seafood" },
  { url: "/assets/menuitems/img42_Shrimp_w_Garlic_Sauce.jpg", title: "Shrimp w/ Garlic Sauce", category: "Seafood" },
  { url: "/assets/menuitems/img43_Hakka_Shrimp.jpg", title: "Hakka Shrimp", category: "Seafood" },
  { url: "/assets/menuitems/img44_Shrimp_Bamboo_shoot.jpg", title: "Shrimp Bamboo Shoot", category: "Seafood" },
  { url: "/assets/menuitems/img45_Shrimp_Chilli.jpg", title: "Shrimp Chilli", category: "Seafood" },
  { url: "/assets/menuitems/img46_Shrimp_w_Mushrooms.jpg", title: "Shrimp w/ Mushrooms", category: "Seafood" },
  { url: "/assets/menuitems/img47_shrimp_manchurian.jpg", title: "Shrimp Manchurian", category: "Seafood" },
  { url: "/assets/menuitems/img50_Fish_Chilli.jpg", title: "Fish Chilli", category: "Seafood" },
  { url: "/assets/menuitems/img51_Fish_Fry_Whole.jpg", title: "Whole Fried Fish", category: "Seafood" },

  // 🍜 Noodles
  { url: "/assets/menuitems/img52_Chicken_Lo_Mein.jpg", title: "Chicken Lo Mein", category: "Noodles" },
  { url: "/assets/menuitems/img53_Beef_Lo_Mein.jpg", title: "Beef Lo Mein", category: "Noodles" },
  { url: "/assets/menuitems/img54_Shrimp_Lo_Mein.jpg", title: "Shrimp Lo Mein", category: "Noodles" },
  { url: "/assets/menuitems/img55_Tofu_Lo_Mein.jpg", title: "Tofu Lo Mein", category: "Noodles" },
  { url: "/assets/menuitems/img56_Vegetable_Lo_Mein.jpg", title: "Vegetable Lo Mein", category: "Noodles" },
  { url: "/assets/menuitems/img58_Singapore_Noodles.jpg", title: "Singapore Noodles", category: "Noodles" },

  // 🍚 Rice
  { url: "/assets/menuitems/img75_Chicken_Fried_Rice.jpg", title: "Chicken Fried Rice", category: "Rice" },
  { url: "/assets/menuitems/img76_Beef_Fried_Rice.jpg", title: "Beef Fried Rice", category: "Rice" },
  { url: "/assets/menuitems/img77_Shrimp_Fried_Rice.jpg", title: "Shrimp Fried Rice", category: "Rice" },
  { url: "/assets/menuitems/img78_Veg_Fried_Rice.jpg", title: "Vegetable Fried Rice", category: "Rice" },
  { url: "/assets/menuitems/img79_Mixed_Special_Fried_Rice.jpg", title: "Mixed Special Fried Rice", category: "Rice" },
  { url: "/assets/menuitems/img80_White_Rice_pint.jpg", title: "White Rice", category: "Rice" },
];


  const categories = ['All', 'Dishes', 'Kitchen', 'Ambiance'];

  const filteredImages = activeFilter === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeFilter);

  return (
    <div className="relative min-h-screen">
      {/* Parallax Background */}
      <motion.div
        style={{
          y: backgroundY,
          opacity: backgroundOpacity,
        }}
        className="fixed inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 z-10"></div>
        
        <img
          src="/assets/banners/mainbanner.jpeg"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-32 pb-20 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-6xl md:text-7xl mb-6"
            >
              Gallery
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-amber-300 max-w-3xl mx-auto"
            >
              A Visual Journey Through Our Culinary Creations
            </motion.p>
          </div>
        </section>

        {/* Gallery Content */}
        <div className="bg-white">

          <section className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                key={activeFilter}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
              >
                {filteredImages.map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                    className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-2xl transition-all cursor-pointer aspect-square"
                    onClick={() => setSelectedImage(image.url)}
                  >
                    <ImageWithFallback
                      src={image.url}
                      alt={image.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                      <div className="p-4 text-white w-full">
                        <h3 className="text-lg mb-1">{image.title}</h3>
                        <p className="text-sm text-amber-300">{image.category}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Instagram CTA */}
          <section className="py-16 bg-gray-50">
            <div className="max-w-4xl mx-auto text-center px-4">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-3xl mb-4"
              >
                Share Your Experience
              </motion.h2>
              <p className="text-gray-600 mb-6">
                Tag us @khao.nyc on Instagram to be featured in our gallery!
              </p>
              <motion.a
                href="https://www.instagram.com/khaohalalchinese/"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg transition-colors"
              >
                Follow Us on Instagram
              </motion.a>
            </div>
          </section>

          <Footer />
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-amber-300 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>
          <motion.img
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            src={selectedImage}
            alt="Full size"
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </motion.div>
      )}
    </div>
  );
}

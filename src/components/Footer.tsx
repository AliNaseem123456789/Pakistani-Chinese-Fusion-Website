import { motion } from "motion/react";
import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-red-950 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl font-semibold mb-4 tracking-widest">
              KHAO
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Authentic Halal Chinese with Pakistani flair, crafted by 5-star
              hotel chefs in the heart of New York.
            </p>

            <div className="flex gap-4">
              <motion.a
                href="https://www.instagram.com/khaohalalchinese/"
                aria-label="KHAO Instagram"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="text-gray-300 hover:text-red-400 transition-colors"
              >
                <Instagram size={24} />
              </motion.a>

              <motion.a
                href="https://www.facebook.com/profile.php?id=61575022847569"
                aria-label="KHAO Facebook"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="text-gray-300 hover:text-red-400 transition-colors"
              >
                <Facebook size={24} />
              </motion.a>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl mb-6 font-semibold">Contact Us</h4>

            <ul className="space-y-4 text-sm">
              <li>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=30%20Nassau%20Blvd,%20Garden%20City,%20NY%2011530"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-gray-300 hover:text-red-400 transition-colors"
                >
                  <MapPin className="w-5 h-5 text-red-400 flex-shrink-0 mt-1" />
                  <span>30 Nassau Blvd, Garden City, NY 11530</span>
                </a>
              </li>

              <li>
                <a
                  href="tel:+15164838888"
                  className="flex items-center gap-3 text-gray-300 hover:text-red-400 transition-colors"
                >
                  <Phone className="w-5 h-5 text-red-400 flex-shrink-0" />
                  <span>(516) 483-8888</span>
                </a>
              </li>

              <li>
                <a
                  href="mailto:Khaochineseny@gmail.com"
                  className="flex items-center gap-3 text-gray-300 hover:text-red-400 transition-colors"
                >
                  <Mail className="w-5 h-5 text-red-400 flex-shrink-0" />
                  <span>Khaochineseny@gmail.com</span>
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Opening Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl mb-6 font-semibold">Opening Hours</h4>

            <div className="space-y-4 text-sm">
              <div>
                <p style={{ fontWeight: 600, color: "#ffffff" }}>
                  Monday – Friday
                </p>
                <p className="text-gray-300">12:00 PM – 10:00 PM</p>
              </div>

              <div>
                <p style={{ fontWeight: 600, color: "#ffffff" }}>Saturday</p>
                <p className="text-gray-300">12:00 PM – 10:30 PM</p>
              </div>

              <div>
                <p style={{ fontWeight: 600, color: "#ffffff" }}>Sunday</p>
                <p className="text-gray-300">12:00 PM – 9:30 PM</p>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl mb-6 font-semibold">Quick Links</h4>

            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="/about"
                  className="text-gray-300 hover:text-red-400 transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/menu"
                  className="text-gray-300 hover:text-red-400 transition-colors"
                >
                  Our Menu
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-gray-300 hover:text-red-400 transition-colors"
                >
                  Reservations
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-gray-300 hover:text-red-400 transition-colors"
                >
                  Call for Catering Services
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-700 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>© 2025–2026 KHAO Restaurant. All rights reserved.</p>
            <p>
              100% Halal Certified • Proudly serving New York’s diverse
              community
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

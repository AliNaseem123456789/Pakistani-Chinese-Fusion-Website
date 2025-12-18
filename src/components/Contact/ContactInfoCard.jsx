import { motion } from 'motion/react';

export function ContactInfoCard({ icon: Icon, title, children }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-gray-50 p-6 rounded-lg"
    >
      <div className="flex items-start gap-4 mb-4">
        <Icon className="text-red-600 flex-shrink-0 mt-1" size={24} />
        <div>
          <h3 className="text-xl mb-2">{title}</h3>
          {children}
        </div>
      </div>
    </motion.div>
  );
}

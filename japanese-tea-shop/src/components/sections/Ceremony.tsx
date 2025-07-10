'use client';

import { motion } from 'framer-motion';

export default function Ceremony() {
  return (
    <section className="py-20 bg-zen-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-noto-serif font-light text-sumi-800 mb-6">
              茶道
            </h2>
            <h3 className="text-2xl font-noto-sans font-light text-sumi-600 mb-8">
              The Art of Tea Ceremony
            </h3>
            
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-matcha-50 rounded-lg p-6"
              >
                <h4 className="font-noto-serif font-medium text-sumi-800 mb-2">Wa - Harmony</h4>
                <p className="text-sumi-600 font-noto-sans text-sm">
                  The foundation of tea ceremony, representing peace and unity between host and guest.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-wabi-50 rounded-lg p-6"
              >
                <h4 className="font-noto-serif font-medium text-sumi-800 mb-2">Kei - Respect</h4>
                <p className="text-sumi-600 font-noto-sans text-sm">
                  Mutual respect for all participants, tools, and the sacred space of the tea room.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-zen-100 rounded-lg p-6"
              >
                <h4 className="font-noto-serif font-medium text-sumi-800 mb-2">Sei - Purity</h4>
                <p className="text-sumi-600 font-noto-sans text-sm">
                  Cleansing of mind and spirit through the careful preparation of tea.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="bg-sumi-50 rounded-lg p-6"
              >
                <h4 className="font-noto-serif font-medium text-sumi-800 mb-2">Jaku - Tranquility</h4>
                <p className="text-sumi-600 font-noto-sans text-sm">
                  The inner peace achieved through the meditative practice of tea preparation.
                </p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-matcha-100 to-wabi-100 rounded-2xl p-8 shadow-lg">
              <div className="aspect-square bg-zen-50 rounded-xl mb-6 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🍵</div>
                  <p className="text-sumi-600 font-noto-sans">Tea Ceremony Experience</p>
                </div>
              </div>
              
              <h3 className="text-xl font-noto-serif font-medium text-sumi-800 mb-4">
                Join Our Tea Ceremony
              </h3>
              
              <p className="text-sumi-600 font-noto-sans text-sm leading-relaxed mb-6">
                Experience the meditative beauty of a traditional Japanese tea ceremony. 
                Our certified tea masters will guide you through each step of this ancient ritual.
              </p>
              
              <button className="w-full px-6 py-3 bg-matcha-600 text-zen-50 font-noto-sans font-medium rounded-lg hover:bg-matcha-700 transition-colors duration-300">
                Book Experience
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-zen-50 to-wabi-50 flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/tea-ceremony-bg.jpg')] bg-cover bg-center opacity-10"></div>
      
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-center px-4 z-10"
      >
        <motion.h1
          className="text-6xl md:text-8xl font-noto-serif font-light text-sumi-800 mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
        >
          和茶
        </motion.h1>
        
        <motion.p
          className="text-xl md:text-2xl font-noto-sans font-light text-sumi-600 mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4 }}
        >
          Experience the tranquil harmony of traditional Japanese tea culture
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="flex gap-4 justify-center flex-wrap"
        >
          <button className="px-8 py-3 bg-matcha-600 text-zen-50 font-noto-sans font-medium rounded-lg hover:bg-matcha-700 transition-colors duration-300">
            Explore Teas
          </button>
          <button className="px-8 py-3 border-2 border-sumi-300 text-sumi-700 font-noto-sans font-medium rounded-lg hover:bg-sumi-50 transition-colors duration-300">
            Learn More
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}
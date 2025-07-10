'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section className="py-20 bg-zen-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-noto-serif font-light text-sumi-800 mb-6">
            茶の道
          </h2>
          <p className="text-lg text-sumi-600 max-w-3xl mx-auto font-noto-sans">
            The Way of Tea - A journey through centuries of tradition, mindfulness, and the pursuit of inner peace through the simple act of sharing tea.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-wabi-50 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-noto-serif font-medium text-sumi-800 mb-4">
                Our Philosophy
              </h3>
              <p className="text-sumi-600 font-noto-sans leading-relaxed mb-4">
                Rooted in the principles of wa (harmony), kei (respect), sei (purity), and jaku (tranquility), 
                we believe that tea is more than a beverage—it is a bridge to mindfulness and connection.
              </p>
              <p className="text-sumi-600 font-noto-sans leading-relaxed">
                Every cup tells a story of careful cultivation, artisanal processing, and the timeless rituals 
                that have been passed down through generations.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-matcha-100 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-noto-serif font-medium text-sumi-800 mb-4">
                Traditional Craftsmanship
              </h3>
              <p className="text-sumi-600 font-noto-sans leading-relaxed mb-4">
                Our teas are sourced directly from artisanal gardens across Japan, where master tea growers 
                continue ancient techniques passed down through their families.
              </p>
              <p className="text-sumi-600 font-noto-sans leading-relaxed">
                From the misty mountains of Uji to the coastal gardens of Shizuoka, each leaf carries 
                the essence of its terroir and the dedication of its caretakers.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
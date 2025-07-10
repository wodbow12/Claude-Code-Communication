'use client';

import { motion } from 'framer-motion';
import { Leaf, Sparkles, Mountain, Waves } from 'lucide-react';

const teas = [
  {
    name: 'Matcha Ceremonial',
    japanese: '抹茶',
    description: 'Stone-ground premium matcha from Uji, perfect for traditional tea ceremonies.',
    icon: Leaf,
    price: '¥4,800',
    color: 'from-matcha-500 to-matcha-600'
  },
  {
    name: 'Sencha Premium',
    japanese: '煎茶',
    description: 'Fresh, vibrant green tea with a delicate balance of sweetness and umami.',
    icon: Sparkles,
    price: '¥2,400',
    color: 'from-emerald-500 to-emerald-600'
  },
  {
    name: 'Gyokuro Imperial',
    japanese: '玉露',
    description: 'The finest shade-grown tea, offering an exquisite, almost oceanic flavor.',
    icon: Mountain,
    price: '¥8,200',
    color: 'from-teal-500 to-teal-600'
  },
  {
    name: 'Genmaicha Artisan',
    japanese: '玄米茶',
    description: 'Green tea blended with roasted rice, creating a nutty, comforting flavor.',
    icon: Waves,
    price: '¥1,800',
    color: 'from-amber-500 to-amber-600'
  }
];

export default function TeaCollection() {
  return (
    <section className="py-20 bg-wabi-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-noto-serif font-light text-sumi-800 mb-6">
            Tea Collection
          </h2>
          <p className="text-lg text-sumi-600 max-w-3xl mx-auto font-noto-sans">
            Discover our carefully curated selection of premium Japanese teas, each chosen for its unique character and exceptional quality.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teas.map((tea, index) => (
            <motion.div
              key={tea.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-zen-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${tea.color} flex items-center justify-center mb-4`}>
                <tea.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-noto-serif font-medium text-sumi-800 mb-2">
                {tea.name}
              </h3>
              
              <p className="text-2xl font-noto-serif text-matcha-700 mb-3">
                {tea.japanese}
              </p>
              
              <p className="text-sumi-600 font-noto-sans text-sm leading-relaxed mb-4">
                {tea.description}
              </p>
              
              <div className="flex items-center justify-between">
                <span className="text-xl font-noto-serif font-semibold text-sumi-800">
                  {tea.price}
                </span>
                <button className="px-4 py-2 bg-matcha-600 text-zen-50 font-noto-sans text-sm rounded-lg hover:bg-matcha-700 transition-colors duration-300">
                  Add to Cart
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Chen',
    location: 'San Francisco, CA',
    text: 'The matcha ceremony was transformative. I felt a deep sense of peace and connection to something greater than myself.',
    rating: 5,
    tea: 'Ceremonial Matcha Experience'
  },
  {
    name: 'Michael Rodriguez',
    location: 'New York, NY',
    text: 'The quality of the sencha is exceptional. You can taste the care and tradition in every cup.',
    rating: 5,
    tea: 'Premium Sencha'
  },
  {
    name: 'Emily Johnson',
    location: 'Portland, OR',
    text: 'Learning about the four principles of tea ceremony changed how I approach mindfulness in my daily life.',
    rating: 5,
    tea: 'Tea Ceremony Workshop'
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-matcha-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-noto-serif font-light text-sumi-800 mb-6">
            Customer Stories
          </h2>
          <p className="text-lg text-sumi-600 max-w-3xl mx-auto font-noto-sans">
            Hear from our community about their journey with traditional Japanese tea culture.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-zen-50 rounded-2xl p-6 shadow-lg"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                ))}
              </div>
              
              <blockquote className="text-sumi-700 font-noto-sans leading-relaxed mb-4">
                &ldquo;{testimonial.text}&rdquo;
              </blockquote>
              
              <div className="border-t border-sumi-200 pt-4">
                <div className="font-noto-serif font-medium text-sumi-800">
                  {testimonial.name}
                </div>
                <div className="text-sumi-500 font-noto-sans text-sm">
                  {testimonial.location}
                </div>
                <div className="text-matcha-600 font-noto-sans text-sm mt-1">
                  {testimonial.tea}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
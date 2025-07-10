'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-20 bg-sumi-900 text-zen-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-noto-serif font-light mb-6">
            Visit Us
          </h2>
          <p className="text-lg text-zen-200 max-w-3xl mx-auto font-noto-sans">
            Experience the tranquility of our tea house and join us for a moment of peace.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-noto-serif font-medium mb-8">
              Tea House Information
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-matcha-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-noto-serif font-medium mb-1">Location</h4>
                  <p className="text-zen-200 font-noto-sans">
                    123 Zen Garden Lane<br />
                    Kyoto District, CA 94102
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-matcha-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-noto-serif font-medium mb-1">Phone</h4>
                  <p className="text-zen-200 font-noto-sans">(555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-matcha-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-noto-serif font-medium mb-1">Email</h4>
                  <p className="text-zen-200 font-noto-sans">hello@wacha-tea.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Clock className="w-6 h-6 text-matcha-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-noto-serif font-medium mb-1">Hours</h4>
                  <div className="text-zen-200 font-noto-sans space-y-1">
                    <p>Monday - Friday: 9:00 AM - 8:00 PM</p>
                    <p>Saturday - Sunday: 10:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-noto-serif font-medium mb-8">
              Send Us a Message
            </h3>
            
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-zen-200 font-noto-sans mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-sumi-800 border border-sumi-700 rounded-lg focus:border-matcha-400 focus:outline-none text-zen-50 font-noto-sans"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-zen-200 font-noto-sans mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-sumi-800 border border-sumi-700 rounded-lg focus:border-matcha-400 focus:outline-none text-zen-50 font-noto-sans"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-zen-200 font-noto-sans mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 bg-sumi-800 border border-sumi-700 rounded-lg focus:border-matcha-400 focus:outline-none text-zen-50 font-noto-sans"
                  placeholder="Tell us about your interest in tea ceremony or any questions you have..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-matcha-600 text-zen-50 font-noto-sans font-medium rounded-lg hover:bg-matcha-700 transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
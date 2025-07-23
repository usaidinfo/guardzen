
'use client';

import { motion } from 'framer-motion';
import { Shield, Users, Award, Target } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      
      <section className="relative py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=professional%20dental%20and%20sports%20protection%20laboratory%2C%20clean%20modern%20medical%20facility%2C%20scientists%20and%20technicians%20working%20on%20mouth%20guard%20development%2C%20high-tech%20equipment%20and%20precision%20tools&width=1200&height=600&seq=about1&orientation=landscape')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-white/80 dark:bg-gray-900/80"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              About GuardZen
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Leading the industry in custom mouth guard protection with innovative design and premium materials.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Our Story
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Founded in 2018, GuardZen emerged from a simple yet powerful vision: to create the world's most comfortable and protective mouth guards. Our journey began when our founder, a former professional athlete, experienced firsthand the limitations of traditional mouth guards.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Through extensive research and collaboration with dental professionals, we developed innovative manufacturing techniques that combine cutting-edge materials with precision engineering. Today, we're proud to serve athletes, dental patients, and anyone seeking superior oral protection.
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                Every GuardZen product is crafted with meticulous attention to detail, ensuring optimal comfort, protection, and durability. We believe that everyone deserves access to premium oral protection, regardless of their activity level or budget.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="https://readdy.ai/api/search-image?query=modern%20dental%20laboratory%20with%20advanced%20equipment%2C%20skilled%20technicians%20creating%20custom%20mouth%20guards%2C%20precision%20manufacturing%20process%2C%20clean%20professional%20environment%20with%20high-tech%20machinery&width=600&height=400&seq=about2&orientation=landscape"
                alt="GuardZen Laboratory"
                className="rounded-lg shadow-lg w-full h-auto object-cover object-top"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Our Values
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              These core principles guide everything we do at GuardZen.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: 'Protection First',
                description: 'We prioritize safety and protection above all else, ensuring every product meets the highest standards.'
              },
              {
                icon: Users,
                title: 'Customer Focus',
                description: 'Our customers are at the heart of everything we do, driving innovation and continuous improvement.'
              },
              {
                icon: Award,
                title: 'Quality Excellence',
                description: 'We maintain rigorous quality control standards to deliver products that exceed expectations.'
              },
              {
                icon: Target,
                title: 'Innovation',
                description: 'We continuously push boundaries to develop new technologies and improve existing solutions.'
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-blue-100 dark:bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                50,000+
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                Happy Customers
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                99.8%
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                Customer Satisfaction
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                6
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                Years of Innovation
              </div>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
}

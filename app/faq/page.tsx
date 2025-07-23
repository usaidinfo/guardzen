
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "How do I choose the right size mouth guard?",
    answer: "We offer three sizes: Small (for youth and smaller adults), Medium (for average adults), and Large (for larger adults). Each product includes a sizing guide, and our custom-fit options ensure a perfect fit regardless of your jaw size."
  },
  {
    question: "How long do mouth guards typically last?",
    answer: "With proper care, our mouth guards can last 6-12 months for regular use. Professional athletes who use them daily may need replacements every 3-6 months. We recommend inspecting your guard regularly for wear and replacing it when you notice thinning or damage."
  },
  {
    question: "Can I customize the color of my mouth guard?",
    answer: "Yes! Most of our mouth guards come in multiple color options including clear, blue, black, red, and more. Some models also offer custom color combinations for teams or personal preferences."
  },
  {
    question: "How do I clean and maintain my mouth guard?",
    answer: "Clean your mouth guard after each use with cool water and mild soap. You can also use denture cleaner or antimicrobial mouthwash. Store it in the provided ventilated case and avoid hot water or direct sunlight, which can warp the material."
  },
  {
    question: "Do you offer custom-fit mouth guards?",
    answer: "Yes! Our Custom Fit Pro line offers professional-grade custom molding. We also provide moldable options that you can fit at home by following our simple heating and molding instructions."
  },
  {
    question: "What's the difference between sports and dental mouth guards?",
    answer: "Sports mouth guards are designed for impact protection during athletic activities with thicker, more durable materials. Dental mouth guards (night guards) are thinner and designed for teeth grinding protection during sleep with comfort-focused materials."
  },
  {
    question: "Can I speak normally while wearing a mouth guard?",
    answer: "Our mouth guards are designed to minimize speech interference. While there may be a slight adjustment period, most users find they can speak clearly after a few days of use. Our ultra-thin models offer the best speech clarity."
  },
  {
    question: "Are your mouth guards safe for people with braces?",
    answer: "We have specialized mouth guards designed for people with braces. These provide extra protection for both your teeth and orthodontic appliances. Consult with your orthodontist before use."
  },
  {
    question: "What is your return policy?",
    answer: "We offer a 30-day money-back guarantee on all products. If you're not completely satisfied, you can return your mouth guard for a full refund. Custom-fit products have a 14-day return window."
  },
  {
    question: "How quickly will I receive my order?",
    answer: "Standard orders ship within 24-48 hours and typically arrive within 3-5 business days. Custom-fit orders require 7-10 business days for processing plus shipping time. We offer expedited shipping options for faster delivery."
  }
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Find answers to common questions about our mouth guards and services.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {faq.question}
                  </h3>
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </button>
                
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: 'auto' }}
                    exit={{ height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-4"
                  >
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-12 text-center"
          >
            <div className="bg-blue-50 dark:bg-blue-900 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Still have questions?
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Our customer support team is here to help you find the perfect mouth guard solution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 whitespace-nowrap"
                >
                  Contact Support
                </a>
                <a
                  href="mailto:info@guardzen.com"
                  className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900 transition-colors duration-200 whitespace-nowrap"
                >
                  Email Us
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}

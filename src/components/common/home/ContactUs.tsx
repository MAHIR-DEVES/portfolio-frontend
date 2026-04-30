'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  User,
  MessageSquare,
} from 'lucide-react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | 'success' | 'error'>(
    null,
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setSubmitStatus(null), 3000);
    }, 1500);
  };

  return (
    <section id="contact">
      <div className="min-h-screen py-12 sm:py-16 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent mb-3">
              Contact Me
            </h1>
            <div className="w-20 h-0.5 bg-gradient-to-r from-purple-500 to-orange-500 mx-auto rounded-full mb-4"></div>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Have a project in mind? Let&apos;s discuss how we can work
              together
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="backdrop-blur-md bg-white/30 dark:bg-gray-800/30 rounded-md p-6 shadow-lg border border-white/30 dark:border-gray-700/30"
            >
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <MessageSquare size={20} className="text-purple-500" />
                Send a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your name"
                    className="w-full px-4 py-2 bg-white/50 dark:bg-gray-900/50 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent backdrop-blur-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email"
                    className="w-full px-4 py-2 bg-white/50 dark:bg-gray-900/50 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent backdrop-blur-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Phone Number (Optional)
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone number"
                    className="w-full px-4 py-2 bg-white/50 dark:bg-gray-900/50 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent backdrop-blur-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="Write your message"
                    className="w-full px-4 py-2 bg-white/50 dark:bg-gray-900/50 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent backdrop-blur-sm resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-purple-600 to-orange-500 hover:from-purple-700 hover:to-orange-600 text-white py-2.5 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </button>

                {submitStatus === 'success' && (
                  <p className="text-green-600 dark:text-green-400 text-sm text-center mt-2">
                    ✓ Message sent successfully! I&apos;ll get back to you soon.
                  </p>
                )}
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="backdrop-blur-md bg-white/30 dark:bg-gray-800/30 rounded-md p-6 shadow-lg border border-white/30 dark:border-gray-700/30"
            >
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <User size={20} className="text-orange-500" />
                Get in Touch
              </h2>

              <div className="space-y-5">
                <div className="flex items-start gap-3 group">
                  <div className="p-2 bg-gradient-to-br from-purple-100 to-orange-100 dark:from-purple-900/30 dark:to-orange-900/30 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <Mail
                      size={18}
                      className="text-purple-600 dark:text-purple-400"
                    />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">
                      Email
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      mdmeherab657@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 group">
                  <div className="p-2 bg-gradient-to-br from-purple-100 to-orange-100 dark:from-purple-900/30 dark:to-orange-900/30 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <Phone
                      size={18}
                      className="text-purple-600 dark:text-purple-400"
                    />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">
                      Phone
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      +880 1310-520842
                    </p>
                    <p className="text-gray-500 dark:text-gray-500 text-xs">
                      Mon-Fri, 9:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 group">
                  <div className="p-2 bg-gradient-to-br from-purple-100 to-orange-100 dark:from-purple-900/30 dark:to-orange-900/30 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <MapPin
                      size={18}
                      className="text-purple-600 dark:text-purple-400"
                    />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">
                      Location
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Rajshahi, Bangladesh
                    </p>
                    <p className="text-gray-500 dark:text-gray-500 text-xs">
                      Available for remote work worldwide
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 group">
                  <div className="p-2 bg-gradient-to-br from-purple-100 to-orange-100 dark:from-purple-900/30 dark:to-orange-900/30 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <Clock
                      size={18}
                      className="text-purple-600 dark:text-purple-400"
                    />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">
                      Response Time
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      24/7 Online Support
                    </p>
                    <p className="text-gray-500 dark:text-gray-500 text-xs">
                      Usually within 24 hours
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-purple-200 dark:border-purple-800/30">
                <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                  ✨ I&apos;m always excited to work on new projects and
                  collaborations.
                  <br />
                  Let&apos;s create something amazing together!
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;

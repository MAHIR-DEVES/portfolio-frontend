import React from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'যোগাযোগ করুন - DevStudio',
  description:
    'আপনার প্রজেক্ট নিয়ে আলোচনা করতে বা যেকোনো প্রশ্নে আমাদের সাথে যোগাযোগ করুন',
};

const ContactUsPage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2">
            যোগাযোগ <span className="text-orange-500">করুন</span>
          </h1>
          <div className="w-20 h-1 bg-orange-500 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            আপনার যেকোনো প্রশ্ন বা প্রজেক্ট নিয়ে আমাদের সাথে যোগাযোগ করুন
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-md">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              মেসেজ পাঠান
            </h2>

            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  আপনার নাম
                </label>
                <input
                  type="text"
                  placeholder="নাম লিখুন"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent dark:bg-gray-900"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  ইমেইল
                </label>
                <input
                  type="email"
                  placeholder="ইমেইল লিখুন"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent dark:bg-gray-900"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  ফোন নম্বর (ঐচ্ছিক)
                </label>
                <input
                  type="tel"
                  placeholder="ফোন নম্বর"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent dark:bg-gray-900"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  মেসেজ
                </label>
                <textarea
                  rows={4}
                  placeholder="আপনার মেসেজ লিখুন"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent dark:bg-gray-900 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2.5 rounded-lg font-medium transition duration-300 flex items-center justify-center gap-2"
              >
                <Send size={16} />
                মেসেজ পাঠান
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-md">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              যোগাযোগের তথ্য
            </h2>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail size={18} className="text-orange-500 mt-0.5" />
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">
                    ইমেইল
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    info@devstudio.com
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-500">
                    support@devstudio.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone size={18} className="text-orange-500 mt-0.5" />
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">
                    ফোন
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    +880 1234-567890
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-500">
                    সকাল ৯টা - সন্ধ্যা ৬টা
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-orange-500 mt-0.5" />
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">
                    ঠিকানা
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    ঢাকা, বাংলাদেশ
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock size={18} className="text-orange-500 mt-0.5" />
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">
                    সাপোর্ট
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    ২৪/৭ অনলাইন সাপোর্ট
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                আমরা সবসময় আপনার প্রশ্নের উত্তর দিতে প্রস্তুত। যেকোনো প্রয়োজনে
                আমাদের সাথে যোগাযোগ করুন।
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;

import React from 'react';
import {
  CheckCircle,
  XCircle,
  Zap,
  Smartphone,
  Search,
  Target,
  Cloud,
  Shield,
  Sliders,
  Headphones,
  Award,
  Rocket,
  Globe,
  Database,
  Layout,
  Clock,
  BarChart,
  Users,
} from 'lucide-react';

const ServiceComparison = () => {
  const comparisons = [
    {
      feature: 'পৃষ্ঠা লোডিং স্পীড',
      others: false,
      us: true,
      icon: Zap,
      description: 'অপটিমাইজড কোড ও ইমেজ',
    },
    {
      feature: 'রেস্পন্সিভ ডিজাইন',
      others: false,
      us: true,
      icon: Smartphone,
      description: 'মোবাইল, ট্যাব ও ডেস্কটপ ফ্রেন্ডলি',
    },
    {
      feature: 'SEO অপটিমাইজেশন',
      others: false,
      us: true,
      icon: Search,
      description: 'গুগল ফ্রেন্ডলি স্ট্রাকচার',
    },

    {
      feature: 'ফ্রি হোস্টিং',
      others: false,
      us: true,
      icon: Cloud,
      description: '১ বছর ফ্রি হোস্টিং সহ',
    },

    {
      feature: 'কাস্টমাইজেশন সুবিধা',
      others: false,
      us: true,
      icon: Sliders,
      description: 'ইজি কাস্টমাইজেশন অপশন',
    },
    {
      feature: 'সাপোর্ট সিস্টেম',
      others: false,
      us: true,
      icon: Headphones,
      description: '২৪/৭ টেকনিক্যাল সাপোর্ট',
    },
    {
      feature: 'পেজ স্পীড স্কোর',
      others: false,
      us: true,
      icon: BarChart,
      description: '৯৫%+ গুগল পেজ স্পীড স্কোর',
    },

    {
      feature: 'এনালাইটিক্স সেটআপ',
      others: false,
      us: true,
      icon: BarChart,
      description: 'গুগল এনালাইটিক্স ইন্টিগ্রেশন',
    },
    {
      feature: 'সোশ্যাল মিডিয়া ইন্টিগ্রেশন',
      others: false,
      us: true,
      icon: Users,
      description: 'সব সোশ্যাল প্লাটফর্ম সংযোগ',
    },
  ];

  const othersFeatures = [
    'স্লো লোডিং স্পীড',
    'নন-রেস্পন্সিভ ডিজাইন',
    'SEO ফ্রেন্ডলি না',
    'কনভার্সন রেট কম',
    'হোস্টিং আলাদা কিনতে হয়',
    'সিকিউরিটি দুর্বল',
    'কাস্টমাইজেশন কঠিন',
    'সাপোর্ট সিস্টেম নেই',
    'পেজ স্পীড স্কোর ৫০% এর নিচে',
    'ইমেইল সিস্টেম নেই',
    'এনালাইটিক্স সেটআপ নেই',
    'সোশ্যাল লিংক নেই',
  ];

  return (
    <div className="py-16 sm:py-20  ">
      <div className="container mx-auto max-w-7xl px-4 sm:px-0">
        {/* HEADER */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <div className="bg-orange-500/10 rounded-full px-4 py-1.5">
              <span className="text-xs font-medium text-orange-600 dark:text-orange-400">
                কেন আমাদের বেছে নেবেন
              </span>
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            আমাদের{' '}
            <span className="relative inline-block ml-2 px-2">
              <span className="absolute inset-0 bg-gradient-to-r from-orange-200 to-amber-200 -skew-y-2 rounded-lg -z-10"></span>
              Service
            </span>
          </h2>

          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            আপনার ব্যবসার জন্য সেরা পারফরমেন্স ও কনভার্সন ফোকাসড সলিউশন
          </p>
        </div>

        {/* COMPARISON GRID */}
        <div className="grid lg:grid-cols-2 gap-4">
          {/* OTHERS CARD */}
          <div className="group">
            <div className="bg-white dark:bg-gray-800 border-2 border-red-100 dark:border-red-900/30 rounded-md shadow-lg  overflow-hidden h-full ">
              {/* Header */}
              <div className="bg-gradient-to-r from-red-500 to-red-600 px-6 py-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <XCircle className="text-white" size={28} />
                    <h3 className="text-xl font-bold text-white">
                      অন্যদের সার্ভিস
                    </h3>
                  </div>
                  <span className="bg-white/20 text-white text-xs px-3 py-1 rounded-full">
                    স্ট্যান্ডার্ড
                  </span>
                </div>
                <p className="text-white/80 text-sm mt-2">
                  বেসিক ফিচারসহ সাধারণ সার্ভিস
                </p>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="space-y-3">
                  {othersFeatures.map((feature, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 group/item hover:bg-red-50 dark:hover:bg-red-900/10 p-2 rounded-lg transition-all duration-200"
                    >
                      <div className="flex-shrink-0">
                        <XCircle size={18} className="text-red-400" />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300 text-sm">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="bg-red-50 dark:bg-red-900/20 px-6 py-4 text-center md:mt-4">
                <p className="text-red-600 dark:text-red-400 font-semibold flex items-center justify-center gap-2 ">
                  <XCircle size={18} />
                  Not Recommended for Business
                </p>
              </div>
            </div>
          </div>

          {/* OUR SERVICE CARD */}
          <div className="group relative">
            {/* Popular Badge */}
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-1 rounded-full text-xs font-semibold flex items-center gap-1 shadow-lg">
                <Award size={12} />
                জনপ্রিয় প্যাকেজ
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 border-2 border-orange-200 dark:border-orange-500/30 rounded-md shadow-xl  overflow-hidden h-full ">
              {/* Header */}
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="text-white" size={28} />
                    <h3 className="text-xl font-bold text-white">
                      আমাদের সার্ভিস
                    </h3>
                  </div>
                  <span className="bg-white/20 text-white text-xs px-3 py-1 rounded-full">
                    প্রিমিয়াম
                  </span>
                </div>
                <p className="text-white/80 text-sm mt-2">
                  পূর্ণ ফিচারসমৃদ্ধ প্রফেশনাল সার্ভিস
                </p>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="grid grid-cols-1 gap-3">
                  {comparisons.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 group/item hover:bg-orange-50 dark:hover:bg-orange-900/10 p-2 rounded-lg transition-all duration-200"
                    >
                      <div className="flex-shrink-0 mt-0.5">
                        <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                          <CheckCircle size={12} className="text-white" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <item.icon size={14} className="text-orange-500" />
                          <span className="font-semibold text-gray-800 dark:text-white text-sm">
                            {item.feature}
                          </span>
                        </div>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="bg-gradient-to-r from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-900/10 px-6 py-4 text-center">
                <p className="text-orange-600 dark:text-orange-400 font-semibold flex items-center justify-center gap-2">
                  <Rocket size={18} />
                  Best Choice for Your Business
                  <Zap size={14} />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Add Mail icon if not imported
const Mail = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

export default ServiceComparison;

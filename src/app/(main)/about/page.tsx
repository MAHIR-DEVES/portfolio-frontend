import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import { CheckCircle, Mail, MapPin, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Softvisionix - Professional Web Development',
  description:
    'Modern web development and software solutions for your business',
};

const Page = () => {
  const features = [
    { title: '৫+ বছর অভিজ্ঞতা', desc: 'প্রফেশনাল টিম ও দক্ষ ডেভেলপার' },
    { title: '১০০+ প্রজেক্ট', desc: 'সফলভাবে সম্পন্ন প্রজেক্ট' },
    { title: '২৪/৭ সাপোর্ট', desc: 'যেকোনো সময় টেকনিক্যাল সাপোর্ট' },
    { title: 'কাস্টমাইজড সলিউশন', desc: 'আপনার চাহিদা অনুযায়ী ডিজাইন' },
  ];
  return (
    <section className="py-16 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="text-center mb-12">
          <span className="text-orange-500 text-sm font-semibold uppercase tracking-wide">
            আমাদের সম্পর্কে
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mt-2 mb-4">
            আমরা কে <span className="text-orange-500">এবং কেন?</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            আমরা আধুনিক ওয়েব ডেভেলপমেন্ট, ই-কমার্স সলিউশন এবং কাস্টম সফটওয়্যার
            তৈরি করি যা আপনার ব্যবসাকে আরও দ্রুত বৃদ্ধি করতে সাহায্য করে।
          </p>
        </div>

        {/* MAIN CONTENT - 2 COLUMN LAYOUT */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* LEFT - About Text */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              আধুনিক ডিজিটাল সলিউশন পার্টনার
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              আমাদের কোম্পানি একটি আধুনিক সফটওয়্যার ডেভেলপমেন্ট এজেন্সি যা
              ই-কমার্স ওয়েবসাইট, ল্যান্ডিং পেজ, কাস্টম ওয়েব অ্যাপ্লিকেশন এবং
              WordPress সলিউশন তৈরি করে।
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
              আমরা ক্লায়েন্টদের জন্য স্কেলেবল, দ্রুত এবং SEO-friendly ওয়েব
              সলিউশন তৈরি করি। আমাদের টিম আধুনিক প্রযুক্তি ব্যবহার করে
              ক্লায়েন্টদের ব্যবসার চাহিদা পূরণ করে।
            </p>

            {/* FEATURES LIST */}
            <div className="grid sm:grid-cols-2 gap-3">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <CheckCircle
                    size={18}
                    className="text-orange-500 flex-shrink-0"
                  />
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    {feature.title}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT - Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-orange-50 dark:bg-orange-900/20 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-orange-500">১০০+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                প্রজেক্ট সম্পন্ন
              </div>
            </div>
            <div className="bg-orange-50 dark:bg-orange-900/20 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-orange-500">৫০+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                সন্তুষ্ট ক্লায়েন্ট
              </div>
            </div>
            <div className="bg-orange-50 dark:bg-orange-900/20 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-orange-500">১৫+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                টিম মেম্বার
              </div>
            </div>
            <div className="bg-orange-50 dark:bg-orange-900/20 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-orange-500">২৪/৭</div>
              <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                সাপোর্ট
              </div>
            </div>
          </div>
        </div>

        {/* CONTACT INFO - 3 COLUMN */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
            <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center">
              <MapPin size={20} className="text-orange-500" />
            </div>
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-400">ঠিকানা</p>
              <p className="font-medium text-gray-900 dark:text-white">
                ঢাকা, বাংলাদেশ
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
            <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center">
              <Phone size={20} className="text-orange-500" />
            </div>
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-400">ফোন</p>
              <p className="font-medium text-gray-900 dark:text-white">
                +880 1310- 520842
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
            <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center">
              <Mail size={20} className="text-orange-500" />
            </div>
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-400">ইমেইল</p>
              <p className="font-medium text-gray-900 dark:text-white">
                softvisionix@gmail.com
              </p>
            </div>
          </div>
        </div>

        {/* TEAM SECTION */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
            আমাদের <span className="text-orange-500">লিডারশিপ টিম</span>
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            দক্ষ ও অভিজ্ঞ টিম আপনার প্রজেক্ট পরিচালনা করে
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {/* CEO Card */}
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md overflow-hidden ">
            <div className="p-6">
              <div className="flex items-center gap-4">
                <Image
                  src="/images/Md. Meherab Hossain.png"
                  width={64}
                  height={64}
                  className="rounded-full object-cover border-2 border-orange-500"
                  alt="CEO"
                />
                <div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                    Md. Meherab Hossain
                  </h4>
                  <p className="text-orange-500 text-sm font-medium">
                    CEO & Founder
                  </p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-4 leading-relaxed">
                প্রতিষ্ঠাতা ও সিইও। ৫+ বছরের অভিজ্ঞতা ওয়েব ডেভেলপমেন্টে।
                কোম্পানির ভিশন ও গ্রোথ স্ট্র্যাটেজি নির্ধারণ করেন।
              </p>
            </div>
          </div>

          {/* COO Card */}
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md overflow-hidden transition-shadow">
            <div className="p-6">
              <div className="flex items-center gap-4">
                <Image
                  src="/images/COO Mostafijur Rahman.jpg"
                  width={64}
                  height={64}
                  className="rounded-full object-cover border-2 border-orange-500"
                  alt="COO"
                />
                <div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                    Operations Manager
                  </h4>
                  <p className="text-orange-500 text-sm font-medium">COO</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-4 leading-relaxed">
                প্রধান পরিচালন কর্মকর্তা। প্রজেক্ট ডেলিভারি, টিম ম্যানেজমেন্ট ও
                ক্লায়েন্ট রিলেশন দেখেন।
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;

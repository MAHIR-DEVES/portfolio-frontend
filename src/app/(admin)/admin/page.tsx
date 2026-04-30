'use client';

import React from 'react';
import {
  FaUsers,
  FaShoppingCart,
  FaDollarSign,
  FaChartLine,
  FaEye,
  FaCheckCircle,
  FaClock,
  FaTimesCircle,
} from 'react-icons/fa';
import {
  TrendingUp,
  TrendingDown,
  MoreVertical,
  Download,
  Calendar,
} from 'lucide-react';

const stats = [
  {
    title: 'Total Users',
    value: '1,245',
    change: '+12%',
    trend: 'up',
    icon: FaUsers,
    color: 'blue',
  },
  {
    title: 'Total Orders',
    value: '856',
    change: '+8%',
    trend: 'up',
    icon: FaShoppingCart,
    color: 'green',
  },
  {
    title: 'Total Revenue',
    value: '$12,430',
    change: '+23%',
    trend: 'up',
    icon: FaDollarSign,
    color: 'yellow',
  },
  {
    title: 'Growth Rate',
    value: '+12%',
    change: '-2%',
    trend: 'down',
    icon: FaChartLine,
    color: 'purple',
  },
];

const recentOrders = [
  {
    id: '#ORD-001',
    customer: 'John Doe',
    amount: '$120',
    status: 'Completed',
    date: '2024-01-15',
  },
  {
    id: '#ORD-002',
    customer: 'Jane Smith',
    amount: '$80',
    status: 'Pending',
    date: '2024-01-14',
  },
  {
    id: '#ORD-003',
    customer: 'Michael Lee',
    amount: '$200',
    status: 'Completed',
    date: '2024-01-14',
  },
  {
    id: '#ORD-004',
    customer: 'Sarah Khan',
    amount: '$60',
    status: 'Cancelled',
    date: '2024-01-13',
  },
  {
    id: '#ORD-005',
    customer: 'David Brown',
    amount: '$150',
    status: 'Pending',
    date: '2024-01-13',
  },
];

const topProducts = [
  { name: 'Wireless Headphone', sales: 245, revenue: '$7,350', growth: '+15%' },
  { name: 'Smart Watch', sales: 189, revenue: '$16,800', growth: '+22%' },
  { name: 'Laptop Bag', sales: 156, revenue: '$4,680', growth: '+8%' },
];

const Page = () => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-700';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-700';
      case 'Cancelled':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Completed':
        return <FaCheckCircle size={12} />;
      case 'Pending':
        return <FaClock size={12} />;
      case 'Cancelled':
        return <FaTimesCircle size={12} />;
      default:
        return null;
    }
  };

  const getColorClass = (color: string) => {
    const colors = {
      blue: 'from-blue-500 to-blue-600',
      green: 'from-green-500 to-green-600',
      yellow: 'from-yellow-500 to-yellow-600',
      purple: 'from-purple-500 to-purple-600',
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="p-3 sm:p-4 md:p-6 lg:p-8">
        {/* Header - Responsive */}
        <div className="mb-6 md:mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white">
                Dashboard
              </h1>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mt-1">
                Welcome back! Here&apos;s what&apos;s happening with your
                business today.
              </p>
            </div>
            <div className="flex gap-2 sm:gap-3">
              <button className="flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition text-sm sm:text-base">
                <Calendar size={14} />
                <span className="text-xs sm:text-sm">This Month</span>
              </button>
              <button className="flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-[#FF6B35] text-white rounded-lg hover:bg-[#ff8c5a] transition text-sm sm:text-base">
                <Download size={14} />
                <span className="text-xs sm:text-sm">Export</span>
              </button>
            </div>
          </div>
        </div>

        {/* Stats Cards - Responsive Grid */}
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 mb-6 md:mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-4 sm:p-5 md:p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <p className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400">
                      {stat.title}
                    </p>
                    <p className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mt-1 sm:mt-2">
                      {stat.value}
                    </p>
                    <div className="flex flex-wrap items-center gap-1 mt-1 sm:mt-2">
                      {stat.trend === 'up' ? (
                        <TrendingUp
                          size={12}
                          className="sm:size-14 text-green-500"
                        />
                      ) : (
                        <TrendingDown
                          size={12}
                          className="sm:size-14 text-red-500"
                        />
                      )}
                      <span
                        className={`text-xs font-medium ${stat.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}
                      >
                        {stat.change}
                      </span>
                      <span className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400">
                        vs last month
                      </span>
                    </div>
                  </div>
                  <div
                    className={`bg-gradient-to-br ${getColorClass(stat.color)} p-2 sm:p-3 rounded-xl flex-shrink-0 ml-2`}
                  >
                    <Icon size={16} className="sm:size-10 text-white" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Charts Row - Responsive */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-6 mb-6 md:mb-8">
          {/* Sales Chart */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-4 sm:p-5 md:p-6">
            <div className="flex items-center justify-between mb-3 sm:mb-4">
              <h2 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">
                Sales Overview
              </h2>
              <button className="text-gray-400 hover:text-gray-600">
                <MoreVertical size={16} className="sm:size-18" />
              </button>
            </div>
            <div className="h-48 sm:h-56 md:h-64 flex items-center justify-center bg-gray-50 dark:bg-gray-900/50 rounded-lg">
              <div className="text-center px-4">
                <FaChartLine
                  size={32}
                  className="sm:size-40 text-gray-300 dark:text-gray-600 mx-auto mb-2"
                />
                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                  Chart integration coming soon
                </p>
              </div>
            </div>
          </div>

          {/* Top Products */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-4 sm:p-5 md:p-6">
            <div className="flex items-center justify-between mb-3 sm:mb-4">
              <h2 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">
                Top Products
              </h2>
              <button className="text-xs sm:text-sm text-[#FF6B35] hover:underline">
                View All
              </button>
            </div>
            <div className="space-y-3 sm:space-y-4">
              {topProducts.map((product, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between gap-2"
                >
                  <div className="flex-1 min-w-0">
                    <p className="text-sm sm:text-base font-medium text-gray-900 dark:text-white truncate">
                      {product.name}
                    </p>
                    <div className="flex flex-wrap items-center gap-2 sm:gap-4 mt-1">
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {product.sales} sales
                      </span>
                      <span className="text-xs font-medium text-green-600">
                        {product.growth}
                      </span>
                    </div>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <p className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white">
                      {product.revenue}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Orders Table - Responsive */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="p-4 sm:p-5 md:p-6 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <h2 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">
                Recent Orders
              </h2>
              <button className="text-xs sm:text-sm text-[#FF6B35] hover:underline flex items-center gap-1">
                <FaEye size={12} />
                View All
              </button>
            </div>
          </div>

          {/* Mobile View - Card Layout */}
          <div className="block md:hidden divide-y divide-gray-200 dark:divide-gray-700">
            {recentOrders.map(order => (
              <div
                key={order.id}
                className="p-4 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition"
              >
                <div className="flex justify-between items-start mb-2">
                  <span className="text-sm font-medium text-gray-900 dark:text-white">
                    {order.id}
                  </span>
                  <span
                    className={`inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}
                  >
                    {getStatusIcon(order.status)}
                    {order.status}
                  </span>
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                  {order.customer}
                </div>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-xs text-gray-500 dark:text-gray-500">
                    {order.date}
                  </span>
                  <span className="text-sm font-semibold text-gray-900 dark:text-white">
                    {order.amount}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop View - Table Layout */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead className="bg-gray-50 dark:bg-gray-900/50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Order ID
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Customer
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Amount
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {recentOrders.map(order => (
                  <tr
                    key={order.id}
                    className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition"
                  >
                    <td className="px-4 py-3 text-sm font-medium text-gray-900 dark:text-white">
                      {order.id}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">
                      {order.customer}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">
                      {order.date}
                    </td>
                    <td className="px-4 py-3 text-sm font-semibold text-gray-900 dark:text-white">
                      {order.amount}
                    </td>
                    <td className="px-4 py-3">
                      <span
                        className={`inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}
                      >
                        {getStatusIcon(order.status)}
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;

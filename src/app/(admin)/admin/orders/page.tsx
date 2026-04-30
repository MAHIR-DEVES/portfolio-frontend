/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useState, useMemo } from 'react';
import {
  Search,
  Filter,
  ChevronLeft,
  ChevronRight,
  Eye,
  Edit,
  Trash2,
  Download,
  Calendar,
  User,
  Mail,
  Clock,
  CheckCircle,
  Package,
  Image as ImageIcon,
} from 'lucide-react';

type Order = {
  id: number;
  customer: string;
  email: string;
  status: 'Pending' | 'Processing' | 'Completed';
  amount: number;
  date: string;
  productImage: string;
  productName: string;
};

const dummyOrders: Order[] = [
  {
    id: 1,
    customer: 'John Doe',
    email: 'john@mail.com',
    status: 'Pending',
    amount: 120,
    date: '2026-01-10',
    productImage:
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100',
    productName: 'Wireless Headphones',
  },
  {
    id: 2,
    customer: 'Sarah Khan',
    email: 'sarah@mail.com',
    status: 'Completed',
    amount: 250,
    date: '2026-01-11',
    productImage:
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=100',
    productName: 'Smart Watch',
  },
  {
    id: 3,
    customer: 'Ali Hasan',
    email: 'ali@mail.com',
    status: 'Processing',
    amount: 180,
    date: '2026-01-12',
    productImage:
      'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=100',
    productName: 'Smartphone',
  },
  {
    id: 4,
    customer: 'Mehedi',
    email: 'mehedi@mail.com',
    status: 'Completed',
    amount: 300,
    date: '2026-01-13',
    productImage:
      'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=100',
    productName: 'Laptop Bag',
  },
  {
    id: 5,
    customer: 'Nusrat',
    email: 'nusrat@mail.com',
    status: 'Pending',
    amount: 90,
    date: '2026-01-14',
    productImage:
      'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=100',
    productName: 'Camera',
  },
  {
    id: 6,
    customer: 'Rahim',
    email: 'rahim@mail.com',
    status: 'Processing',
    amount: 400,
    date: '2026-01-15',
    productImage:
      'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=100',
    productName: 'Gaming Mouse',
  },
  {
    id: 7,
    customer: 'Karim',
    email: 'karim@mail.com',
    status: 'Completed',
    amount: 220,
    date: '2026-01-16',
    productImage:
      'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=100',
    productName: 'Keyboard',
  },
];

const ITEMS_PER_PAGE = 5;

const OrdersPage = () => {
  const [orders, setOrders] = useState<Order[]>(dummyOrders);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState<'All' | Order['status']>('All');
  const [currentPage, setCurrentPage] = useState(1);

  // FILTER + SEARCH
  const filteredOrders = useMemo(() => {
    return orders.filter(order => {
      const matchSearch =
        order.customer.toLowerCase().includes(search.toLowerCase()) ||
        order.email.toLowerCase().includes(search.toLowerCase()) ||
        order.productName.toLowerCase().includes(search.toLowerCase());

      const matchFilter = filter === 'All' ? true : order.status === filter;

      return matchSearch && matchFilter;
    });
  }, [orders, search, filter]);

  // PAGINATION
  const totalPages = Math.ceil(filteredOrders.length / ITEMS_PER_PAGE);
  const paginatedOrders = filteredOrders.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-700';
      case 'Processing':
        return 'bg-blue-100 text-blue-700';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  // Summary Stats
  const totalOrders = filteredOrders.length;
  const completedOrders = filteredOrders.filter(
    o => o.status === 'Completed',
  ).length;
  const processingOrders = filteredOrders.filter(
    o => o.status === 'Processing',
  ).length;
  const pendingOrders = filteredOrders.filter(
    o => o.status === 'Pending',
  ).length;

  const handleDelete = (id: number) => {
    if (confirm('Are you sure you want to delete this order?')) {
      setOrders(orders.filter(order => order.id !== id));
    }
  };

  const handleEdit = (id: number) => {
    // Implement edit functionality
    console.log('Edit order:', id);
  };

  const handleView = (id: number) => {
    // Implement view functionality
    console.log('View order:', id);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="p-4 sm:p-6 lg:p-8">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
            Orders Management
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Manage and track all customer orders
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Total Orders
                </p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {totalOrders}
                </p>
              </div>
              <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
                <Package className="w-5 h-5 text-purple-600" />
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Completed
                </p>
                <p className="text-2xl font-bold text-green-600">
                  {completedOrders}
                </p>
              </div>
              <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Processing
                </p>
                <p className="text-2xl font-bold text-blue-600">
                  {processingOrders}
                </p>
              </div>
              <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                <Clock className="w-5 h-5 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Pending
                </p>
                <p className="text-2xl font-bold text-yellow-600">
                  {pendingOrders}
                </p>
              </div>
              <div className="w-10 h-10 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg flex items-center justify-center">
                <Clock className="w-5 h-5 text-yellow-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Filters Bar */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4 mb-6">
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  size={18}
                />
                <input
                  type="text"
                  placeholder="Search by customer, email or product..."
                  value={search}
                  onChange={e => {
                    setSearch(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent dark:bg-gray-700 dark:text-white"
                />
              </div>
            </div>

            {/* Filter */}
            <div className="sm:w-48">
              <div className="relative">
                <Filter
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  size={18}
                />
                <select
                  value={filter}
                  onChange={e => {
                    setFilter(e.target.value as any);
                    setCurrentPage(1);
                  }}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent dark:bg-gray-700 dark:text-white appearance-none"
                >
                  <option value="All">All Status</option>
                  <option value="Pending">Pending</option>
                  <option value="Processing">Processing</option>
                  <option value="Completed">Completed</option>
                </select>
              </div>
            </div>

            {/* Export Button */}
            <button className="flex items-center justify-center gap-2 px-4 py-2 bg-[#FF6B35] text-white rounded-lg hover:bg-[#ff8c5a] transition">
              <Download size={18} />
              <span>Export</span>
            </button>
          </div>
        </div>

        {/* Orders Table - Desktop */}
        <div className="hidden lg:block bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 dark:bg-gray-900/50 border-b border-gray-200 dark:border-gray-700">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Product
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Customer
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Email
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Amount
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {paginatedOrders.map(order => (
                  <tr
                    key={order.id}
                    className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <img
                          src={order.productImage}
                          alt={order.productName}
                          className="w-10 h-10 rounded-lg object-cover"
                        />
                        <span className="text-sm font-medium text-gray-900 dark:text-white">
                          {order.productName}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <User size={16} className="text-gray-400" />
                        <span className="text-sm font-medium text-gray-900 dark:text-white">
                          {order.customer}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <Mail size={16} className="text-gray-400" />
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          {order.email}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}
                      >
                        {order.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm font-semibold text-gray-900 dark:text-white">
                        ${order.amount}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <Calendar size={14} className="text-gray-400" />
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          {order.date}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleView(order.id)}
                          className="p-1 text-blue-600 hover:bg-blue-50 rounded-lg transition"
                          title="View"
                        >
                          <Eye size={18} />
                        </button>
                        <button
                          onClick={() => handleEdit(order.id)}
                          className="p-1 text-green-600 hover:bg-green-50 rounded-lg transition"
                          title="Edit"
                        >
                          <Edit size={18} />
                        </button>
                        <button
                          onClick={() => handleDelete(order.id)}
                          className="p-1 text-red-600 hover:bg-red-50 rounded-lg transition"
                          title="Delete"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {paginatedOrders.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 dark:text-gray-400">
                No orders found
              </p>
            </div>
          )}
        </div>

        {/* Mobile & Tablet View - Cards */}
        <div className="lg:hidden space-y-4">
          {paginatedOrders.map(order => (
            <div
              key={order.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4"
            >
              <div className="flex gap-4 mb-3">
                <img
                  src={order.productImage}
                  alt={order.productName}
                  className="w-16 h-16 rounded-lg object-cover"
                />
                <div className="flex-1">
                  <p className="font-semibold text-gray-900 dark:text-white">
                    {order.productName}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {order.customer}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {order.email}
                  </p>
                </div>
              </div>

              <div className="flex justify-between items-center mb-3">
                <span
                  className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}
                >
                  {order.status}
                </span>
                <span className="font-semibold text-gray-900 dark:text-white">
                  ${order.amount}
                </span>
              </div>

              <div className="flex justify-between items-center pt-3 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-2">
                  <Calendar size={14} className="text-gray-400" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {order.date}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => handleView(order.id)}
                    className="text-blue-600"
                  >
                    <Eye size={18} />
                  </button>
                  <button
                    onClick={() => handleEdit(order.id)}
                    className="text-green-600"
                  >
                    <Edit size={18} />
                  </button>
                  <button
                    onClick={() => handleDelete(order.id)}
                    className="text-red-600"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}

          {paginatedOrders.length === 0 && (
            <div className="text-center py-12 bg-white dark:bg-gray-800 rounded-lg">
              <p className="text-gray-500 dark:text-gray-400">
                No orders found
              </p>
            </div>
          )}
        </div>

        {/* Pagination */}
        {totalPages > 0 && (
          <div className="flex justify-center mt-6">
            <nav className="flex items-center gap-2">
              <button
                onClick={() => setCurrentPage(p => Math.max(p - 1, 1))}
                disabled={currentPage === 1}
                className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition"
              >
                <ChevronLeft size={18} />
              </button>

              <div className="flex gap-1">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  num => (
                    <button
                      key={num}
                      onClick={() => setCurrentPage(num)}
                      className={`min-w-[36px] h-9 px-3 rounded-lg font-medium transition ${
                        currentPage === num
                          ? 'bg-[#FF6B35] text-white'
                          : 'border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                      }`}
                    >
                      {num}
                    </button>
                  ),
                )}
              </div>

              <button
                onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition"
              >
                <ChevronRight size={18} />
              </button>
            </nav>
          </div>
        )}

        {/* Showing info */}
        <div className="text-center mt-4">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Showing {paginatedOrders.length} of {filteredOrders.length} orders
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrdersPage;

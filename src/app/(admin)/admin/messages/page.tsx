'use client';

import { useState } from 'react';
import { Search, Eye, Trash2, CheckCircle } from 'lucide-react';

type Message = {
  id: number;
  name: string;
  email: string;
  subject: string;
  message: string;
  date: string;
  status: 'Read' | 'Unread';
};

const dummyMessages: Message[] = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@mail.com',
    subject: 'Project Inquiry',
    message: 'I want to build a website for my business.',
    date: '2026-01-10',
    status: 'Unread',
  },
  {
    id: 2,
    name: 'Sarah Khan',
    email: 'sarah@mail.com',
    subject: 'Support Needed',
    message: 'Can you help me fix my website bug?',
    date: '2026-01-11',
    status: 'Read',
  },
  {
    id: 3,
    name: 'Ali Hasan',
    email: 'ali@mail.com',
    subject: 'New Order',
    message: 'I want to order a landing page design.',
    date: '2026-01-12',
    status: 'Unread',
  },
  {
    id: 4,
    name: 'Mehedi Rahman',
    email: 'mehedi@mail.com',
    subject: 'Partnership',
    message: 'We want to partner with your agency.',
    date: '2026-01-13',
    status: 'Read',
  },
  {
    id: 5,
    name: 'Nusrat Jahan',
    email: 'nusrat@mail.com',
    subject: 'Feedback',
    message: 'Great work on the project!',
    date: '2026-01-14',
    status: 'Read',
  },
];

const MessagePage = () => {
  const [messages, setMessages] = useState<Message[]>(dummyMessages);
  const [search, setSearch] = useState('');

  const filteredMessages = messages.filter(
    msg =>
      msg.name.toLowerCase().includes(search.toLowerCase()) ||
      msg.email.toLowerCase().includes(search.toLowerCase()) ||
      msg.subject.toLowerCase().includes(search.toLowerCase()),
  );

  const handleDelete = (id: number) => {
    if (confirm('Are you sure you want to delete this message?')) {
      setMessages(prev => prev.filter(msg => msg.id !== id));
    }
  };

  const handleMarkAsRead = (id: number) => {
    setMessages(prev =>
      prev.map(msg => (msg.id === id ? { ...msg, status: 'Read' } : msg)),
    );
  };

  const getStatusColor = (status: string) => {
    return status === 'Unread' ? 'bg-blue-500' : 'bg-green-500';
  };

  return (
    <div className="p-6 bg-gray-50 dark:bg-gray-900 min-h-screen">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Messages
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-1">
          Manage customer messages
        </p>
      </div>

      {/* Search Bar */}
      <div className="mb-4">
        <div className="relative max-w-md">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={18}
          />
          <input
            type="text"
            placeholder="Search by name, email or subject..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent dark:bg-gray-800 dark:text-white"
          />
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
        <table className="w-full text-left">
          <thead className="bg-gray-50 dark:bg-gray-900/50 border-b border-gray-200 dark:border-gray-700">
            <tr>
              <th className="px-4 py-3 text-sm font-medium text-gray-600 dark:text-gray-400">
                Name
              </th>
              <th className="px-4 py-3 text-sm font-medium text-gray-600 dark:text-gray-400">
                Email
              </th>
              <th className="px-4 py-3 text-sm font-medium text-gray-600 dark:text-gray-400">
                Subject
              </th>
              <th className="px-4 py-3 text-sm font-medium text-gray-600 dark:text-gray-400">
                Message
              </th>
              <th className="px-4 py-3 text-sm font-medium text-gray-600 dark:text-gray-400">
                Date
              </th>
              <th className="px-4 py-3 text-sm font-medium text-gray-600 dark:text-gray-400">
                Status
              </th>
              <th className="px-4 py-3 text-sm font-medium text-gray-600 dark:text-gray-400">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {filteredMessages.map(msg => {
              const isUnread = msg.status === 'Unread';

              return (
                <tr
                  key={msg.id}
                  className={`
                    transition duration-200
                    ${
                      isUnread
                        ? 'bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/30 font-medium'
                        : 'bg-white dark:bg-gray-800 opacity-80 hover:opacity-100 hover:bg-gray-50 dark:hover:bg-gray-700/50'
                    }
                  `}
                >
                  <td
                    className={`px-4 py-3 text-sm ${isUnread ? 'font-semibold text-gray-900 dark:text-white' : 'text-gray-600 dark:text-gray-400'}`}
                  >
                    {msg.name}
                  </td>
                  <td
                    className={`px-4 py-3 text-sm ${isUnread ? 'text-gray-700 dark:text-gray-300' : 'text-gray-500 dark:text-gray-500'}`}
                  >
                    {msg.email}
                  </td>
                  <td
                    className={`px-4 py-3 text-sm ${isUnread ? 'font-medium text-gray-900 dark:text-white' : 'text-gray-600 dark:text-gray-400'}`}
                  >
                    {msg.subject}
                  </td>
                  <td
                    className={`px-4 py-3 text-sm max-w-[200px] truncate ${isUnread ? 'text-gray-700 dark:text-gray-300' : 'text-gray-500 dark:text-gray-500'}`}
                  >
                    {msg.message}
                  </td>
                  <td
                    className={`px-4 py-3 text-sm ${isUnread ? 'text-gray-700 dark:text-gray-300' : 'text-gray-500 dark:text-gray-500'}`}
                  >
                    {msg.date}
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={`inline-flex px-2 py-1 rounded-full text-xs font-medium text-white ${getStatusColor(msg.status)}`}
                    >
                      {msg.status}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      {msg.status === 'Unread' && (
                        <button
                          onClick={() => handleMarkAsRead(msg.id)}
                          className="p-1 text-green-600 hover:bg-green-50 rounded-lg transition"
                          title="Mark as Read"
                        >
                          <CheckCircle size={18} />
                        </button>
                      )}
                      <button
                        onClick={() => handleDelete(msg.id)}
                        className="p-1 text-red-600 hover:bg-red-50 rounded-lg transition"
                        title="Delete"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}

            {filteredMessages.length === 0 && (
              <tr>
                <td
                  colSpan={7}
                  className="px-4 py-8 text-center text-gray-500 dark:text-gray-400"
                >
                  No messages found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MessagePage;

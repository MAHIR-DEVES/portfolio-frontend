/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import AdminHeader from '@/components/admin/AdminHeader';
import Sidebar from '@/components/admin/Sidebar';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(prev => !prev);
  };

  useEffect(() => {
    const user = localStorage.getItem('admin');

    if (!user) {
      router.replace('/login');
      return;
    }

    try {
      const parsedUser = JSON.parse(user);

      // check login status
      if (!parsedUser?.loggedIn) {
        router.replace('/login');
        return;
      }

      // optional role check
      if (parsedUser?.role && parsedUser.role !== 'admin') {
        router.replace('/login');
        return;
      }
    } catch (error) {
      router.replace('/login');
    } finally {
      setLoading(false);
    }
  }, [router]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-gray-500">Checking authentication...</p>
      </div>
    );
  }

  return (
    <div className="flex h-screen overflow-hidden">
      {isSidebarOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black/40 z-30 md:hidden"
        />
      )}
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <AdminHeader toggleSidebar={toggleSidebar} />

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto bg-gray-50 ">{children}</div>
      </div>
    </div>
  );
}

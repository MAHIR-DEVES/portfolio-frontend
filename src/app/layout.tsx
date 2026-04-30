import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from '@/provider/providers';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Softvisionix ',
  icons: {
    icon: '/favicon.ico',
  },
  description:
    'Softvisionix is a leading software development company specializing in custom solutions, web and mobile app development, and digital transformation services. We help businesses innovate and grow with cutting-edge technology.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={` h-full antialiased`}>
      <body className={`min-h-full flex flex-col  ${inter.className}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

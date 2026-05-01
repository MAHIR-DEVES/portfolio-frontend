import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from '@/provider/providers';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: ' Meherab hossen ',
  icons: {
    icon: '/favicon.ico',
  },
  description:
    'Meherab Hossen is a skilled web developer specializing in React and Next.js, with a passion for creating dynamic and responsive web applications. With expertise in front-end development, Meherab is dedicated to delivering high-quality user experiences through innovative design and efficient coding practices.',
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

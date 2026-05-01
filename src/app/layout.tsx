import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from '@/provider/providers';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Meherab Hossen',
  icons: {
    icon: '/favicon.ico',
  },
  description: 'Full Stack Developer (React, Next.js, Node.js, MongoDB)',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className={`min-h-full flex flex-col ${inter.className}`}>
        <Providers>
          {/* ===== BACKGROUND LAYER (GLOBAL) ===== */}
          <div className="fixed inset-0 bg-gradient-to-br from-purple-50 via-white to-orange-50 dark:from-gray-900 dark:via-[#0a0614] dark:to-gray-950" />

          {/* Animated Grid */}
          <div className="fixed inset-0 opacity-5 dark:opacity-10 pointer-events-none animate-slideGrid">
            <div className="absolute inset-0 bg-grid-pattern"></div>
          </div>

          {/* Floating Lines */}
          <div className="fixed inset-0 pointer-events-none z-0">
            {[...Array(8)].map((_, i) => (
              <div
                key={`h-${i}`}
                className="absolute h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent animate-slideHorizontal"
                style={{
                  top: `${5 + i * 12}%`,
                  opacity: 0.15,
                  animationDuration: `${8 + i * 2}s`,
                  animationDelay: `${i * 0.5}s`,
                }}
              />
            ))}

            {[...Array(6)].map((_, i) => (
              <div
                key={`v-${i}`}
                className="absolute w-px bg-gradient-to-b from-transparent via-purple-400 to-transparent animate-slideVertical"
                style={{
                  left: `${10 + i * 16}%`,
                  opacity: 0.15,
                  animationDuration: `${10 + i * 2}s`,
                  animationDelay: `${i * 0.8}s`,
                }}
              />
            ))}
          </div>

          {/* Floating Particles */}
          <div className="fixed inset-0 pointer-events-none z-0">
            {[...Array(25)].map((_, i) => {
              const size = 2 + Math.random() * 4;

              return (
                <div
                  key={`p-${i}`}
                  className="absolute bg-purple-500 rounded-full opacity-20 dark:opacity-30 animate-float"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDuration: `${5 + Math.random() * 10}s`,
                    animationDelay: `${Math.random() * 5}s`,
                    width: `${size}px`,
                    height: `${size}px`,
                  }}
                />
              );
            })}
          </div>

          {/* ===== CONTENT ===== */}
          <main className="relative z-10">{children}</main>
        </Providers>

        {/* ===== GLOBAL STYLES ===== */}
        <style>{`
          @keyframes slideHorizontal {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }

          @keyframes slideVertical {
            0% { transform: translateY(-100%); }
            100% { transform: translateY(100%); }
          }

          @keyframes float {
            0% { transform: translateY(0px); opacity: 0; }
            50% { opacity: 0.5; }
            100% { transform: translateY(-120px); opacity: 0; }
          }

          @keyframes slideGrid {
            0% { transform: translate(0, 0); }
            100% { transform: translate(50px, 50px); }
          }

          .animate-slideHorizontal {
            animation: slideHorizontal linear infinite;
          }

          .animate-slideVertical {
            animation: slideVertical linear infinite;
          }

          .animate-float {
            animation: float linear infinite;
          }

          .animate-slideGrid {
            animation: slideGrid 20s linear infinite;
          }

          .bg-grid-pattern {
            background-image: linear-gradient(to right, #9333ea 1px, transparent 1px),
                              linear-gradient(to bottom, #9333ea 1px, transparent 1px);
            background-size: 50px 50px;
          }

          html {
            scroll-behavior: smooth;
          }
        `}</style>
      </body>
    </html>
  );
}

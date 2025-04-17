import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import QueryProvider from '@/components/QueryProvider'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "hi3816의 TODO앱",
  description: "할 일을 관리하고 정리할 수 있는 간단한 Todo 리스트입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#FFDDAB]`}>
        <QueryProvider>
          
          {/* 헤더 */}
          <header className="bg-[#5F8B4C] text-white py-5 px-6 text-2xl font-bold shadow-md text-center tracking-wide">
            🌿 hi3816의 Todo List 🌿
          </header>

          {/* 메인 */}
          <main className="">
            {children}
          </main>

          {/* 푸터 */}
          <footer className="text-center py-4 text-sm text-[#945034]">
            © 2025 hi3816. All rights reserved.
          </footer>
        </QueryProvider>
      </body>
    </html>
  );
}
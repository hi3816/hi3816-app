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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <QueryProvider>
          <header className ="bg-blue-500 text-white p-4 text-xl font-bold">
            hi3816의 TODO
          </header>
        
          <main className = "p-4">
            {children}
          </main>

          <footer className = "bg-tray-100 text-center p4 text-sm text-gray-600">
            © 2025 hi3816. All rights reserved.
          </footer>
        </QueryProvider>
      </body>
    </html>
  );
}

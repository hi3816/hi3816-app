"use client"

import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#FFDDAB] p-6 text-center">
      <h1 className="text-4xl font-bold text-green-800 mb-8">
        🌿 Todo List 과제
      </h1>
      <Link
        href="/todos"
        className="bg-green-600 text-white text-lg px-6 py-3 rounded-lg shadow hover:bg-green-700 transition"
      >
        투두 리스트 보러가기 ➡️
      </Link>
    </main>
  );
}
"use client";

import { useState, useEffect } from "react";
import { KelimeOyunu } from "@/components/KelimeOyunu";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-8">
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-2">
            Kelime Oyunu
          </h1>
          <p className="text-gray-600 text-lg">
            5 harfli kelimeyi 6 denemede tahmin et!
          </p>
        </header>
        <KelimeOyunu />
      </div>
    </div>
  );
}

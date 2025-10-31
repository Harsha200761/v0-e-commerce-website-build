"use client"

import type { ChangeEvent } from "react"

interface FiltersProps {
  onSearch: (term: string) => void
  onCategoryChange: (category: string) => void
  onPriceChange: (price: string) => void
}

export default function Filters({ onSearch, onCategoryChange, onPriceChange }: FiltersProps) {
  return (
    <section className="bg-white py-8 px-4 shadow-sm">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-green-900 font-bold text-lg mb-6">Find Your Perfect Millet</h3>
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            placeholder="Search products..."
            onChange={(e: ChangeEvent<HTMLInputElement>) => onSearch(e.target.value)}
            className="flex-1 min-w-0 px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-green-600 transition"
          />
          <select
            onChange={(e: ChangeEvent<HTMLSelectElement>) => onCategoryChange(e.target.value)}
            className="flex-1 min-w-0 px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-green-600 transition"
          >
            <option value="">All Categories</option>
            <option value="grain">Whole Grains</option>
            <option value="flour">Flour</option>
            <option value="snacks">Snacks</option>
            <option value="mix">Mixes</option>
          </select>
          <select
            onChange={(e: ChangeEvent<HTMLSelectElement>) => onPriceChange(e.target.value)}
            className="flex-1 min-w-0 px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-green-600 transition"
          >
            <option value="">All Prices</option>
            <option value="0-5">Under $5</option>
            <option value="5-10">$5 - $10</option>
            <option value="10-9999">$10+</option>
          </select>
        </div>
      </div>
    </section>
  )
}

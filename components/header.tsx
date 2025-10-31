"use client"

import type { CartItem } from "@/app/page"

interface HeaderProps {
  cart: CartItem[]
  onCartClick: () => void
}

export default function Header({ cart, onCartClick }: HeaderProps) {
  return (
    <header className="bg-green-900 text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center flex-wrap gap-4">
          <div className="flex-1 min-w-fit">
            <h1 className="text-2xl font-bold">🌾 Millet Haven</h1>
            <p className="text-sm opacity-90">Pure Health, Natural Goodness</p>
          </div>
          <nav className="flex gap-6">
            <a href="#products" className="text-white hover:text-yellow-400 transition font-medium">
              Shop
            </a>
            <a href="#" className="text-white hover:text-yellow-400 transition font-medium">
              About
            </a>
            <a href="#" className="text-white hover:text-yellow-400 transition font-medium">
              Contact
            </a>
          </nav>
          <button
            onClick={onCartClick}
            className="bg-yellow-500 hover:bg-yellow-600 text-green-900 font-bold px-4 py-2 rounded-lg flex items-center gap-2 transition hover:scale-105 active:scale-95"
          >
            <span>🛒</span>
            <span className="bg-green-900 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
              {cart.length}
            </span>
          </button>
        </div>
      </div>
    </header>
  )
}

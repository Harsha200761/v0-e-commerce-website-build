"use client"

import { useMemo } from "react"
import ProductCard from "./product-card"

interface Product {
  id: number
  name: string
  category: string
  price: number
  emoji: string
  description: string
}

const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Organic Pearl Millet",
    category: "grain",
    price: 8.99,
    emoji: "🌾",
    description: "High in nutrients and fiber",
  },
  {
    id: 2,
    name: "Finger Millet Flour",
    category: "flour",
    price: 6.99,
    emoji: "🥄",
    description: "Perfect for baking and cooking",
  },
  {
    id: 3,
    name: "Foxtail Millet Grain",
    category: "grain",
    price: 7.49,
    emoji: "🌾",
    description: "Rich in amino acids and minerals",
  },
  {
    id: 4,
    name: "Millet Granola Snack",
    category: "snacks",
    price: 9.99,
    emoji: "🍲",
    description: "Crunchy and delicious breakfast",
  },
  {
    id: 5,
    name: "Proso Millet Seeds",
    category: "grain",
    price: 5.99,
    emoji: "🌾",
    description: "Pure and nutritious millet seeds",
  },
  {
    id: 6,
    name: "Millet Pancake Mix",
    category: "mix",
    price: 7.99,
    emoji: "🥞",
    description: "Easy-to-prepare mix for breakfast",
  },
  {
    id: 7,
    name: "Barnyard Millet",
    category: "grain",
    price: 6.49,
    emoji: "🌾",
    description: "Gluten-free whole grain",
  },
  {
    id: 8,
    name: "Millet Energy Bars",
    category: "snacks",
    price: 10.99,
    emoji: "🍫",
    description: "Nutritious on-the-go snack",
  },
  {
    id: 9,
    name: "Kodo Millet Grain",
    category: "grain",
    price: 8.49,
    emoji: "🌾",
    description: "Ancient grain superfood",
  },
  {
    id: 10,
    name: "Millet Pilaf Mix",
    category: "mix",
    price: 6.99,
    emoji: "🍚",
    description: "Seasoned mix for easy cooking",
  },
  {
    id: 11,
    name: "Little Millet Seeds",
    category: "grain",
    price: 7.29,
    emoji: "🌾",
    description: "Small but mighty nutritional seeds",
  },
  {
    id: 12,
    name: "Millet Cookies",
    category: "snacks",
    price: 8.99,
    emoji: "🍪",
    description: "Healthy and delicious treats",
  },
]

interface ProductsGridProps {
  searchTerm: string
  selectedCategory: string
  selectedPrice: string
  onAddToCart: (product: Product) => void
}

export default function ProductsGrid({ searchTerm, selectedCategory, selectedPrice, onAddToCart }: ProductsGridProps) {
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())

      const matchesCategory = !selectedCategory || product.category === selectedCategory

      const matchesPrice = !selectedPrice || checkPriceRange(product.price, selectedPrice)

      return matchesSearch && matchesCategory && matchesPrice
    })
  }, [searchTerm, selectedCategory, selectedPrice])

  return (
    <section className="py-12 px-4 flex-1" id="products">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-green-900 font-bold text-3xl mb-8">Our Products</h2>
        {filteredProducts.length === 0 ? (
          <p className="text-center text-gray-500 py-12">No products found</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} onAddToCart={() => onAddToCart(product)} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

function checkPriceRange(price: number, range: string): boolean {
  const [min, max] = range.split("-").map(Number)
  return price >= min && price <= max
}

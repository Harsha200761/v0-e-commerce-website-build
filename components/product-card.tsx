"use client"

interface Product {
  id: number
  name: string
  category: string
  price: number
  emoji: string
  description: string
}

interface ProductCardProps {
  product: Product
  onAddToCart: () => void
}

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer flex flex-col h-full">
      <div className="w-full h-48 bg-gradient-to-br from-green-600 to-amber-50 flex items-center justify-center text-5xl">
        {product.emoji}
      </div>
      <div className="p-5 flex flex-col flex-1">
        <p className="text-green-600 text-xs font-bold uppercase tracking-widest mb-2">{product.category}</p>
        <h3 className="text-green-900 font-bold text-lg mb-2">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-4 flex-1">{product.description}</p>
        <div className="flex justify-between items-center pt-4 border-t border-gray-200">
          <span className="text-2xl font-bold text-yellow-600">${product.price.toFixed(2)}</span>
          <button
            onClick={onAddToCart}
            className="bg-green-900 hover:bg-green-600 text-white font-bold px-3 py-2 rounded-lg transition hover:scale-105 active:scale-95"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  )
}

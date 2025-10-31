"use client"

import { useState } from "react"
import Header from "@/components/header"
import Hero from "@/components/hero"
import Filters from "@/components/filters"
import ProductsGrid from "@/components/products-grid"
import CartModal from "@/components/cart-modal"
import Footer from "@/components/footer"

export interface CartItem {
  id: number
  name: string
  price: number
  emoji: string
  description: string
  category: string
  quantity: number
}

export default function Home() {
  const [cart, setCart] = useState<CartItem[]>([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("")
  const [selectedPrice, setSelectedPrice] = useState("")

  const addToCart = (product: any) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id)
      if (existingItem) {
        return prevCart.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item))
      }
      return [...prevCart, { ...product, quantity: 1 }]
    })
  }

  const removeFromCart = (productId: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId))
  }

  const updateQuantity = (productId: number, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeFromCart(productId)
    } else {
      setCart((prevCart) => prevCart.map((item) => (item.id === productId ? { ...item, quantity: newQuantity } : item)))
    }
  }

  return (
    <div className="min-h-screen bg-amber-50 flex flex-col">
      <Header cart={cart} onCartClick={() => setIsCartOpen(true)} />
      <Hero onShopClick={() => document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })} />
      <Filters onSearch={setSearchTerm} onCategoryChange={setSelectedCategory} onPriceChange={setSelectedPrice} />
      <ProductsGrid
        searchTerm={searchTerm}
        selectedCategory={selectedCategory}
        selectedPrice={selectedPrice}
        onAddToCart={addToCart}
      />
      <CartModal
        isOpen={isCartOpen}
        cart={cart}
        onClose={() => setIsCartOpen(false)}
        onRemove={removeFromCart}
        onUpdateQuantity={updateQuantity}
      />
      <Footer />
    </div>
  )
}

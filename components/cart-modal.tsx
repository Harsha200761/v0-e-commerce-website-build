"use client"

import type { CartItem } from "@/app/page"
import { useState } from "react"

interface CartModalProps {
  isOpen: boolean
  cart: CartItem[]
  onClose: () => void
  onRemove: (productId: number) => void
  onUpdateQuantity: (productId: number, quantity: number) => void
}

export default function CartModal({ isOpen, cart, onClose, onRemove, onUpdateQuantity }: CartModalProps) {
  const [isCheckingOut, setIsCheckingOut] = useState(false)

  if (!isOpen) return null

  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0)
  const shipping = cart.length > 0 ? 5.0 : 0
  const total = subtotal + shipping

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert("Your cart is empty!")
      return
    }
    setIsCheckingOut(true)
    alert(
      `Thank you for your purchase! Total: $${total.toFixed(2)}\n\nThis is a demo checkout. Redirecting to payment...`,
    )
    setIsCheckingOut(false)
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div
        className="bg-white rounded-lg w-full max-w-md max-h-[80vh] flex flex-col shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b-2 border-gray-200 bg-amber-50">
          <h2 className="text-green-900 font-bold text-2xl">Shopping Cart</h2>
          <button onClick={onClose} className="text-gray-700 hover:text-yellow-600 text-3xl transition font-bold">
            ×
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto p-6">
          {cart.length === 0 ? (
            <p className="text-center text-gray-400 py-12">Your cart is empty</p>
          ) : (
            <div className="space-y-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col gap-3 p-4 bg-amber-50 rounded-lg border-l-4 border-green-600 flex-wrap"
                >
                  <div className="flex justify-between items-start gap-2">
                    <div className="flex-1">
                      <h4 className="text-green-900 font-bold">{item.name}</h4>
                      <p className="text-gray-600 text-sm">${item.price.toFixed(2)} each</p>
                    </div>
                    <span className="text-right font-bold text-green-900 min-w-20">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                        className="bg-gray-300 hover:bg-green-600 hover:text-white text-gray-900 w-7 h-7 rounded flex items-center justify-center font-bold transition"
                      >
                        −
                      </button>
                      <span className="font-bold min-w-8 text-center">{item.quantity}</span>
                      <button
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        className="bg-gray-300 hover:bg-green-600 hover:text-white text-gray-900 w-7 h-7 rounded flex items-center justify-center font-bold transition"
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={() => onRemove(item.id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm font-bold transition"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-6 border-t-2 border-gray-200 bg-amber-50">
          <div className="space-y-3 mb-6">
            <div className="flex justify-between text-gray-700">
              <span>Subtotal:</span>
              <span className="font-bold">${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-gray-700">
              <span>Shipping:</span>
              <span className="font-bold">${shipping.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-green-900 text-lg font-bold border-t-2 border-gray-200 pt-3">
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
          <button
            onClick={handleCheckout}
            disabled={isCheckingOut || cart.length === 0}
            className="w-full bg-green-900 hover:bg-green-600 text-white font-bold py-3 rounded-lg transition hover:-translate-y-0.5 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isCheckingOut ? "Processing..." : "Proceed to Checkout"}
          </button>
        </div>
      </div>
    </div>
  )
}

"use client"

interface HeroProps {
  onShopClick: () => void
}

export default function Hero({ onShopClick }: HeroProps) {
  return (
    <section className="bg-gradient-to-r from-green-900 to-green-600 text-white py-24 px-4 text-center">
      <div>
        <h2 className="text-5xl font-bold mb-4 drop-shadow-lg">Discover the Power of Millet</h2>
        <p className="text-xl mb-8 opacity-95">Premium quality millet products for a healthier lifestyle</p>
        <button
          onClick={onShopClick}
          className="bg-yellow-500 hover:bg-yellow-600 text-green-900 font-bold px-8 py-3 rounded-lg transition hover:translate-y-[-2px] active:scale-95 text-lg"
        >
          Shop Now
        </button>
      </div>
    </section>
  )
}

export default function Footer() {
  return (
    <footer className="bg-green-900 text-white py-12 px-4 mt-auto">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h4 className="text-yellow-400 font-bold text-lg mb-4">About Millet Haven</h4>
            <p>We provide the finest quality organic millet products for your health and wellness.</p>
          </div>
          <div>
            <h4 className="text-yellow-400 font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-yellow-400 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-yellow-400 transition">
                  Shop
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400 transition">
                  About Us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-yellow-400 font-bold text-lg mb-4">Contact Us</h4>
            <p>Email: hello@millethaven.com</p>
            <p>Phone: +1 (555) 123-4567</p>
          </div>
        </div>
        <div className="text-center pt-8 border-t border-green-700 opacity-80">
          <p>&copy; 2025 Millet Haven. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

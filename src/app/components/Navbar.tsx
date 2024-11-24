import Link from "next/link";
import { useState } from "react";
import {
  ShoppingCartIcon,
  ChevronDownIcon,
  XIcon,
  MenuIcon,
} from "@heroicons/react/outline";
import { useCart } from "./CartContext";

const Navbar: React.FC = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cart, removeFromCart } = useCart();
  const [isLinksOpen, setIsLinksOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleCart = () => setIsCartOpen(!isCartOpen);

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <nav className="bg-stone-300 border-b border-green-800 shadow-md py-4 px-6 sticky top-0 z-50">
      <div className="flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center space-x-3">
          <img src="/logo.webp" alt="PickBazar" className="h-8" />
          
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-800 hover:text-green-600"
          >
            <MenuIcon className="h-6 w-6" />
          </button>
        </div>

        {/* Center Links (Desktop) */}
        <div className="hidden md:flex items-center space-x-8">
          <button
            className="text-gray-800 text-xl hover:text-green-600 font-medium flex items-center"
            onClick={() => setIsLinksOpen(!isLinksOpen)}
          >
            Grocery <ChevronDownIcon className="h-5 w-5 ml-1" />
          </button>
          {isLinksOpen && (
            <div className="absolute bg-white shadow-lg border rounded-md mt-2">
              <Link href="/" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                Grocery 1
              </Link>
              <Link
                href="/Grocercate"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
              >
                Grocery 2
              </Link>
              <Link
                href="/Reproduct"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
              >
                Grocery 3
              </Link>
            </div>
          )}

          <Link href="/shops" className="text-gray-600 hover:text-green-600 font-medium">
            Shops
          </Link>
          <Link href="/offers" className="text-gray-600 hover:text-green-600 font-medium">
            Offers
          </Link>
          <Link href="/contact" className="text-gray-600 hover:text-green-600 font-medium">
        contact
          </Link>
        </div>

        {/* Cart Button */}
        <div className="relative flex items-center">
          <button
            onClick={toggleCart}
            className="flex items-center text-green-600 font-semibold"
          >
            <ShoppingCartIcon className="h-6 w-6" />
            <span className="ml-2">{cart.length} items</span>
          </button>

          {/* Side Cart */}
          {isCartOpen && (
            <div className="absolute right-0 top-12 bg-white shadow-lg border rounded-md w-80 z-10">
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">Your Cart</h3>
                {cart.length > 0 ? (
                  cart.map((item) => (
                    <div
                      key={item.id}
                      className="flex justify-between items-center border-b py-2"
                    >
                      <div>
                        <h4 className="text-sm font-medium">{item.name}</h4>
                        <p className="text-xs text-gray-600">
                          ${item.price} x {item.quantity}
                        </p>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <XIcon className="h-5 w-5" />
                      </button>
                    </div>
                  ))
                ) : (
                  <p className="text-sm text-gray-600">Your cart is empty.</p>
                )}
                <div className="mt-4 flex justify-between items-center font-semibold">
                  <span>Total:</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Links */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 space-y-2">
          <Link
            href="/"
            className="block text-gray-600 hover:text-green-600 font-medium"
          >
            Home
          </Link>
          <button
            className="text-gray-800 text-lg hover:text-green-600 font-medium flex items-center"
            onClick={() => setIsLinksOpen(!isLinksOpen)}
          >
            Grocery <ChevronDownIcon className="h-5 w-5 ml-1" />
          </button>
          {isLinksOpen && (
            <div className="pl-4 space-y-1">
              <Link href="/" className="block text-gray-600 hover:text-green-600">
                Grocery 1
              </Link>
              <Link href="/Grocercate" className="block text-gray-600 hover:text-green-600">
                Grocery 2
              </Link>
              <Link href="/Reproduct" className="block text-gray-600 hover:text-green-600">
                Grocery 3
              </Link>
            </div>
          )}
          <Link
            href="/shops"
            className="block text-gray-600 hover:text-green-600 font-medium"
          >
            Shops
          </Link>
          <Link
            href="/offers"
            className="block text-gray-600 hover:text-green-600 font-medium"
          >
            Offers
          </Link>
          <Link
            href="/contact"
            className="block text-gray-600 hover:text-green-600 font-medium"
          >
            contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

// src/app/components/ProductGrid.tsx

"use client";
import Image from "next/image";
import { useState } from "react";
import { useCart } from "./CartContext";
import Link from "next/link";

type Product = {
  id: number;
  name: string;
  weight: string;
  originalPrice: number;
  discountedPrice: number;
  discount: number;
  imageSrc: string;
  category: string;
};

const products: Product[] = [
  { id: 1, name: "Apples", weight: "1 lb", originalPrice: 2.0, discountedPrice: 1.6, discount: 20, imageSrc: "/apples.jpg", category: "Fruits" },
  { id: 2, name: "Baby Spinach", weight: "2 lb", originalPrice: 1.0, discountedPrice: 0.6, discount: 40, imageSrc: "/baby.jpg", category: "Vegetables" },
  { id: 3, name: "Blueberries", weight: "1 lb", originalPrice: 3.0, discountedPrice: 3.0, discount: 10, imageSrc: "/blue.webp", category: "Fruits" },
  { id: 4, name: "Carrots", weight: "2 lb", originalPrice: 1.5, discountedPrice: 1.2, discount: 20, imageSrc: "/carrots.jpg", category: "Vegetables" },
  { id: 5, name: "Chicken Breast", weight: "1 lb", originalPrice: 5.0, discountedPrice: 4.5, discount: 10, imageSrc: "/chicken.webp", category: "Meat" },
  { id: 6, name: "Almonds", weight: "0.5 lb", originalPrice: 6.0, discountedPrice: 5.4, discount: 10, imageSrc: "/almond.png", category: "Nuts" },
  { id: 7, name: "Broccoli", weight: "1 lb", originalPrice: 1.8, discountedPrice: 1.4, discount: 22, imageSrc: "/brocoli.jpg", category: "Vegetables" },
  { id: 8, name: "Salmon", weight: "1 lb", originalPrice: 10.0, discountedPrice: 8.0, discount: 20, imageSrc: "/salmon.webp", category: "Seafood" },
  { id: 9, name: "Grapes", weight: "1 lb", originalPrice: 2.5, discountedPrice: 2.0, discount: 20, imageSrc: "/grapes.jpg", category: "Fruits" },
  { id: 10, name: "Cheese", weight: "0.5 lb", originalPrice: 4.0, discountedPrice: 3.2, discount: 20, imageSrc: "/chese.jpg", category: "Dairy" },
  { id: 11, name: "Bananas", weight: "1 lb", originalPrice: 1.2, discountedPrice: 1.0, discount: 17, imageSrc: "/banana.jpeg", category: "Fruits" },
  { id: 12, name: "Eggs", weight: "1 dozen", originalPrice: 3.0, discountedPrice: 2.5, discount: 17, imageSrc: "/egg.jpg", category: "Dairy" },
  { id: 13, name: "Oatmeal", weight: "1 lb", originalPrice: 2.5, discountedPrice: 2.0, discount: 20, imageSrc: "/oatmeal.avif", category: "Grains" },
  { id: 14, name: "Avocado", weight: "1 lb", originalPrice: 2.0, discountedPrice: 1.5, discount: 25, imageSrc: "/avacadu.png", category: "Fruits" },
  { id: 15, name: "Milk", weight: "1 gallon", originalPrice: 3.5, discountedPrice: 3.0, discount: 14, imageSrc: "/milk.avif", category: "Dairy" },
  { id: 16, name: "Yogurt", weight: "0.5 lb", originalPrice: 2.0, discountedPrice: 1.5, discount: 25, imageSrc: "/yogurt.png", category: "Dairy" },
  { id: 17, name: "Orange Juice", weight: "1 quart", originalPrice: 4.0, discountedPrice: 3.2, discount: 20, imageSrc: "/orange2.jpg", category: "Beverages" },
  { id: 18, name: "Strawberries", weight: "1 lb", originalPrice: 4.0, discountedPrice: 3.0, discount: 25, imageSrc: "/stawberry.jpg", category: "Fruits" },
  { id: 19, name: "Tomatoes", weight: "1 lb", originalPrice: 1.8, discountedPrice: 1.4, discount: 22, imageSrc: "/tomatos.jpeg", category: "Vegetables" },
  { id: 20, name: "Coffee Beans", weight: "1 lb", originalPrice: 5.0, discountedPrice: 4.0, discount: 20, imageSrc: "/coffe.jpg", category: "Beverages" },
  { id: 21, name: "Pasta", weight: "1 lb", originalPrice: 2.5, discountedPrice: 2.0, discount: 20, imageSrc: "/pro24.jpeg", category: "Grains" },
  { id: 22, name: "Peanut Butter", weight: "0.5 lb", originalPrice: 3.5, discountedPrice: 3.0, discount: 14, imageSrc: "/pro22.jpeg", category: "Spreads" },
  { id: 23, name: "Cucumber", weight: "1 lb", originalPrice: 1.2, discountedPrice: 1.0, discount: 17, imageSrc: "/cucu.png", category: "Vegetables" },
  { id: 24, name: "Butter", weight: "0.5 lb", originalPrice: 2.5, discountedPrice: 2.0, discount: 20, imageSrc: "/pro21.jpeg", category: "Dairy" },
  { id: 25, name: "Potatoes", weight: "5 lb", originalPrice: 3.0, discountedPrice: 2.5, discount: 17, imageSrc: "/pro25.jpeg", category: "Vegetables" },
  { id: 26, name: "Lettuce", weight: "1 head", originalPrice: 1.5, discountedPrice: 1.2, discount: 20, imageSrc: "/pro26.jpeg", category: "Vegetables" },
  { id: 27, name: "Chocolate Bar", weight: "0.2 lb", originalPrice: 1.5, discountedPrice: 1.2, discount: 20, imageSrc: "/pro27.jpeg", category: "Snacks" },
  { id: 28, name: "Shrimp", weight: "1 lb", originalPrice: 8.0, discountedPrice: 6.5, discount: 19, imageSrc: "/pro26.jpeg", category: "Seafood" },
  { id: 29, name: "Green Tea", weight: "20 bags", originalPrice: 4.0, discountedPrice: 3.2, discount: 20, imageSrc: "/pro29.jpeg", category: "Beverages" },
  { id: 30, name: "Peaches", weight: "1 lb", originalPrice: 3.0, discountedPrice: 2.4, discount: 20, imageSrc: "/pro30.jpeg", category: "Fruits" },
  { id: 31, name: "Ground Beef", weight: "1 lb", originalPrice: 5.0, discountedPrice: 4.5, discount: 10, imageSrc: "/pro31.jpeg", category: "Meat" },
  { id: 32, name: "Zucchini", weight: "1 lb", originalPrice: 1.5, discountedPrice: 1.2, discount: 20, imageSrc: "/pro32.jpeg", category: "Vegetables" },
  { id: 33, name: "Cashews", weight: "0.5 lb", originalPrice: 7.0, discountedPrice: 6.3, discount: 10, imageSrc: "/pro33.jpeg", category: "Nuts" },
  { id: 34, name: "Honey", weight: "1 lb", originalPrice: 6.0, discountedPrice: 5.0, discount: 17, imageSrc: "/pro34.jpeg", category: "Spreads" },
  { id: 35, name: "Cereal", weight: "1 lb", originalPrice: 4.0, discountedPrice: 3.2, discount: 20, imageSrc: "/pro35.jpeg", category: "Breakfast" },
  { id: 36, name: "Raspberries", weight: "1 lb", originalPrice: 4.5, discountedPrice: 3.5, discount: 22, imageSrc: "/pro36.jpeg", category: "Fruits" },
  { id: 37, name: "Tofu", weight: "1 lb", originalPrice: 2.5, discountedPrice: 2.0, discount: 20, imageSrc: "/pro37.jpeg", category: "Vegan" },
  { id: 38, name: "Coconut Milk", weight: "1 quart", originalPrice: 3.0, discountedPrice: 2.4, discount: 20, imageSrc: "/pro38.jpeg", category: "Dairy Alternatives" },
  { id: 39, name: "Bell Peppers", weight: "1 lb", originalPrice: 2.5, discountedPrice: 2.0, discount: 20, imageSrc: "/39.jpeg", category: "Vegetables" },
  { id: 40, name: "Watermelon", weight: "5 lb", originalPrice: 5.0, discountedPrice: 4.0, discount: 20, imageSrc: "/pro40.jpeg", category: "Fruits" }

];

const ProductGrid = () => {
  const { addToCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const categories = [...new Set(products.map((product) => product.category))];

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  return (
    <div className="flex flex-col lg:flex-row">
      {/* Mobile Category Menu */}
      <div className="relative lg:hidden w-full">
        <button
          className="w-full p-4 bg-gray-200 text-gray-800 rounded-md flex justify-between items-center"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span>Categories</span>
          <span className="material-icons">{isMobileMenuOpen ? "close" : "menu"}</span>
        </button>
        {isMobileMenuOpen && (
          <div className="absolute left-0 top-14 bg-white shadow-lg w-full z-10">
            <ul className="divide-y divide-gray-200">
              <li
                className={`py-3 text-center text-gray-700 cursor-pointer hover:text-gray-900 ${
                  !selectedCategory ? "font-bold" : ""
                }`}
                onClick={() => {
                  setSelectedCategory(null);
                  setIsMobileMenuOpen(false);
                }}
              >
                All Products
              </li>
              {categories.map((category) => (
                <li
                  key={category}
                  className={`py-3 text-center text-gray-700 cursor-pointer hover:text-gray-900 ${
                    selectedCategory === category ? "font-bold" : ""
                  }`}
                  onClick={() => {
                    setSelectedCategory(category);
                    setIsMobileMenuOpen(false);
                  }}
                >
                  {category}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden lg:block lg:w-1/4 bg-gray-100 p-4">
        <h2 className="text-lg font-semibold mb-4">Categories</h2>
        <ul>
          <li
            className={`py-2 text-gray-700 cursor-pointer hover:text-gray-900 ${
              !selectedCategory ? "font-bold" : ""
            }`}
            onClick={() => setSelectedCategory(null)}
          >
            All Products
          </li>
          {categories.map((category) => (
            <li
              key={category}
              className={`py-2 text-gray-700 cursor-pointer hover:text-gray-900 ${
                selectedCategory === category ? "font-bold" : ""
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 w-full">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg bg-white p-4 shadow hover:shadow-lg hover:-translate-y-1 transition-transform"
          >
            <div className="relative">
              <Image
                src={product.imageSrc}
                alt={product.name}
                width={150}
                height={150}
                className="w-full h-40 object-cover rounded"
                loading="lazy"
              />
              {product.discount > 0 && (
                <span className="absolute top-2 right-2 bg-yellow-400 text-white text-sm font-bold py-1 px-2 rounded-full">
                  {product.discount}%
                </span>
              )}
            </div>
            <div className="mt-4">
              <h3 className="text-gray-800 font-semibold">{product.name}</h3>
              <p className="text-gray-500 text-sm">{product.weight}</p>
              <div className="flex items-center mt-2">
                {product.discountedPrice < product.originalPrice && (
                  <span className="text-gray-400 line-through mr-2">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                )}
                <span className="text-green-600 font-bold">
                  ${product.discountedPrice.toFixed(2)}
                </span>
              </div>
            </div>
            <button
              className="mt-4 w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600"
              onClick={() =>
                addToCart({
                  id: product.id.toString(),
                  name: product.name,
                  price: product.discountedPrice,
                  quantity: 1,
                })
              }
            >
              Add to Cart
            </button>
            <Link href={`/product/${product.id}`}>
              <button className="mt-2 w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                View Details
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;

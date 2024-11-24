import React from "react";
import Image from "next/image";

type Product = {
  id: number;
  name: string;
  imageSrc: string;
  discountedPrice: number;
};

const relatedProducts: Product[] = [
  { id: 1, name: "Rice (5kg)", imageSrc: "/rice.webp", discountedPrice: 15 },
  { id: 2, name: "Cooking Oil (5L)", imageSrc: "/oil.png", discountedPrice: 25 },
  { id: 3, name: "Flour (10kg)", imageSrc: "/flour.jpeg", discountedPrice: 20 },
  { id: 4, name: "Sugar (1kg)", imageSrc: "/sugar.png", discountedPrice: 8 },
  { id: 5, name: "Lentils (2kg)", imageSrc: "/daal.jpeg", discountedPrice: 12 },
  { id: 6, name: "Tea Bags (100pc)", imageSrc: "/tea.jpeg", discountedPrice: 10 },
  { id: 7, name: "Milk Pack (1L)", imageSrc: "/milk.jpeg", discountedPrice: 5 },
  { id: 8, name: "Spices Pack", imageSrc: "/spices.jpeg", discountedPrice: 15 },
  { id: 9, name: "Pasta (500g)", imageSrc: "/pasta.jpeg", discountedPrice: 6 }
];

const RelatedProducts: React.FC = () => {
  return (
    <div className="mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center text-orange-600">Popular Grocery Items</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {relatedProducts.map((product) => (
          <div
            key={product.id}
            className="border-2 border-orange-200 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center bg-white hover:scale-105"
          >
            <div className="relative w-full h-48 mb-4">
              <Image
                src={product.imageSrc}
                alt={product.name}
                fill
                className="rounded-lg object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h3>
            <p className="text-orange-500 text-2xl font-bold">${product.discountedPrice}</p>
            <div className="mt-3 flex items-center gap-2">
              <span className="text-yellow-500">★★★★★</span>
              <span className="text-sm text-gray-600">(5.0)</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
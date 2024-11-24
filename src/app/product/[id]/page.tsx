"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { useCart } from "../../components/CartContext";
import { use } from "react";
import ProductGrid from "@/app/components/Product";

type Product = {
  id: number;
  name: string;
  weight: string;
  originalPrice: number;
  discountedPrice: number;
  discount: number;
  imageSrc: string;
};

const products: Product[] = [
    { id: 1, name: "Apples", weight: "1 lb", originalPrice: 2.0, discountedPrice: 1.6, discount: 20, imageSrc: "/apples.jpg" },
    { id: 2, name: "Baby Spinach", weight: "2 lb", originalPrice: 1.0, discountedPrice: 0.6, discount: 40, imageSrc: "/baby.jpg" },
    { id: 3, name: "Blueberries", weight: "1 lb", originalPrice: 3.0, discountedPrice: 3.0, discount: 10, imageSrc: "/blue.webp" },
    { id: 4, name: "Carrots", weight: "2 lb", originalPrice: 1.5, discountedPrice: 1.2, discount: 20, imageSrc: "/carrots.jpg" },
    { id: 5, name: "Chicken Breast", weight: "1 lb", originalPrice: 5.0, discountedPrice: 4.5, discount: 10, imageSrc: "/chicken.webp" },
    { id: 6, name: "Almonds", weight: "0.5 lb", originalPrice: 6.0, discountedPrice: 5.4, discount: 10, imageSrc: "/almonds.webp" },
    { id: 7, name: "Broccoli", weight: "1 lb", originalPrice: 1.8, discountedPrice: 1.4, discount: 22, imageSrc: "/brocoli.jpg" },
    { id: 8, name: "Salmon", weight: "1 lb", originalPrice: 10.0, discountedPrice: 8.0, discount: 20, imageSrc: "/salmon.webp" },
    { id: 9, name: "Grapes", weight: "1 lb", originalPrice: 2.5, discountedPrice: 2.0, discount: 20, imageSrc: "/grapes.jpg" },
    { id: 10, name: "Cheese", weight: "0.5 lb", originalPrice: 4.0, discountedPrice: 3.2, discount: 20, imageSrc: "/chese.jpg" },
    { id: 11, name: "Bananas", weight: "1 lb", originalPrice: 1.2, discountedPrice: 1.0, discount: 17, imageSrc: "/banana.jpeg" },
    { id: 12, name: "Eggs", weight: "1 dozen", originalPrice: 3.0, discountedPrice: 2.5, discount: 17, imageSrc: "/egg.jpg" },
    { id: 13, name: "Oatmeal", weight: "1 lb", originalPrice: 2.5, discountedPrice: 2.0, discount: 20, imageSrc: "/oatmeal.avif" },
    { id: 14, name: "Avocado", weight: "1 lb", originalPrice: 2.0, discountedPrice: 1.5, discount: 25, imageSrc: "/avacadu.png" },
    { id: 15, name: "Milk", weight: "1 gallon", originalPrice: 3.5, discountedPrice: 3.0, discount: 14, imageSrc: "/milk.avif" },
    { id: 16, name: "Yogurt", weight: "0.5 lb", originalPrice: 2.0, discountedPrice: 1.5, discount: 25, imageSrc: "/yogurt.png" },
    { id: 17, name: "Orange Juice", weight: "1 quart", originalPrice: 4.0, discountedPrice: 3.2, discount: 20, imageSrc: "/orange2.jpg" },
    { id: 18, name: "Strawberries", weight: "1 lb", originalPrice: 4.0, discountedPrice: 3.0, discount: 25, imageSrc: "/stawberry.jpg" },
    { id: 19, name: "Tomatoes", weight: "1 lb", originalPrice: 1.8, discountedPrice: 1.4, discount: 22, imageSrc: "/tomatos.jpeg" },
    { id: 20, name: "Coffee Beans", weight: "1 lb", originalPrice: 5.0, discountedPrice: 4.0, discount: 20, imageSrc: "/coffe.jpg" },
    { id: 21, name: "Pasta", weight: "1 lb", originalPrice: 2.5, discountedPrice: 2.0, discount: 20, imageSrc: "/pro24.jpeg",  },
    { id: 22, name: "Peanut Butter", weight: "0.5 lb", originalPrice: 3.5, discountedPrice: 3.0, discount: 14, imageSrc: "/pro22.jpeg", },
    { id: 23, name: "Cucumber", weight: "1 lb", originalPrice: 1.2, discountedPrice: 1.0, discount: 17, imageSrc: "/pro23.jpeg",  },
    { id: 24, name: "Butter", weight: "0.5 lb", originalPrice: 2.5, discountedPrice: 2.0, discount: 20, imageSrc: "/pro21.jpeg",  },
    { id: 25, name: "Potatoes", weight: "5 lb", originalPrice: 3.0, discountedPrice: 2.5, discount: 17, imageSrc: "/pro25.jpeg", },
    { id: 26, name: "Lettuce", weight: "1 head", originalPrice: 1.5, discountedPrice: 1.2, discount: 20, imageSrc: "/pro26.jpeg", },
    { id: 27, name: "Chocolate Bar", weight: "0.2 lb", originalPrice: 1.5, discountedPrice: 1.2, discount: 20, imageSrc: "/pro27.jpeg", },
    { id: 28, name: "Shrimp", weight: "1 lb", originalPrice: 8.0, discountedPrice: 6.5, discount: 19, imageSrc: "/pro26.jpeg",  },
    { id: 29, name: "Green Tea", weight: "20 bags", originalPrice: 4.0, discountedPrice: 3.2, discount: 20, imageSrc: "/pro29.jpeg",  },
    { id: 30, name: "Peaches", weight: "1 lb", originalPrice: 3.0, discountedPrice: 2.4, discount: 20, imageSrc: "/pro30.jpeg", },
    { id: 31, name: "Ground Beef", weight: "1 lb", originalPrice: 5.0, discountedPrice: 4.5, discount: 10, imageSrc: "/pro31.jpeg", },
    { id: 32, name: "Zucchini", weight: "1 lb", originalPrice: 1.5, discountedPrice: 1.2, discount: 20, imageSrc: "/pro32.jpeg", },
    { id: 33, name: "Cashews", weight: "0.5 lb", originalPrice: 7.0, discountedPrice: 6.3, discount: 10, imageSrc: "/pro33.jpeg",  },
    { id: 34, name: "Honey", weight: "1 lb", originalPrice: 6.0, discountedPrice: 5.0, discount: 17, imageSrc: "/pro34.jpeg",  },
    { id: 35, name: "Cereal", weight: "1 lb", originalPrice: 4.0, discountedPrice: 3.2, discount: 20, imageSrc: "/pro35.jpeg", },
    { id: 36, name: "Raspberries", weight: "1 lb", originalPrice: 4.5, discountedPrice: 3.5, discount: 22, imageSrc: "/pro36.jpeg",  },
    { id: 37, name: "Tofu", weight: "1 lb", originalPrice: 2.5, discountedPrice: 2.0, discount: 20, imageSrc: "/pro37.jpeg",  },
    { id: 38, name: "Coconut Milk", weight: "1 quart", originalPrice: 3.0, discountedPrice: 2.4, discount: 20, imageSrc: "/pro38.jpeg",  },
    { id: 39, name: "Bell Peppers", weight: "1 lb", originalPrice: 2.5, discountedPrice: 2.0, discount: 20, imageSrc: "/39.jpeg", },
    { id: 40, name: "Watermelon", weight: "5 lb", originalPrice: 5.0, discountedPrice: 4.0, discount: 20, imageSrc: "/pro40.jpeg", }











  // Your product data here
];

export default function ProductDetail({ params }: { params: Promise<{ id: string }> }) {
  const { addToCart } = useCart();

  // Use `React.use()` to unwrap the `params` Promise
  const { id } = use(params);

  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (id) {
      const productDetail = products.find((p) => p.id === parseInt(id));
      setProduct(productDetail || null);
    }
  }, [id]);

  if (!product) return <div>Loading...</div>;

  const handleAddToCart = () => {
    addToCart({
      id: product.id.toString(),
      name: product.name,
      price: product.discountedPrice,
      quantity: 1,
    });
  };

  return (
    <div className="flex flex-col items-center">
      <Image
        src={product.imageSrc}
        alt={product.name}
        width={400}
        height={400}
      />
      <h1>{product.name}</h1>
      <p>{product.weight}</p>
      <p>
        <span className="line-through">${product.originalPrice}</span>{" "}
        ${product.discountedPrice}
      </p>
      <button
        onClick={handleAddToCart}
        className="bg-green-500 text-white px-4 py-2 rounded-md mt-2"
      >
        Add to Cart
      </button>
      <div>
        <ProductGrid/>
      </div>
    </div>
  );
}

"use client"
import React, { useEffect, useState } from "react";

type Offer = {
  id: number;
  title: string;
  description: string;
  discount: string;
  imageSrc: string;
};

const specialOffers: Offer[] = [
  {
    id: 1,
    title: "Summer Sale",
    description: "Flat 50% off on selected items!",
    discount: "50%",
    imageSrc: "/deal2.png",
  },
  {
    id: 2,
    title: "Buy One Get One",
    description: "BOGO offer on all accessories.",
    discount: "BOGO",
    imageSrc: "/deal1.png",
  },
  {
    id: 3,
    title: "Free Shipping",
    description: "Free shipping on orders above $50.",
    discount: "Free",
    imageSrc: "/deal3.png",
  },
  
];

const SpecialOffers: React.FC = () => {
  const [showPopup, setShowPopup] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="mt-10 relative">
      {showPopup && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-xl shadow-2xl z-50 animate-bounce text-center">
          <h1 className="text-4xl font-bold text-red-600">🎉🎊WOW Big Offers!🎊🎉</h1>
        </div>
      )}
      <h2 className="text-2xl font-semibold mb-4 text-center">Special Offers</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {specialOffers.map((offer) => (
          <div
            key={offer.id}
            className="border p-4 rounded-md shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <img
              src={offer.imageSrc}
              alt={offer.title}
              className="w-full h-40 object-cover rounded-md mb-3"
            />
            <h3 className="text-lg font-bold">{offer.title}</h3>
            <p className="text-gray-600 mt-1">{offer.description}</p>
            <span className="inline-block bg-sky-800 text-white text-sm px-3 py-1 rounded-full mt-3 animate-pulse">
              {offer.discount}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpecialOffers;
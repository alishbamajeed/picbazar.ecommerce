  
  "use client";
  import React, { useState } from "react";
  import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/solid";

  const cards = [
    {
      title: "Express Delivery",
      subtitle: "With selected items",
      bgColor: "bg-gradient-to-r from-blue-700 to-blue-400",
      textColor: "text-blue-600",
      buttonText: "Save Now",
      image: "/delivery.png",
    },
    {
      title: "Cash On Delivery",
      subtitle: "With selected items",
      bgColor: "bg-gradient-to-r from-green-700 to-green-400",
      textColor: "text-green-600",
      buttonText: "Save Now",
      image: "/cash.png",
    },
    {
      title: "Gift Voucher",
      subtitle: "With personal care items",
      bgColor: "bg-gradient-to-r from-pink-700 to-pink-400",
      textColor: "text-pink-600",
      buttonText: "Shop Coupons",
      image: "/gift3.png",
      preventRightClick: true,
    },
    {
      title: "Free Delivery",
      subtitle: "On all orders over $50",
      bgColor: "bg-gradient-to-r from-purple-700 to-purple-400",
      textColor: "text-purple-600",
      buttonText: "Order Now",
      image: "/free.png",
    },
    {
      title: "Coupon Saving",
      subtitle: "Up to 40% off everyday essentials",
      bgColor: "bg-gradient-to-r from-yellow-700 to-yellow-400",
      textColor: "text-yellow-600",
      buttonText: "Get Coupons",
      image: "/coupon.webp",
    },
  ];

  const CardSection: React.FC = () => {
    const [startIndex, setStartIndex] = useState(0);

    const handleNext = () => {
      setStartIndex((prevIndex) =>
        prevIndex + 3 < cards.length ? prevIndex + 3 : 0
      );
    };

    const handlePrevious = () => {
      setStartIndex((prevIndex) =>
        prevIndex - 3 >= 0 ? prevIndex - 3 : cards.length - 3
      );
    };

    return (
      <div className="flex flex-col items-center py-10">
        <div className="flex items-center space-x-6">
          {/* Left Arrow */}
          <button
            onClick={handlePrevious}
            className="p-3 bg-gray-200 rounded-full hover:bg-gray-300"
          >
            <ArrowLeftIcon className="w-10 h-10 text-gray-700" />
          </button>

          {/* Card Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 overflow-hidden w-full max-w-7xl">
            {cards.slice(startIndex, startIndex + 3).map((card, index) => (
              <div
                key={index}
                className={`flex flex-col justify-between w-full h-auto p-6 rounded-2xl shadow-2xl ${card.bgColor} text-white`}
                onContextMenu={
                  card.preventRightClick
                    ? (e: React.MouseEvent<HTMLDivElement>) => {
                        e.preventDefault(); // Prevent default right-click menu
                      }
                    : undefined
                }
              >
                <div className="flex flex-col items-center">
                  <h2 className="text-xl md:text-2xl font-semibold">{card.title}</h2>
                  <p className="text-sm md:text-base">{card.subtitle}</p>
                </div>
                <img src={card.image} alt={card.title} className="w-24 h-24 md:w-32 md:h-32 mt-4" />
                <button
                  className={`mt-4 bg-white ${card.textColor} font-semibold py-2 px-4 rounded-full`}
                >
                  {card.buttonText}
                </button>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="p-3 bg-gray-200 rounded-full hover:bg-gray-300"
          >
            <ArrowRightIcon className="w-10 h-10 text-gray-700" />
          </button>
        </div>
      </div>
    );
  };

  export default CardSection;

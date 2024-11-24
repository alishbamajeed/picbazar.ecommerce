"use client";

import React from "react";
import { useDispatch } from "react-redux";
import { incrementCart } from "../redux/store";

interface CardProps {
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ title, description }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(incrementCart());
  };

  return (
    <div className="border p-4 rounded-md shadow-md hover:shadow-lg transition">
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-gray-600">{description}</p>
      <button
        onClick={handleAddToCart}
        className="bg-green-600 text-white font-semibold py-1 px-3 rounded-md hover:bg-green-700 mt-2"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Card;

import React from "react";

const groceryCategories = [
  {
    name: "Fruits & Vegetables",
    items: ["Apples", "Bananas", "Tomatoes", "Potatoes"],
    icon: "🍎",
    bgColor: "bg-green-100",
  },
  {
    name: "Dairy Products",
    items: ["Milk", "Cheese", "Butter", "Yogurt"],
    icon: "🥛",
    bgColor: "bg-blue-100",
  },
  {
    name: "Bakery & Snacks",
    items: ["Bread", "Cookies", "Chips", "Cakes"],
    icon: "🥨",
    bgColor: "bg-yellow-100",
  },
  {
    name: "Beverages",
    items: ["Tea", "Coffee", "Juices", "Sodas"],
    icon: "☕",
    bgColor: "bg-red-100",
  },
  {
    name: "Pantry Essentials",
    items: ["Rice", "Flour", "Pasta", "Cooking Oils"],
    icon: "🍚",
    bgColor: "bg-orange-100",
  },
];

const GroceryCategories: React.FC = () => {
  return (












    <div className="p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl shadow-lg">
      <h2 className="text-3xl font-bold text-blue-800 mb-6 text-center">
        <span className="mr-2">🛒</span>
        Grocery Categories
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {groceryCategories.map((category, index) => (
          <div
            key={index}
            className={`${category.bgColor} p-4 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}
          >
            <div className="flex items-center mb-3">
              <span className="text-2xl mr-2">{category.icon}</span>
              <h3 className="text-xl font-bold text-gray-800">{category.name}</h3>
            </div>
            <ul className="space-y-2">
              {category.items.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-center text-gray-700 hover:text-gray-900 transition-colors duration-200"
                >
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};


export default GroceryCategories;
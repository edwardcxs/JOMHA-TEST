import React, { useState } from 'react';
import { ChevronLeft } from 'lucide-react';
import { cn } from "../lib/utils";

interface FullMenuProps {
  onBack: () => void;
}

const menuCategories = [
  {
    name: "STARTER VEG",
    items: ["Gobi Pakoda", "Ragi Veg Manchurian", "Mushroom Pakoda", "Paneer Pakoda", "Mushroom Chilly", "Paneer Chilly", "Corn Chat"]
  },
  {
    name: "STARTER NON VEG",
    items: ["Chicken Pakoda", "Chicken Chilly", "Chicken 65", "Garlic Chicken", "Chicken Ghee Fry"]
  },
  {
    name: "INDIAN BREAD",
    items: ["Tawa Roti", "Plain Papad", "Masala Papad", "Ragi Roti", "Plain Paratha", "Desi Ghee Ka Paratha"]
  },
  {
    name: "GREENS",
    items: ["Hara Bhara Salad", "Onion Salad"]
  },
  {
    name: "VEG MAIN COURSE",
    items: ["Mix Veg", "Matar Paneer Special", "Paneer Masala", "Mushroom Masala", "Aaloo Patal Curry", "Aaloo Gabi Ki Sabji", "Paneer Butter Masala", "Paneer Bharta", "Paneer Do Pyaza", "Mushroom Do Pyaza", "Veg Jhal Fry", "Aloo Patal Korma"]
  },
  {
    name: "NON-VEG MAIN COURSE",
    items: ["Chicken Biryani", "Mutton Biryani"]
  },
  {
    name: "RICE",
    items: ["Plain Rice", "Jira Rice", "Fried Rice", "Green Peas Rice", "Red Rice"]
  },
  {
    name: "CURRY",
    items: ["Egg Curry", "Fish Curry", "Chicken Curry", "Mutton Curry", "Dal Fry", "Tadka"]
  },
  {
    name: "THALI",
    items: ["Veg Thali", "Egg Thali", "Fish Thali", "Chicken Thali", "Mutton Thali"]
  },
  {
    name: "BEVERAGES",
    items: ["Ice Tea", "Regular Tea", "Coffee", "Chocolate Coffee", "Masala Cold Drink", "Plain Lassi", "Mango Lassi", "Lichi Lassi", "Virgin Mojito", "Blue Lagoon", "Chaass", "Madhwa Shake"]
  },
  {
    name: "DESSERT",
    items: ["Red Rice Kheer", "Gulab Jamoon", "Madhwa Laddu"]
  },
  {
    name: "JOMHA SPECIAL",
    items: ["Seasonal Saag", "Sukka Sasa Gravy", "Sodeh Mandi Veg", "Sode Mandi Non-Veg", "Live Masala", "Jil Pitra Pathal", "Bamboo Chicken Biryani", "Bamboo Mutton Biryani", "Bamboo Mutton", "Mutton Curry", "Desi Chicken", "Chicken Curry", "Mutton Curry", "Veg Biryani", "Prawn Masala", "Autum Paya", "Mudi Mansa"]
  },
  {
    name: "JOMHA HANDI SPECIAL",
    items: ["Handi Veg Biryani", "Handi Chicken", "Handi Mutton", "Handi Chicken Biryani", "Handi Mutton Biryani", "Desi Chicken Handi", "Handi Paneer Masala"]
  },
  {
    name: "JOMHA PATRA PODA",
    items: ["Chicken Patra Poda", "Fish Patra Poda", "Mushroom Patrapoda", "Paneer Patra Poda"]
  }
];

export default function FullMenu({ onBack }: FullMenuProps) {
  const [activeCategory, setActiveCategory] = useState(menuCategories[0].name);

  return (
    <div className="min-h-screen bg-white pt-20 md:pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center mb-8">
            <button 
                onClick={onBack}
                className="self-start mb-6 mt-9 flex items-center gap-2 text-[#800000] font-medium hover:underline transition-all"
            >
                <ChevronLeft size={20} /> Back to Home
            </button>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 text-center">JOMHA Full Menu</h1>
            <div className="w-16 md:w-24 h-1 bg-[#800000] rounded-full"></div>
            <p className="mt-4 text-gray-600 max-w-2xl text-center text-sm md:text-base px-2">
                Explore our wide variety of dishes, from traditional tribal delicacies to classic Indian favorites.
            </p>
        </div>

        {/* Categories Nav Tab - Scrollable on Mobile */}
        <div className="bg-white border-b border-gray-100 shadow-sm mb-8 -mx-4 px-4 md:mx-0 md:px-0 md:rounded-xl sticky top-20 z-40 md:static md:z-0">
          <div className="flex flex-nowrap overflow-x-auto md:overflow-visible md:flex-wrap justify-start md:justify-center gap-2 sm:gap-3 py-4 md:py-6 no-scrollbar">
            {menuCategories.map((category) => (
              <button
                key={category.name}
                onClick={() => setActiveCategory(category.name)}
                className={cn(
                  "px-4 py-2 rounded-none text-sm font-bold transition-all duration-300 border mb-1 whitespace-nowrap flex-shrink-0",
                  activeCategory === category.name
                    ? "bg-[#800000] text-white border-[#800000] shadow-md transform scale-105"
                    : "bg-neutral-50 text-gray-600 border-gray-200 hover:bg-neutral-100 hover:text-[#800000]"
                )}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Items List */}
        <div className="max-w-4xl mx-auto animate-fade-in">
          <div className="bg-neutral-50 rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 min-h-[400px]">
            <h3 className="text-2xl font-bold text-[#800000] mb-6 pb-4 border-b border-gray-200 sticky top-0 bg-neutral-50 z-10 md:static">
                {activeCategory}
            </h3>
            
            <ul className="grid md:grid-cols-2 gap-x-12 gap-y-4">
                {menuCategories.find(c => c.name === activeCategory)?.items.map((item, index) => (
                    <li key={index} className="flex items-center justify-between group py-1 border-b border-dashed border-gray-200 md:border-0">
                        <span className="text-gray-700 font-medium text-base md:text-lg group-hover:text-[#800000] transition-colors duration-200">
                            {item}
                        </span>
                        <div className="hidden md:block h-px flex-grow bg-gray-200 mx-4"></div>
                        <div className="hidden md:block w-2 h-2 rounded-full bg-[#800000]/20 group-hover:bg-[#800000] transition-colors duration-200"></div>
                    </li>
                ))}
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
}
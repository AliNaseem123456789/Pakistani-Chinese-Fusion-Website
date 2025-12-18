import { useState } from 'react';
import { Flame } from 'lucide-react';

export function Menu() {
  const [activeCategory, setActiveCategory] = useState('fusion');

const categories = [
  { id: 'soup', name: 'Soups' },
  { id: 'beef', name: 'Beef' },
  { id: 'seafood', name: 'Seafood' },
  { id: 'vegetable', name: 'Vegetables' },
  { id: 'noodles', name: 'Noodles' },
  { id: 'rice', name: 'Rice' },
  { id: 'appetizers', name: 'Starters' },
  { id: 'lunch', name: 'Lunch Specials' },
  { id: 'beverages', name: 'Beverages' }
];


 const menuItems = {
  soup: [
    { name: 'Hot & Sour Soup', desc: 'Classic spicy soup with vegetables and chicken', price: 'Rs. 350', spicy: 2 },
    { name: 'Chicken Corn Soup', desc: 'Traditional Chinese-style chicken corn soup', price: 'Rs. 300', spicy: 0 },
    { name: 'Tom Yum Soup', desc: 'Thai-inspired spicy and sour soup with seafood', price: 'Rs. 450', spicy: 3 }
  ],

  beef: [
    { name: 'Beef Chilli Dry', desc: 'Wok-fried beef with chilies and soy sauce', price: 'Rs. 950', spicy: 3 },
    { name: 'Beef Manchurian', desc: 'Crispy beef tossed in tangy Manchurian sauce', price: 'Rs. 900', spicy: 2 },
    { name: 'Szechuan Beef', desc: 'Tender beef cooked with Szechuan peppers', price: 'Rs. 1,050', spicy: 3 }
  ],

  seafood: [
    { name: 'Fish Manchurian', desc: 'Crispy fish in classic Manchurian sauce', price: 'Rs. 850', spicy: 2 },
    { name: 'Prawn Chilli', desc: 'Juicy prawns stir-fried with green chilies', price: 'Rs. 1,100', spicy: 3 },
    { name: 'Garlic Butter Fish', desc: 'Pan-fried fish in garlic butter sauce', price: 'Rs. 900', spicy: 1 }
  ],

  vegetable: [
    { name: 'Vegetable Manchurian', desc: 'Mixed vegetable balls in tangy sauce', price: 'Rs. 600', spicy: 2 },
    { name: 'Chilli Paneer', desc: 'Paneer cubes tossed in spicy chilli sauce', price: 'Rs. 750', spicy: 2 },
    { name: 'Stir Fried Vegetables', desc: 'Seasonal vegetables stir-fried in soy sauce', price: 'Rs. 550', spicy: 1 }
  ],

  noodles: [
    { name: 'Chicken Chow Mein', desc: 'Stir-fried noodles with chicken and vegetables', price: 'Rs. 700', spicy: 1 },
    { name: 'Vegetable Hakka Noodles', desc: 'Classic Chinese hakka noodles', price: 'Rs. 650', spicy: 1 },
    { name: 'Spicy Garlic Noodles', desc: 'Noodles tossed in garlic chilli oil', price: 'Rs. 750', spicy: 3 }
  ],

  rice: [
    { name: 'Egg Fried Rice', desc: 'Wok-fried rice with egg and soy sauce', price: 'Rs. 550', spicy: 0 },
    { name: 'Chicken Fried Rice', desc: 'Fried rice with chicken and vegetables', price: 'Rs. 650', spicy: 1 },
    { name: 'Special Chinese Rice', desc: 'Rice topped with chicken, egg, and sauces', price: 'Rs. 850', spicy: 2 }
  ],

  appetizers: [
    { name: 'Spring Rolls', desc: 'Crispy rolls stuffed with vegetables', price: 'Rs. 350', spicy: 1 },
    { name: 'Chicken 65', desc: 'Deep-fried spicy chicken bites', price: 'Rs. 500', spicy: 2 },
    { name: 'Dynamite Shrimp', desc: 'Crispy shrimp in spicy mayo sauce', price: 'Rs. 850', spicy: 2 }
  ],

  lunch: [
    { name: 'Lunch Combo 1', desc: 'Chicken Manchurian + Fried Rice + Drink', price: 'Rs. 750', spicy: 2 },
    { name: 'Lunch Combo 2', desc: 'Beef Chilli + Egg Fried Rice + Soup', price: 'Rs. 850', spicy: 2 },
    { name: 'Lunch Combo Veg', desc: 'Vegetable Manchurian + Veg Rice', price: 'Rs. 650', spicy: 1 }
  ],

  beverages: [
    { name: 'Mango Lassi', desc: 'Refreshing yogurt mango drink', price: 'Rs. 250', spicy: 0 },
    { name: 'Fresh Lime Soda', desc: 'Lime with soda water', price: 'Rs. 180', spicy: 0 },
    { name: 'Jasmine Tea', desc: 'Fragrant Chinese tea', price: 'Rs. 150', spicy: 0 }
  ]
};


  const renderSpiceLevel = (level: number) => {
    return (
      <div className="flex gap-1">
        {[...Array(3)].map((_, i) => (
          <Flame
            key={i}
            size={14}
            className={i < level ? 'text-red-500 fill-red-500' : 'text-gray-300'}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-emerald-900 via-red-900 to-amber-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl mb-4">Our Menu</h1>
          <p className="text-xl text-amber-200">A culinary journey between Pakistan and China</p>
        </div>
      </section>

      {/* Menu Categories */}
      <div className="sticky top-20 bg-white shadow-md z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto py-4 gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`whitespace-nowrap px-6 py-2 rounded-full transition-colors ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-emerald-600 to-amber-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Menu Items */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {menuItems[activeCategory as keyof typeof menuItems].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl flex-1">{item.name}</h3>
                  <span className="text-amber-600 ml-4">{item.price}</span>
                </div>
                <p className="text-gray-600 mb-3">{item.desc}</p>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-500">Spice Level:</span>
                  {renderSpiceLevel(item.spicy)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Note */}
      <section className="py-8 bg-amber-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-gray-700">
            <strong>Note:</strong> All dishes can be customized to your preferred spice level. 
            Please inform our staff of any dietary restrictions or allergies.
          </p>
        </div>
      </section>
    </div>
  );
}



  soup
beef
seafood
vegetable
noodles
rice
beverages
appetizers(starter)
lunch 
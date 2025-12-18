import { Link } from 'react-router-dom';
import { ChefHat, Star, Clock, Award } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Home() {
  const featuredDishes = [
    {
      name: 'Szechuan Biryani',
      description: 'Fragrant basmati rice with Szechuan spices and tender meat',
      image: 'https://images.unsplash.com/photo-1666190092689-e3968aa0c32c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWtpc3RhbmklMjBmb29kJTIwYmlyeWFuaXxlbnwxfHx8fDE3NjU4OTU3NDd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      price: 'Rs. 850'
    },
    {
      name: 'Manchurian Kebabs',
      description: 'Grilled kebabs with a tangy Manchurian glaze',
      image: 'https://images.unsplash.com/photo-1557105584-b2d9b0b266f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmlsbGVkJTIwa2ViYWJ8ZW58MXx8fHwxNzY1ODk1NzQ5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      price: 'Rs. 650'
    },
    {
      name: 'Chilli Karahi',
      description: 'Traditional karahi with Chinese chilli oil and vegetables',
      image: 'https://images.unsplash.com/photo-1512314775505-50662bcee277?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGljeSUyMGFzaWFuJTIwZm9vZHxlbnwxfHx8fDE3NjU4OTU3NDd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      price: 'Rs. 950'
    }
  ];

  const features = [
    {
      icon: <ChefHat className="w-12 h-12 text-amber-500" />,
      title: 'Expert Chefs',
      description: 'Masters of both Pakistani and Chinese cuisine'
    },
    {
      icon: <Star className="w-12 h-12 text-amber-500" />,
      title: 'Premium Quality',
      description: 'Only the finest ingredients and spices'
    },
    {
      icon: <Clock className="w-12 h-12 text-amber-500" />,
      title: 'Fast Delivery',
      description: 'Hot and fresh to your doorstep'
    },
    {
      icon: <Award className="w-12 h-12 text-amber-500" />,
      title: 'Award Winning',
      description: 'Recognized for culinary excellence'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/90 via-red-900/90 to-amber-900/90 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1739248047812-cf898eb58786?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwaW50ZXJpb3IlMjBkaW5pbmd8ZW58MXx8fHwxNzY1Nzk4NDk1fDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Restaurant interior"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl mb-6">
            <span className="block">Silk & Spice</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-amber-200">
            Where Pakistani Tradition Meets Chinese Innovation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/menu"
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg transition-colors inline-block"
            >
              View Our Menu
            </Link>
            <Link
              to="/contact"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-3 rounded-lg transition-colors inline-block"
            >
              Reserve a Table
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Dishes */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">Featured Fusion Dishes</h2>
            <p className="text-gray-600">Discover our signature creations that blend two culinary worlds</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredDishes.map((dish, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="h-64 overflow-hidden">
                  <ImageWithFallback
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl mb-2">{dish.name}</h3>
                  <p className="text-gray-600 mb-4">{dish.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-amber-600">{dish.price}</span>
                    <Link
                      to="/menu"
                      className="text-emerald-700 hover:text-emerald-900 transition-colors"
                    >
                      View Details →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">Why Choose Silk & Spice</h2>
            <p className="text-gray-600">Experience the best of both culinary traditions</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 hover:bg-gray-50 rounded-lg transition-colors">
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-emerald-900 via-red-900 to-amber-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl mb-6">Ready to Experience the Fusion?</h2>
          <p className="text-xl mb-8 text-amber-200">
            Join us for an unforgettable dining experience where East meets East in perfect harmony
          </p>
          <Link
            to="/contact"
            className="bg-white text-gray-900 hover:bg-amber-100 px-8 py-3 rounded-lg transition-colors inline-block"
          >
            Book Your Table Now
          </Link>
        </div>
      </section>
    </div>
  );
}

import { Users, Heart, Award, Globe } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function About() {
  const values = [
    {
      icon: <Heart className="w-12 h-12 text-red-600" />,
      title: 'Passion',
      description: 'We pour our hearts into every dish, combining love for both cuisines'
    },
    {
      icon: <Award className="w-12 h-12 text-amber-600" />,
      title: 'Quality',
      description: 'Only the finest ingredients and authentic spices make it to our kitchen'
    },
    {
      icon: <Users className="w-12 h-12 text-emerald-600" />,
      title: 'Community',
      description: 'Bringing people together through the universal language of food'
    },
    {
      icon: <Globe className="w-12 h-12 text-blue-600" />,
      title: 'Innovation',
      description: 'Constantly creating new fusion dishes that honor both traditions'
    }
  ];

  const team = [
    {
      name: 'Chef Ahmed Khan',
      role: 'Head Chef - Pakistani Cuisine',
      image: 'https://images.unsplash.com/photo-1583394293214-28ded15ee548?w=400&h=400&fit=crop',
      bio: '15 years of experience in traditional Pakistani cooking'
    },
    {
      name: 'Chef Li Wei',
      role: 'Head Chef - Chinese Cuisine',
      image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=400&h=400&fit=crop',
      bio: 'Master of Szechuan and Cantonese cooking techniques'
    },
    {
      name: 'Sarah Rahman',
      role: 'Executive Chef',
      image: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&h=400&fit=crop',
      bio: 'Visionary behind our fusion menu creations'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-r from-emerald-900 via-red-900 to-amber-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl mb-4">Our Story</h1>
          <p className="text-xl text-amber-200">Where two rich culinary traditions become one</p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-6">
              Silk & Spice was born from a simple yet profound idea: what if we could celebrate 
              the incredible flavors of Pakistan and China in one harmonious dining experience? 
              Founded in 2020, our restaurant has become a beloved destination for food enthusiasts 
              seeking something truly unique.
            </p>
            <p className="text-gray-700 mb-6">
              Our journey began when Chef Ahmed Khan, a master of Pakistani cuisine, and Chef Li Wei, 
              an expert in Chinese culinary arts, met at an international food festival. They discovered 
              that despite coming from different cultures, they shared a common passion: creating food 
              that brings people together and tells a story.
            </p>
            <p className="text-gray-700 mb-6">
              Today, Silk & Spice stands as a testament to the beauty of culinary fusion. We honor 
              the authentic traditions of both cuisines while fearlessly exploring new flavor combinations. 
              Each dish on our menu is carefully crafted to respect its cultural roots while surprising 
              your palate with unexpected delights.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md">
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-xl mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl text-center mb-4">Meet Our Chefs</h2>
          <p className="text-center text-gray-600 mb-12">
            The talented team behind your favorite fusion dishes
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="mb-4 overflow-hidden rounded-full w-48 h-48 mx-auto">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl mb-1">{member.name}</h3>
                <p className="text-amber-600 mb-3">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 bg-gradient-to-r from-emerald-900 via-red-900 to-amber-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl mb-6">Our Philosophy</h2>
          <p className="text-xl text-amber-200 mb-6">
            "Food is not just sustenance; it's a bridge between cultures, a celebration of diversity, 
            and a testament to human creativity. At Silk & Spice, we believe that the best flavors 
            emerge when traditions meet innovation."
          </p>
          <p className="text-lg">
            We source our ingredients locally whenever possible, support sustainable farming practices, 
            and work closely with family-owned spice merchants from both Pakistan and China to ensure 
            authenticity in every bite.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl text-center mb-12">Our Journey</h2>
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="text-amber-600 min-w-[100px]">2020</div>
              <div>
                <h3 className="text-xl mb-2">The Beginning</h3>
                <p className="text-gray-600">Silk & Spice opens its doors in Karachi with a vision to blend two great cuisines</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="text-amber-600 min-w-[100px]">2021</div>
              <div>
                <h3 className="text-xl mb-2">Growing Recognition</h3>
                <p className="text-gray-600">Featured in Pakistan's top food magazines and blogs</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="text-amber-600 min-w-[100px]">2023</div>
              <div>
                <h3 className="text-xl mb-2">Award Winner</h3>
                <p className="text-gray-600">Received "Best Fusion Restaurant" award from Pakistan Culinary Association</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="text-amber-600 min-w-[100px]">2024</div>
              <div>
                <h3 className="text-xl mb-2">Expansion</h3>
                <p className="text-gray-600">Opened second location in Lahore, bringing fusion cuisine to more food lovers</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="text-amber-600 min-w-[100px]">2025</div>
              <div>
                <h3 className="text-xl mb-2">Looking Forward</h3>
                <p className="text-gray-600">Continuing to innovate and create unforgettable dining experiences</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

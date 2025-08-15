'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Search, MapPin, Home, Building, Car, Bed, Bath, Square, Star, ArrowRight, Phone, Mail, Calendar, Users, Award, Globe } from 'lucide-react';

export default function HomePage() {
  const router = useRouter();
  const [searchType, setSearchType] = useState<'residential' | 'commercial' | 'development'>('residential');
  const [location, setLocation] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [priceRange, setPriceRange] = useState([0, 30000000]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (location) params.append('location', location);
    if (propertyType) params.append('type', propertyType);
    params.append('for', searchType);
    router.push(`/search?${params.toString()}`);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  // Featured properties for carousel
  const featuredProperties = [
    {
      id: '1',
      title: 'Ocean front/Amazing 430 hectares for development',
      price: 28000000,
      location: 'Guanacaste, Costa Rica',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
      type: 'Development',
      status: 'Available'
    },
    {
      id: '2',
      title: 'Pineapple farm Amazing 555 acres investment opportunity',
      price: 4550000,
      location: 'San Carlos, Costa Rica',
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop',
      type: 'Commercial',
      status: 'Available'
    },
    {
      id: '3',
      title: 'Ocean View Property! Amazingly Gorgeous 133 hectares',
      price: 3000000,
      location: 'Jaco Beach, Puntarenas, Costa Rica',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
      type: 'Residential',
      status: 'Available'
    }
  ];

  // Location guides
  const locationGuides = [
    {
      name: 'Guanacaste',
      description: 'The best real estate opportunities in Guanacaste, Costa Rica',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
      properties: 45
    },
    {
      name: 'Central Pacific',
      description: 'The best real estate opportunities in Central Pacific, Costa Rica',
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop',
      properties: 32
    },
    {
      name: 'San Carlos',
      description: 'The best real estate opportunities in San Carlos, Costa Rica',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
      properties: 28
    },
    {
      name: 'Jaco Beach',
      description: 'The best real estate opportunities in Jaco Beach, Costa Rica',
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop',
      properties: 15
    }
  ];

  // Testimonials
  const testimonials = [
    {
      name: 'Zak Alaoui',
      country: 'From Morocco',
      text: 'This experience started with Kate Goucher and ended with João Bosco. It was smooth, efficient and professional.',
      rating: 5
    },
    {
      name: 'Irene Babille',
      country: 'From Kenya',
      text: 'The LandEstate Pro team is very available, helpful and keen to assist and provide additional follow up information.',
      rating: 5
    },
    {
      name: 'Mike Porcaro',
      country: 'From United Kingdom',
      text: 'Extremely hard working professionals investing in educating their clients on a complex market.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <a href="/" className="flex items-center hover:opacity-80 transition-opacity">
                <Home className="h-8 w-8 text-blue-600" />
                <span className="ml-2 text-xl font-bold text-gray-900">LandEstate Pro</span>
              </a>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="/search?for=residential" className="text-gray-700 hover:text-blue-600 transition-colors">Residential</a>
              <a href="/search?for=commercial" className="text-gray-700 hover:text-blue-600 transition-colors">Commercial</a>
              <a href="/search?for=development" className="text-gray-700 hover:text-blue-600 transition-colors">Development</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Services</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
            </nav>
            <div className="flex items-center space-x-4">
              <a href="/admin" className="text-gray-700 hover:text-blue-600 transition-colors">Admin</a>
              <button className="text-gray-700 hover:text-blue-600 transition-colors">Sign In</button>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 via-purple-900 to-blue-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Best real estate agents in Costa Rica
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-8">
              Get the best property advice & safely invest your money in real estate
            </h2>
          </div>

          {/* Search Form */}
          <div className="bg-white rounded-xl shadow-2xl p-8 max-w-6xl mx-auto">
            <form onSubmit={handleSearch} className="space-y-6">
              {/* Property Type Tabs */}
              <div className="flex bg-gray-100 rounded-lg p-1">
                <button
                  type="button"
                  onClick={() => setSearchType('residential')}
                  className={`flex-1 py-3 px-6 rounded-md text-sm font-medium transition-colors ${
                    searchType === 'residential'
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Residential
                </button>
                <button
                  type="button"
                  onClick={() => setSearchType('commercial')}
                  className={`flex-1 py-3 px-6 rounded-md text-sm font-medium transition-colors ${
                    searchType === 'commercial'
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Commercial
                </button>
                <button
                  type="button"
                  onClick={() => setSearchType('development')}
                  className={`flex-1 py-3 px-6 rounded-md text-sm font-medium transition-colors ${
                    searchType === 'development'
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Development
                </button>
              </div>

              {/* Search Fields */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="text"
                    placeholder="Location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div className="relative">
                  <select
                    value={propertyType}
                    onChange={(e) => setPropertyType(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Property Type</option>
                    <option value="farmland">Farmland</option>
                    <option value="ranch">Cattle Ranch</option>
                    <option value="commercial-land">Development Land</option>
                    <option value="recreational-land">Recreational Land</option>
                    <option value="ocean-view">Ocean View</option>
                    <option value="pineapple-farm">Pineapple Farm</option>
                    <option value="teak-plantation">Teak Plantation</option>
                  </select>
                </div>
                <div className="relative">
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option value="">Price Range</option>
                    <option value="0-500000">$0 - $500,000</option>
                    <option value="500000-1000000">$500,000 - $1,000,000</option>
                    <option value="1000000-5000000">$1,000,000 - $5,000,000</option>
                    <option value="5000000+">$5,000,000+</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center font-semibold"
                >
                  <Search className="mr-2 h-5 w-5" />
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Property Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Find your dream property in Costa Rica
            </h2>
            <p className="text-xl text-gray-600">
              Unique properties, solid investments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-sm p-8 text-center hover:shadow-md transition-shadow">
              <Building className="h-16 w-16 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Residential</h3>
              <p className="text-gray-600 mb-4">Find your perfect home in Costa Rica</p>
              <a href="/search?for=residential" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium">
                Browse Properties <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-8 text-center hover:shadow-md transition-shadow">
              <Car className="h-16 w-16 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Commercial</h3>
              <p className="text-gray-600 mb-4">Investment opportunities for businesses</p>
              <a href="/search?for=commercial" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium">
                Browse Properties <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-8 text-center hover:shadow-md transition-shadow">
              <Globe className="h-16 w-16 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Development</h3>
              <p className="text-gray-600 mb-4">Large-scale development projects</p>
              <a href="/search?for=development" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium">
                Browse Properties <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Properties
            </h2>
            <p className="text-xl text-gray-600">
              Discover our handpicked selection of premium properties
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProperties.map((property) => (
              <div key={property.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <div className="relative">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                      {property.status}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                      {property.type}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                    {property.title}
                  </h3>
                  <p className="text-2xl font-bold text-blue-600 mb-2">
                    {formatPrice(property.price)}
                  </p>
                  <p className="text-gray-600 mb-4 flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    {property.location}
                  </p>
                  <a
                    href={`/properties/${property.id}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                  >
                    View Details <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Guides */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Explore Costa Rica
            </h2>
            <p className="text-xl text-gray-600">
              Find your dream property in the most sought-after locations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {locationGuides.map((location, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <img
                  src={location.image}
                  alt={location.name}
                  className="w-full h-32 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {location.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">
                    {location.description}
                  </p>
                  <p className="text-sm text-blue-600 font-medium">
                    {location.properties} properties available
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why LandEstate Pro
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Internationally renowned for expert real estate advisory services and exclusive property investment opportunities in prime areas of Costa Rica.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Award className="h-16 w-16 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Advisors</h3>
              <p className="text-gray-600">
                Our top-level real estate agents curate the perfect properties, ensuring our clients' wants & needs are beyond the norms of a real estate agency.
              </p>
            </div>
            <div className="text-center">
              <Users className="h-16 w-16 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Full Service</h3>
              <p className="text-gray-600">
                Our specialized staff will look after all your demands, offering support before, during, and after your property purchase.
              </p>
            </div>
            <div className="text-center">
              <Globe className="h-16 w-16 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Local Expertise</h3>
              <p className="text-gray-600">
                Extensive knowledge of Costa Rican real estate market, zoning laws, and investment opportunities that set us apart.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What our clients say about us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.country}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News & Media */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              News & Media
            </h2>
            <p className="text-xl text-gray-600">
              Latest updates about real estate in Costa Rica
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-6">
                <span className="text-sm text-blue-600 font-medium">NEWS</span>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 mt-2">
                  Investing in Costa Rica Real Estate in 2025
                </h3>
                <p className="text-gray-600 mb-4">
                  Costa Rica's real estate investment market attracts astute investors with its compelling blend of affordability, steady growth, and strategic location.
                </p>
                <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
                  Read More <ArrowRight className="inline ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-6">
                <span className="text-sm text-blue-600 font-medium">NEWS</span>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 mt-2">
                  Costa Rica Golden Visa Program
                </h3>
                <p className="text-gray-600 mb-4">
                  Learn about Costa Rica's residency by investment program and how it can benefit foreign investors looking to establish roots in paradise.
                </p>
                <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
                  Read More <ArrowRight className="inline ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-6">
                <span className="text-sm text-blue-600 font-medium">NEWS</span>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 mt-2">
                  Sustainable Development in Costa Rica
                </h3>
                <p className="text-gray-600 mb-4">
                  Discover how Costa Rica leads the way in sustainable real estate development and eco-friendly property investments.
                </p>
                <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
                  Read More <ArrowRight className="inline ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get in touch with us
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            We will get back to you in an instant. Let us help you find your perfect property in Costa Rica.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Contact Us
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Book a Meeting
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Home className="h-6 w-6 text-blue-400" />
                <span className="ml-2 text-lg font-bold">LandEstate Pro</span>
              </div>
              <p className="text-gray-400 mb-4">
                Your trusted partner in Costa Rican real estate transactions. We specialize in connecting buyers with premium property opportunities in paradise.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Phone className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Property Types</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Residential</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Commercial</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Development</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Popular Locations</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Guanacaste</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Central Pacific</a></li>
                <li><a href="#" className="hover:text-white transition-colors">San Carlos</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Jaco Beach</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Property Management</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Legal Services</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Investment Advisory</a></li>
                <li><a href="#" className="hover:text-white transition-colors">After Sales Support</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 LandEstate Pro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

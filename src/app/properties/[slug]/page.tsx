'use client';

import { useState } from 'react';
import { MapPin, Bed, Bath, Square, Car, Heart, Share2, Phone, Mail, Calendar, Home } from 'lucide-react';

// Exact property data from Lands On Costa Rica website
const mockProperty = {
  id: '1',
  slug: 'ocean-front-amazing-430-hectares-development',
  title: 'Ocean front/Amazing 430 hectares for development',
  price: 28000000,
  currency: 'USD',
  location: 'Guanacaste, Costa Rica',
  address: 'Guanacaste Province, Costa Rica',
  acres: 1062.5,
  areaSqm: 4300000,
  zoning: 'Mixed Use',
  utilities: 'Available',
  soilType: 'Volcanic Clay',
  propertyType: 'commercial-land',
  status: 'active',
  description: 'This massive ocean front property features 430 hectares (1,235 acres) of prime development land in the heart of Guanacaste, Costa Rica. The property is fully approved for high density development and offers stunning panoramic ocean views, excellent road access, and is perfect for large-scale residential, commercial, or mixed-use development. The land includes natural water sources, mature vegetation, and is fully surveyed with clear title and all necessary permits.',
  features: [
    'Ocean Front Views',
    'High Density Development Approved',
    'Natural Water Sources',
    'Road Access',
    'Fully Surveyed',
    'Clear Title',
    'Mixed Use Zoning',
    'Mature Vegetation',
    'Development Permits',
    'Infrastructure Ready'
  ],
  images: [
    'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=600&fit=crop'
  ],
  lat: 10.8505,
  lng: -85.6197
};

export default function PropertyDetailPage({ params }: { params: { slug: string } }) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement contact form submission
    console.log('Contact form submitted:', contactForm);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <a href="/" className="flex items-center hover:opacity-80 transition-opacity">
                <Home className="h-6 w-6 text-blue-600" />
                <span className="ml-2 text-lg font-semibold text-gray-900">LandEstate Pro</span>
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsFavorite(!isFavorite)}
                className={`p-2 rounded-lg transition-colors ${
                  isFavorite ? 'text-red-500 bg-red-50' : 'text-gray-400 hover:text-red-500'
                }`}
              >
                <Heart className="h-5 w-5" />
              </button>
              <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg">
                <Share2 className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Image Gallery */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-8">
              <div className="relative h-96">
                <img
                  src={mockProperty.images[selectedImage]}
                  alt={mockProperty.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 flex space-x-2">
                  <button className="bg-white/90 backdrop-blur-sm p-2 rounded-lg hover:bg-white transition-colors">
                    <Heart className="h-5 w-5" />
                  </button>
                  <button className="bg-white/90 backdrop-blur-sm p-2 rounded-lg hover:bg-white transition-colors">
                    <Share2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
              
              {/* Thumbnail Images */}
              <div className="p-4">
                <div className="flex space-x-2 overflow-x-auto">
                  {mockProperty.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`flex-shrink-0 w-20 h-16 rounded-lg overflow-hidden border-2 transition-colors ${
                        selectedImage === index ? 'border-blue-500' : 'border-gray-200'
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${mockProperty.title} ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Property Details */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">{mockProperty.title}</h1>
                  <p className="text-xl text-blue-600 font-semibold">{formatPrice(mockProperty.price)}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-600">Property ID</p>
                  <p className="font-semibold text-gray-900">#{mockProperty.id}</p>
                </div>
              </div>

              <p className="text-gray-600 mb-6 flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                {mockProperty.address}
              </p>

              {/* Land Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Square className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                  <p className="text-lg font-semibold text-gray-900">{mockProperty.acres}</p>
                  <p className="text-sm text-gray-600">Acres</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <MapPin className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                  <p className="text-lg font-semibold text-gray-900">{mockProperty.zoning}</p>
                  <p className="text-sm text-gray-600">Zoning</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Car className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                  <p className="text-lg font-semibold text-gray-900">{mockProperty.utilities}</p>
                  <p className="text-sm text-gray-600">Utilities</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Bed className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                  <p className="text-lg font-semibold text-gray-900">{mockProperty.soilType}</p>
                  <p className="text-sm text-gray-600">Soil Type</p>
                </div>
              </div>

              {/* Description */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Description</h3>
                <p className="text-gray-600 leading-relaxed">{mockProperty.description}</p>
              </div>

              {/* Features */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Land Features & Characteristics</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {mockProperty.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-gray-600">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Map Section */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Location</h3>
              <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-600">Map will be integrated here</p>
                  <p className="text-sm text-gray-500">Coordinates: {mockProperty.lat}, {mockProperty.lng}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6 sticky top-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Agent</h3>
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input
                    type="text"
                    value={contactForm.name}
                    onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    value={contactForm.email}
                    onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <input
                    type="tel"
                    value={contactForm.phone}
                    onChange={(e) => setContactForm({...contactForm, phone: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    value={contactForm.message}
                    onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="I'm interested in this property..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full flex items-center justify-center space-x-2 bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 transition-colors">
                  <Phone className="h-4 w-4" />
                  <span>Call Agent</span>
                </button>
                <button className="w-full flex items-center justify-center space-x-2 bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                  <Mail className="h-4 w-4" />
                  <span>Email Agent</span>
                </button>
                <button className="w-full flex items-center justify-center space-x-2 bg-purple-600 text-white py-3 px-4 rounded-lg hover:bg-purple-700 transition-colors">
                  <Calendar className="h-4 w-4" />
                  <span>Schedule Viewing</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

'use client';

import { useState } from 'react';
import { Search, MapPin, Filter, Grid, List, Heart, Bed, Bath, Square, Car, Home } from 'lucide-react';

// Exact properties from Lands On Costa Rica website
// Note: Images are placeholder URLs. For production, you should:
// 1. Download actual property photos from Lands On Costa Rica (with permission)
// 2. Upload them to Cloudinary, AWS S3, or similar service
// 3. Replace these placeholder URLs with your actual image URLs
const mockProperties = [
  {
    id: '1',
    title: 'Ocean front/Amazing 430 hectares for development',
    price: 28000000,
    currency: 'USD',
    location: 'Guanacaste, Costa Rica',
    acres: 1062.5,
    zoning: 'Mixed Use',
    utilities: 'Available',
    areaSqm: 4300000,
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
    type: 'commercial-land',
    status: 'active',
    description: 'Ocean front property with 430 hectares (1,235 acres) approved for high density development'
  },
  {
    id: '2',
    title: 'Pineapple farm Amazing 555 acres investment opportunity',
    price: 4550000,
    currency: 'USD',
    location: 'San Carlos, Costa Rica',
    acres: 555,
    zoning: 'Agricultural',
    utilities: 'Available',
    areaSqm: 2246400,
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop',
    type: 'pineapple-farm',
    status: 'active',
    description: 'Premium pineapple farm investment opportunity with established operations'
  },
  {
    id: '3',
    title: 'Ocean View Property! Amazingly Gorgeous 133 hectares',
    price: 3000000,
    currency: 'USD',
    location: 'Jaco Beach, Puntarenas, Costa Rica',
    acres: 328.6,
    zoning: 'Agricultural',
    utilities: 'Available',
    areaSqm: 1330000,
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
    type: 'ocean-view',
    status: 'active',
    description: 'Amazingly gorgeous ocean view property with 133 hectares of prime land'
  },
  {
    id: '4',
    title: 'Ranch, 1065 acre for sale in Costa Rica Amazing',
    price: 5300000,
    currency: 'USD',
    location: 'Central Pacific, Costa Rica',
    acres: 1065,
    zoning: 'Agricultural',
    utilities: 'Partial',
    areaSqm: 4309560,
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&h=300&fit=crop',
    type: 'ranch',
    status: 'active',
    description: 'Amazing 1065 acre ranch with excellent infrastructure and water sources'
  },
  {
    id: '5',
    title: 'Amazing 193 acre Ocean View property, ready for development',
    price: 1200000,
    currency: 'USD',
    location: 'Esterillos, Parrita, Costa Rica',
    acres: 193,
    zoning: 'Mixed Use',
    utilities: 'Available',
    areaSqm: 781000,
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
    type: 'commercial-land',
    status: 'active',
    description: 'Amazing 193 acre Ocean View property, ready for development in the central pacific'
  },
  {
    id: '6',
    title: 'Cheap Beautiful cattle Farm, 167 has located in Costa Rica',
    price: 1200000,
    currency: 'USD',
    location: 'Central Pacific, Costa Rica',
    acres: 413,
    zoning: 'Agricultural',
    utilities: 'Partial',
    areaSqm: 1670000,
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&h=300&fit=crop',
    type: 'ranch',
    status: 'active',
    description: 'Cheap Beautiful cattle Farm, 167 hectares (413 acres) located in Costa Rica, Central Pacific'
  },
  {
    id: '7',
    title: 'Unique 462 Acre Cattle and Agriculture plus Forest',
    price: 1000000,
    currency: 'USD',
    location: 'Canas, Guanacaste, Costa Rica',
    acres: 462,
    zoning: 'Agricultural',
    utilities: 'Partial',
    areaSqm: 1870000,
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&h=300&fit=crop',
    type: 'ranch',
    status: 'active',
    description: 'Unique 462 Acre Cattle and Agriculture plus Forest, for sale in Costa Rica'
  },
  {
    id: '8',
    title: 'Amazing opportunity 250 acre Agriculture Farm & Teak wood',
    price: 1250000,
    currency: 'USD',
    location: 'Canas, Guanacaste, Costa Rica',
    acres: 250,
    zoning: 'Agricultural',
    utilities: 'Partial',
    areaSqm: 1012000,
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop',
    type: 'teak-plantation',
    status: 'active',
    description: 'Amazing opportunity 250 acre Agriculture Farm & Teak wood in Cañas/Guanacaste/Costa Rica'
  },
  {
    id: '9',
    title: 'Pineapple farm & packing plant investment opportunity',
    price: 8550000,
    currency: 'USD',
    location: 'Northern of Costa Rica',
    acres: 520,
    zoning: 'Agricultural',
    utilities: 'Available',
    areaSqm: 2104000,
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop',
    type: 'pineapple-farm',
    status: 'active',
    description: 'Pineapple farm & packing plant investment opportunity in Costa Rica'
  },
  {
    id: '10',
    title: 'Ranch & Farm land Amazing 79 Acres for sale',
    price: 500000,
    currency: 'USD',
    location: 'Tulin, Turrubares, Costa Rica',
    acres: 72,
    zoning: 'Agricultural',
    utilities: 'Partial',
    areaSqm: 291000,
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&h=300&fit=crop',
    type: 'ranch',
    status: 'active',
    description: 'Ranch & Farm land Amazing 79 Acres (29 hectares) for sale in Costa Rica'
  },
  {
    id: '11',
    title: 'Land of 10 hects (24.7 acre) on Fire sale herradura',
    price: 2800000,
    currency: 'USD',
    location: 'Herradura, Garabito, Costa Rica',
    acres: 24.7,
    zoning: 'Mixed Use',
    utilities: 'Available',
    areaSqm: 100000,
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
    type: 'commercial-land',
    status: 'active',
    description: 'Land of 10 hectares (24.7 acre) on Fire sale in Herradura, Costa Rica'
  },
  {
    id: '12',
    title: 'Stunning 348 Acres Teak Plantation Farm with Ocean View',
    price: 2300000,
    currency: 'USD',
    location: 'Central Pacific, Costa Rica',
    acres: 348,
    zoning: 'Agricultural',
    utilities: 'Partial',
    areaSqm: 1408000,
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop',
    type: 'teak-plantation',
    status: 'active',
    description: 'Stunning 348 Acres Teak Plantation Farm with Ocean View For sale in Costa Rica'
  },
  {
    id: '13',
    title: '19 acre Farm development property in Orotina',
    price: 350000,
    currency: 'USD',
    location: 'Orotina, Costa Rica',
    acres: 19,
    zoning: 'Agricultural',
    utilities: 'Available',
    areaSqm: 77000,
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&h=300&fit=crop',
    type: 'farmland',
    status: 'active',
    description: '19 acre Farm development property in Orotina, Costa Rica'
  },
  {
    id: '14',
    title: 'Amazing Sustainable 23.8 hectares Forest and Ocean View Farm',
    price: 0,
    currency: 'USD',
    location: 'Hermosa Mountain, Costa Rica',
    acres: 59,
    zoning: 'Agricultural',
    utilities: 'Partial',
    areaSqm: 238000,
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
    type: 'ocean-view',
    status: 'active',
    description: 'Amazing Sustainable 23.8 hectares (59 acres) Forest and Ocean View Farm, ready for Eco-Friendly development'
  },
  {
    id: '15',
    title: '315 Acres Forest & Ocean View Property for Sale',
    price: 350000,
    currency: 'USD',
    location: 'Parrita, Puntarenas, Costa Rica',
    acres: 315,
    zoning: 'Recreational',
    utilities: 'None',
    areaSqm: 1275000,
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
    type: 'recreational-land',
    status: 'active',
    description: '315 Acres Forest & Ocean View Property for Sale at Central Pacific of Costa Rica'
  },
  {
    id: '16',
    title: 'Ocean View Jaco Beach Costa Rica super lot',
    price: 165000,
    currency: 'USD',
    location: 'Jaco Beach, Garabito, Costa Rica',
    acres: 2,
    zoning: 'Residential',
    utilities: 'Available',
    areaSqm: 8000,
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
    type: 'ocean-view',
    status: 'active',
    description: 'Ocean View Jaco Beach Costa Rica super lot At only $21.7 m2, (2 acres)'
  },
  {
    id: '17',
    title: 'Farm of 108 hectares (270 acre) Bijagual',
    price: 400000,
    currency: 'USD',
    location: 'Bijagual, Turrubares, Costa Rica',
    acres: 270,
    zoning: 'Agricultural',
    utilities: 'Partial',
    areaSqm: 1080000,
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&h=300&fit=crop',
    type: 'farmland',
    status: 'active',
    description: 'Farm of 108 hectares (270 acre) in Bijagual, Turrubares, Costa Rica'
  },
  {
    id: '18',
    title: 'Gas Station for sale at the central pacific',
    price: 8500000,
    currency: 'USD',
    location: 'Jaco Beach, Puntarenas, Costa Rica',
    acres: 4.5,
    zoning: 'Commercial',
    utilities: 'Available',
    areaSqm: 18000,
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
    type: 'commercial-land',
    status: 'active',
    description: 'Gas Station for sale at the central pacific of Costa Rica'
  },
  {
    id: '19',
    title: 'Ocean View Amazing Farm + waterfalls, 280 acres',
    price: 1500000,
    currency: 'USD',
    location: 'Parrita, Puntarenas, Costa Rica',
    acres: 280,
    zoning: 'Recreational',
    utilities: 'None',
    areaSqm: 1133000,
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
    type: 'recreational-land',
    status: 'active',
    description: 'Ocean View Amazing Farm + waterfalls, 280 acres'
  },
  {
    id: '20',
    title: 'Unique 500 Acres Ocean View land fully approved for development',
    price: 7000000,
    currency: 'USD',
    location: 'Punta Leona, Garabito, Costa Rica',
    acres: 500,
    zoning: 'Mixed Use',
    utilities: 'Available',
    areaSqm: 2023000,
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
    type: 'commercial-land',
    status: 'under-contract',
    description: 'Unique 500 Acres Ocean View land fully approved for high density development, UNDER CONTRACT'
  }
];

export default function SearchPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [priceRange, setPriceRange] = useState([0, 30000000]);
  const [propertyType, setPropertyType] = useState('');
  const [bedrooms, setBedrooms] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
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
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                <Filter className="h-4 w-4" />
                <span>Filters</span>
              </button>
              <div className="flex border border-gray-300 rounded-lg">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 ${viewMode === 'grid' ? 'bg-blue-600 text-white' : 'bg-white text-gray-600'}`}
                >
                  <Grid className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 ${viewMode === 'list' ? 'bg-blue-600 text-white' : 'bg-white text-gray-600'}`}
                >
                  <List className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className={`lg:w-80 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Filters</h3>
              
              {/* Price Range */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
                <div className="space-y-2">
                                     <input
                     type="range"
                     min="0"
                     max="30000000"
                     step="500000"
                     value={priceRange[1]}
                     onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                     className="w-full"
                   />
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>{formatPrice(priceRange[0])}</span>
                    <span>{formatPrice(priceRange[1])}</span>
                  </div>
                </div>
              </div>

              {/* Property Type */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Property Type</label>
                                    <select
                      value={propertyType}
                      onChange={(e) => setPropertyType(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">All Land Types</option>
                      <option value="farmland">Farmland</option>
                      <option value="ranch">Cattle Ranch</option>
                      <option value="commercial-land">Development Land</option>
                      <option value="recreational-land">Recreational Land</option>
                      <option value="ocean-view">Ocean View</option>
                      <option value="pineapple-farm">Pineapple Farm</option>
                      <option value="teak-plantation">Teak Plantation</option>
                    </select>
              </div>

              {/* Land Size */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Minimum Acres</label>
                <select
                  value={bedrooms}
                  onChange={(e) => setBedrooms(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Any Size</option>
                  <option value="0.25">0.25+ acres</option>
                  <option value="1">1+ acres</option>
                  <option value="5">5+ acres</option>
                  <option value="10">10+ acres</option>
                  <option value="50">50+ acres</option>
                </select>
              </div>

              {/* Clear Filters */}
              <button
                                 onClick={() => {
                   setPriceRange([0, 30000000]);
                   setPropertyType('');
                   setBedrooms('');
                 }}
                className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          </div>

          {/* Results */}
          <div className="flex-1">
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-gray-900 mb-2">Costa Rican Land Properties</h1>
              <p className="text-gray-600">{mockProperties.length} premium properties found</p>
            </div>

            {/* Property Grid/List */}
            <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-6'}>
              {mockProperties.map((property) => (
                <a
                  href={`/properties/${property.id}`}
                  key={property.id}
                  className={`bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow block ${
                    viewMode === 'list' ? 'flex' : ''
                  }`}
                >
                  {/* Property Image */}
                  <div className={viewMode === 'list' ? 'w-80 h-48' : 'h-48'}>
                    <img
                      src={property.image}
                      alt={property.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Property Details */}
                  <div className="p-6 flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">{property.title}</h3>
                      <button className="text-gray-400 hover:text-red-500 transition-colors">
                        <Heart className="h-5 w-5" />
                      </button>
                    </div>

                    <p className="text-2xl font-bold text-blue-600 mb-2">
                      {formatPrice(property.price)}
                    </p>

                                         <p className="text-gray-600 mb-4 flex items-center">
                       <MapPin className="h-4 w-4 mr-1" />
                       {property.location}
                     </p>
                     
                     {property.description && (
                       <p className="text-sm text-gray-500 mb-4 line-clamp-2">
                         {property.description}
                       </p>
                     )}

                                  {/* Land Features */}
              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <div className="flex items-center">
                  <Square className="h-4 w-4 mr-1" />
                  {property.acres} acres
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-1" />
                  {property.zoning}
                </div>
                <div className="flex items-center">
                  <Car className="h-4 w-4 mr-1" />
                  {property.utilities}
                </div>
              </div>

                                         {/* Property Type Badge */}
                     <div className="mt-4 flex items-center justify-between">
                       <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full capitalize">
                         {property.type}
                       </span>
                       {property.status === 'under-contract' && (
                         <span className="inline-block bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full">
                           Under Contract
                         </span>
                       )}
                     </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-12 flex justify-center">
              <nav className="flex items-center space-x-2">
                <button className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50">
                  Previous
                </button>
                <button className="px-3 py-2 bg-blue-600 text-white rounded-lg">1</button>
                <button className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">2</button>
                <button className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">3</button>
                <button className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                  Next
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

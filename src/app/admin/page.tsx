'use client';

import { useState } from 'react';
import { Home, Building, Users, MessageSquare, Plus, Eye, Edit, Trash2, TrendingUp, DollarSign, MapPin } from 'lucide-react';

// Mock data for admin dashboard
const mockStats = {
  activeProperties: 156,
  draftProperties: 23,
  totalLeads: 89,
  newLeads: 12,
  totalUsers: 45,
  monthlyRevenue: 125000
};

const mockRecentLeads = [
  {
    id: '1',
    name: 'John Smith',
    email: 'john@example.com',
    phone: '+1 (555) 123-4567',
    property: 'Modern Downtown Apartment',
    status: 'new',
    date: '2024-01-15'
  },
  {
    id: '2',
    name: 'Sarah Johnson',
    email: 'sarah@example.com',
    phone: '+1 (555) 987-6543',
    property: 'Luxury Family Villa',
    status: 'contacted',
    date: '2024-01-14'
  },
  {
    id: '3',
    name: 'Mike Wilson',
    email: 'mike@example.com',
    phone: '+1 (555) 456-7890',
    property: 'Cozy Suburban House',
    status: 'qualified',
    date: '2024-01-13'
  }
];

const mockRecentProperties = [
  {
    id: '1',
    title: 'Modern Downtown Apartment',
    price: 450000,
    status: 'active',
    views: 156,
    leads: 8
  },
  {
    id: '2',
    title: 'Luxury Family Villa',
    price: 1200000,
    status: 'active',
    views: 89,
    leads: 5
  },
  {
    id: '3',
    title: 'Cozy Suburban House',
    price: 650000,
    status: 'draft',
    views: 0,
    leads: 0
  }
];

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new': return 'bg-blue-100 text-blue-800';
      case 'contacted': return 'bg-yellow-100 text-yellow-800';
      case 'qualified': return 'bg-green-100 text-green-800';
      case 'active': return 'bg-green-100 text-green-800';
      case 'draft': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
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
              <span className="mx-4 text-gray-400">|</span>
              <span className="text-lg font-semibold text-gray-900">Admin Dashboard</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">Welcome, Admin</span>
              <button className="text-gray-600 hover:text-gray-900">Logout</button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation Tabs */}
        <div className="mb-8">
          <nav className="flex space-x-8">
            <button
              onClick={() => setActiveTab('overview')}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'overview'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('properties')}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'properties'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Properties
            </button>
            <button
              onClick={() => setActiveTab('leads')}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'leads'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Leads
            </button>
            <button
              onClick={() => setActiveTab('users')}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'users'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Users
            </button>
          </nav>
        </div>

        {activeTab === 'overview' && (
          <div>
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Building className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="ml-4">
                                         <p className="text-sm font-medium text-gray-600">Active Land Listings</p>
                    <p className="text-2xl font-bold text-gray-900">{mockStats.activeProperties}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center">
                  <div className="p-2 bg-yellow-100 rounded-lg">
                    <Eye className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div className="ml-4">
                                         <p className="text-sm font-medium text-gray-600">Draft Land Listings</p>
                    <p className="text-2xl font-bold text-gray-900">{mockStats.draftProperties}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <MessageSquare className="h-6 w-6 text-green-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Total Leads</p>
                    <p className="text-2xl font-bold text-gray-900">{mockStats.totalLeads}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <DollarSign className="h-6 w-6 text-purple-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Monthly Revenue</p>
                    <p className="text-2xl font-bold text-gray-900">{formatPrice(mockStats.monthlyRevenue)}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Charts and Recent Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Recent Leads */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">Recent Leads</h3>
                  <a href="#" className="text-blue-600 hover:text-blue-700 text-sm">View all</a>
                </div>
                <div className="space-y-4">
                  {mockRecentLeads.map((lead) => (
                    <div key={lead.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium text-gray-900">{lead.name}</p>
                        <p className="text-sm text-gray-600">{lead.email}</p>
                        <p className="text-sm text-gray-600">{lead.property}</p>
                      </div>
                      <div className="text-right">
                        <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(lead.status)}`}>
                          {lead.status}
                        </span>
                        <p className="text-sm text-gray-600 mt-1">{lead.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Properties */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex justify-between items-center mb-4">
                                     <h3 className="text-lg font-semibold text-gray-900">Recent Land Listings</h3>
                   <button className="flex items-center text-blue-600 hover:text-blue-700 text-sm">
                     <Plus className="h-4 w-4 mr-1" />
                     Add Land Listing
                   </button>
                </div>
                <div className="space-y-4">
                  {mockRecentProperties.map((property) => (
                    <div key={property.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium text-gray-900">{property.title}</p>
                        <p className="text-sm text-gray-600">{formatPrice(property.price)}</p>
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <span>{property.views} views</span>
                          <span>{property.leads} leads</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(property.status)}`}>
                          {property.status}
                        </span>
                        <button className="p-1 text-gray-400 hover:text-gray-600">
                          <Edit className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'properties' && (
          <div className="bg-white rounded-lg shadow-sm">
            <div className="p-6 border-b">
              <div className="flex justify-between items-center">
                               <h3 className="text-lg font-semibold text-gray-900">All Land Listings</h3>
               <button className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                 <Plus className="h-4 w-4 mr-2" />
                 Add Land Listing
               </button>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-600">Land listings management interface will be implemented here.</p>
            </div>
          </div>
        )}

        {activeTab === 'leads' && (
          <div className="bg-white rounded-lg shadow-sm">
            <div className="p-6 border-b">
              <h3 className="text-lg font-semibold text-gray-900">All Leads</h3>
            </div>
            <div className="p-6">
              <p className="text-gray-600">Leads management interface will be implemented here.</p>
            </div>
          </div>
        )}

        {activeTab === 'users' && (
          <div className="bg-white rounded-lg shadow-sm">
            <div className="p-6 border-b">
              <h3 className="text-lg font-semibold text-gray-900">All Users</h3>
            </div>
            <div className="p-6">
              <p className="text-gray-600">Users management interface will be implemented here.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

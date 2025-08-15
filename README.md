# RealEstate Pro - Modern Real Estate Website

A comprehensive real estate platform built with Next.js, TypeScript, Tailwind CSS, and PostgreSQL. This project includes both customer-facing features and admin management capabilities.

## 🏠 Features

### Customer Website
- **Home Page**: Beautiful landing page with big search functionality
- **Search Results**: Advanced property search with filters and grid/list views
- **Property Details**: Detailed property pages with image galleries and contact forms
- **Responsive Design**: Mobile-first design that works on all devices

### Admin Dashboard
- **Overview**: Dashboard with key metrics and recent activity
- **Property Management**: Add, edit, and manage property listings
- **Lead Management**: Track and manage customer inquiries
- **User Management**: Manage admin users and permissions

## 🛠 Tech Stack

- **Frontend**: Next.js 15 with App Router, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: NextAuth.js (to be implemented)
- **Icons**: Lucide React
- **Styling**: Tailwind CSS with custom design system

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- PostgreSQL database (we use Neon.tech)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd real-estate-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   DATABASE_URL="your-postgresql-connection-string"
   ```

4. **Set up the database**
   ```bash
   npx prisma generate
   npx prisma db push
   npm run db:seed
   ```

5. **Start the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Home page
│   ├── search/            # Search results page
│   ├── properties/        # Property detail pages
│   └── admin/             # Admin dashboard
├── components/            # Reusable components (to be added)
├── lib/                   # Utility functions (to be added)
└── types/                 # TypeScript type definitions (to be added)
prisma/
├── schema.prisma          # Database schema
└── seed.ts               # Database seeding script
```

## 🗄 Database Schema

The application uses a comprehensive database schema with the following main entities:

- **Users**: Admin and editor accounts
- **Properties**: Property listings with detailed information
- **PropertyImages**: Image galleries for properties
- **PropertyFeatures**: Amenities and features
- **Leads**: Customer inquiries and contact requests
- **Favorites**: User saved properties

## 🔐 Authentication

Currently using a simple admin user:
- **Email**: admin@realestate.com
- **Password**: admin123

## 🎨 Design System

The application uses a consistent design system with:
- **Colors**: Blue primary (#2563eb), with supporting grays and accent colors
- **Typography**: Clean, readable fonts with proper hierarchy
- **Components**: Reusable UI components with consistent styling
- **Responsive**: Mobile-first design with breakpoints for all screen sizes

## 📱 Pages Overview

### Home Page (`/`)
- Hero section with search functionality
- Feature highlights
- Statistics section
- Professional footer

### Search Results (`/search`)
- Advanced filtering options
- Grid and list view modes
- Property cards with key information
- Pagination support

### Property Details (`/properties/[slug]`)
- Image gallery with thumbnails
- Detailed property information
- Contact form for inquiries
- Property features and amenities
- Location map (placeholder)

### Admin Dashboard (`/admin`)
- Overview with key metrics
- Recent leads and properties
- Tabbed navigation for different sections
- Quick actions and management tools

## 🚧 Next Steps

### Immediate Improvements
1. **Authentication System**: Implement NextAuth.js for secure login
2. **Image Upload**: Add Cloudinary or S3 integration
3. **Google Maps**: Integrate Google Maps API for property locations
4. **Search API**: Connect search functionality to the database
5. **Contact Forms**: Implement form submission to database

### Advanced Features
1. **Virtual Tours**: 3D property tours
2. **Email Notifications**: Automated lead notifications
3. **Analytics**: Property view tracking and analytics
4. **SEO Optimization**: Meta tags, sitemaps, and structured data
5. **Mobile App**: React Native companion app

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For support and questions:
- Create an issue in the repository
- Contact the development team
- Check the documentation

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**

# Beauty Clinic E-Commerce Platform

A full-stack e-commerce application for a beauty clinic selling skincare and cosmetic products.

## 🏗️ Architecture

```
website/              → React Frontend (Vite + React Router)
websitewip/           → Laravel Backend (REST API)
Database (MySQL)      → Product catalog & orders
```

### Tech Stack

**Frontend:**
- React 18
- Vite (build tool)
- React Router (navigation)
- Tailwind CSS (styling)
- Framer Motion (animations)

**Backend:**
- Laravel 12
- MySQL Database
- Laravel Sanctum (authentication)
- RESTful API

## 🚀 Quick Start

### Prerequisites
- PHP 8.2+
- Node.js 18+
- MySQL 5.7+
- Composer
- npm

### Installation

#### 1. Backend Setup
```bash
cd website/websitewip
composer install
npm install
cp .env.example .env
php artisan key:generate
php artisan migrate
php artisan db:seed
```

#### 2. Frontend Setup
```bash
cd website
npm install
```

### Running Locally

#### Terminal 1 - Backend:
```bash
cd website/websitewip
php artisan serve
```
Server will run on `http://localhost:8000`

#### Terminal 2 - Frontend:
```bash
cd website
npm run dev
```
Frontend will run on `http://localhost:5175`

Then open http://localhost:5175 in your browser.

## 📋 Features

### Current Features ✅
- **Product Catalog** - Browse 96+ skincare products
- **Shopping Cart** - Add/remove items (localStorage)
- **Order History** - Track previous orders
- **Responsive Design** - Mobile-friendly interface
- **Real-time Updates** - Products loaded from database
- **Error Handling** - Graceful error states

### Product Categories
1. Cleansers (Reiniger)
2. Creams & Moisturizers (Gezichtscrème)
3. Exfoliants (Exfoliant)
4. Night Treatments (Nachtcrème)
5. Tonics & Lotions (Gezichtslotion)
6. Peels (Peeling)
7. Sunscreen (Zonbescherming)
8. Post-Treatment (Nabehandelingscreme)

### Brands Available
- Neoderma
- Meditopics
- Mesoestetic
- BeautyLash
- RefectoCil

## 📁 Project Structure

### Frontend (`website/`)
```
src/
├── pages/
│   ├── shop.jsx              # Product listing & shopping
│   ├── acupunctuur.jsx
│   ├── homepage.jsx
│   └── ...
├── components/
│   ├── navbar.jsx
│   ├── footer.jsx
│   └── ReviewCard.jsx
├── api/
│   └── products.js           # API client
├── context/
│   └── AuthContext.jsx
├── App.jsx
├── main.tsx
└── index.css

public/
├── data.json
├── clinicData.json
└── Tarieven.json

vite.config.js               # Dev server with API proxy
.env                         # Environment variables
package.json
```

### Backend (`websitewip/`)
```
app/
├── Models/
│   ├── Product.php
│   ├── Category.php
│   ├── ProductVariant.php
│   ├── ProductImage.php
│   ├── Order.php
│   └── ...
├── Http/
│   ├── Controllers/Api/
│   │   ├── ProductController.php
│   │   ├── CategoryController.php
│   │   └── ...
│   └── Middleware/
│       └── CorsMiddleware.php

routes/
├── api.php                   # API endpoints
└── web.php                   # Web routes

database/
├── migrations/               # Database schema
├── seeders/                  # Sample data
└── factories/

config/
├── database.php
├── app.php
└── ...
```

## 🔌 API Endpoints

### Products
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/products` | Get all products |
| GET | `/api/products/{id}` | Get specific product |
| POST | `/api/products` | Create product (admin) |
| PUT | `/api/products/{id}` | Update product (admin) |
| DELETE | `/api/products/{id}` | Delete product (admin) |

### Product Images
| GET | `/api/products/{id}/images` | Get product images |
| POST | `/api/products/{id}/images` | Upload image |
| DELETE | `/api/images/{id}` | Delete image |
| POST | `/api/images/{id}/set-main` | Set main image |

### Response Example
```json
{
  "id": 1,
  "name": "Hydraterende Dagcrème",
  "base_price": 24.95,
  "description": "A moisturizing day cream",
  "sku": "CREAM001",
  "is_active": true,
  "category_id": 2,
  "image": null,
  "created_at": "2024-12-04T10:00:00Z",
  "updated_at": "2024-12-04T10:00:00Z"
}
```

## 🗄️ Database Schema

### Products Table
```sql
CREATE TABLE products (
  id BIGINT PRIMARY KEY,
  category_id BIGINT,
  name VARCHAR(255),
  slug VARCHAR(255) UNIQUE,
  description LONGTEXT,
  base_price DECIMAL(8,2),
  sku VARCHAR(255) UNIQUE,
  is_active BOOLEAN DEFAULT true,
  image VARCHAR(255),
  created_at TIMESTAMP,
  updated_at TIMESTAMP
);
```

### Categories
- Cleansers
- Moisturizers
- Treatments
- Exfoliants
- Sunscreen
- Post-Treatment

## 🔐 CORS Configuration

The backend is configured to accept requests from:
- `http://localhost:5173`
- `http://localhost:5174`
- `http://localhost:5175`
- `http://127.0.0.1:5173`
- `http://127.0.0.1:3000`

Modify `app/Http/Middleware/CorsMiddleware.php` to add more origins.

## 🔑 Environment Variables

### Frontend (`.env`)
```env
VITE_API_URL=http://localhost:8000/api
```

### Backend (`.env`)
```env
APP_NAME=Laravel
APP_ENV=local
APP_DEBUG=true
APP_URL=http://localhost

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=websitewip
DB_USERNAME=DimaBaseAdmin
DB_PASSWORD=WelcomeZaan

MAIL_MAILER=smtp
MAIL_HOST=smtp.gmail.com
MAIL_PORT=465
MAIL_USERNAME=your-email@gmail.com
MAIL_PASSWORD=your-app-password
```

## 📱 Shopping Experience

### User Flow
1. User opens the website (http://localhost:5175)
2. Navigates to Shop page
3. React component fetches products via `/api/products`
4. Products are displayed in a responsive grid
5. User clicks "Voeg toe aan winkelwagen" to add items
6. Cart count updates in navigation
7. User can view cart and checkout
8. Order is saved to localStorage with unique order number

## 🛠️ Development Workflow

### Adding a New Product
1. Add product to database (via admin interface or seeder)
2. Product automatically appears in shop (no code changes needed)
3. Frontend fetches from API on load

### Modifying API Response
1. Edit `ProductController` in `app/Http/Controllers/Api/`
2. Clear routes cache: `php artisan route:cache`
3. Frontend will automatically use new response format

### Styling Changes
1. Edit Tailwind CSS in `src/` components
2. Changes hot-reload automatically in dev mode
3. Run `npm run build` for production

## 🧪 Testing

### Manual Testing
1. Check browser DevTools (F12)
2. Network tab shows `/api/products` request
3. Response should be JSON array of products
4. No CORS errors should appear

### API Testing
```bash
# Test all products
curl http://localhost:8000/api/products

# Test single product
curl http://localhost:8000/api/products/1

# Test with filter
curl "http://localhost:8000/api/products?category_id=2"
```

## 📦 Production Deployment

### Backend Deployment
```bash
# Build
composer install --no-dev
php artisan config:cache
php artisan route:cache

# Deploy to server
git push heroku main
```

### Frontend Deployment
```bash
# Build
npm run build

# Deploy to Vercel/Netlify
vercel deploy
# or
netlify deploy --prod --dir=dist
```

### Update API URL
Change `.env` in frontend:
```env
VITE_API_URL=https://api.yourdomain.com
```

## 🔧 Troubleshooting

### "Failed to load products"
- Ensure Laravel is running: `php artisan serve`
- Check network tab in DevTools
- Verify database connection

### CORS Errors
- Check `CorsMiddleware.php` for allowed origins
- Ensure backend is running on port 8000
- Clear browser cache

### Database Connection Error
- Verify MySQL is running
- Check `.env` credentials
- Run `php artisan migrate`

### Frontend Not Loading
- Check if Vite server is running
- Clear node_modules: `rm -rf node_modules && npm install`
- Check `vite.config.js` for proxy settings

## 📚 Additional Resources

- [Laravel Documentation](https://laravel.com/docs)
- [React Documentation](https://react.dev)
- [Vite Guide](https://vitejs.dev)
- [Tailwind CSS](https://tailwindcss.com)

## 📝 Integration Files

Key configuration files for backend-frontend integration:
- `website/vite.config.js` - Proxy configuration
- `website/websitewip/bootstrap/app.php` - API routes registration
- `website/websitewip/app/Http/Middleware/CorsMiddleware.php` - CORS setup
- `website/src/api/products.js` - API client

## 🎯 Next Steps

1. **Add Product Images** - Implement image upload
2. **User Authentication** - Implement login/register
3. **Checkout System** - Integrate payment processing
4. **Admin Dashboard** - Manage products & orders
5. **Search & Filter** - Add advanced search
6. **Reviews & Ratings** - Customer feedback system

## 📞 Support

For issues or questions:
1. Check troubleshooting section
2. Review `QUICK_START.md` for basic setup
3. Check `INTEGRATION_GUIDE.md` for detailed integration info

---

**Last Updated:** December 4, 2024
**Status:** ✅ Integration Complete - Ready for Development

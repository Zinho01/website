# Website Integration Guide

This guide explains how to run both the backend (Laravel - websitewip) and frontend (React - website) applications together.

## Project Structure

```
website/                    # React Frontend (Vite + React)
├── src/
│   ├── pages/
│   │   ├── shop.jsx       # Main shop page (fetches products from API)
│   │   └── ...
│   ├── api/
│   │   └── products.js    # API client for fetching products
│   └── ...
├── package.json
├── vite.config.js         # Configured with API proxy
├── .env                   # API configuration
└── ...

websitewip/                 # Laravel Backend (REST API)
├── app/
│   ├── Http/
│   │   ├── Controllers/Api/
│   │   │   └── ProductController.php  # API endpoints
│   │   └── Middleware/
│   │       └── CorsMiddleware.php     # CORS configuration
│   ├── Models/
│   │   └── Product.php
│   └── ...
├── routes/
│   └── api.php            # API routes
├── .env                   # Database configuration
├── package.json
└── composer.json
```

## Prerequisites

- PHP 8.2 or higher
- Node.js 18+ and npm
- MySQL running locally
- Composer (PHP package manager)

## Setup Instructions

### 1. Backend Setup (Laravel - websitewip)

```bash
# Navigate to the backend directory
cd website/websitewip

# Install PHP dependencies
composer install

# Install Node dependencies
npm install

# Make sure .env file has correct database credentials
# Default config in .env:
# DB_HOST=127.0.0.1
# DB_DATABASE=websitewip
# DB_USERNAME=DimaBaseAdmin
# DB_PASSWORD=WelcomeZaan

# Run database migrations (creates tables)
php artisan migrate

# (Optional) Seed the database with sample products
php artisan db:seed
```

### 2. Frontend Setup (React - website)

```bash
# Navigate to the frontend directory
cd website

# Install Node dependencies
npm install

# The .env file is already configured with:
# VITE_API_URL=http://localhost:8000/api
```

## Running the Applications

### Option 1: Run Separately (Recommended for Development)

#### Terminal 1 - Start Laravel Backend (on port 8000):
```bash
cd website/websitewip
php artisan serve
```

#### Terminal 2 - Start React Frontend (on port 5173):
```bash
cd website
npm run dev
```

Then open http://localhost:5173 in your browser. The React app will proxy API requests to http://localhost:8000/api.

### Option 2: Run Together (If You Have Concurrently Installed)

From the `website/websitewip` directory, you can run:
```bash
composer run dev
```

This runs both the Laravel server and the Vite dev server concurrently.

## API Endpoints

The shop page fetches products from these endpoints:

- **GET /api/products** - Get all products
- **GET /api/products/{id}** - Get a specific product

### Example Response:
```json
[
  {
    "id": 1,
    "name": "Hydraterende Dagcrème",
    "base_price": 24.95,
    "description": "A moisturizing day cream",
    "sku": "CREAM001",
    "is_active": true,
    "category_id": 1,
    "image": null,
    "created_at": "2024-12-04T10:00:00Z",
    "updated_at": "2024-12-04T10:00:00Z"
  }
]
```

## How It Works

1. **Frontend (React)** makes HTTP requests to `/api/products`
2. **Vite Dev Server** (running on port 5173) proxies these requests to `http://localhost:8000/api/products`
3. **Laravel Backend** (running on port 8000) processes the request and returns product data
4. **CORS Middleware** allows cross-origin requests from the React app to the API
5. **React** receives the data and renders products in the shop

## Troubleshooting

### Issue: "Failed to load products"
- **Check**: Is the Laravel backend running on port 8000?
- **Fix**: Run `php artisan serve` in the `websitewip` directory

### Issue: "CORS error" in browser console
- **Check**: Are the CORS settings correct?
- **Fix**: The CorsMiddleware in `websitewip/app/Http/Middleware/CorsMiddleware.php` handles this. Make sure it's registered in `bootstrap/app.php`

### Issue: Products not showing in database
- **Check**: Did you run migrations and seed the database?
- **Fix**: Run:
  ```bash
  cd website/websitewip
  php artisan migrate
  php artisan db:seed
  ```

### Issue: Database connection error
- **Check**: Is MySQL running?
- **Check**: Are the database credentials in `.env` correct?
- **Fix**: Update `websitewip/.env` with your database credentials

## Development Notes

- The shop page component is in `website/src/pages/shop.jsx`
- The API client is in `website/src/api/products.js`
- Product fetching happens in the `useEffect` hook
- Products are mapped from the API response to the shop format
- Loading and error states are handled gracefully

## Next Steps

1. Add images to products (update the Product model and add image handling)
2. Implement filtering and search functionality
3. Add cart/checkout API endpoints
4. Implement user authentication with Laravel Sanctum
5. Deploy to production

## Production Deployment

For production, update the `VITE_API_URL` in your environment variables to point to your production API:
```
VITE_API_URL=https://api.yourdomain.com
```

Then build the React app:
```bash
cd website
npm run build
```

This creates an optimized production build in the `dist` folder.

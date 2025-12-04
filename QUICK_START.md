# Quick Start Guide

## Get Everything Running in 2 Minutes

### Prerequisites Check
- PHP installed? `php -v`
- Node.js installed? `node -v`
- MySQL running? Check WAMP/XAMPP dashboard

### Step 1: Start Backend (Terminal 1)
```bash
cd website/websitewip
php artisan serve
```
Expected output:
```
INFO  Server running on [http://127.0.0.1:8000].
```

### Step 2: Start Frontend (Terminal 2)
```bash
cd website
npm run dev
```
Expected output:
```
VITE v6.x.x  ready in XXX ms
➜  Local:   http://localhost:5175/
```

### Step 3: Open in Browser
Go to: **http://localhost:5175**

Click on "Shop" (or navigate to shop page) and you should see **96+ real products** loaded from the database!

## Testing the Integration

### Check 1: Verify Backend API
```bash
curl http://localhost:8000/api/products
```
Should return JSON array of products

### Check 2: Open DevTools
- Press `F12` in browser
- Go to Network tab
- Click on any shop page
- You should see `/api/products` request successful

### Check 3: Add to Cart
- Click "Voeg toe aan winkelwagen" on any product
- Shopping cart should show the item count
- Click the cart button to view items

## Troubleshooting

| Issue | Solution |
|-------|----------|
| "Failed to load products" | Ensure Laravel is running on port 8000 |
| Products show but prices are 0 | Check database - products need `base_price` field |
| CORS error | Verify CorsMiddleware is registered in `bootstrap/app.php` |
| Can't connect to database | Check `.env` file credentials in `websitewip/.env` |

## Current Features

✅ Dynamic product loading from database
✅ Shopping cart (add/remove items)
✅ Order history
✅ Responsive design
✅ Loading and error states

## What's Different From Before

**Before:**
- Hardcoded 4 placeholder products
- No real database connection
- Manual product management

**After:**
- 96+ real products from database
- Live API integration
- Database-driven catalog
- Scalable architecture

## Database Info

Database: `websitewip`
Tables: Products, Categories, Variants, Images, etc.

Sample products include:
- Neoderma skincare
- Meditopics treatments
- Mesoestetic professional products
- BeautyLash cosmetics

## Directory Structure

```
website/                          # Frontend (React)
├── src/
│   ├── pages/shop.jsx           # Product listing page
│   └── api/products.js          # API client
├── vite.config.js               # Dev server config
└── .env                         # API URL config

websitewip/                       # Backend (Laravel)
├── app/
│   ├── Models/Product.php       # Product model
│   ├── Http/Controllers/Api/    # API endpoints
│   └── Http/Middleware/         # CORS config
├── routes/api.php               # API routes
└── bootstrap/app.php            # Application config
```

## Environment Variables

### Frontend (.env)
```
VITE_API_URL=http://localhost:8000/api
```

### Backend (.env)
```
DB_HOST=127.0.0.1
DB_DATABASE=websitewip
DB_USERNAME=DimaBaseAdmin
DB_PASSWORD=WelcomeZaan
```

## Next: Add Features

See `INTEGRATION_GUIDE.md` for detailed information on:
- Production deployment
- Adding images to products
- User authentication
- Checkout/payment integration
- Search and filtering

---

**Status: ✅ INTEGRATION COMPLETE**

Both backend and frontend are configured and working together!

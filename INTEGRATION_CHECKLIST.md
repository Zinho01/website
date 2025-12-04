## Integration Checklist ✅

Use this checklist to verify everything is working correctly.

### Backend (Laravel) Setup ✅
- [ ] PHP installed and in PATH
- [ ] Composer dependencies installed: `composer install`
- [ ] `.env` file created with database credentials
- [ ] Laravel app key generated: `php artisan key:generate`
- [ ] Database migrations run: `php artisan migrate`
- [ ] Database seeded with products: `php artisan db:seed` (optional)
- [ ] `bootstrap/app.php` has API routes registered
- [ ] CORS middleware created in `app/Http/Middleware/CorsMiddleware.php`
- [ ] CORS middleware registered in `bootstrap/app.php`

### Frontend (React) Setup ✅
- [ ] Node.js and npm installed
- [ ] Node dependencies installed: `npm install`
- [ ] `.env` file created with `VITE_API_URL=http://localhost:8000/api`
- [ ] `vite.config.js` has API proxy configured
- [ ] `src/api/products.js` created with API client
- [ ] `src/pages/shop.jsx` updated to use API

### Servers Running ✅
- [ ] Laravel server running: `php artisan serve` (Port 8000)
  ```bash
  INFO  Server running on [http://127.0.0.1:8000].
  ```
- [ ] React dev server running: `npm run dev` (Port 5173/5174/5175)
  ```bash
  ➜  Local:   http://localhost:5175/
  ```

### API Testing ✅
- [ ] Backend API accessible: `curl http://localhost:8000/api/products`
- [ ] Response contains JSON array
- [ ] Products have correct fields: `id`, `name`, `base_price`, `description`
- [ ] Product count > 0 (verify database is seeded)

### Frontend Testing ✅
- [ ] Shop page loads: http://localhost:5175/shop
- [ ] Products display in grid
- [ ] No CORS errors in browser console (F12 → Console)
- [ ] No API errors in browser console
- [ ] Network tab shows successful `/api/products` request
- [ ] Products have correct data (names, prices, descriptions)
- [ ] Can add products to cart
- [ ] Cart counter updates
- [ ] Can view cart contents
- [ ] Loading state works

### Database Verification ✅
- [ ] MySQL/MariaDB running
- [ ] Database `websitewip` exists
- [ ] Products table populated
- [ ] Can query products: 
  ```sql
  SELECT COUNT(*) FROM products;
  ```

### Configuration Files ✅
- [ ] `website/.env` exists with API URL
- [ ] `website/websitewip/.env` exists with DB credentials
- [ ] `website/vite.config.js` has proxy config
- [ ] `website/websitewip/bootstrap/app.php` has API routes and CORS middleware

### Browser DevTools Verification ✅
Open http://localhost:5175/shop and press F12:

**Network Tab:**
- [ ] Request to `/api/products` shows status 200
- [ ] Response preview shows JSON array
- [ ] Response headers include `Access-Control-Allow-Origin`

**Console Tab:**
- [ ] No errors
- [ ] No CORS warnings
- [ ] No 404 errors
- [ ] Products successfully fetched message (if logging enabled)

**Elements Tab:**
- [ ] Products render in DOM
- [ ] Product grid visible
- [ ] Product cards display images (or placeholders)
- [ ] Prices display correctly

### Shopping Cart Testing ✅
- [ ] Click "Voeg toe aan winkelwagen" on a product
- [ ] Cart count in header updates
- [ ] Click cart icon to open cart
- [ ] Selected product appears in cart
- [ ] Can remove item from cart
- [ ] Total price calculates correctly
- [ ] Can proceed to checkout
- [ ] Order number generated with format `ORD-YYYYMMDD-XXXX`

### Error Handling ✅
- [ ] Stop Laravel server → Frontend shows "Failed to load products"
- [ ] Stop React dev server → Cannot access frontend
- [ ] Clear browser cache → Products still load
- [ ] Invalid product ID in URL → API returns 404 (or similar)

## Performance Checks ✅
- [ ] Products load within 2 seconds
- [ ] No console warnings
- [ ] Network requests complete successfully
- [ ] No memory leaks (task manager shows stable memory)
- [ ] Responsive design works on mobile (F12 → Device toolbar)

## Documentation Files Created ✅
- [ ] `QUICK_START.md` - Quick setup guide
- [ ] `INTEGRATION_GUIDE.md` - Detailed integration guide
- [ ] `INTEGRATION_SUMMARY.md` - Summary of changes
- [ ] `README_FULL.md` - Complete project documentation

## Success Criteria ✅
If all checkboxes are checked:
- ✅ Backend API is fully functional
- ✅ Frontend successfully fetches products from API
- ✅ Products display correctly in shop
- ✅ Database is populated with real products
- ✅ CORS is properly configured
- ✅ Shopping cart works
- ✅ No errors in browser console
- ✅ Integration is complete and ready for development

## Quick Test Script
Run in terminal to verify:
```bash
# Test backend
curl -s http://localhost:8000/api/products | grep "id" && echo "✅ Backend OK" || echo "❌ Backend FAILED"

# Test frontend (requires curl to handle redirects)
curl -s http://localhost:5175/shop | grep "react" && echo "✅ Frontend OK" || echo "❌ Frontend FAILED"
```

## If Something Fails

**Step 1:** Check the specific error
- Look at browser console (F12)
- Look at terminal output
- Check network tab in DevTools

**Step 2:** Reference troubleshooting
- See `INTEGRATION_GUIDE.md` → Troubleshooting section
- Check if servers are still running
- Verify `.env` files are correct

**Step 3:** Restart everything
```bash
# Terminal 1: Stop and restart backend
# Press Ctrl+C
php artisan serve

# Terminal 2: Stop and restart frontend
# Press Ctrl+C
npm run dev
```

**Step 4:** Clear cache if needed
```bash
# Clear browser cache (Ctrl+Shift+Delete)
# Clear Laravel cache
php artisan cache:clear
php artisan route:cache
```

---

## Status

Once you've verified all items, you're ready to:
- ✅ Develop new features
- ✅ Deploy to production
- ✅ Add more products
- ✅ Integrate payment processing
- ✅ Add user authentication

**Good luck! 🚀**

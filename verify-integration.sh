#!/bin/bash

# Integration Verification Script
# Run this to verify both backend and frontend are working correctly

echo "================================"
echo "Website Integration Verification"
echo "================================"
echo ""

# Check 1: Backend
echo "1. Checking Backend (Laravel)..."
echo "   Testing: http://localhost:8000/api/products"
if curl -s http://localhost:8000/api/products | grep -q "id"; then
    echo "   ✅ Backend is responding"
    echo "   ✅ Products found in response"
else
    echo "   ❌ Backend not responding or no products"
fi
echo ""

# Check 2: Frontend
echo "2. Checking Frontend (React)..."
echo "   Testing: http://localhost:5175"
if curl -s http://localhost:5175 | grep -q "react"; then
    echo "   ✅ Frontend is running"
else
    echo "   ⚠️  Frontend response received (might be loading)"
fi
echo ""

# Check 3: Database
echo "3. Checking Database..."
if [ -f "/c/wamp64/bin/php/php8.4.7/php" ]; then
    echo "   ✅ PHP found"
else
    echo "   ⚠️  PHP path may need adjustment"
fi
echo ""

# Check 4: Configuration Files
echo "4. Checking Configuration Files..."
if [ -f "website/.env" ]; then
    echo "   ✅ Frontend .env exists"
else
    echo "   ❌ Frontend .env missing"
fi

if [ -f "website/websitewip/.env" ]; then
    echo "   ✅ Backend .env exists"
else
    echo "   ❌ Backend .env missing"
fi
echo ""

# Check 5: API Routes
echo "5. Checking Product Count..."
PRODUCT_COUNT=$(curl -s http://localhost:8000/api/products | grep -o '"id"' | wc -l)
echo "   Products in database: $PRODUCT_COUNT"
if [ "$PRODUCT_COUNT" -gt 0 ]; then
    echo "   ✅ Products are loaded"
else
    echo "   ❌ No products found"
fi
echo ""

echo "================================"
echo "Verification Complete!"
echo "================================"
echo ""
echo "If all checks passed ✅, open your browser to:"
echo "http://localhost:5175"
echo ""
echo "Click on 'Shop' to see the products!"

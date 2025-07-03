<?php

namespace App\Http\Controllers\Api;

use App\Models\Product;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ProductController extends Controller
{
    // GET /api/products
    public function index()
    {
        return Product::with('category', 'variants')->get();
    }

    // POST /api/products
    public function store(Request $request)
    {
        $data = $request->validate([
            'name' => 'required|string',
            'slug' => 'required|string|unique:products,slug',
            'category_id' => 'nullable|exists:categories,id',
            'base_price' => 'nullable|numeric',
            'sku' => 'nullable|string|unique:products,sku',
            'description' => 'nullable|string',
            'is_active' => 'boolean',
        ]);

        $product = Product::create($data);
        return response()->json($product, 201);
    }

    // GET /api/products/{product}
    public function show(Product $product)
    {
        return $product->load('category', 'variants');
    }

    // PUT/PATCH /api/products/{product}
    public function update(Request $request, Product $product)
    {
        $data = $request->validate([
            'name' => 'sometimes|string',
            'slug' => 'sometimes|string|unique:products,slug,' . $product->id,
            'category_id' => 'nullable|exists:categories,id',
            'base_price' => 'nullable|numeric',
            'sku' => 'nullable|string|unique:products,sku,' . $product->id,
            'description' => 'nullable|string',
            'is_active' => 'boolean',
        ]);

        $product->update($data);
        return response()->json($product);
    }

    // DELETE /api/products/{product}
    public function destroy(Product $product)
    {
        $product->delete();
        return response()->json(null, 204);
    }
}

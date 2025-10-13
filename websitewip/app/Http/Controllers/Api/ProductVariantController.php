<?php

namespace App\Http\Controllers\Api;

use App\Models\ProductVariant;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ProductVariantController extends Controller
{
    // GET /api/product-variants
    public function index()
    {
        return ProductVariant::with('product', 'variantOptions')->get();
    }

    // POST /api/product-variants
    public function store(Request $request)
    {
        $data = $request->validate([
            'product_id' => 'required|exists:products,id',
            'sku' => 'required|string|unique:product_variants,sku',
            'price' => 'required|numeric',
            'stock' => 'required|integer|min:0',
            'variant_option_ids' => 'array|exists:variant_options,id'
        ]);

        $variant = ProductVariant::create($data);

        if (isset($data['variant_option_ids'])) {
            $variant->variantOptions()->sync($data['variant_option_ids']);
        }

        return response()->json($variant->load('variantOptions'), 201);
    }

    // GET /api/product-variants/{product_variant}
    public function show(ProductVariant $productVariant)
    {
        return $productVariant->load('product', 'variantOptions');
    }

    // PUT/PATCH /api/product-variants/{product_variant}
    public function update(Request $request, ProductVariant $productVariant)
    {
        $data = $request->validate([
            'sku' => 'sometimes|string|unique:product_variants,sku,' . $productVariant->id,
            'price' => 'sometimes|numeric',
            'stock' => 'sometimes|integer|min:0',
            'variant_option_ids' => 'array|exists:variant_options,id'
        ]);

        $productVariant->update($data);

        if (isset($data['variant_option_ids'])) {
            $productVariant->variantOptions()->sync($data['variant_option_ids']);
        }

        return response()->json($productVariant->load('variantOptions'));
    }

    // DELETE /api/product-variants/{product_variant}
    public function destroy(ProductVariant $productVariant)
    {
        $productVariant->delete();
        return response()->json(null, 204);
    }
}

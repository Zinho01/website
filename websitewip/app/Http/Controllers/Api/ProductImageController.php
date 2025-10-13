<?php

namespace App\Http\Controllers\Api;

use App\Models\Product;
use App\Models\ProductImage;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Storage;

class ProductImageController extends Controller
{
    public function store(Request $request, $productId)
    {
        $request->validate([
            'images.*' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);

        $product = Product::findOrFail($productId);
        $savedImages = [];

        foreach ($request->file('images', []) as $index => $image) {
            $path = $image->store('products', 'public');

            $imageRecord = $product->images()->create([
                'path' => $path,
                'is_main' => $index === 0 && $product->images()->count() === 0,
            ]);

            $savedImages[] = $imageRecord;
        }

        return response()->json($savedImages, 201);
    }

        public function index($productId)
    {
        $product = Product::with('images')->findOrFail($productId);
        return response()->json($product->images);
    }

            public function destroy(ProductImage $image)
        {
            Storage::disk('public')->delete($image->path);
            $image->delete();

            return response()->json(null, 204);
        }

        public function setMain(ProductImage $image)
    {
        $image->product->images()->update(['is_main' => false]);
        $image->update(['is_main' => true]);

        return response()->json(['message' => 'Main image updated.']);
    }

    // other methods go here, like update, show, etc.
}

?>
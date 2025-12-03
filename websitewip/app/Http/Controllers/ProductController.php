<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;

class ProductController extends Controller
{
    public function index()
    {
        $products = Product::all();

        return view('dashboard', compact('products'));
    }

    public function create()
    {
        $categories = Category::all();

        return view('products.create', compact('categories'));
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name'        => 'required',
            'slug'        => 'nullable',
            'description' => 'nullable',
            'base_price'  => 'required|numeric',
            'sku'         => 'nullable',
            'category_id' => 'nullable|integer',
            'is_active'   => 'nullable',
            'image'       => 'nullable|image|max:2048',
        ]);

        if (!$validated['slug']) {
            $validated['slug'] = Str::slug($validated['name']);
        }

        $validated['is_active'] = $request->has('is_active') ? 1 : 0;

        if ($request->hasFile('image')) {
            $validated['image'] = $request->file('image')->store('products', 'public');
        }

        Product::create($validated);

        return redirect()->route('dashboard')->with('success', 'Product toegevoegd!');
    }

    

    public function edit(Product $product)
    {
        $categories = Category::all();

        return view('products.edit', compact('product', 'categories'));
    }

    public function update(Request $request, Product $product)
    {
        $validated = $request->validate([
            'name'        => 'required',
            'slug'        => 'nullable',
            'description' => 'nullable',
            'base_price'  => 'required|numeric',
            'sku'         => 'nullable',
            'category_id' => 'nullable|integer',
            'is_active'   => 'nullable',
            'image'       => 'nullable|image|max:2048',
            'remove_image'=> 'nullable|boolean', // new checkbox
        ]);

        if (!$validated['slug']) {
            $validated['slug'] = Str::slug($validated['name']);
        }

        $validated['is_active'] = $request->has('is_active') ? 1 : 0;

        // Remove existing image if requested
        if ($request->has('remove_image') && $request->remove_image) {
            if ($product->image && Storage::disk('public')->exists($product->image)) {
                Storage::disk('public')->delete($product->image);
            }
            $validated['image'] = null;
        }

        // Upload new image if provided
        if ($request->hasFile('image')) {
            $path = $request->file('image')->store('products', 'public');

            // Delete old image if exists
            if ($product->image && Storage::disk('public')->exists($product->image)) {
                Storage::disk('public')->delete($product->image);
            }

            $validated['image'] = $path;
        }

        $product->update($validated);

        return redirect()->route('dashboard')->with('success', 'Product bijgewerkt!');
    }

    public function destroy(Product $product)
    {
        // Delete image from storage
        if ($product->image && Storage::disk('public')->exists($product->image)) {
            Storage::disk('public')->delete($product->image);
        }

        $product->delete();

        return redirect()->route('dashboard')->with('success', 'Product verwijderd!');
    }
}

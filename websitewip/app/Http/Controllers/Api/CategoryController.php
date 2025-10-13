<?php

namespace App\Http\Controllers\Api;

use App\Models\Category;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class CategoryController extends Controller
{
    // GET /api/categories
    public function index()
    {
        return Category::all();
    }

    // POST /api/categories
    public function store(Request $request)
    {
        $data = $request->validate([
            'name' => 'required|string|max:255',
            'slug' => 'required|string|unique:categories,slug',
        ]);

        $category = Category::create($data);
        return response()->json($category, 201);
    }

    // GET /api/categories/{category}
    public function show(Category $category)
    {
        return $category;
    }

    // PUT/PATCH /api/categories/{category}
    public function update(Request $request, Category $category)
    {
        $data = $request->validate([
            'name' => 'sometimes|string|max:255',
            'slug' => 'sometimes|string|unique:categories,slug,' . $category->id,
        ]);

        $category->update($data);
        return response()->json($category);
    }

    // DELETE /api/categories/{category}
    public function destroy(Category $category)
    {
        $category->delete();
        return response()->json(null, 204);
    }
}

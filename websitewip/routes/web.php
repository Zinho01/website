<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ProductController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

// DASHBOARD – now loads products with pagination
Route::get('/dashboard', function () {
    $products = \App\Models\Product::paginate(12);
    return view('dashboard', compact('products'));
})->middleware(['auth', 'verified'])->name('dashboard');

// CRUD for products
Route::middleware(['auth'])->group(function () {
    Route::resource('products', ProductController::class);

    // Profile routes
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';

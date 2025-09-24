<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\ProductController;
use App\Http\Controllers\Api\CategoryController;

use App\Http\Controllers\Api\ProductVariantController;
use App\Http\Controllers\Api\ProductImageController;

use App\Http\Controllers\Api\CartController;
use App\Http\Controllers\Api\CheckoutController;

Route::apiResource('categories', CategoryController::class);
Route::apiResource('products', ProductController::class);
Route::apiResource('product-variants', ProductVariantController::class);

// These routes handle product images, including uploading, listing, deleting, and setting a main image. I seperated them from the ProductController to keep the code a little more organized.
Route::get('products/{product}/images', [ProductImageController::class, 'index']);
Route::post('products/{product}/images', [ProductImageController::class, 'store']);
Route::delete('images/{image}', [ProductImageController::class, 'destroy']);
Route::post('images/{image}/set-main', [ProductImageController::class, 'setMain']);

Route::middleware('auth:sanctum')->group(function() {
    Route::apiResource('cart-items', CartController::class)->except(['show', 'edit', 'create']);
    Route::post('checkout', [CheckoutController::class, 'placeOrder']);
});

?>
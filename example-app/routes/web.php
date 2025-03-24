<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/', function () {
    return view('index');  // Returns the 'index.blade.php' view
});

Route::get('/huid', function () {
    return view('huid');  
});

Route::get('/acu', function () {
    return view('acu');  
});

Route::get('/tarieven', function () {
    return view('tarieven');  
});

Route::get('/about', function () {
    return view('about');  
});

Route::get('/contact', function () {
    return view('contact');  
});

Route::get('/shop', function () {
    return view('shop');  
});

<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/home', function () {
    return Inertia::render('Home');
})->name('home');
// ->middleware(['auth', 'verified']) --Taken out for now, place before the route if you want to use it

Route::get('/acupuntuur', function () {
    return Inertia::render('Acupuntuur');
})->name('acupuntuur');

Route::get('/contact', function () {
    return Inertia::render('Contact');
})->name('contact');

Route::get('/lazerontharing', function () {
    return Inertia::render('Lazerontharing');
})->name('lazerontharing');

Route::get('/shop', function () {
    return Inertia::render('Shop');
})->name('shop');

Route::get('/tarieven', function () {
    return Inertia::render('Tarieven');
})->name('tarieven');

Route::get('/huidaandoeningen', function () {
    return Inertia::render('Huidaandoeningen');
})->name('huidaandoeningen');

Route::get('/onze-kliniek', function () {
    return Inertia::render('Onze-kliniek');
})->name('onze-kliniek');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';

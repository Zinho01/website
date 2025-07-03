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
})->name('welcome');

// Routes that can be grouped with common structure, simply add the name of a new page to the array if needed
$staticPages = [
    'home' => 'Home',
    'acupuntuur' => 'Acupuntuur',
    'contact' => 'Contact',
    'lazerontharing' => 'Lazerontharing',
    'shop' => 'Shop',
    'tarieven' => 'Tarieven',
    'huidaandoeningen' => 'Huidaandoeningen',
    'onze-kliniek' => 'OnzeKliniek',
]; 

foreach ($staticPages as $uri => $component) {
    Route::get("/{$uri}", fn() => Inertia::render($component))->name($uri);
}

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {  
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::fallback(function () { // This route will catch all undefined routes and redirect to a NotFound page
    return Inertia::render('NotFound'); // Make sure NotFound.tsx exists and hasn't been deleted/replaced by accident
});

require __DIR__.'/auth.php';
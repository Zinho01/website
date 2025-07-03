<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

Schema::create('product_variants', function (Blueprint $table) {
    $table->id();
    $table->foreignId('product_id')->constrained()->onDelete('cascade');
    $table->string('sku')->unique();
    $table->decimal('price', 10, 2);
    $table->unsignedInteger('stock')->default(0);
    $table->timestamps();
});

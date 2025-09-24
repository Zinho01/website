<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

Schema::create('variant_attributes', function (Blueprint $table) {
    $table->id();
    $table->string('name');
    $table->string('slug')->unique();
});

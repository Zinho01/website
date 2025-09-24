<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

Schema::create('variant_options', function (Blueprint $table) {
    $table->id();
    $table->foreignId('variant_attribute_id')->constrained()->onDelete('cascade');
    $table->string('value');
});

<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up() {
        Schema::create('product_variant_option', function (Blueprint $table) {
            $table->id();
            $table->foreignId('product_variant_id')->constrained()->onDelete('cascade');
            $table->foreignId('variant_option_id')->constrained()->onDelete('cascade');
        });
    }

    public function down() {
        Schema::dropIfExists('product_variant_option');
    }
};

?>

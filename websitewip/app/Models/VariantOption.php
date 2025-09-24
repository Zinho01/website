<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class VariantOption extends Model
{
    public $timestamps = false;

    protected $fillable = ['variant_attribute_id', 'value'];

    public function attribute()
    {
        return $this->belongsTo(VariantAttribute::class);
    }

    public function productVariants()
    {
        return $this->belongsToMany(ProductVariant::class, 'product_variant_option');
    }
}

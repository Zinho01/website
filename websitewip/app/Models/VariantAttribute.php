<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class VariantAttribute extends Model
{
    public $timestamps = false; // this table doesn't use created_at/updated_at

    protected $fillable = ['name', 'slug'];

    public function options()
    {
        return $this->hasMany(VariantOption::class);
    }
}

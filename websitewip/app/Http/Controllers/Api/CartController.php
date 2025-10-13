<?php

namespace App\Http\Controllers\Api;

use App\Models\Category;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\CartItem;
use Illuminate\Support\Facades\Auth;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;

class CartController extends Controller {
    use AuthorizesRequests;

    public function index(Request $r) {
        return CartItem::with('variant.product')
            ->where('user_id', $r->user()->id)
            ->get();
    }

    public function store(Request $r) {
        $r->validate([
            'variant_id' => 'required|exists:product_variants,id',
            'quantity' => 'required|integer|min:1'
        ]);

        $item = CartItem::updateOrCreate(
            [
                'user_id' => $r->user()->id,
                'product_variant_id' => $r->variant_id
            ],
            ['quantity' => $r->quantity]
        );

        return response()->json($item->load('variant.product'), 201);
    }

    public function update(Request $r, CartItem $cartItem) {
        $this->authorize('modify', $cartItem);

        $r->validate([
            'quantity' => 'required|integer|min:1'
        ]);

        $cartItem->update(['quantity' => $r->quantity]);
        return response()->json($cartItem);
    }

    public function destroy(CartItem $cartItem) {
        $this->authorize('modify', $cartItem);
        $cartItem->delete();

        return response()->json(null, 204);
    }
}

?>
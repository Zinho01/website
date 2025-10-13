<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\CartItem;
use App\Models\Order;
use App\Models\OrderItem;

class CheckoutController extends Controller {

    public function placeOrder(Request $r) {
        $user = $r->user();

        $cartItems = CartItem::with('variant')
            ->where('user_id', $user->id)
            ->get();

        if ($cartItems->isEmpty()) {
            return response()->json(['message' => 'Cart is empty'], 422);
        }

        $order = Order::create([
            'user_id' => $user->id,
            'total_amount' => 0
        ]);

        $total = 0;

        foreach ($cartItems as $ci) {
            $price = $ci->variant->price;

            OrderItem::create([
                'order_id' => $order->id,
                'product_variant_id' => $ci->variant->id,
                'quantity' => $ci->quantity,
                'unit_price' => $price
            ]);

            $total += $price * $ci->quantity;
            $ci->delete();
        }

        $order->update(['total_amount' => $total]);

        return response()->json([
            'message' => 'Order placed',
            'order' => $order->load('items.variant.product')
        ], 201);
    }
}

?>
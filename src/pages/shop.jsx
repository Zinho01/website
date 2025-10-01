import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ShoppingCart, X } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Hydraterende Dagcrème",
    price: 24.95,
    image: "https://via.placeholder.com/400x300?text=Dagcrème",
  },
  {
    id: 2,
    name: "Anti-Aging Serum",
    price: 39.99,
    image: "https://via.placeholder.com/400x300?text=Serum",
  },
  {
    id: 3,
    name: "Lippenbalsem met Shea Butter",
    price: 9.5,
    image: "https://via.placeholder.com/400x300?text=Lippenbalsem",
  },
  {
    id: 4,
    name: "Verzorgende Handcrème",
    price: 12.0,
    image: "https://via.placeholder.com/400x300?text=Handcrème",
  },
];

export default function Shop() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [orders, setOrders] = useState([]);

  // Haal eerdere bestellingen uit localStorage
  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(savedOrders);
  }, []);

  const addToCart = (product) => {
    setCart((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const getTotal = () => {
    return cart
      .reduce((sum, item) => sum + item.price * item.qty, 0)
      .toFixed(2);
  };

  // Genereer ordernummer
  const generateOrderNumber = () => {
    const date = new Date();
    const yyyymmdd = date.toISOString().slice(0, 10).replace(/-/g, ""); // bv. 20251001
    const random = Math.floor(1000 + Math.random() * 9000); // random 4 cijfers
    return `ORD-${yyyymmdd}-${random}`;
  };

  const checkout = () => {
    if (cart.length === 0) return;

    const order = {
      id: generateOrderNumber(),
      items: cart,
      total: getTotal(),
      date: new Date().toLocaleString("nl-NL"), // Datum + tijd in NL formaat
    };

    console.log("Nieuwe bestelling geplaatst:", order);

    // Voeg order toe aan bestaande orders
    const updatedOrders = [...orders, order];
    setOrders(updatedOrders);
    localStorage.setItem("orders", JSON.stringify(updatedOrders));

    // Cart leegmaken
    setCart([]);
    setIsCartOpen(false);

    alert(`Bedankt voor je bestelling! ✅\nOrdernummer: ${order.id}`);
  };

  // ✅ Nieuwe functie: alle bestellingen resetten
  const resetOrders = () => {
    if (window.confirm("Weet je zeker dat je alle bestellingen wilt verwijderen?")) {
      setOrders([]);
      localStorage.removeItem("orders");
    }
  };

  return (
    <div className="bg-zinc-100 text-neutral-900 min-h-screen px-6 py-10">
      <div className="flex justify-between items-center max-w-6xl mx-auto mb-10">
        <motion.h1
          className="text-4xl sm:text-5xl font-extrabold text-pink-300"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          The Beauty Clinic
        </motion.h1>
        <button
          onClick={() => setIsCartOpen(true)}
          className="relative bg-pink-300 text-white p-3 rounded-xl hover:bg-pink-400 transition-all"
        >
          <ShoppingCart className="w-6 h-6" />
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
              {cart.reduce((sum, item) => sum + item.qty, 0)}
            </span>
          )}
        </button>
      </div>

      {/* Producten */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <motion.div
            key={product.id}
            className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300"
            whileHover={{ scale: 1.02 }}
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-56 object-cover rounded-t-2xl"
            />
            <div className="p-5">
              <h2 className="text-lg font-semibold mb-1">{product.name}</h2>
              <p className="text-pink-300 font-bold text-lg">
                €{product.price.toFixed(2)}
              </p>
              <button
                onClick={() => addToCart(product)}
                className="mt-4 w-full bg-pink-300 hover:bg-pink-400 text-white font-medium py-2 rounded-xl transition-all"
              >
                Voeg toe aan winkelwagen
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Cart*/}
      {isCartOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end z-50">
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            className="bg-white w-full sm:w-96 h-full shadow-xl p-6 flex flex-col"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Winkelwagen</h2>
              <button onClick={() => setIsCartOpen(false)}>
                <X className="w-6 h-6 text-neutral-600" />
              </button>
            </div>

            {/* Producten in Cart */}
            <div className="flex-1 overflow-y-auto space-y-4">
              {cart.length === 0 ? (
                <p className="text-neutral-500">Je winkelwagen is leeg.</p>
              ) : (
                cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between items-center border-b pb-2"
                  >
                    <div>
                      <h3 className="font-semibold">{item.name}</h3>
                      <p className="text-sm text-neutral-600">
                        {item.qty}x €{item.price.toFixed(2)}
                      </p>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 text-sm"
                    >
                      Verwijder
                    </button>
                  </div>
                ))
              )}
            </div>

            {/* Checkout */}
            {cart.length > 0 && (
              <div className="mt-6">
                <p className="text-lg font-semibold mb-2">
                  Totaal: €{getTotal()}
                </p>
                <button
                  onClick={checkout}
                  className="w-full bg-pink-300 hover:bg-pink-400 text-white font-medium py-3 rounded-xl transition-all"
                >
                  Afrekenen
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}

      {/* Eerdere bestellingen */}
      {orders.length > 0 && (
        <div className="max-w-6xl mx-auto mt-16">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">Eerdere bestellingen</h2>
            <button
              onClick={resetOrders}
              className="bg-red-500 hover:bg-red-600 text-white text-sm font-medium px-4 py-2 rounded-xl transition-all"
            >
              Opschonen
            </button>
          </div>
          <div className="space-y-4">
            {orders.map((order, i) => (
              <div key={`${order.id}-${i}`} className="bg-white p-4 rounded-xl shadow-sm">
                <p className="font-medium text-neutral-700">
                  Ordernummer: <span className="text-pink-500">{order.id}</span>
                </p>
                <p className="text-neutral-600">Besteld op: {order.date}</p>
                <ul className="list-disc pl-6 text-neutral-600">
                  {order.items.map((item, j) => (
                    <li key={`${order.id}-${item.id}-${j}`}>
                      {item.qty}x {item.name} (€{item.price.toFixed(2)})
                    </li>
                  ))}
                </ul>
                <p className="mt-2 font-bold text-pink-400">
                  Totaal: €{order.total}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
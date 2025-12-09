import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ShoppingCart, X } from "lucide-react";
import { fetchProducts } from "../api/products";

export default function Shop() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [orders, setOrders] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  // Haal producten op van de API
  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true);
        const data = await fetchProducts();
        // Map API response to shop format and filter only active products
        const formattedProducts = data
          .filter((product) => product.is_active) // Only show active products
          .map((product) => ({
            id: product.id,
            name: product.name,
            price: parseFloat(product.base_price) || 0,
            description: product.description,
            image: product.image ? `http://localhost:8000/storage/${product.image}` : null,
            is_active: product.is_active,
          }));
        setProducts(formattedProducts);
        setError(null);
      } catch (err) {
        console.error("Failed to load products:", err);
        setError("Failed to load products. Please try again later.");
        // Fallback to empty products
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

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
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 max-w-7xl mx-auto mb-10">
        <motion.h1
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-pink-300"
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
      {loading && (
        <div className="max-w-6xl mx-auto text-center py-10">
          <p className="text-lg text-neutral-600">Producten laden...</p>
        </div>
      )}

      {error && (
        <div className="max-w-6xl mx-auto bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
          {error}
        </div>
      )}

      {!loading && products.length === 0 && !error && (
        <div className="max-w-6xl mx-auto text-center py-10">
          <p className="text-lg text-neutral-600">Geen producten beschikbaar.</p>
        </div>
      )}

      {!loading && products.length > 0 && (
        <>
          <div className="max-w-7xl mx-auto">
            {/* Pagination Info */}
            <div className="mb-6 text-center text-sm text-gray-600">
              Getoond: {((currentPage - 1) * productsPerPage) + 1} - {Math.min(currentPage * productsPerPage, products.length)} van {products.length} producten
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products
                .slice(
                  (currentPage - 1) * productsPerPage,
                  currentPage * productsPerPage
                )
                .map((product) => (
            <motion.div
              key={product.id}
              className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col"
              whileHover={{ scale: 1.02 }}
            >
              {product.image && (
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full aspect-square object-contain rounded-t-2xl bg-white p-2"
                />
              )}
              <div className="p-5 flex flex-col h-full">
                <h2 className="text-lg font-semibold mb-2 line-clamp-2">{product.name}</h2>
                {product.description && (
                  <p className="text-gray-600 text-sm mb-3 line-clamp-3 flex-grow">
                    {product.description}
                  </p>
                )}
                <div>
                  <p className="text-pink-300 font-bold text-lg mb-2">
                    €{product.price.toFixed(2)}
                  </p>
                  {product.description && (
                    <button
                      onClick={() => setSelectedProduct(product)}
                      className="w-full text-center text-pink-300 hover:text-pink-400 text-sm underline mb-3 transition-colors"
                    >
                      Lees meer
                    </button>
                  )}
                  <button
                    onClick={() => addToCart(product)}
                    className="w-full bg-pink-300 hover:bg-pink-400 text-white font-medium py-2 rounded-xl transition-all"
                  >
                    Voeg toe aan winkelwagen
                  </button>
                </div>
              </div>
            </motion.div>
            ))}
            </div>

            {/* Pagination Controls */}
            <div className="mt-12 flex justify-center items-center gap-2">
              <button
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 bg-pink-300 hover:bg-pink-400 disabled:bg-gray-300 text-white rounded-lg transition-colors"
              >
                Vorige
              </button>

              {Array.from({ length: Math.ceil(products.length / productsPerPage) }).map(
                (_, index) => (
                  <button
                    key={index + 1}
                    onClick={() => setCurrentPage(index + 1)}
                    className={`px-3 py-2 rounded-lg transition-colors ${
                      currentPage === index + 1
                        ? 'bg-pink-300 text-white'
                        : 'bg-gray-200 hover:bg-gray-300'
                    }`}
                  >
                    {index + 1}
                  </button>
                )
              )}

              <button
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, Math.ceil(products.length / productsPerPage)))}
                disabled={currentPage === Math.ceil(products.length / productsPerPage)}
                className="px-4 py-2 bg-pink-300 hover:bg-pink-400 disabled:bg-gray-300 text-white rounded-lg transition-colors"
              >
                Volgende
              </button>
            </div>
          </div>
        </>
      )}      {/* Modal for full description */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="p-6 sm:p-8">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">{selectedProduct.name}</h2>
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {selectedProduct.image && (
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full aspect-square object-contain rounded-lg bg-gray-100 p-4 mb-6"
                />
              )}

              <div className="mb-6">
                <p className="text-2xl font-semibold text-pink-300 mb-4">
                  €{selectedProduct.price.toFixed(2)}
                </p>
                {selectedProduct.description && (
                  <div className="prose prose-sm sm:prose max-w-none">
                    <p className="text-gray-700 whitespace-pre-wrap leading-relaxed">
                      {selectedProduct.description}
                    </p>
                  </div>
                )}
              </div>

              <button
                onClick={() => {
                  addToCart(selectedProduct);
                  setSelectedProduct(null);
                }}
                className="w-full bg-pink-300 hover:bg-pink-400 text-white font-medium py-3 rounded-xl transition-all"
              >
                Voeg toe aan winkelwagen
              </button>
            </div>
          </motion.div>
        </div>
      )}{/* Cart*/}
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
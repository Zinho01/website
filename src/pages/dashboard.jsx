import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Trash2, Edit, Plus } from "lucide-react";
import { fetchProducts } from "../api/products";

export default function Dashboard() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    base_price: "",
    description: "",
    sku: "",
    is_active: true,
  });
  const [showForm, setShowForm] = useState(false);

  // Fetch products on mount
  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      setLoading(true);
      const data = await fetchProducts();
      setProducts(data);
      setError(null);
    } catch (err) {
      console.error("Failed to load products:", err);
      setError("Failed to load products");
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const url = editingId
        ? `http://localhost:8000/api/products/${editingId}`
        : "http://localhost:8000/api/products";

      const method = editingId ? "PUT" : "POST";

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      // Reset form and reload
      setFormData({
        name: "",
        base_price: "",
        description: "",
        sku: "",
        is_active: true,
      });
      setEditingId(null);
      setShowForm(false);
      await loadProducts();
    } catch (err) {
      console.error("Error saving product:", err);
      setError("Failed to save product");
    }
  };

  const handleEdit = (product) => {
    setFormData({
      name: product.name,
      base_price: product.base_price,
      description: product.description || "",
      sku: product.sku || "",
      is_active: product.is_active,
    });
    setEditingId(product.id);
    setShowForm(true);
  };

  const handleDelete = async (id, name) => {
    if (
      window.confirm(
        `Weet u zeker dat u product "${name}" wilt verwijderen?`
      )
    ) {
      try {
        const response = await fetch(
          `http://localhost:8000/api/products/${id}`,
          {
            method: "DELETE",
          }
        );

        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }

        await loadProducts();
      } catch (err) {
        console.error("Error deleting product:", err);
        setError("Failed to delete product");
      }
    }
  };

  const handleCancel = () => {
    setFormData({
      name: "",
      base_price: "",
      description: "",
      sku: "",
      is_active: true,
    });
    setEditingId(null);
    setShowForm(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800">Producten Beheer</h1>
          <button
            onClick={() => setShowForm(!showForm)}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            <Plus className="w-5 h-5" />
            Nieuw Product
          </button>
        </div>

        {/* Error message */}
        {error && (
          <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
            {error}
          </div>
        )}

        {/* Form */}
        {showForm && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-lg shadow-lg p-6 mb-8"
          >
            <h2 className="text-2xl font-bold mb-6">
              {editingId ? "Product Bewerken" : "Nieuw Product"}
            </h2>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Productnaam *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Bijv. Hydraterende Dagcrème"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Prijs (€) *
                  </label>
                  <input
                    type="number"
                    name="base_price"
                    value={formData.base_price}
                    onChange={handleInputChange}
                    step="0.01"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="24.95"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    SKU
                  </label>
                  <input
                    type="text"
                    name="sku"
                    value={formData.sku}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="PROD001"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Beschrijving
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows="4"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Voer een beschrijving in..."
                />
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="is_active"
                  checked={formData.is_active}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
                />
                <label className="ml-2 text-sm font-medium text-gray-700">
                  Product actief
                </label>
              </div>

              <div className="flex gap-3 justify-end">
                <button
                  type="button"
                  onClick={handleCancel}
                  className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition"
                >
                  Annuleren
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
                >
                  {editingId ? "Bijwerken" : "Toevoegen"}
                </button>
              </div>
            </form>
          </motion.div>
        )}

        {/* Loading state */}
        {loading && (
          <div className="text-center py-10">
            <p className="text-gray-600 text-lg">Producten laden...</p>
          </div>
        )}

        {/* Products Grid */}
        {!loading && products.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {products.map((product) => (
              <motion.div
                key={product.id}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-lg shadow-md p-5 flex flex-col justify-between hover:shadow-lg transition"
              >
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {product.name}
                  </h3>
                  <hr className="my-3" />

                  <p className="text-2xl font-semibold text-green-600 mb-3">
                    €{parseFloat(product.base_price || 0).toFixed(2)}
                  </p>

                  {product.description && (
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                      {product.description}
                    </p>
                  )}

                  {product.sku && (
                    <p className="text-gray-500 text-xs mb-2">SKU: {product.sku}</p>
                  )}

                  <div className="mb-4">
                    {product.is_active ? (
                      <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800">
                        Actief
                      </span>
                    ) : (
                      <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-red-100 text-red-800">
                        Inactief
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex gap-3 mt-4 pt-3 border-t border-gray-100">
                  <button
                    onClick={() => handleEdit(product)}
                    className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition text-sm"
                  >
                    <Edit className="w-4 h-4" />
                    Bewerk
                  </button>

                  <button
                    onClick={() => handleDelete(product.id, product.name)}
                    className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition text-sm"
                  >
                    <Trash2 className="w-4 h-4" />
                    Verwijder
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Empty state */}
        {!loading && products.length === 0 && !error && (
          <div className="text-center py-10 bg-white rounded-lg shadow-md">
            <p className="text-lg text-gray-500">Geen producten gevonden.</p>
            <p className="text-gray-400">Klik op 'Nieuw Product' om er een toe te voegen.</p>
          </div>
        )}
      </div>
    </div>
  );
}

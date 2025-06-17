import React, { useState } from "react";
import { motion } from "framer-motion";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const phoneNumber = "31620801001";
    const prefilledMessage = `Hallo! Mijn naam is ${formData.name}. Mijn e-mailadres is ${formData.email}. Bericht: ${formData.message}`;

    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const baseUrl = isMobile
      ? "https://api.whatsapp.com/send"
      : "https://web.whatsapp.com/send";

    const whatsappUrl = `${baseUrl}?phone=${phoneNumber}&text=${encodeURIComponent(
      prefilledMessage
    )}`;

    alert(
      "Bedankt voor het versturen van uw bericht! We nemen zo spoedig mogelijk contact met u op via WhatsApp."
    );

    window.open(whatsappUrl, "_blank");

    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <main className="bg-zinc-100 text-black min-h-screen p-4 sm:p-6">
      <div className="bg-zinc-200 text-neutral-900 p-6 rounded-lg shadow-lg max-w-2xl mx-auto mt-10 mb-5">
        <motion.h2
          className="text-2xl font-semibold text-pink-300 mb-4 text-center"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          Neem Contact Op
        </motion.h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Naam"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-white text-neutral-900 placeholder-neutral-500 border border-neutral-400 focus:outline-none focus:ring-2 focus:ring-pink-300"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="E-mailadres"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-white text-neutral-900 placeholder-neutral-500 border border-neutral-400 focus:outline-none focus:ring-2 focus:ring-pink-300"
            required
          />
          <textarea
            name="message"
            placeholder="Je bericht..."
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full p-3 rounded-lg bg-white text-neutral-900 placeholder-neutral-500 border border-neutral-400 focus:outline-none focus:ring-2 focus:ring-pink-300"
            required
          />
          <motion.button
            type="submit"
            className="bg-neutral-900 hover:bg-pink-300 text-white px-6 py-3 rounded-lg transition duration-300 w-full"
            whileHover={{ scale: 1.03 }}
          >
            Verstuur via WhatsApp
          </motion.button>
        </form>
      </div>
    </main>
  );
};

export default ContactForm;
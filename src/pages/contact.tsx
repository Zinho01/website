import React, { useState } from "react";
import { motion } from "framer-motion";

const ContactForm: React.FC = () => {
const [formData, setFormData] = useState({ name: "", email: "", message: "" });

const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
};

const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
};

return (
    <div className="bg-neutral-900 text-white p-6 rounded-lg shadow-lg max-w-2xl mx-auto mt-10">
    <motion.h2 
        className="text-2xl font-semibold text-gray-200 mb-4 text-center"initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>Neem Contact Op
    </motion.h2>
    <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text"name="name"placeholder="Naam"value={formData.name}onChange={handleChange}className="w-full p-3 rounded-lg bg-neutral-800 text-gray-200 placeholder-gray-500 border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-gray-500"/>
        <input type="email"name="email"placeholder="E-mailadres"value={formData.email}onChange={handleChange}className="w-full p-3 rounded-lg bg-neutral-800 text-gray-200 placeholder-gray-500 border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-gray-500"/>
        <textarea name="message"placeholder="Je bericht..."value={formData.message}onChange={handleChange}rows={4}className="w-full p-3 rounded-lg bg-neutral-800 text-gray-200 placeholder-gray-500 border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-gray-500"/>
        <motion.button type="submit"className="bg-neutral-500 hover:bg-gray-400 text-white px-6 py-3 rounded-lg transition duration-300 w-full"whileHover={{ scale: 1.03 }}>Verstuur Bericht</motion.button>
    </form>
    </div>
);
};

export default ContactForm;
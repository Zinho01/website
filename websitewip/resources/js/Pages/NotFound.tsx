import React from 'react';
import { Link } from '@inertiajs/react';

const NotFound: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="text-center px-4 py-10">
                <h1 className="text-6xl font-bold text-red-600">404</h1>
                <p className="text-2xl mt-4 font-semibold text-gray-800">
                    Oeps! Pagina niet gevonden.
                </p>
                <p className="mt-2 text-gray-600">
                    De pagina die je zoekt bestaat niet of is verplaatst.
                </p>
                <Link
                    href="/"
                    className="mt-6 inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
                >
                    Terug naar de homepage
                </Link>
            </div>
        </div>
    );
};

export default NotFound;

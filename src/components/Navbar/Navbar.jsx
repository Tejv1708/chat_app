// src/components/Navbar.js
import React from 'react';

const Navbar = () => {
    return (
        <nav className="bg-gray-800 text-white px-4 py-2 flex justify-between items-center">
            <div className="text-xl font-bold">ChatApp</div>
            <div>
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full mr-2">
                    Sign Up
                </button>
                <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-full">
                    Login
                </button>
            </div>
        </nav>
    );
};

export default Navbar;

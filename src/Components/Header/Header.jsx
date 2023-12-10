import React from 'react';
import { LogoImage } from '../../Constants/constant';

const Header = () => {
    const menuItems = ['Begin', 'Features', 'Resources', 'Pricing'];
    return (
        <header className="bg-white p-4 border-mild-gray border border-b">
            <div className="container mx-auto flex items-center justify-between lg:w-11/12">

                {/* Logo */}
                <div className="text-black">
                    <img src={LogoImage} alt='logo' />
                </div>

                {/* Navigation Links */}
                <nav className="hidden md:flex space-x-4">
                    {menuItems.map((item, index) => (
                        <button
                            key={index}
                            className="text-black focus:outline-none"
                        >
                            {item}
                        </button>
                    ))}
                </nav>

                {/* Right Side */}
                <div className="flex items-center space-x-4">
                    {/* Language Dropdown */}
                    <div className="relative inline-block text-black">
                        <button className="hover:text-gray-300 focus:outline-none">
                            Language
                        </button>
                        {/* Dropdown Menu */}
                        <ul className="absolute hidden bg-white text-gray-800 p-2 mt-2 space-y-2 rounded-md">
                            {/* Language Options */}
                            <li><button className="block px-4 py-2 text-sm focus:outline-none">English</button></li>
                            <li><button className="block px-4 py-2 text-sm focus:outline-none">Spanish</button></li>
                            {/* Add more language options as needed */}
                        </ul>
                    </div>

                    {/* Login Link */}
                    <button className="text-black focus:outline-none">Login</button>

                    {/* Signup Button */}
                    <button className="bg-white text-blue-500 px-4 py-2 rounded-md">Sign Up</button>
                </div>

            </div>
        </header>
    );
};

export default Header;

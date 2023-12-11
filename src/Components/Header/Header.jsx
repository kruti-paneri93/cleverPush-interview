// import React, { useState } from 'react';
// import { LogoImage } from '../../Constants/constant';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faLanguage, faRightToBracket, faBars } from '@fortawesome/free-solid-svg-icons'


// const Header = () => {
//     const menuItems = ['Begin', 'Features', 'Resources', 'Pricing'];
//     const [showNav, setShowNav] = useState(false);

//     return (
//         <header className="bg-white p-4 border-mild-gray border border-b">
//             <div className="container mx-auto flex items-center justify-between lg:w-11/12">

//                 {/* Toggle Button for Mobile */}
//                 <div className="lg:hidden">
//                     <button
//                         className="text-black focus:outline-none"
//                         onClick={() => setShowNav(!showNav)}
//                     >
//                         <FontAwesomeIcon icon={faBars} />
//                     </button>
//                 </div>

//                 {/* Logo */}
//                 <div className="text-black">
//                     <img src={LogoImage} alt='logo' />
//                 </div>

//                 {/* Navigation Links for Desktop */}
//                 <nav className="hidden lg:flex space-x-4">
//                     {menuItems.map((item, index) => (
//                         <button
//                             key={index}
//                             className="text-black focus:outline-none"
//                         >
//                             {item}
//                         </button>
//                     ))}
//                 </nav>

//                 {/* Mobile Navigation Links */}
//                 <div className={`lg:hidden ${showNav ? 'block' : 'hidden'}`}>
//                     <nav className="flex flex-col space-y-4">
//                         {menuItems.map((item, index) => (
//                             <button
//                                 key={index}
//                                 className="text-black focus:outline-none"
//                             >
//                                 {item}
//                             </button>
//                         ))}
//                     </nav>
//                 </div>

//                 {/* Right Side Icons */}
//                 <div className="flex items-center space-x-4">
//                     {/* Language Dropdown */}
//                     <div className="relative inline-block text-black">
//                         <button className="hover:text-gray-300 focus:outline-none">
//                             {/* Replace with your language icon */}
//                             <FontAwesomeIcon icon={faLanguage} />
//                         </button>
//                         {/* Dropdown Menu */}
//                         <ul className="absolute hidden bg-white text-gray-800 p-2 mt-2 space-y-2 rounded-md">
//                             {/* Language Options */}
//                             <li><button className="block px-4 py-2 text-sm focus:outline-none">English</button></li>
//                             <li><button className="block px-4 py-2 text-sm focus:outline-none">Spanish</button></li>
//                             {/* Add more language options as needed */}
//                         </ul>
//                     </div>

//                     {/* Login Link */}
//                     <button className="text-black focus:outline-none">
//                         {/* Replace with your login icon */}
//                         <FontAwesomeIcon icon={faRightToBracket} />
//                     </button>


//                 </div>

//             </div>
//         </header>
//     );
// };

// export default Header;

import React, { useState } from 'react';
import { LogoImage } from '../../Constants/constant';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLanguage, faRightToBracket, faBars } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    const menuItems = ['Begin', 'Features', 'Resources', 'Pricing'];
    const [showNav, setShowNav] = useState(false);

    return (
        <header className="bg-white p-4 border-mild-gray border border-b relative">
            <div className="container mx-auto flex items-center justify-between lg:w-11/12">

                {/* Toggle Button for Mobile */}
                <div className="lg:hidden">
                    <button
                        className="text-black focus:outline-none"
                        onClick={() => setShowNav(!showNav)}
                    >
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                </div>

                {/* Logo */}
                <div className="text-black">
                    <img src={LogoImage} alt='logo' />
                </div>

                {/* Navigation Links for Desktop */}
                <nav className="hidden lg:flex space-x-4">
                    {menuItems.map((item, index) => (
                        <button
                            key={index}
                            className="text-black focus:outline-none"
                        >
                            {item}
                        </button>
                    ))}
                </nav>

                {/* Right Side Text Links */}
                <div className="hidden lg:flex items-center space-x-4">
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

                {/* Mobile Navigation Links */}
                <div className={`lg:hidden ${showNav ? 'block' : 'hidden'} absolute bg-white w-full mt-2 border rounded-md transition-transform transform top-14 left-0`}>
                    <nav className="flex flex-col space-y-4">
                        {menuItems.map((item, index) => (
                            <button
                                key={index}
                                className="text-black focus:outline-none"
                            >
                                {item}
                            </button>
                        ))}
                    </nav>
                </div>

                {/* Right Side Icons for Smaller Devices */}
                <div className="lg:hidden flex items-center space-x-4">
                    {/* Language Dropdown */}
                    <div className="relative inline-block text-black">
                        <button className="hover:text-gray-300 focus:outline-none">
                            <FontAwesomeIcon icon={faLanguage} />
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
                    <button className="text-black focus:outline-none">
                        <FontAwesomeIcon icon={faRightToBracket} />
                    </button>
                </div>

            </div>
        </header>
    );
};

export default Header;

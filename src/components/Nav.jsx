import { useState } from "react";


const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="bg-gray-800 text-white shadow-lg fixed w-full z-10">
            <div className="container mx-auto px-4 flex justify-between items-center py-4">
                <a href="/" className="text-2xl font-bold">
                    Wave<span className="text-blue-500">Solution</span>
                </a>
                <button
                    onClick={toggleMenu}
                    className="lg:hidden text-gray-200 focus:outline-none"
                    aria-label="Toggle navigation"
                >
                    <span className="rotate-12 fa fa-bars">|||</span>
                </button>

                <div className={`lg:flex ${isOpen ? 'block' : 'hidden'} w-full lg:w-auto`}>
                    <ul className="lg:flex lg:space-x-6 mt-4 lg:mt-0 space-y-4 lg:space-y-0 text-lg">
                        <li>
                            <a href="#home" className="block hover:text-blue-400 transition">Home</a>
                        </li>
                        <li>
                            <a href="#about" className="block hover:text-blue-400 transition">About</a>
                        </li>
                        <li>
                            <a href="#services" className="block hover:text-blue-400 transition">Services</a>
                        </li>
                        <li>
                            <a href="#portfolio" className="block hover:text-blue-400 transition">Portfolio</a>
                        </li>
                        <li>
                            <a href="#pricing" className="block hover:text-blue-400 transition">Pricing</a>
                        </li>
                        <li>
                            <a href="#blog" className="block hover:text-blue-400 transition">Blog</a>
                        </li>
                        <li>
                            <a href="#contact" className="block hover:text-blue-400 transition">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Nav;

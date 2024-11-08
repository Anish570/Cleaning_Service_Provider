import { useState } from "react";
import { Link } from "react-router-dom";


const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const menuitems = [
        {
            title: "Home",
            link: "/",
        },
        {
            title: "About",
            link: "/about",
        }, {
            title: "Services",
            link: "/",
        }, {
            title: "Portfolio",
            link: "/",
        }, {
            title: "Pricing",
            link: "/",
        }, {
            title: "Blog",
            link: "/",
        },
        {
            title: "Contact ",
            link: "#contact",
        },
    ]
    return (
        <div className="absolute z-10 w-full overflow-hidden">
            <div className="bg-blue-500 text-white h-[22px] text-[12px] text-left pl-[10%] mb-2">
                <p> <span className="text-[#fff9]"> Phone no:</span> +00 1234 567 or <span className="text-[#fff9]">  email us:</span> emailsample@email.com</p>
            </div>
            <div className="bg-[rgba(255,255,255,0.2)] text-white shadow-lg w-full h-[85px]">
                <div className="container px-[10%] flex h-[85px] justify-between items-center">
                    <Link to="/" className="text-[20px] font-bold uppercase">
                        Wave<span className="text-[#f3e53d]">Solution</span>
                    </Link>
                    <Link to=""
                        onClick={toggleMenu}
                        className="lg:hidden text-gray-200 focus:outline-none"
                        aria-label="Toggle navigation"
                    >
                        <span className="rotate-12 fa fa-bars">|||</span>
                    </Link>

                    <div className={`lg:flex ${isOpen ? 'block' : 'hidden'} w-full lg:w-auto`}>
                        <ul className="lg:flex lg:space-x-6 mt-4 lg:mt-0 space-y-4 lg:space-y-0 text-lg">
                            {
                                menuitems.map((item) => (
                                    <li key={item.title}>
                                        <Link to={item.link} className="block hover:text-[#f3e53d] transition" >
                                            {item.title}
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Nav;

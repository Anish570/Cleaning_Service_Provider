import { useState } from "react";
import { Link } from "react-router-dom";
import { MdMenu } from "react-icons/md";

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
        <div className="absolute z-10 w-full ">
            <div className="bg-blue-500 text-white h-[22px] text-[12px] text-left pl-[10%] mb-2">
                <p> <span className="text-[#fff9]"> Phone no:</span> +00 1234 567 or <span className="text-[#fff9]">  email us:</span> emailsample@email.com</p>
            </div>
            <div className="bg-[rgba(255,255,255,0.2)] text-white shadow-lg w-full h-[85px]">
                <div className="relative px-[10%] flex h-[85px] justify-between items-center">
                    <Link to="/" className="text-[20px] font-bold uppercase">
                        Wave<span className="text-[#f3e53d]">Solution</span>
                    </Link>
                    <Link to=""
                        onClick={toggleMenu}
                        className="md:hidden text-gray-200 focus:outline-none"
                        aria-label="Toggle navigation"
                    >
                        <MdMenu />
                    </Link>

                    <div className={`hidden md:flex md:w-auto`}>
                        <ul className="md:flex md:space-x-6 mt-4 md:mt-0 space-y-4 md:space-y-0 text-lg">
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
                    {/* smaller device menu */}
                    <div className={`${isOpen ? 'block absolute right-[14%] w-fit h-[100px] overflow-y-auto text-left top-[80%] py-4 px-10 rounded-md bg-[rgba(255,255,255,0.4)]' : "hidden"}`}>
                        <ul className="text-black font-medium">
                            {
                                menuitems.map((item) => (
                                    <li key={item.title} className="">
                                        <Link to={item.link} className="hover:text-[#f3e53d] transition" >
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

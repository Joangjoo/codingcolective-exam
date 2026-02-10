import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <nav className="fixed top-0 left-0 w-full bg-white h-20 shadow-sm flex items-center justify-between px-8 z-50">

                <div>
                    <img src="../../src/assets/logo2.png" alt="Bacus" className="-translate-x-20 md:translate-x-0" />
                </div>

                <ul className="hidden md:flex items-center gap-10 font-medium">
                    <li>
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li>
                        <a href="#about" className="nav-link">About Us</a>
                    </li>
                    <li>
                        <a href="#service" className="nav-link">Service</a>
                    </li>
                    <li>
                        <a
                            href="#contact"
                            className="bg-[#252525] text-[#E96015] px-8 py-3 rounded-full hover:bg-[#E96015] hover:text-[#252525] transition-all"
                        >
                            Contact Us
                        </a>
                    </li>
                </ul>
                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden text-gray-900 z-50"
                >
                    {open ? <X size={32} /> : <Menu size={32} />}
                </button>
            </nav>

            <div
                className={`fixed inset-0 bg-white z-40 transform transition-transform duration-500 ease-in-out h-1/2 pt-10
        ${open ? "translate-y-0" : "-translate-y-full"}`}
            >
                <div className="flex flex-col items-center justify-center h-full gap-10 text-xl font-medium">
                    <Link onClick={() => setOpen(false)} to="/">Home</Link>
                    <a onClick={() => setOpen(false)} href="#about">About Us</a>
                    <a onClick={() => setOpen(false)} href="#service">Service</a>

                    <a
                        onClick={() => setOpen(false)}
                        href="#contact"
                        className="bg-[#252525] text-[#E96015] w-72 py-4 rounded-full text-center hover:bg-[#E96015] hover:text-[#252525] transition-all"
                    >
                        Contact Us
                    </a>
                </div>
            </div>
        </>
    );
};

export default Navbar;

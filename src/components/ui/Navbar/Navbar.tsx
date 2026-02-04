import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

import "./Navbar.css";

type NavbarProps = {
    colors: {
        primary: string;
        secondary: string;
    };
};

const navItems = [
    { name: "Home", path: "/" },
    { name: "Tours", path: "/tours" },
    { name: "About", path: "/about" },
];

const Navbar = ({ colors }: NavbarProps) => {
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setMenuOpen(false);
            }
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return (
        <nav className="navbar" style={{ backgroundColor: colors.primary }}>
            <div className="navbar-container">

                <div className="navbar-left">
                    <img
                        src="/assets/images/logo/fullLogo.png"
                        alt="Logo"
                        className="logo"
                    />
                </div>

                <ul className="nav-items">
                    {navItems.map((item) => (
                        <li key={item.path}>
                            <NavLink
                                to={item.path}
                                className={({ isActive }) =>
                                    isActive ? "nav-link active" : "nav-link"
                                }
                            >
                                {item.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>

                <div className="navbar-right">
                    <div className="language-buttons">
                        <button
                            className="lang-btn en-btn"
                            style={{
                                backgroundColor: "rgba(255,255,255,0.2)",
                                color: colors.secondary,
                            }}
                        >
                            <span className="flag">🇺🇸</span> EN
                        </button>
                        <button
                            className="lang-btn it-btn"
                            style={{
                                backgroundColor: "rgba(255,255,255,0.3)",
                                color: colors.secondary,
                            }}
                        >
                            <span className="flag">🇮🇹</span> IT
                        </button>
                    </div>
                </div>

                <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                    <img
                        src="/assets/icons/Icon.svg"
                        alt="Menu"
                        className="hamburger-icon"
                    />
                </div>

                {menuOpen && (
                    <div className="mobile-menu">
                        <ul className="mobile-nav-items">
                            {navItems.map((item) => (
                                <li key={item.path}>
                                    <NavLink
                                        to={item.path}
                                        className={({ isActive }) =>
                                            isActive ? "nav-link active" : "nav-link"
                                        }
                                        onClick={() => setMenuOpen(false)}
                                    >
                                        {item.name}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                        <div className="mobile-language-buttons">
                            <button
                                className="lang-btn en-btn"
                                style={{ backgroundColor: "rgba(255,255,255,0.2)" }}
                            >
                                <span className="flag">🇺🇸</span> EN
                            </button>
                            <button
                                className="lang-btn it-btn"
                                style={{ backgroundColor: "rgba(255,255,255,0.3)" }}
                            >
                                <span className="flag">🇮🇹</span> IT
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;

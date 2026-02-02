import { NavLink } from "react-router-dom";
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
    return (
        <nav
            className="navbar"
            style={{ backgroundColor: colors.primary }}
        >
            <div className="navbar-container ">

                <div className="navbar-logo">
                    <img
                        src={`${import.meta.env.BASE_URL}assets/images/logo/fullLogo.png`}
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
                                style={({ isActive }) =>
                                    isActive
                                        ? { borderColor: colors.secondary }
                                        : undefined
                                }
                            >
                                {item.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>

                <div className="language-buttons">
                    <button
                        className="lang-btn en-btn"
                        style={{ backgroundColor: "rgba(255,255,255,0.2)", color: colors.secondary }}
                    >
                        <span className="flag">🇺🇸</span> EN
                    </button>
                    <button
                        className="lang-btn it-btn"
                        style={{ backgroundColor: "rgba(255,255,255,0.3)", color: colors.secondary }}
                    >
                        <span className="flag">🇮🇹</span> IT
                    </button>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;
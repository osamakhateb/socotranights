import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Navbar.css";

const navItems = [
    { name: "Home", path: "/" },
    { name: "Tours", path: "/tours" },
    { name: "About", path: "/about" },
];

interface NavbarProps {
    Color: string;
    language: 'en' | 'ru';
    setLanguage: (lang: 'en' | 'ru') => void;
}

const Navbar = ({ Color, language, setLanguage }: NavbarProps) => {
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

    // دالة تغيير اللغة
    const handleLanguageChange = (lang: 'en' | 'ru') => {
        setLanguage(lang);
        setMenuOpen(false);
    };

    return (
        <nav className="navbar" style={{ backgroundColor: Color }}>
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
                            className={`lang-btn en-btn ${language === 'en' ? 'active-lang' : ''}`}
                            onClick={() => handleLanguageChange('en')}
                            style={{
                                backgroundColor: language === 'en' ? Color : "rgba(255,255,255,0.2)",
                                color: language === 'en' ? '#fff' : Color,
                                opacity: language === 'en' ? 1 : 0.7,
                                fontWeight: language === 'en' ? 'bold' : 'normal'
                            }}
                        >
                            <span className="flag">🇺🇸</span> EN
                        </button>
                        <button
                            className={`lang-btn ur-btn ${language === 'ru' ? 'active-lang' : ''}`}
                            onClick={() => handleLanguageChange('ru')}
                            style={{
                                backgroundColor: language === 'ru' ? Color : "rgba(255,255,255,0.3)",
                                color: language === 'ru' ? '#fff' : Color,
                                opacity: language === 'ru' ? 1 : 0.7,
                                fontWeight: language === 'ru' ? 'bold' : 'normal'
                            }}
                        >
                            <span className="flag">🇵🇰</span> UR
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
                                className={`lang-btn en-btn ${language === 'en' ? 'active-lang' : ''}`}
                                onClick={() => handleLanguageChange('en')}
                                style={{
                                    backgroundColor: language === 'en' ? Color : "rgba(255,255,255,0.2)",
                                    color: language === 'en' ? '#fff' : Color
                                }}
                            >
                                <span className="flag">🇺🇸</span> EN
                            </button>
                            <button
                                className={`lang-btn ru-btn ${language === 'ru' ? 'active-lang' : ''}`}
                                onClick={() => handleLanguageChange('ru')}
                                style={{
                                    backgroundColor: language === 'ru' ? Color : "rgba(255,255,255,0.3)",
                                    color: language === 'ru' ? '#fff' : Color
                                }}
                            >
                                <span className="flag">🇵🇰</span> RU
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
// VISTA
import { navItems } from "../data/data";

export default function Navbars({ isOpen, toggleMenu }) {

    return (
        <header>
            <nav className="nav" id="home">
                <div className="logo">
                    <img
                        src="img/logo-sin-fondo.png"
                        alt="Logo de Evolfusion"
                        className="logo__img"
                        
                    />
                </div>

                <ul className={`nav__list ${isOpen ? "show" : ""}`} id="nav__list">
                    {navItems.map(({ id, href, icon, label, disabled }) => (
                        <li
                            key={id}
                            className={`nav__li ${disabled ? "nav__li-disabled" : ""}`}
                        >
                            <a
                                className="nav__a"
                                href={href}
                                onClick={toggleMenu} 
                            >
                                <i className={icon}></i>{label}
                            </a>
                        </li>
                    ))}
                </ul>

                <div className="nav__bars" id="nav__bars" onClick={toggleMenu}>
                    <span className="nav__bar"></span>
                    <span className="nav__bar"></span>
                    <span className="nav__bar"></span>
                </div>
            </nav>
        </header>
    );
}

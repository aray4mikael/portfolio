import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <Link to="/" className="logo">
          <img src={logo} alt="Logo" />
          <span>Mikael</span>
        </Link>
        <div className="nav-links">
          <Link to="/">Início</Link>
          <Link to="/portfolio">Portfólio</Link>
          <a href="#contato">Contato</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

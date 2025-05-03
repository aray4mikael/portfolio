import { useState, useEffect } from "react";
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
        <div className="logo">
          <img src={logo} alt="Logo" />
          <span>Mikael</span>
        </div>
        <div className="nav-links">
          <a href="#sobre">Sobre</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contato">Contato</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

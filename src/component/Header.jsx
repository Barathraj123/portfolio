import React, { useState } from 'react';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <header>
      <nav>
        <a href="#home" className="logo">Barath</a>
        <button
          className={`menu-toggle ${isOpen ? 'open' : ''}`}
          aria-label="Toggle navigation"
          onClick={toggleMenu}
        >
          <span />
          <span />
          <span />
        </button>
        <ul className={`nav-links ${isOpen ? 'show' : ''}`}>
          <li><a href="#home" onClick={closeMenu}>Home</a></li>
          <li><a href="#about" onClick={closeMenu}>About</a></li>
          <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
          <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

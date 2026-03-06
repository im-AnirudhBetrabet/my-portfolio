import React, { useState } from 'react';

export default function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        document.body.style.overflow = !isMenuOpen ? 'hidden' : '';
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
        document.body.style.overflow = '';
    };

    return (
        <>
            <nav>
                <div className="nav-container">
                    <a href="#" className="logo">Anirudh.</a>
                    <div className="nav-links">
                        <a href="#about">About</a>
                        <a href="#skills">Skills</a>
                        <a href="#projects">Projects</a>
                        <a href="#contact">Contact Me</a>
                    </div>
                    <button 
                        className={`hamburger ${isMenuOpen ? 'active' : ''}`} 
                        onClick={toggleMenu} 
                        aria-label="Toggle Menu"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </nav>

            <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`} id="mobile-menu">
                <a href="#about" className="menu-link" onClick={closeMenu}>About</a>
                <a href="#skills" className="menu-link" onClick={closeMenu}>Skills</a>
                <a href="#projects" className="menu-link" onClick={closeMenu}>Project</a>
                <a href="#contact" className="menu-link" onClick={closeMenu}>Contact Me</a>
            </div>
        </>
    );
}
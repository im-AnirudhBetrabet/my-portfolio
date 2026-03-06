import React from 'react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="site-footer">
            <div className="footer-container">
                <p className="footer-copyright">&copy; {currentYear} Anirudh. All rights reserved.</p>
            </div>
        </footer>
    );
}
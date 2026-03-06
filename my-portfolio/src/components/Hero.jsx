import React from 'react';

export default function Hero() {
    return (
        <header style={{ position: 'relative' }}>
            <div className="title-card mac-glass animate-reveal">
                <div className="hero-badge">Hi, I'm</div>
                
                <h1>Anirudh</h1>
                
                <h2 className="hero-role">Applied AI & Data Systems Engineer</h2>
                
                <p className="hero-desc">
                    Engineer building <em><strong>machine learning models</strong></em> and <em><strong>intelligent data systems</strong></em>.
                </p>
                
                <div className="hero-buttons">
                    <a href="#contact" className="hero-btn btn-primary">Get In Touch</a>
                    <a href="https://drive.google.com/file/d/1pSjVe_pulk--2K0gtn1UmE7Rr4pI7j48/view?usp=drive_link" target='_blank' className="hero-btn btn-secondary">View Resume</a>
                    <a href="#projects" className="hero-btn btn-outline">View My Work</a>
                </div>
            </div>

            {/* Call to Scroll Indicator */}
            <a href="#about" className="scroll-indicator animate-reveal delay-1" aria-label="Scroll down">
                <div className="mouse">
                    <div className="wheel"></div>
                </div>
                <div className="chevron-container">
                    <svg className="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                </div>
            </a>
        </header>
    );
}
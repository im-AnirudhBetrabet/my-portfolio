import React, { useEffect, useRef } from 'react';

export default function Background() {
    const parallaxRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.scrollY;
            if (parallaxRef.current) {
                parallaxRef.current.style.transform = `translate3d(0, ${scrolled * -0.2}px, 0)`;
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <div className="fixed-bg"></div>
            <div id="parallax-bg" ref={parallaxRef}>
                <div className="bg-blob blob-1"></div>
                <div className="bg-blob blob-2"></div>
                <div className="bg-blob blob-3"></div>
            </div>
        </>
    );
}
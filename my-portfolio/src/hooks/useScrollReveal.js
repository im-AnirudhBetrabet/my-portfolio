import { useEffect } from 'react';

export default function useScrollReveal() {
    useEffect(() => {
        const revealElements = document.querySelectorAll('.scroll-reveal');
        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { root: null, rootMargin: '0px 0px -50px 0px', threshold: 0.1 });

        revealElements.forEach(el => revealObserver.observe(el));

        return () => {
            revealObserver.disconnect();
        };
    }, []);
}
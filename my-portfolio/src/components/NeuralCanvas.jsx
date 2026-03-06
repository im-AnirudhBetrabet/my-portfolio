import React, { useRef, useEffect } from 'react'

function NeuralCanvas() {
  const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let width, height;
        let particles = [];
        let animationFrameId;

        const initCanvas = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
            particles = [];
            const particleCount = Math.floor((width * height) / 35000);

            for (let i = 0; i < particleCount; i++) {
                particles.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    vx: (Math.random() - 0.5) * 0.3,
                    vy: (Math.random() - 0.5) * 0.3,
                    radius: Math.random() * 2 + 1.5
                });
            }
        };

        const animateCanvas = () => {
            animationFrameId = requestAnimationFrame(animateCanvas);
            ctx.clearRect(0, 0, width, height);

            ctx.fillStyle = 'rgba(139, 126, 112, 0.6)';
            ctx.strokeStyle = 'rgba(139, 126, 112, 0.25)';
            ctx.lineWidth = 1;

            particles.forEach(p => {
                p.x += p.vx;
                p.y += p.vy;

                if (p.x < 0 || p.x > width) p.vx *= -1;
                if (p.y < 0 || p.y > height) p.vy *= -1;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fill();
            });

            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 200) {
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(139, 126, 112, ${0.3 * (1 - distance / 200)})`;
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }
        };

        window.addEventListener('resize', initCanvas);
        initCanvas();
        animateCanvas();

        return () => {
            window.removeEventListener('resize', initCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return <canvas id="neural-canvas" ref={canvasRef}></canvas>;
};
export default NeuralCanvas
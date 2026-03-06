import React from 'react';
import useScrollReveal from './hooks/useScrollReveal';
import Background from './components/Background.jsx';
import NeuralCanvas from './components/NeuralCanvas.jsx';
import Navigation from './components/Navigation.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import './index.css';

export default function App() {
    useScrollReveal();

    return (
        <>
            <Background />
            <NeuralCanvas />
            <Navigation />

            <div className="container">
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Contact />
            </div>
            <Footer />
        </>
    );
}
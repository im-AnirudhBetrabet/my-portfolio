import React from 'react';
import SectionHeader from './SectionHeader';

export default function About() {
    return (
        <section id="about" className="scroll-reveal">
            <SectionHeader title="About me" />
            <div className="about-content mac-glass">
                <p>I’m an engineer interested in building intelligent systems that turn data into useful insights. My work focuses on machine learning, data processing, and designing reliable systems that support predictive models.</p>
                <p>My background in engineering has shaped how I approach problems—through careful system design, attention to edge cases, and a focus on reliability. I apply these principles when building machine learning pipelines, working with data, and developing applications that combine analytical logic with clean interfaces.</p>
                <p>Outside of engineering, you’ll usually find me out on a bike ride or unwinding with a game of FIFA.</p>
            </div>
        </section>
    );
}
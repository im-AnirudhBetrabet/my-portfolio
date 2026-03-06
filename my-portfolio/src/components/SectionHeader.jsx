import React from 'react';

export default function SectionHeader({ title, subtitle }) {
    return (
        <div className="section-header scroll-reveal">
            {subtitle && <span className="section-subtitle">{subtitle}</span>}
            <h2>
                {title}
            </h2>
        </div>
    );
}
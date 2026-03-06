import React from 'react';

export default function SkillCategory({ title, skills }) {
    return (
        <div className="skill-category mac-glass">
            <h3 className="category-title">{title}</h3>
            <div className="skill-pills">
                {skills.map((skill, index) => (
                    <span key={index} className="skill-pill">{skill}</span>
                ))}
            </div>
        </div>
    );
}
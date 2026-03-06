import React from 'react';
import SkillCategory from './SkillCategory.jsx';
import skills from '../data/skills';
import SectionHeader from './SectionHeader.jsx';


export default function Skills() {

    return (
        <section id="skills" className="scroll-reveal">
            <SectionHeader title="Skills"/>
            <div className="skills-grid ">
                {skills.map((category, index) => (
                    <SkillCategory 
                        key={index} 
                        title={category.title} 
                        skills={category.skills} 
                    />
                ))}
            </div>
        </section>
    );
}
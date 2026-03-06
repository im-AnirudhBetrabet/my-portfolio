import React from 'react';
import ProjectCard from './ProjectCard.jsx';
import projects from '../data/projects';
import SectionHeader from './SectionHeader.jsx';

export default function Projects() {
    

    return (
        <section id="projects">
            <SectionHeader title="Projects" />
            <div className="project-grid">
                {projects.map((project, index) => (
                    <ProjectCard 
                        key={index}
                        title={project.title}
                        description={project.description}
                        techStack={project.techStack}
                        primaryLinkText={project.primaryLinkText}
                        primaryLink={project.primaryLink}
                        githubLink={project.githubLink}
                        staggerClass={project.staggerClass}
                    />
                ))}
            </div>
        </section>
    );
}
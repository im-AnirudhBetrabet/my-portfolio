import React, {useState} from 'react';
import ProjectCard from './ProjectCard.jsx';
import projects from '../data/projects';
import SectionHeader from './SectionHeader.jsx';
import ProjectModal from './ProjectModal.jsx';

export default function Projects() {
    const [isModalOpen    , setIsModalOpen    ] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const handleOpenModal = (project) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setTimeout(() => setSelectedProject(null), 400); // Wait for exit animation
    };
    return (
        <section id="projects">
            <SectionHeader title="Projects" />
            <div className="project-grid">
                {projects.map((project, index) => (
                    <ProjectCard 
                        key={index}
                        project={project}
                        onOpenModal={handleOpenModal}
                    />
                ))}
            </div>
            <ProjectModal
                isOpen={isModalOpen} 
                onClose={handleCloseModal} 
                project={selectedProject} 
            />
        </section>
    );
}
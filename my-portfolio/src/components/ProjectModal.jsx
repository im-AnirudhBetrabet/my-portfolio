import React, { useState, useEffect } from 'react';
import { marked } from 'marked';

export default function ProjectModal({ isOpen, onClose, project }) {
    const [content  , setContent]   = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error    , setError]     = useState(false);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    useEffect(() => {
        if (!isOpen || !project) return;
        
        setContent('');
        
        if (project.readMeLink) {
            setIsLoading(true);
            setError(false);
            
            fetch(project.readMeLink)
                .then(res => {
                    if (!res.ok) throw new Error('Network response was not ok');
                    return res.text();
                })
                .then(markdown => {
                    setContent(marked.parse(markdown));
                    setIsLoading(false);
                })
                .catch(err => {
                    console.error("Fetch error:", err);
                    setError(true);
                    setIsLoading(false);
                });
        } else if (project.body) {
            setContent(project.body);
        }
    }, [isOpen, project]);

    if (!isOpen || !project) return null;

    return (
        <div className="modal-overlay active" onClick={onClose}>
            <div className="modal-content mac-glass" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                    <div className="modal-title-area">
                        <h3>{project.title}</h3>
                        <div className="modal-tech">
                            {project.techStack.map((tech, index) => (
                                <span key={index} className="tech-pill">{tech}</span>
                            ))}
                        </div>
                    </div>
                    <button className="modal-close" onClick={onClose} aria-label="Close Modal">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>
                </div>
                <div className="modal-body">
                    {isLoading && <div className="loading-state">Loading documentation from GitHub...</div>}
                    {error && <div className="loading-state" style={{ color: '#d9534f' }}>Failed to load README. Please check the GitHub repository.</div>}
                    {!isLoading && !error && (
                        <div dangerouslySetInnerHTML={{ __html: content }} />
                    )}
                </div>
            </div>
        </div>
    );
}
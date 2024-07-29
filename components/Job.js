import React, { forwardRef } from 'react';
import { FaExpandArrowsAlt, FaCompressArrowsAlt } from "react-icons/fa";

const Job = forwardRef(({ job, isActive, onClick, onExpand, isExpanded, className, style }, ref) => {
    return (
        <div ref={ref} className={`${className} ${isActive ? 'job-active' : ''}`} onClick={onClick} style={style}>
            <h2>{job.title}</h2>
            <p>{job.company}</p>
            <p>{job.duration}</p>
            <p>{job.period}</p>
            {job.description && <p>{job.description}</p>}
            {job.responsibilities && (
                <ul>
                    {job.responsibilities.map((resp, i) => (
                        <li key={i}>- {resp}</li>
                    ))}
                </ul>
            )}
            {job.technologies && (
                <div className='job-box-technologys'>
                    <h3>Tecnologias e ferramentas usadas:</h3>
                    <ul className='job-technologys'>
                        {job.technologies.map((tech, i) => (
                            <li className='job-technology' key={i}>{tech}</li>
                        ))}
                    </ul>
                </div>
            )}
            {isActive && (
                <button onClick={(e) => { e.stopPropagation(); onExpand(); }} className="expand-button">
                  {isExpanded ? <FaCompressArrowsAlt /> : <FaExpandArrowsAlt />}
                </button>
            )}
        </div>
    );
});

export default Job;

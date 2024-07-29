import React from 'react';
import Image from 'next/image';

const ProjectCard = ({ title, description, imageUrl, technologies, width, height, link }) => {
  return (
    <a className="card" href={link}>
      <div className="card-box-img">
        <div className="card-img-top">
          <Image 
            src={imageUrl}
            className="card-project-img-controltech card-project-img"
            width={width}
            height={height}
            alt={`Logo projeto ${title}`}
          />
        </div>
      </div>
      <div className="card-body">
        <div className="project-card-box-desc-tech">
          <div className="project-card-box-desc">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              {description}
            </p>
          </div>
          <div className="project-card-box-tech">
            {technologies.map((tech, index) => (
              <li key={index} className='project-card-technology'>{tech}</li>
            ))}
          </div>
        </div>
      </div>
      <div className='project-card-link'>Saiba mais</div>
    </a>
  );
};

export default ProjectCard;
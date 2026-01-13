import * as React from 'react';
import '../styles/project-card.scss';

const ProjectCard = ({ item }) => {
  return (
    <div className="project-card">
      <div className="card-head">
        <h4>{item.title}</h4>
        <p>
          <i>{item.subtitle}</i>
        </p>
      </div>
      <img src={item.image.url} alt={item.title} />
      <p>{item.summary}</p>
      <div className="read-more-button-container">
        <a href={`/portfolio/${item.slug}`} className="read-more-button">
          Läs mer
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;

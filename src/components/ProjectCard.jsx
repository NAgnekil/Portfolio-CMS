import * as React from 'react';
import { Link } from 'gatsby';
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
      {item?.image?.url && <img src={item.image.url} alt={item.title || ''} />}
      <p>{item.summary}</p>
      <Link
        to={`/portfolio/${item.slug}/`}
        className="read-more-button-container"
      >
        Läs mer
      </Link>
    </div>
  );
};

export default ProjectCard;

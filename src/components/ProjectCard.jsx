import * as React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
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
      {item.image?.gatsbyImageData && (
        <GatsbyImage
          image={item.image.gatsbyImageData}
          alt={item.title}
          className="project-image"
          loading="lazy"
        />
      )}
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

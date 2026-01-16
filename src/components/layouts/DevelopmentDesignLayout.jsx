// src/components/layouts/DevelopmentDesignLayout.jsx
import React from 'react';
import MarkdownText from '../MarkdownText';
import { GatsbyImage } from 'gatsby-plugin-image';
import '../../styles/development-design-layout.scss';

const DevelopmentDesignLayout = ({ item }) => {
  return (
    <article className="development-design-portfolio-item">
      <header>
        <h1>{item.title}</h1>
        <h2 className="subtitle">
          <i>{item.subtitle}</i>
        </h2>
      </header>

      <div className="divider" />

      <div className="main-image-section">
        {item.image?.gatsbyImageData && (
          <div className="main-image">
            <GatsbyImage
              image={item.image.gatsbyImageData}
              alt={item.title || 'Projektbild'}
              loading="lazy"
            />
          </div>
        )}
        <p className="summary">
          <i>{item.summary}</i>
        </p>
      </div>

      <div className="divider" />

      <div className="content">
        <MarkdownText
          text={
            item.description?.description || 'Ingen beskrivning tillgänglig.'
          }
        />

        {item.techniquesUsed && (
          <div className="techniques">
            {item.techniquesUsed.map((tech, index) => (
              <p key={index}>
                <span className="technique-brick">{tech}</span>
              </p>
            ))}
          </div>
        )}
      </div>

      {item.additionalMedia && item.additionalMedia.length > 0 && (
        <div className="gallery">
          <div className="media-grid">
            {item.additionalMedia.map(
              (media, index) =>
                media?.gatsbyImageData && (
                  <GatsbyImage
                    key={index}
                    image={media.gatsbyImageData}
                    alt={`${item.title || 'Projekt'} - Bild ${index + 1}`}
                    loading="lazy"
                  />
                )
            )}
          </div>
        </div>
      )}
    </article>
  );
};

export default DevelopmentDesignLayout;

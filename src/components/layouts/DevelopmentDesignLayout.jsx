// src/components/layouts/DevelopmentDesignLayout.jsx
import React from 'react';
import MarkdownText from '../MarkdownText';
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
        <div className="main-image">
          <img src={item.image.url} alt={item.title} />
        </div>
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
            {item.additionalMedia.map((media, index) => (
              <img
                key={index}
                src={media.url}
                alt={`${item.title} - Bild ${index + 1}`}
              />
            ))}
          </div>
        </div>
      )}
    </article>
  );
};

export default DevelopmentDesignLayout;

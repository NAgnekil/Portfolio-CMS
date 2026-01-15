// src/components/layouts/DevelopmentDesignLayout.jsx
import React from 'react';
import MarkdownText from '../MarkdownText';

const DevelopmentDesignLayout = ({ item }) => {
  return (
    <article className="portfolio-item">
      <header>
        <h1>{item.title}</h1>
        <h2>{item.subtitle}</h2>
      </header>

      <div className="main-image">
        <img src={item.image.url} alt={item.title} />
      </div>

      <div className="content">
        <MarkdownText
          text={
            item.description?.description ||
            item.description?.childMarkdownRemark?.html
          }
        />

        {item.techniquesUsed && (
          <div className="techniques">
            <h3>Tekniker & Verktyg</h3>
            <p>{item.techniquesUsed}</p>
          </div>
        )}
      </div>

      {item.additionalMedia && item.additionalMedia.length > 0 && (
        <div className="gallery">
          <h3>Fler bilder</h3>
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

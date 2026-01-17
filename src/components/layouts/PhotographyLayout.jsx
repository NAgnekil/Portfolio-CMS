import React from 'react';
import MarkdownText from '../MarkdownText';

const PhotographyLayout = ({ item }) => {
  return (
    <article className="photography-item">
      <header>
        <h1>{item.title}</h1>
        <h2>{item.subtitle}</h2>
      </header>

      <div className="hero-image">
        <img src={item.image.url} alt={item.title} />
      </div>

      <div className="content">
        {item.summary && <p className="summary">{item.summary}</p>}
        {item.description?.description && (
          <MarkdownText text={item.description?.description} />
        )}

        {item.techniquesUsed && (
          <div className="photo-details">
            <h3>Teknikspecifikationer</h3>
            <p>{item.techniquesUsed}</p>
          </div>
        )}
      </div>

      {item.additionalMedia && item.additionalMedia.length > 0 && (
        <div className="photo-gallery">
          <div className="grid">
            {item.additionalMedia.map((media, index) => (
              <div key={index} className="gallery-item">
                <img
                  src={media.url}
                  alt={`${item.title} - Bild ${index + 1}`}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </article>
  );
};

export default PhotographyLayout;

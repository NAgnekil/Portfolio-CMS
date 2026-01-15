// src/components/layouts/PhotojournalismLayout.jsx
import React from 'react';
import MarkdownText from '../MarkdownText';

const PhotojournalismLayout = ({ item }) => {
  return (
    <article className="photojournalism-item">
      <header>
        <h1>{item.title}</h1>
        <h2 className="subtitle">{item.subtitle}</h2>
      </header>

      <div className="featured-image">
        <img src={item.image.url} alt={item.title} />
      </div>

      <div className="story-content">
        {item.summary && <p className="summary">{item.summary}</p>}
        {item.description?.description && (
          <MarkdownText text={item.description?.description} />
        )}
        {item.techniquesUsed && (
          <div className="technical-notes">
            <h3>Teknisk information</h3>
            <p>{item.techniquesUsed}</p>
          </div>
        )}
      </div>

      {item.additionalMedia && item.additionalMedia.length > 0 && (
        <div className="story-gallery">
          <div className="story-grid">
            {item.additionalMedia?.map((media, index) => (
              <div key={index} className="story-item">
                <img src={media.url} alt={`Berättelsebild ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      )}
    </article>
  );
};

export default PhotojournalismLayout;

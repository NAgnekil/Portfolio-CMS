import React from 'react';
import MarkdownText from '../MarkdownText';
import ImageCarousel from '../ImageCarousel';
import { GatsbyImage } from 'gatsby-plugin-image';
import '../../styles/photography-layout.scss';

const PhotographyLayout = ({ item }) => {
  if (!item) {
    console.log('⚠️ Item is null or undefined');
    return <div>Inget att visa</div>;
  }

  const carouselImages = [item.image, ...(item.additionalMedia || [])].filter(
    (media) => {
      const hasMedia = media?.url || media?.gatsbyImageData;
      if (!hasMedia) {
        console.log('Filtered out media:', media);
      }
      return hasMedia;
    }
  );

  return (
    <article className="photography-portfolio-item">
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

      {carouselImages.length > 0 && (
        <div className="project-carousel">
          <ImageCarousel images={carouselImages} />
        </div>
      )}
    </article>
  );
};

export default PhotographyLayout;

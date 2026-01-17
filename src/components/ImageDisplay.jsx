import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';

const ImageDisplay = ({ image, alt, className }) => {
  if (image.gatsbyImageData) {
    return (
      <GatsbyImage
        image={image.gatsbyImageData}
        alt={alt}
        className={className}
        loading="lazy"
      />
    );
  }

  return <img src={image.url} alt={alt} className={className} loading="lazy" />;
};

export default ImageDisplay;

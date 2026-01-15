// src/templates/portfolio-item.js
import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import DevelopmentDesignLayout from '../components/layouts/DevelopmentDesignLayout';
import PhotographyLayout from '../components/layouts/PhotographyLayout';
import PhotojournalismLayout from '../components/layouts/PhotojournalismLayout';

const PortfolioItemTemplate = ({ data, pageContext }) => {
  const { type } = pageContext;

  // Hämta rätt data baserat på typ
  let item;
  switch (type) {
    case 'ContentfulDevelopmentPortfolioItem':
      item = data.developmentItem;
      break;
    case 'ContentfulDesignPortfolioItem':
      item = data.designItem;
      break;
    case 'ContentfulPhotographyPortfolioItem':
      item = data.photographyItem;
      break;
    case 'ContentfulPhotojournalismPortfolioItem':
      item = data.photojournalismItem;
      break;
    default:
      item = null;
  }

  if (!item) {
    return (
      <Layout>
        <h1>Projektet hittades inte</h1>
      </Layout>
    );
  }

  // Välj layout baserat på typ
  const renderLayout = () => {
    switch (type) {
      case 'ContentfulDevelopmentPortfolioItem':
      case 'ContentfulDesignPortfolioItem':
        return <DevelopmentDesignLayout item={item} />;
      case 'ContentfulPhotographyPortfolioItem':
        return <PhotographyLayout item={item} />;
      case 'ContentfulPhotojournalismPortfolioItem':
        return <PhotojournalismLayout item={item} />;
      default:
        return <DevelopmentDesignLayout item={item} />;
    }
  };

  return <Layout>{renderLayout()}</Layout>;
};

// GraphQL query för alla typer
export const query = graphql`
  query ($slug: String!) {
    developmentItem: contentfulDevelopmentPortfolioItem(slug: { eq: $slug }) {
      title
      subtitle
      summary
      image {
        url
      }
      description {
        description
      }
      slug
      techniquesUsed
      additionalMedia {
        url
      }
      order
    }
    designItem: contentfulDesignPortfolioItem(slug: { eq: $slug }) {
      title
      subtitle
      summary
      image {
        url
      }
      description {
        description
      }
      slug
      techniquesUsed
      additionalMedia {
        url
      }
      order
    }
    photographyItem: contentfulPhotographyPortfolioItem(slug: { eq: $slug }) {
      title
      subtitle
      summary
      image {
        url
      }
      description {
        description
      }
      slug
      techniquesUsed
      additionalMedia {
        url
      }
      order
    }
    photojournalismItem: contentfulPhotojournalismPortfolioItem(
      slug: { eq: $slug }
    ) {
      title
      subtitle
      summary
      image {
        url
      }
      description {
        description
      }
      slug
      techniquesUsed
      additionalMedia {
        url
      }
      order
    }
  }
`;

export const Head = ({ data, pageContext }) => {
  const { type } = pageContext;

  let item;
  switch (type) {
    case 'ContentfulDevelopmentPortfolioItem':
      item = data.developmentItem;
      break;
    case 'ContentfulDesignPortfolioItem':
      item = data.designItem;
      break;
    case 'ContentfulPhotographyPortfolioItem':
      item = data.photographyItem;
      break;
    case 'ContentfulPhotojournalismPortfolioItem':
      item = data.photojournalismItem;
      break;
    default:
      item = null;
  }

  return <title>{item?.title || 'Projekt'}</title>;
};

export default PortfolioItemTemplate;

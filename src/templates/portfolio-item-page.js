import * as React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import Layout from '../components/layout';

const PortfolioItemPage = ({ data }) => {
  const item = data.contentfulDevelopmentPortfolioItem;
  return (
    <Layout>
      <h1>{item.title}</h1>
      <img src={item.image.url} alt={item.title} />
      <h3>{item.subtitle}</h3>
    </Layout>
  );
};

export const query = graphql`
  query ($slug: String!) {
    contentfulDevelopmentPortfolioItem(slug: { eq: $slug }) {
      title
      subtitle
      image {
        url
      }
    }
  }
`;

export const Head = ({ data }) => (
  <title>{data.contentfulDevelopmentPortfolioItem.title}</title>
);

export default PortfolioItemPage;

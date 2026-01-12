import * as React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import Layout from '../components/layout';

const PortfolioPage = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allContentfulDevelopmentPortfolioItem {
        nodes {
          slug
          subtitle
          title
          image {
            url
          }
        }
      }
    }
  `);
  return (
    <Layout>
      <h1>Portfolio Page</h1>
      <ul>
        {data.allContentfulDevelopmentPortfolioItem.nodes.map((item) => (
          <li>
            <h2>{item.title}</h2>
            <img src={item.image.url} alt={item.title} />
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export const Head = () => <title>Home Page</title>;

export default PortfolioPage;

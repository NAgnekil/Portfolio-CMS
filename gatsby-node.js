const path = require('path');
const { title } = require('process');
const { graphql } = require('gatsby');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query {
      allContentfulDevelopmentPortfolioItem {
        nodes {
          id
          slug
          image {
            url
          }
          title
          subtitle
        }
      }
    }
  `);

  if (result.errors) {
    throw result.errors;
  }

  const pages = result.data.allContentfulDevelopmentPortfolioItem.nodes;

  pages.forEach((page) => {
    createPage({
      path: `/portfolio/${page.slug}`,
      component: path.resolve('./src/templates/portfolio-item-page.js'),
      context: {
        slug: page.slug
      }
    });
  });
};

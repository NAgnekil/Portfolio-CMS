// gatsby-node.js
const path = require('path');

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  // Hämta alla 4 Content Models
  const result = await graphql(`
    {
      allContentfulDevelopmentPortfolioItem {
        nodes {
          slug
          __typename
        }
      }
      allContentfulDesignPortfolioItem {
        nodes {
          slug
          __typename
        }
      }
      allContentfulPhotographyPortfolioItem {
        nodes {
          slug
          __typename
        }
      }
      allContentfulPhotojournalismPortfolioItem {
        nodes {
          slug
          __typename
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild('Error loading Contentful data', result.errors);
    return;
  }

  // En template för alla
  const template = path.resolve('./src/templates/portfolio-item.js');

  // Kombinera alla items
  const allItems = [
    ...result.data.allContentfulDevelopmentPortfolioItem.nodes,
    ...result.data.allContentfulDesignPortfolioItem.nodes,
    ...result.data.allContentfulPhotographyPortfolioItem.nodes,
    ...result.data.allContentfulPhotojournalismPortfolioItem.nodes
  ];

  // Skapa sidor
  allItems.forEach((node) => {
    createPage({
      path: `/portfolio/${node.slug}/`,
      component: template,
      context: {
        slug: node.slug,
        type: node.__typename // Skicka med typen
      }
    });
  });

  console.log(`Created ${allItems.length} portfolio pages`);
};

import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import '../styles/footer.scss';

const Footer = () => {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      allContentfulNavigationLink(sort: { order: ASC }) {
        nodes {
          title
          slug
        }
      }
      contentfulAboutMe {
        name
        logo {
          url
        }
      }
    }
  `);

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="logo">
          <Link to="/">
            <img
              src={data.contentfulAboutMe.logo.url}
              alt={data.contentfulAboutMe.name}
            />
          </Link>
        </div>

        <nav>
          <ul>
            {data.allContentfulNavigationLink.nodes.map((link) => (
              <li key={link.slug}>
                <Link to={link.slug}>{link.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;

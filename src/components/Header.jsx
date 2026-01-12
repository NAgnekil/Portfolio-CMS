import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import '../styles/header.scss';

const Header = () => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
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
    <header className="site-header">
      <div className="header-inner">
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
    </header>
  );
};

export default Header;

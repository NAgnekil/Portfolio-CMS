import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import LinkedInIcon from '../images/linkedin-icon.png';
import GitHubIcon from '../images/github-icon.png';
import EmailIcon from '../images/email-icon.png';
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

        <div className="social-links">
          <Link
            to="https://www.linkedin.com/in/nagnekil"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={LinkedInIcon} alt="LinkedIn" />
          </Link>
          <Link
            to="https://github.com/NAgnekil"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={GitHubIcon} alt="GitHub" />
          </Link>
          <Link
            to="mailto:nathalie@agnekil.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={EmailIcon} alt="Email" />
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

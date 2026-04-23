import React, { useState, useRef, useEffect } from 'react';
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

  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);
  const hamburgerRef = useRef(null);

  const handleHamburgerClick = () => {
    setMenuOpen((open) => !open);
  };

  useEffect(() => {
    if (!menuOpen) return;
    function handleClickOutside(event) {
      if (
        navRef.current &&
        !navRef.current.contains(event.target) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

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

        <button
          className={`hamburger${menuOpen ? ' open' : ''}`}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={handleHamburgerClick}
          ref={hamburgerRef}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`main-nav ${menuOpen ? ' open' : ''}`} ref={navRef}>
          <ul>
            {data.allContentfulNavigationLink.nodes.map((link) => {
              if (link.slug && !link.slug.startsWith('http')) {
                const path = link.slug.startsWith('/')
                  ? link.slug
                  : `/${link.slug}`;
                return (
                  <li key={link.slug}>
                    <Link to={path} onClick={() => setMenuOpen(false)}>
                      {link.title}
                    </Link>
                  </li>
                );
              }
              return null;
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

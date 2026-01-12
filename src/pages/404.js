import * as React from 'react';
import { Link } from 'gatsby';
import '../styles/not-found.scss';
import Layout from '../components/layout';

const NotFoundPage = () => {
  return (
    <Layout>
      <main className="not-found">
        <span className="error-code">404</span>
        <h1>Inget att se här ...</h1>
        <p>... men mycket att se i resten av portfolion!</p>
        <Link to="/" className="cta">
          Tillbaka till startsidan
        </Link>
      </main>
    </Layout>
  );
};

export default NotFoundPage;

export const Head = () => <title>404 – Sidan hittades inte</title>;

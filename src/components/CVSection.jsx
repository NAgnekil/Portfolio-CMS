import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import '../styles/cvsection.scss';

const CVSection = () => {
  const data = useStaticQuery(graphql`
    query CVUrlQuery {
      contentfulAsset(contentful_id: { eq: "3sZpK9vr4k7qd6falFgTad" }) {
        file {
          url
        }
      }
    }
  `);

  const cvUrl = data?.contentfulAsset?.file?.url
    ? `https:${data.contentfulAsset.file.url}`
    : null;

  if (!cvUrl) {
    return <p>CV saknas just nu, vänligen försök igen senare.</p>;
  }

  return (
    <section className="cv-section">
      <h4>Mitt CV</h4>
      <p>
        Här kan du välja att antingen visa mitt CV direkt i webbläsaren eller
        ladda ner det som PDF.
      </p>
      <div className="cv-buttons">
        {/* Visa CV */}
        <a
          href={cvUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="cv-button view"
        >
          Visa CV
        </a>

        {/* Ladda ner CV */}
        <a
          href={cvUrl}
          download="CV_Namn_2026.pdf"
          className="cv-button download"
        >
          Ladda ner CV
        </a>
      </div>
    </section>
  );
};

export default CVSection;

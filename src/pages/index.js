import * as React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import Layout from '../components/layout';
import '../styles/index.scss';

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query HomePageQuery {
      contentfulAboutMe {
        name
        summary {
          summary
        }
        profilePicture {
          url
        }
      }
    }
  `);

  const aboutMe = data.contentfulAboutMe;
  return (
    <Layout>
      <div className="about-me-container">
        <img
          src={aboutMe.profilePicture.url}
          alt={aboutMe.name}
          className="about-me-img"
        />
        <div className="about-me">
          <h1>{aboutMe.name}</h1>
          <p>{aboutMe.summary.summary}</p>
        </div>
      </div>
    </Layout>
  );
};

export const Head = () => {
  const data = useStaticQuery(graphql`
    query HomePageQuery {
      contentfulAboutMe {
        name
        summary {
          summary
        }
        profilePicture {
          url
        }
      }
    }
  `);
  return <title>{data.contentfulAboutMe.name}</title>;
};

export default IndexPage;

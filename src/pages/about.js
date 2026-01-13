import * as React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import Layout from '../components/layout';
import '../styles/about.scss';

const AboutPage = ({ data }) => {
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
          <p>{aboutMe.aboutMe.aboutMe}</p>
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query AboutPageQuery {
    contentfulAboutMe {
      name
      eMail
      linkedIn
      gitHub
      aboutMe {
        aboutMe
      }
      profilePicture {
        url
      }
    }
  }
`;

export const Head = ({ data }) => <title>{data.contentfulAboutMe.name}</title>;

export default AboutPage;

import * as React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import MarkdownText from '../components/MarkdownText';
import Layout from '../components/layout';
import '../styles/about.scss';
import CVSection from '../components/CVSection';

const AboutPage = ({ data }) => {
  const aboutMe = data.contentfulAboutMe;
  return (
    <Layout>
      <div className="about-me-page-container">
        <div className="image-container">
          <img
            src={aboutMe.profilePicture.url}
            alt={aboutMe.name}
            className="about-me-img"
          />
          <h3>{aboutMe.name}</h3>
          <CVSection />
        </div>
        <div className="about-me">
          <h1>Välkommen till min kreativa värld!</h1>
          <MarkdownText text={aboutMe.aboutMe.aboutMe} />
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

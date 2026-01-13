import * as React from 'react';
import { Link, graphql } from 'gatsby';
import MarkdownText from '../components/MarkdownText';
import Layout from '../components/layout';
import '../styles/index.scss';

const IndexPage = ({ data }) => {
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
          <MarkdownText text={aboutMe.summary.summary} />
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
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
`;

export const Head = ({ data }) => <title>{data.contentfulAboutMe.name}</title>;

export default IndexPage;

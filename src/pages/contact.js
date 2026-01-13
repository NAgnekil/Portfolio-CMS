import * as React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import Layout from '../components/layout';
import '../styles/contact.scss';

const ContactPage = ({ data }) => {
  const aboutMe = data.contentfulAboutMe;
  return (
    <Layout>
      <form
        className="contact-form"
        action={`mailto:${aboutMe.eMail}`}
        method="POST"
        encType="text/plain"
      >
        <div className="form-group">
          <label htmlFor="name">Namn</label>
          <input type="text" id="name" name="name" required />
        </div>

        <div className="form-group">
          <label htmlFor="email">E-post</label>
          <input type="email" id="email" name="email" required />
        </div>

        <div className="form-group">
          <label htmlFor="message">Meddelande</label>
          <textarea id="message" name="message" rows="5" required />
        </div>

        <button type="submit">Skicka</button>
      </form>
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

export default ContactPage;

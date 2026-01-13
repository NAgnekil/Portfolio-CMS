import * as React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import MarkdownText from '../components/MarkdownText';
import Layout from '../components/layout';
import '../styles/contact.scss';

const ContactPage = ({ data }) => {
  const contactPageText =
    data.contentfulAboutMe.childContentfulAboutMeContactPageTextTextNode
      .contactPageText;
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="form-confirmation animate-in">
        <h2>Meddelandet är på väg</h2>
        <p>Tack för att du hörde av dig. Jag återkommer inom kort.</p>
      </div>
    );
  }
  return (
    <Layout>
      <h1>Kontakt</h1>
      <MarkdownText text={contactPageText} />
      <form className="contact-form" onSubmit={handleSubmit}>
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
      childContentfulAboutMeContactPageTextTextNode {
        contactPageText
      }
    }
  }
`;

export const Head = ({ data }) => <title>{data.contentfulAboutMe.name}</title>;

export default ContactPage;

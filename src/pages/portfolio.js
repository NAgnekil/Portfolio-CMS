import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Layout from '../components/layout';
import ProjectCard from '../components/ProjectCard';
import '../styles/portfolio.scss';

const PortfolioPage = () => {
  const data = useStaticQuery(graphql`
    query ProjectPageQuery {
      allContentfulDevelopmentPortfolioItem(sort: { order: DESC }) {
        nodes {
          slug
          subtitle
          title
          summary
          image {
            url
          }
          __typename
        }
      }
      allContentfulDesignPortfolioItem(sort: { order: DESC }) {
        nodes {
          slug
          subtitle
          title
          summary
          image {
            url
          }
          __typename
        }
      }
      allContentfulPhotographyPortfolioItem(sort: { order: DESC }) {
        nodes {
          slug
          subtitle
          title
          summary
          image {
            url
          }
          __typename
        }
      }
      allContentfulPhotojournalismPortfolioItem(sort: { order: DESC }) {
        nodes {
          slug
          subtitle
          title
          summary
          image {
            url
          }
          __typename
        }
      }
    }
  `);
  return (
    <Layout>
      <h1>Projekt</h1>
      <div className="development-projects">
        <div className="development-projects-intro">
          <h2>Frontend-utveckling och UX/UI</h2>
          <p className="intro-text">
            I detta avsnitt visar jag projekt där jag kombinerar teknisk
            skicklighet och kreativt tänkande för att bygga moderna, responsiva
            webbapplikationer. Fokus ligger på användarupplevelse,
            funktionalitet och ren kod, med verktyg som HTML, CSS, JavaScript,
            Vue och React. Här kan du se hur jag omsätter design till
            interaktiva lösningar och hur jag hanterar data, API:er och
            dynamiska komponenter.
          </p>
        </div>
        <div className="development-projects-items">
          {data.allContentfulDevelopmentPortfolioItem.nodes.map((item) => (
            <ProjectCard key={item.slug} item={item} />
          ))}
        </div>
      </div>
      <span className="divider" />
      <div className="design-projects">
        <div className="design-projects-intro">
          <h2>Förpackningsdesign</h2>
          <p className="intro-text">
            Detta avsnitt visar projekt där jag arbetar med varumärke, material
            och användarupplevelse för att skapa förpackningar som både
            kommunicerar produktens värde och lockar konsumenter. Från
            konceptutveckling och prototyper till färdiga lösningar fokuserar
            jag på funktionalitet, estetik och hållbarhet, med ett
            helhetsperspektiv på grafisk profil och produktpresentation.
          </p>
        </div>
        <div className="design-projects-items">
          {data.allContentfulDesignPortfolioItem.nodes.map((item) => (
            <ProjectCard key={item.slug} item={item} />
          ))}
        </div>
      </div>
      <span className="divider" />
      <div className="photography-projects">
        <div className="photography-projects-intro">
          <h2>Fotografi</h2>
          <p className="intro-text">
            Här presenterar jag mina fotografiska projekt, med fokus på
            komposition, ljussättning och visuellt berättande. Genom både
            porträtt, produkt- och miljöfotografi strävar jag efter att fånga
            stämning, detaljer och berättelser på ett sätt som förstärker
            budskap och upplevelse.
          </p>
        </div>
        <div className="photography-projects-items">
          {data.allContentfulPhotojournalismPortfolioItem.nodes.map((item) => (
            <ProjectCard key={item.slug} item={item} />
          ))}
          {data.allContentfulPhotographyPortfolioItem.nodes.map((item) => (
            <ProjectCard key={item.slug} item={item} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export const Head = () => <title>Projekt</title>;

export default PortfolioPage;

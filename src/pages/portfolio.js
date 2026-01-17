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
            gatsbyImageData(
              width: 350
              layout: CONSTRAINED
              placeholder: BLURRED
              formats: [AUTO, WEBP]
            )
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
            gatsbyImageData(
              width: 350
              layout: CONSTRAINED
              placeholder: BLURRED
              formats: [AUTO, WEBP]
            )
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
            gatsbyImageData(
              width: 350
              layout: CONSTRAINED
              placeholder: BLURRED
              formats: [AUTO, WEBP]
            )
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
            gatsbyImageData(
              width: 350
              layout: CONSTRAINED
              placeholder: BLURRED
              formats: [AUTO, WEBP]
            )
          }
          __typename
        }
      }
    }
  `);
  return (
    <Layout>
      <h1>Projekt</h1>
      <div className="intro-text-container">
        <p className="intro-text">
          Välkommen till min portfölj! Här hittar du ett urval av mina projekt
          inom frontend-utveckling, UX/UI-design, förpackningsdesign, fotografi
          och bildjournalism. Oavsett om det handlar om att bygga
          användarvänliga digitala gränssnitt, formge genomtänkta
          förpackningslösningar eller dokumentera människor och berättelser,
          genomsyras alla projekt av samma fokus på kvalitet, funktion och
          visuellt uttryck - alla med grund i min passion för kreativitet.
        </p>
        <p>
          Utforska mina arbeten nedan för att se hur jag kombinerar estetik med
          funktionalitet för att skapa engagerande och effektiva lösningar. Du
          kan utforska varje kategori separat eller scrolla vidare för att ta
          del av helheten.
        </p>
      </div>
      <nav className="project-nav">
        <a href="#frontend">
          <span className="title">Frontendutveckling</span>
          <span className="meta">Digitala lösningar & interaktion</span>
        </a>

        <a href="#packaging">
          <span className="title">Förpackningsdesign</span>
          <span className="meta">Form, material & varumärke</span>
        </a>

        <a href="#photography">
          <span className="title">Fotografi</span>
          <span className="meta">Dokumentärt & kommersiellt</span>
        </a>
      </nav>

      <div className="divider" />

      <div className="development-projects" id="frontend">
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
      <div className="design-projects" id="packaging">
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
      <div className="photography-projects" id="photography">
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

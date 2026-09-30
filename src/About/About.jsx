import SEO from "../SEO/SEO";
import Hero from "./Hero";
import Article from "./Article";
import Keyword from "./Keyword";

function About() {
  return (
    <>
      <SEO
        title="About Pak Aviator – Aviator Game Information & Guides"
        description="Learn more about Pak Aviator, our gaming information website, Aviator game resources, mobile access, download guidance, useful guides, and gaming articles."
        canonical="https://www.pakaviators.com/about"
      />

      <Hero />
      <Article />
      <Keyword />
    </>
  );
}

export default About;
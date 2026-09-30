import SEO from "../SEO";
import Hero from "./Hero";
import Article from "./Article";
import Keyword from "./Keyword";

function Home() {
  return (
    <>
      <SEO
        title="Pak Aviator – Aviator Game, Download & Gaming Guide"
        description="Explore Pak Aviator for Aviator game information, download guidance, gameplay details, useful guides, mobile access, and the latest gaming updates."
        canonical="https://www.pakaviators.com/"
      />

      <Hero />
      <Article />
      <Keyword />
    </>
  );
}

export default Home;
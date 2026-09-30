import SEO from "../SEO";
import Hero from "./Hero";
import Article from "./Article";
import Keyword from "./Keyword";

function Blog() {
  return (
    <>
      <SEO
        title="Pak Aviator Blog – Aviator Game News, Guides & Updates"
        description="Read the Pak Aviator Blog for useful Aviator game information, gaming guides, mobile gaming topics, platform updates, and helpful articles."
        canonical="https://www.pakaviators.com/blog"
      />

      <Hero />
      <Article />
      <Keyword />
    </>
  );
}

export default Blog;
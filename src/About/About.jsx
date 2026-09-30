import { Helmet } from "react-helmet-async";
import Hero from "./Hero";
import Article from "./Article";
import Keyword from "./Keyword";

function About() {
  return (
    <>
      <Helmet>
        <title>About Pak Aviator – Aviator Game Information & Guides</title>

        <meta
          name="description"
          content="Learn more about Pak Aviator, our gaming information website, Aviator game resources, mobile access, download guidance, useful guides, and gaming articles."
        />

        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />

        <link
          rel="canonical"
          href="https://pakaviators.com/about"
        />

        <meta
          property="og:type"
          content="website"
        />

        <meta
          property="og:title"
          content="About Pak Aviator – Aviator Game Information & Guides"
        />

        <meta
          property="og:description"
          content="Learn more about Pak Aviator, our gaming information website, Aviator game resources, mobile access, download guidance, useful guides, and gaming articles."
        />

        <meta
          property="og:url"
          content="https://pakaviators.com/about"
        />

        <meta
          property="og:site_name"
          content="Pak Aviator"
        />

        <meta
          property="og:image"
          content="https://pakaviatorapp.pk/wp-content/uploads/2026/06/pak-aviator.webp"
        />

        <meta
          name="twitter:card"
          content="summary_large_image"
        />

        <meta
          name="twitter:title"
          content="About Pak Aviator – Aviator Game Information & Guides"
        />

        <meta
          name="twitter:description"
          content="Discover the purpose of Pak Aviator and explore useful Aviator game information, gaming guides, mobile resources, and helpful articles."
        />

        <meta
          name="twitter:image"
          content="https://pakaviatorapp.pk/wp-content/uploads/2026/06/pak-aviator.webp"
        />
      </Helmet>

      <main>
        <Hero />
        <Article />
        <Keyword />
      </main>
    </>
  );
}

export default About;
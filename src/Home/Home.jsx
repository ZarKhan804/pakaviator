import { Helmet } from "react-helmet-async";
import Hero from "./Hero";
import Article from "./Article";
import Keyword from "./Keyword";

function Home() {
  return (
    <>
      {" "}
      <Helmet>
        {" "}
        <title>Pak Aviator – Aviator Game, Download & Gaming Guide</title>
        <meta
          name="description"
          content="Explore Pak Aviator for Aviator game information, download guidance, gameplay details, useful guides, mobile access, and the latest gaming updates."
        />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <link rel="canonical" href="https://pakaviators.com/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Pak Aviator – Aviator Game, Download & Gaming Guide"
        />
        <meta
          property="og:description"
          content="Explore Pak Aviator for Aviator game information, download guidance, gameplay details, useful guides, mobile access, and the latest gaming updates."
        />
        <meta property="og:url" content="https://pakaviators.com/" />
        <meta property="og:site_name" content="Pak Aviator" />
        <meta
          property="og:image"
          content="https://pakaviatorapp.pk/wp-content/uploads/2026/06/pak-aviator.webp"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Pak Aviator – Aviator Game, Download & Gaming Guide"
        />
        <meta
          name="twitter:description"
          content="Learn about Pak Aviator, the Aviator game, download options, gameplay information, guides, and gaming updates."
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

export default Home;

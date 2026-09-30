import { Helmet } from "react-helmet-async";

import Hero from "./Hero";
import Article from "./Article";
import Keyword from "./Keyword";

function Blog() {
  return (
    <>
      <Helmet>
        <title>Pak Aviator Blog – Aviator Game News, Guides & Updates</title>

        <meta
          name="description"
          content="Read the Pak Aviator Blog for useful Aviator game information, gaming guides, mobile gaming topics, platform updates, and helpful articles."
        />

        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />

        <link
          rel="canonical"
          href="https://pakaviators.com/blog"
        />

        <meta
          property="og:type"
          content="website"
        />

        <meta
          property="og:title"
          content="Pak Aviator Blog – Aviator Game News, Guides & Updates"
        />

        <meta
          property="og:description"
          content="Read useful Pak Aviator articles covering Aviator game information, gaming guides, mobile access, platform updates, and related gaming topics."
        />

        <meta
          property="og:url"
          content="https://pakaviators.com/blog"
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
          content="Pak Aviator Blog – Aviator Game News, Guides & Updates"
        />

        <meta
          name="twitter:description"
          content="Explore Pak Aviator articles, Aviator game guides, mobile gaming information, platform updates, and useful gaming resources."
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

export default Blog;
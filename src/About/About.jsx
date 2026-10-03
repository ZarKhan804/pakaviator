import { Helmet } from "react-helmet-async";
import AboutHero from "./AboutHero";
import AboutContent from "./AboutContent";
import InternalLinksArticle from "./InternalLinksArticle";

function About() {
  return (
    <>
      <Helmet>
        <title>About Pak Aviator | Platform Information & Game Guide</title>

        <meta
          name="description"
          content="Learn about Pak Aviator, its game features, mobile access, account guidance, platform information, and responsible gaming tips for users in Pakistan."
        />

        <meta
          name="robots"
          content="index, follow, max-image-preview:large"
        />

        <link
          rel="canonical"
          href="https://www.pakaviators.com/about"
        />

        <meta property="og:url" content="https://www.pakaviators.com/about" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="About Pak Aviator | Platform Information & Game Guide" />
        <meta property="og:description" content="Learn about Pak Aviator, its game features, mobile access, account guidance, platform information, and responsible gaming tips for users in Pakistan." />
        <meta property="og:site_name" content="Pak Aviators" />
      </Helmet>

      <main>
        <AboutHero />
        <AboutContent />
        <InternalLinksArticle />
      </main>
    </>
  );
}

export default About;
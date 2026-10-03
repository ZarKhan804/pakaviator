
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
          content="Learn about Pak Aviator, its platform information, Aviator-style game features, mobile access, account guidance, and responsible gaming tips for users in Pakistan."
        />

        <meta
          name="robots"
          content="index, follow, max-image-preview:large"
        />

        <link
          rel="canonical"
          href="https://pakaviators.com/about"
        />
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


import { Helmet } from "react-helmet-async";
import HeroSection from "./HeroSection";
import GameSection from "./GameSection";
import ContentSection from "./ContentSection";
import InternalLinksArticle from "./InternalLinksArticle";

function Home() {
  return (
    <>
      <Helmet>
        <title>Pak Aviator Game in Pakistan | Pak Aviators</title>

        <meta
          name="description"
          content="Explore Pak Aviator, including game features, mobile access, account information, gameplay guides, and responsible gaming tips for users in Pakistan."
        />

        <meta
          name="robots"
          content="index, follow, max-image-preview:large"
        />

        <link
          rel="canonical"
          href="https://www.pakaviators.com/"
        />

        {/* Open Graph - www wala fix */}
        <meta property="og:url" content="https://www.pakaviators.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Pak Aviator Game in Pakistan | Pak Aviators" />
        <meta property="og:description" content="Explore Pak Aviator, including game features, mobile access, account information, gameplay guides, and responsible gaming tips for users in Pakistan." />
        <meta property="og:site_name" content="Pak Aviators" />
      </Helmet>

      <main>
        <HeroSection />
        <GameSection />
        <ContentSection />
        <InternalLinksArticle />
      </main>
    </>
  );
}

export default Home;
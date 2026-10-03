import { Helmet } from "react-helmet-async";
import DownloadHero from "./DownloadHero";
import InternalLinksArticle from "./InternalLinksArticle";
import Article from "./Article";

function Download() {
  return (
    <>
      <Helmet>
        <title>Pak Aviator Download Guide in Pakistan | Pak Aviators</title>
        <meta
          name="description"
          content="Explore the Pak Aviator download guide, compatible device information, mobile access, account safety, platform features, and responsible gaming resources."
        />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large"
        />
        <link
          rel="canonical"
          href="https://www.pakaviators.com/download"
        />
        <meta property="og:url" content="https://www.pakaviators.com/download" />
      </Helmet>

      <main>
        <DownloadHero />
        <InternalLinksArticle />
        <Article />
      </main>
    </>
  );
}

export default Download;
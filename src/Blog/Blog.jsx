
import { Helmet } from "react-helmet-async";
import BlogHero from "./BlogHero";
import BlogPosts from "./BlogPosts";
import InternalLinksArticle from "./InternalLinksArticle";

function Blog() {
  return (
    <>
      <Helmet>
        <title>Pak Aviator Blog | Game Guides & Information</title>

        <meta
          name="description"
          content="Explore Pak Aviator game guides, Aviator-style gameplay information, mobile access tips, account security, platform features, and responsible gaming resources."
        />

        <meta
          name="robots"
          content="index, follow, max-image-preview:large"
        />

        <link
          rel="canonical"
          href="https://pakaviators.com/blog/"
        />
      </Helmet>

      <main>
        <BlogHero />
        <BlogPosts />
        <InternalLinksArticle />
      </main>
    </>
  );
}

export default Blog;



import { Helmet } from "react-helmet-async";
import ContactHero from "./ContactHero";
import ContactForm from "./ContactForm";
import InternalLinksArticle from "./InternalLinksArticle";
import Article from "./Article";

function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact Pak Aviator | Support & Assistance</title>

        <meta
          name="description"
          content="Contact Pak Aviator for general questions, feedback, account guidance, platform information, and assistance with game-related queries."
        />

        <meta
          name="robots"
          content="index, follow, max-image-preview:large"
        />

        <link
          rel="canonical"
          href="https://www.pakaviators.com/contact"
        />
      </Helmet>

      <main>
        <ContactHero />
        <ContactForm />
        <InternalLinksArticle />
        <Article />
      </main>
    </>
  );
}

export default Contact;


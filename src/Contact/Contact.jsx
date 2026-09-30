
import { Helmet } from "react-helmet-async";

import Hero from "./Hero";
import Article from "./Article";
import Keyword from "./Keyword";

function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact Pak Aviator – Questions, Feedback & Support</title>

        <meta
          name="description"
          content="Contact Pak Aviator for general questions, website feedback, gaming information, and inquiries about Aviator-related content and resources."
        />

        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />

        <link
          rel="canonical"
          href="https://pakaviators.com/contact"
        />

        <meta
          property="og:type"
          content="website"
        />

        <meta
          property="og:title"
          content="Contact Pak Aviator – Questions, Feedback & Support"
        />

        <meta
          property="og:description"
          content="Contact Pak Aviator for general questions, website feedback, gaming information, and inquiries about Aviator-related content and resources."
        />

        <meta
          property="og:url"
          content="https://pakaviators.com/contact"
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
          content="Contact Pak Aviator – Questions, Feedback & Support"
        />

        <meta
          name="twitter:description"
          content="Contact Pak Aviator for general questions, website feedback, gaming information, and inquiries about Aviator-related content and resources."
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

export default Contact;


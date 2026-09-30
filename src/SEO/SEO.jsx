import React from "react";
import { Helmet } from "react-helmet-async";

const SITE_URL = "https://www.pakaviators.com";

const SEO = ({
  title,
  description,
  canonical,
  image = "https://pakaviatorapp.pk/wp-content/uploads/2026/06/pak-aviator.webp",
  noindex = false,
}) => {
  const canonicalUrl = canonical || SITE_URL;

  return (
    <Helmet>
      <title>{title}</title>

      <meta name="description" content={description} />

      <meta
        name="robots"
        content={
          noindex
            ? "noindex, nofollow"
            : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        }
      />

      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="Pak Aviator" />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content={title} />

      {/* X / Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <meta httpEquiv="content-language" content="en" />
    </Helmet>
  );
};

export default SEO;
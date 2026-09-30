import React from "react";
import { Helmet } from "react-helmet-async";

const SITE_URL = "https://pakaviators.com";

const SEO = ({
  title,
  description,
  canonical,
  image = `${SITE_URL}/og-image.jpg`,
  noindex = false,
}) => {
  const canonicalUrl = canonical || SITE_URL;

  return (
    <Helmet>
      {/* Basic SEO */}
      <title>{title}</title>

      <meta
        name="description"
        content={description}
      />

      <meta
        name="robots"
        content={noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large"}
      />

      <link
        rel="canonical"
        href={canonicalUrl}
      />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="Pak Aviators" />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content={title} />

      {/* X / Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Language */}
      <meta httpEquiv="content-language" content="en" />
    </Helmet>
  );
};

export default SEO;
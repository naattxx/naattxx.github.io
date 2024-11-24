import * as React from "react";
import { useSiteMetadata } from "../hooks/use-site-metadata";

const Head = ({ title, description, children }) => {
  const {
    title: defaultTitle,
    description: defaultDescription,
    author,
  } = useSiteMetadata();

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    author: author,
  };

  return (
    <>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="author" content={seo.author} />
      <meta name="theme-color" content="#bc42f5" />
      {children}
    </>
  );
};

export default Head;

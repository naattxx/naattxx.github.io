import * as React from "react";
import { useSiteMetadata } from "../hooks/use-site-metadata";

type DataProps = {
  title: string;
  description: string;
  children: React.ReactNode;
};

const Head = ({ title, description, children }: DataProps) => {
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
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="author" content={seo.author} />
      <meta name="theme-color" content="#bc42f5" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      {children}
    </>
  );
};

export default Head;

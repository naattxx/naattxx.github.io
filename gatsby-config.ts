import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Test Site`,
    description: `A test site`,
    author: `naattxx`,
    siteUrl: `https://naattxx.github.io/`,
  },
  graphqlTypegen: true,
  plugins: ["gatsby-plugin-postcss"],
};

export default config;

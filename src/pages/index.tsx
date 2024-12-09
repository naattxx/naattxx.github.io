import * as React from "react";
import { Link, graphql, PageProps } from "gatsby";
import Layout from "../components/layout";
import Section from "../components/section";
import SEOHead from "../components/head";
import "../styles/styles.css";

function IndexPage({ data }: PageProps<Queries.IndexPageQuery>) {
  return (
    <Layout>
      <main>
        <Section>
          <h1 className="sixtyfour-convergence-header text-3xl">
            {data.site?.siteMetadata?.author}
          </h1>
          <p>
            <strong>{data.site?.siteMetadata?.author}</strong> is a c++
            developer.
            <br />
            that learns front–end web development.
          </p>
        </Section>
        <Section>
          <h2 className="text-lg">Links</h2>
          <p>
            <Link
              to="/calc"
              className="text-blue-500 underline visited:text-violet-600 hover:text-blue-600 hover:visited:text-violet-700 active:no-underline"
            >
              A calculator!
            </Link>
          </p>
        </Section>
      </main>
    </Layout>
  );
}

export default IndexPage;

export const Head = () => (
  <SEOHead title="Test" description="A test site">
    <link
      href="https://fonts.googleapis.com/css2?family=Sixtyfour+Convergence&display=swap"
      rel="stylesheet"
    />
  </SEOHead>
);

export const query = graphql`
  query IndexPage {
    site {
      siteMetadata {
        author
      }
    }
  }
`;

import * as React from "react";
import { Link, graphql, PageProps } from "gatsby";
import Layout from "../components/layout";
import SEOHead from "../components/head";
import "../styles/styles.css";

function IndexPage({ data }: PageProps<Queries.IndexPageQuery>) {
  return (
    <Layout>
      <main>
        <section>
          <h1 className="sixtyfour-convergence-header">
            {data.site?.siteMetadata?.author}
          </h1>
          <p>
            <strong>{data.site?.siteMetadata?.author}</strong> is a c++
            developer.
            <br />
            that learns front–end web development.
          </p>
        </section>
        <section>
          <h2>Links</h2>
          <p>
            <Link to="/calc">A calculator!</Link>
          </p>
        </section>
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

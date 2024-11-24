import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import SEOHead from "../components/head";
import "../styles/styles.css";

function IndexPage() {
  return (
    <Layout>
      <main>
        <section>
          <h1 className="sixtyfour-convergence-header">NAATTXX</h1>
          <p>
            <strong>naattxx</strong> is a c++ developer.
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

import * as React from "react";
import Link from "next/link";
import Layout from "../src/components/layout";
import Section from "../src/components/section";
import SEOHead from "../src/components/head";

// Site metadata (replacing GraphQL query)
const siteMetadata = {
  title: "Test Site",
  description: "A test site",
  author: "naattxx",
  siteUrl: "https://naattxx.github.io/",
};

function IndexPage() {
  return (
    <>
      <SEOHead title="Test" description="A test site" />
      <Layout>
        <main>
          <Section>
            <h1 className="sixtyfour-convergence-header text-3xl">
              {siteMetadata.author}
            </h1>
            <p>
              <strong>{siteMetadata.author}</strong> is a c++
              developer.
              <br />
              that learns front–end web development.
            </p>
          </Section>
          <Section>
            <h2 className="text-lg">Links</h2>
            <p>
              <Link
                href="/calc"
                className="text-blue-500 underline visited:text-violet-600 hover:text-blue-600 hover:visited:text-violet-700 active:no-underline"
              >
                A calculator!
              </Link>
            </p>
          </Section>
        </main>
      </Layout>
    </>
  );
}

export default IndexPage;
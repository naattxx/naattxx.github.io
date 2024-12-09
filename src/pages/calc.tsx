import * as React from "react";
import Layout from "../components/layout";
import Section from "../components/section";
import SEOHead from "../components/head";
import Calculator from "../components/calculator";
import "../styles/styles.css";
import "../styles/calc.css";

function CalculatorPage() {
  return (
    <Layout>
      <main>
        <Section>
          <h1 className="text-lg font-semibold">
            This page is under construction.{" "}
            <span className="text-2xl">🏗</span>
          </h1>
        </Section>
        <Section>
          <h1 className="text-xl">A simple calculator.</h1>
          <Calculator />
        </Section>
      </main>
    </Layout>
  );
}

export default CalculatorPage;

export const Head = () => (
  <SEOHead title="Calculator" description="A simple calculator webpage">
    <link
      href="https://fonts.googleapis.com/css2?family=Sixtyfour+Convergence&display=swap"
      rel="stylesheet"
    />
    <noscript>
      You need to enable JavaScript for the calculator to function.
    </noscript>
  </SEOHead>
);

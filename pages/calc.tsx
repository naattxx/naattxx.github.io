import * as React from "react";
import Layout from "../src/components/layout";
import Section from "../src/components/section";
import SEOHead from "../src/components/head";
import Calculator from "../src/components/calculator";

function CalculatorPage() {
  return (
    <>
      <SEOHead title="Calculator" description="A simple calculator webpage">
        <noscript>
          You need to enable JavaScript for the calculator to function.
        </noscript>
      </SEOHead>
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
    </>
  );
}

export default CalculatorPage;
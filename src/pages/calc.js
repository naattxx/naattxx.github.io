import * as React from "react";
import Layout from "../components/layout";
import { BaseHead } from "../components/head";
import Calculator from "../components/calculator.js";
import "../styles/styles.css";
import "../styles/calc.css";

function CalculatorPage() {
  return (
    <Layout>
      <main>
        <section>
          <h1>This page is under construction.</h1>
        </section>
        <section>
          <h1>A simple calculator.</h1>
          <Calculator />
        </section>
      </main>
    </Layout>
  );
}

export default CalculatorPage;

export const Head = () => (
  <BaseHead title="test" discription="A test site">
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Sixtyfour+Convergence&display=swap"
      rel="stylesheet"
    />
    <noscript>
      You need to enable JavaScript for the calculator to function.
    </noscript>
  </BaseHead>
);

import * as React from "react";
import Link from "next/link";
import Layout from "../src/components/layout";
import Section from "../src/components/section";
import SEOHead from "../src/components/head";

function NotFoundPage() {
  return (
    <>
      <SEOHead title="404: Not Found" description="Page not found" />
      <Layout>
        <main>
          <Section>
            <h1 className="text-3xl font-bold">404: Not Found</h1>
            <p className="mt-4">You just hit a route that doesn&#39;t exist... the sadness.</p>
            <p className="mt-4">
              <Link
                href="/"
                className="text-blue-500 underline visited:text-violet-600 hover:text-blue-600 hover:visited:text-violet-700"
              >
                Go back to the homepage
              </Link>
            </p>
          </Section>
        </main>
      </Layout>
    </>
  );
}

export default NotFoundPage;
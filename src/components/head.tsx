import Head from "next/head";

interface SEOProps {
  title: string;
  description: string;
  children?: React.ReactNode;
}

const SEOHead = ({ title, description, children }: SEOProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      {children}
    </Head>
  );
};

export default SEOHead;

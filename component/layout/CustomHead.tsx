import Head from 'next/head';

const CustomHead = ({ title }: { title: string }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta charSet="utf-8" />
      <link rel="icon" type="image/png" href="/logo.png" />
    </Head>
  );
};

export default CustomHead;

import "../styles/index.css";
import Head from "next/head";

export default function MyApp({
  Component,
  pageProps,
}: {
  Component: any;
  pageProps: any;
}) {
  return (
    <>
      <Head>
        <title>Yugioh Price Finder</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:300|Domine:400"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

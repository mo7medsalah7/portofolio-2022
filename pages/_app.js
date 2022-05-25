import React from "react";
import Head from "next/head";
import "../styles/global.css";

import LoadingScreeen from "../components/LoadingScreeen";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setLoading(false);
  }, []);
  return (
    <>
      {!loading ? (
        <React.Fragment>
          <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
              rel="preconnect"
              href="https://fonts.gstatic.com"
              crossorigin
            />
            <link
              rel="preload"
              href="/fonts/Century_Gothic.ttf"
              as="font"
              type="font/ttf"
              crossOrigin=""
            />
            <link
              rel="preload"
              href="/fonts/gothicb.ttf"
              as="font"
              type="font/ttf"
              crossOrigin=""
            />
            <link
              href="https://fonts.googleapis.com/css2?family=Bangers&display=swap"
              rel="stylesheet"
            />
          </Head>
          <Component {...pageProps} />
        </React.Fragment>
      ) : (
        <LoadingScreeen />
      )}
    </>
  );
}

export default MyApp;

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
      {loading ? (
        <React.Fragment>
          <LoadingScreeen />
        </React.Fragment>
      ) : (
        <>
          <Component {...pageProps} />
        </>
      )}
    </>
  );
}

export default MyApp;

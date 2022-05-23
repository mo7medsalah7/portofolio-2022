import React from "react";
import "../styles/global.css";

import LoadingScreeen from "../components/LoadingScreeen";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);
  return (
    <>
      {!loading ? (
        <React.Fragment>
          <Component {...pageProps} />
        </React.Fragment>
      ) : (
        <LoadingScreeen />
      )}
    </>
  );
}

export default MyApp;

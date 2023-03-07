import React from 'react';
import Head from 'next/head';
import '../styles/global.css';

import LoadingScreeen from '../components/LoadingScreeen';

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setLoading(false);
  }, []);
  return (
    <>
      <Head>
        <title> DevOps Mo,S </title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
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
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="og:type" property="og:type" content="website" />
        <meta
          name="og:description"
          property="og:description"
          content="Mohamed Salah Portofolio, A Frontend Developer and DevOps Engineer"
        />
        <meta
          name="og:image"
          property="og:image"
          content="https://res.cloudinary.com/dexrp1zlw/image/upload/v1653409172/my-portofolio/image-seo.png"
        />
      </Head>
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

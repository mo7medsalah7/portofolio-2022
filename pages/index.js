import Head from "next/head";
import Footer from "../components/Footer/Footer";
import HeaderData from "../components/Header/HeaderData";
import Skills from "../components/Skills/Skills";
import Works from "../components/Works/Works";

export default function Home(props) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width,minimum-scale=1,initial-scale=1"
        />
        <title>{props.title} </title>
        <meta name="og:title" property="og:title" content={props.title} />
        <meta name="og:type" property="og:type" content="website" />
        <meta
          name="og:description"
          property="og:description"
          content={props.description}
        />
        <meta name="og:image" property="og:image" content={props.image} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="625" />

        <meta name="og:author" content={props.author} />

        <link rel="icon" href="/favicon.ico" />

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
      </Head>
      <header>
        <HeaderData />
      </header>
      <main className="main-font overflow-hidden py-0 px-[20px] md:px-0">
        <Skills />
        <Works />
        {/* <Tabs /> */}
      </main>
      <Footer />
    </>
  );
}

export async function getStaticProps(context) {
  return {
    props: {
      title: "Front Mo,S",
      description:
        "Mohamed Salah Portofolio, A Frontend Developer and DevOps Engineer",
      image:
        "https://res.cloudinary.com/dexrp1zlw/image/upload/v1653409172/my-portofolio/image-seo.png",
      author: "Mohamed Salah Abdelazeem",
    },
  };
}

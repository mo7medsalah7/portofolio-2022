import Head from "next/head";
import Footer from "../components/Footer/Footer";
import HeaderData from "../components/Header/HeaderData";
import Skills from "../components/Skills/Skills";
import Works from "../components/Works/Works";
import BackgroundImage from "../public/moSalah.png";

export default function Home({ title }) {
  return (
    <div className="">
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,minimum-scale=1,initial-scale=1"
        />
        <title>{title} </title>
        <meta name="title" property="og:title" content={title} />
        <meta name="type" property="og:type" content="website" />
        <meta
          name="description"
          property="og:description"
          content="Mohamed Salah Portofolio, A Frontend Developer and DevOps Engineer"
        />
        <meta
          name="image"
          property="og:image"
          content="https://res.cloudinary.com/dexrp1zlw/image/upload/v1653409172/my-portofolio/image-seo.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="625" />

        <meta name="author" content="Mohamed Salah Abdelazeem" />

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
    </div>
  );
}
export async function getServerSideProps(context) {
  return {
    props: {
      title: "Front Mo,S",
    }, // will be passed to the page component as props
  };
}

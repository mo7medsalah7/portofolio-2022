import Head from "next/head";
import Footer from "../components/Footer/Footer";
import HeaderData from "../components/Header/HeaderData";
import Skills from "../components/Skills/Skills";
import Works from "../components/Works/Works";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Front Mo,S</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="og:title"
          property="og:title"
          content="Mohamed Salah Portofolio"
        />
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
        <link rel="icon" href="/favicon.ico" />
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

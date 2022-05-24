import Head from "next/head";
import Footer from "../components/Footer/Footer";
import HeaderData from "../components/Header/HeaderData";
import Skills from "../components/Skills/Skills";
import Works from "../components/Works/Works";
import BackgroundImage from "./moSalah.png";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Front Mo,S </title>
        <meta property="og:title" content="Front Mo,S" key="title" />
        <meta
          property="og:description"
          content="Mohamed Salah Portofolio, A Frontend Developer and DevOps Engineer"
          key="description"
        />
        <meta property="og:image" content={BackgroundImage} />

        <meta
          name="description"
          content="Mohamed Salah Portofolio, A Frontend Developer and DevOps Engineer"
        />
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

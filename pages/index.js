import Head from "next/head";
import Footer from "../components/Footer/Footer";
import HeaderData from "../components/Header/HeaderData";
import Skills from "../components/Skills/Skills";
import Works from "../components/Works/Works";

export default function Home() {
  return (
    <div>
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

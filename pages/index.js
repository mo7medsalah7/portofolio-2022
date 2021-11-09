import Head from "next/head";
import HeaderData from "./components/Header/HeaderData";
import Skills from "./components/Skills/Skills";
import Works from "./components/Works/Works";

export default function Home() {
	return (
		<div className="">
			<Head>
				<title>Front Mo,S </title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<header>
				<HeaderData />
			</header>
			<main className="main-font overflow-hidden">
				<Skills />
				<Works />
			</main>
		</div>
	);
}

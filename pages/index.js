import Head from "next/head";
import HeaderData from "../components/Header/HeaderData";
import Skills from "../components/Skills/Skills";
import Works from "../components/Works/Works";
import Tabs from "../components/Tabs";

export default function Home() {
	return (
		<div className="">
			<Head>
				<title>Front Mo,S </title>
				<link rel="icon" href="/favicon.ico" />
				<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Bangers&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Roboto:wght@100;400&display=swap" rel="stylesheet"></link>
			</Head>
			<header>
				<HeaderData />
			</header>
			<main className="main-font overflow-hidden">
				<Skills />
				<Works />
				<Tabs />
			</main>
		</div>
	);
}

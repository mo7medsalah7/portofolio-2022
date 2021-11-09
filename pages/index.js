import Head from 'next/head'
import HeaderData from './components/Header/HeaderData'
import Skills from './components/Skills/Skills'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Front Mo,S </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="main-font">

      <HeaderData />
      <Skills />
      
      </main>

      
    </div>
  )
}

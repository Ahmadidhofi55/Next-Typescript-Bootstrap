import NavbarComponents from '../components/NavbarComponents'
import FooterComponents from '../components/FooterComponents'
import Head from 'next/head'
export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavbarComponents />
      <div className="col-lg-8 mx-auto p-4 py-md-5">
        <h1 className="text-body-emphasis">WELCOME..</h1>
        <p className="fs-5 col-md-8">Quickly and easily get started with Bootstraps compiled, production-ready files with this barebones example featuring some basic HTML and helpful links. Download all our examples to get started.</p>
      </div>
      <FooterComponents />
    </>
  );
}
import Navbar from "../components/Navbar"
import Head from 'next/head'

const index = () => {
  return (
    <>
      <Head>
        <title>Home Page</title>
        <meta name="description" content="Next js tutorials"/>
        <meta name="keywords" content="HTML, CSS, JavaScript, next.js"/>
        <meta name="author" content="Amir Hossain"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Head>
      <Navbar></Navbar>
      <h1 className="text-xl font-bold text-center mt-5">This is Homepage</h1>
    </>
  );
};

export default index;
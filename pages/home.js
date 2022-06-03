import Head from "next/head";
import Navbar from "../components/Navbar";

const home = () => { 
    return (
        <>
            <Head>
                <title>Home Page</title>
            </Head>
            <Navbar></Navbar>
            <h1 className="text-xl font-bold text-center mt-5">This is Homepage</h1>
        </>
    );
};

export default home;